import { createHash, randomBytes, scrypt as scryptCallback, timingSafeEqual } from "crypto";
import { promisify } from "util";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { ObjectId, type WithId } from "mongodb";
import { getCollection, isMongoConfigured } from "./mongodb";
import type { AdminUser } from "./types";

const scrypt = promisify(scryptCallback);
export const ADMIN_SESSION_COOKIE = "portfolio_admin_session";
const SESSION_DAYS = 7;
const SESSION_MAX_AGE = 60 * 60 * 24 * SESSION_DAYS;

type AdminUserDocument = {
  name: string;
  email: string;
  passwordHash: string;
  role: "admin";
  createdAt: Date;
  updatedAt: Date;
};

type AdminSessionDocument = {
  userId: ObjectId;
  tokenHash: string;
  createdAt: Date;
  lastSeenAt: Date;
  expiresAt: Date;
};

type AuthInput = {
  email: string;
  password: string;
};

type ProfileUpdateInput = {
  userId: string;
  name: string;
  email: string;
};

type PasswordUpdateInput = {
  userId: string;
  currentPassword: string;
  newPassword: string;
};

type SignupInput = AuthInput & {
  name: string;
  inviteCode?: string;
};

let authIndexesReady: Promise<void> | undefined;

async function getUsersCollection() {
  return getCollection<AdminUserDocument>("admin_users");
}

async function getSessionsCollection() {
  return getCollection<AdminSessionDocument>("admin_sessions");
}

async function ensureAuthIndexes() {
  if (!authIndexesReady) {
    authIndexesReady = Promise.all([
      getUsersCollection().then((collection) =>
        collection.createIndex({ email: 1 }, { unique: true }),
      ),
      getSessionsCollection().then(async (collection) => {
        await collection.createIndex({ tokenHash: 1 }, { unique: true });
        await collection.createIndex({ expiresAt: 1 }, { expireAfterSeconds: 0 });
      }),
    ]).then(() => undefined);
  }

  return authIndexesReady;
}

function serializeUser(user: WithId<AdminUserDocument>): AdminUser {
  return {
    _id: user._id.toString(),
    name: user.name,
    email: user.email,
    role: user.role,
    createdAt: user.createdAt.toISOString(),
    updatedAt: user.updatedAt.toISOString(),
  };
}

function normalizeEmail(email: string) {
  return email.trim().toLowerCase();
}

function validateAuthInput(input: AuthInput) {
  const email = normalizeEmail(input.email);
  const password = input.password.trim();

  if (!email || !email.includes("@")) {
    throw new Error("Enter a valid email address.");
  }

  if (password.length < 8) {
    throw new Error("Password must be at least 8 characters.");
  }

  return { email, password };
}

async function hashPassword(password: string) {
  const salt = randomBytes(16).toString("hex");
  const key = (await scrypt(password, salt, 64)) as Buffer;

  return `${salt}:${key.toString("hex")}`;
}

async function verifyPassword(password: string, passwordHash: string) {
  const [salt, storedKey] = passwordHash.split(":");

  if (!salt || !storedKey) {
    return false;
  }

  const key = (await scrypt(password, salt, 64)) as Buffer;
  const stored = Buffer.from(storedKey, "hex");

  return stored.length === key.length && timingSafeEqual(stored, key);
}

function hashToken(token: string) {
  return createHash("sha256").update(token).digest("hex");
}

function getCookieOptions() {
  return {
    httpOnly: true,
    sameSite: "lax" as const,
    secure: process.env.NODE_ENV === "production",
    path: "/",
    maxAge: SESSION_MAX_AGE,
  };
}

async function createSession(userId: ObjectId) {
  const token = randomBytes(32).toString("hex");
  const now = new Date();
  const expiresAt = new Date(now.getTime() + SESSION_MAX_AGE * 1000);
  const sessions = await getSessionsCollection();

  await sessions.insertOne({
    userId,
    tokenHash: hashToken(token),
    createdAt: now,
    lastSeenAt: now,
    expiresAt,
  });

  return token;
}

async function setSessionCookie(token: string) {
  const cookieStore = await cookies();
  cookieStore.set(ADMIN_SESSION_COOKIE, token, getCookieOptions());
}

export async function signupAdmin(input: SignupInput) {
  if (!isMongoConfigured()) {
    throw new Error("Set MONGODB_URI before creating an admin account.");
  }

  await ensureAuthIndexes();

  const { email, password } = validateAuthInput(input);
  const name = input.name.trim();

  if (name.length < 2) {
    throw new Error("Enter your name.");
  }

  const users = await getUsersCollection();
  const existingUsers = await users.countDocuments();

  if (existingUsers > 0) {
    const requiredCode = process.env.ADMIN_SIGNUP_CODE;

    if (!requiredCode || input.inviteCode !== requiredCode) {
      throw new Error("Signup is protected. Enter the configured invite code.");
    }
  }

  const now = new Date();
  const result = await users.insertOne({
    name,
    email,
    passwordHash: await hashPassword(password),
    role: "admin",
    createdAt: now,
    updatedAt: now,
  });

  const token = await createSession(result.insertedId);
  await setSessionCookie(token);

  return serializeUser({
    _id: result.insertedId,
    name,
    email,
    passwordHash: "",
    role: "admin",
    createdAt: now,
    updatedAt: now,
  });
}

export async function loginAdmin(input: AuthInput) {
  if (!isMongoConfigured()) {
    throw new Error("Set MONGODB_URI before logging in.");
  }

  await ensureAuthIndexes();

  const { email, password } = validateAuthInput(input);
  const users = await getUsersCollection();
  const user = await users.findOne({ email, role: "admin" });

  if (!user || !(await verifyPassword(password, user.passwordHash))) {
    throw new Error("Invalid email or password.");
  }

  const token = await createSession(user._id);
  await setSessionCookie(token);

  return serializeUser(user);
}

export async function getAdminBySessionToken(token?: string | null) {
  if (!token || !isMongoConfigured()) {
    return null;
  }

  await ensureAuthIndexes();

  const sessions = await getSessionsCollection();
  const session = await sessions.findOne({
    tokenHash: hashToken(token),
    expiresAt: { $gt: new Date() },
  });

  if (!session) {
    return null;
  }

  const users = await getUsersCollection();
  const user = await users.findOne({ _id: session.userId, role: "admin" });

  if (!user) {
    return null;
  }

  await sessions.updateOne(
    { _id: session._id },
    { $set: { lastSeenAt: new Date() } },
  );

  return serializeUser(user);
}

export async function getCurrentAdmin() {
  const cookieStore = await cookies();
  const token = cookieStore.get(ADMIN_SESSION_COOKIE)?.value;

  return getAdminBySessionToken(token);
}

export async function requireAdmin() {
  const admin = await getCurrentAdmin();

  if (!admin) {
    redirect("/admin/login");
  }

  return admin;
}

export async function logoutAdmin() {
  const cookieStore = await cookies();
  const token = cookieStore.get(ADMIN_SESSION_COOKIE)?.value;

  if (token && isMongoConfigured()) {
    await ensureAuthIndexes();
    const sessions = await getSessionsCollection();
    await sessions.deleteOne({ tokenHash: hashToken(token) });
  }

  cookieStore.delete(ADMIN_SESSION_COOKIE);
}

export async function updateAdminProfile(input: ProfileUpdateInput) {
  if (!isMongoConfigured()) {
    throw new Error("Set MONGODB_URI before updating admin profile.");
  }

  if (!ObjectId.isValid(input.userId)) {
    throw new Error("Invalid admin user id.");
  }

  await ensureAuthIndexes();

  const email = normalizeEmail(input.email);
  const name = input.name.trim();

  if (name.length < 2) {
    throw new Error("Enter a valid name.");
  }

  if (!email || !email.includes("@")) {
    throw new Error("Enter a valid email address.");
  }

  const users = await getUsersCollection();
  const result = await users.updateOne(
    { _id: new ObjectId(input.userId), role: "admin" },
    {
      $set: {
        name,
        email,
        updatedAt: new Date(),
      },
    },
  );

  if (!result.matchedCount) {
    throw new Error("Admin user not found.");
  }

  const user = await users.findOne({ _id: new ObjectId(input.userId) });

  if (!user) {
    throw new Error("Admin profile update failed.");
  }

  return serializeUser(user);
}

export async function updateAdminPassword(input: PasswordUpdateInput) {
  if (!isMongoConfigured()) {
    throw new Error("Set MONGODB_URI before updating admin password.");
  }

  if (!ObjectId.isValid(input.userId)) {
    throw new Error("Invalid admin user id.");
  }

  await ensureAuthIndexes();

  const currentPassword = input.currentPassword.trim();
  const newPassword = input.newPassword.trim();

  if (newPassword.length < 8) {
    throw new Error("New password must be at least 8 characters.");
  }

  const users = await getUsersCollection();
  const user = await users.findOne({
    _id: new ObjectId(input.userId),
    role: "admin",
  });

  if (!user || !(await verifyPassword(currentPassword, user.passwordHash))) {
    throw new Error("Current password is incorrect.");
  }

  await users.updateOne(
    { _id: user._id },
    {
      $set: {
        passwordHash: await hashPassword(newPassword),
        updatedAt: new Date(),
      },
    },
  );
}

export async function getAdminAuthStatus() {
  if (!isMongoConfigured()) {
    return {
      mongoReady: false,
      userCount: 0,
      signupProtected: false,
    };
  }

  await ensureAuthIndexes();
  const users = await getUsersCollection();
  const userCount = await users.countDocuments();

  return {
    mongoReady: true,
    userCount,
    signupProtected: userCount > 0,
  };
}
