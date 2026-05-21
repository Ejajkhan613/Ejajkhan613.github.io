import { randomUUID } from "crypto";
import { mkdir, readFile, unlink, writeFile } from "fs/promises";
import path from "path";
import { ObjectId, type WithId } from "mongodb";
import { defaultResources } from "./portfolio-data";
import { getCollection, isMongoConfigured } from "./mongodb";
import type { ResourceRecord } from "./types";

type ResourceDocument = Omit<
  ResourceRecord,
  "_id" | "createdAt" | "downloadUrl"
> & {
  createdAt: Date;
};

type ResourceInput = {
  title: string;
  description: string;
  category: string;
  tags: string[];
  originalName: string;
  mimeType: string;
  size: number;
  bytes: Buffer;
};

type ResourceUpdateInput = {
  title: string;
  description: string;
  category: string;
  tags: string[];
};

const collectionName = "resources";
export const resourcesRoot = path.join(process.cwd(), "resources");
let indexesReady: Promise<void> | undefined;

function serializeResource(resource: WithId<ResourceDocument>): ResourceRecord {
  return {
    ...resource,
    _id: resource._id.toString(),
    createdAt: resource.createdAt.toISOString(),
    downloadUrl: `/api/resources/${resource._id.toString()}`,
  };
}

async function getResourceCollection() {
  return getCollection<ResourceDocument>(collectionName);
}

async function ensureResourceIndexes() {
  if (!indexesReady) {
    indexesReady = getResourceCollection().then(async (collection) => {
      await collection.createIndex({ createdAt: -1 });
      await collection.createIndex({ category: 1 });
      await collection.createIndex({ tags: 1 });
    });
  }

  return indexesReady;
}

export async function ensureResourcesDirectory() {
  await mkdir(resourcesRoot, { recursive: true });
}

function sanitizeFileName(name: string) {
  const parsed = path.parse(name);
  const base =
    parsed.name
      .toLowerCase()
      .trim()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-+|-+$/g, "") || "resource";
  const ext = parsed.ext.toLowerCase().replace(/[^a-z0-9.]/g, "");

  return `${base}${ext}`;
}

function getStoredPath(storedName: string) {
  const resolvedRoot = path.resolve(resourcesRoot);
  const resolvedFile = path.resolve(resourcesRoot, storedName);

  if (
    resolvedFile !== resolvedRoot &&
    !resolvedFile.startsWith(`${resolvedRoot}${path.sep}`)
  ) {
    throw new Error("Invalid resource path.");
  }

  return resolvedFile;
}

export async function getResources(limit?: number): Promise<ResourceRecord[]> {
  if (!isMongoConfigured()) {
    return typeof limit === "number"
      ? defaultResources.slice(0, limit)
      : defaultResources;
  }

  try {
    await ensureResourceIndexes();
    const collection = await getResourceCollection();
    const cursor = collection.find({}).sort({ createdAt: -1 });

    if (limit) {
      cursor.limit(limit);
    }

    const resources = (await cursor.toArray()).map(serializeResource);
    return resources.length ? resources : defaultResources;
  } catch {
    return typeof limit === "number"
      ? defaultResources.slice(0, limit)
      : defaultResources;
  }
}

export async function getResourcesForAdmin(): Promise<ResourceRecord[]> {
  if (!isMongoConfigured()) {
    return defaultResources;
  }

  await ensureResourceIndexes();
  const collection = await getResourceCollection();

  return (await collection.find({}).sort({ createdAt: -1 }).toArray()).map(
    serializeResource,
  );
}

export async function saveResourceFile(input: ResourceInput) {
  if (!isMongoConfigured()) {
    throw new Error("Set MONGODB_URI before uploading resources.");
  }

  await ensureResourcesDirectory();
  await ensureResourceIndexes();

  const safeName = sanitizeFileName(input.originalName);
  const storedName = `${Date.now()}-${randomUUID()}-${safeName}`;
  const storedPath = getStoredPath(storedName);

  await writeFile(storedPath, input.bytes);

  const document: ResourceDocument = {
    title: input.title,
    description: input.description,
    category: input.category,
    tags: input.tags,
    originalName: input.originalName,
    storedName,
    mimeType: input.mimeType || "application/octet-stream",
    size: input.size,
    createdAt: new Date(),
  };

  const collection = await getResourceCollection();
  const result = await collection.insertOne(document);

  return serializeResource({
    ...document,
    _id: new ObjectId(result.insertedId),
  });
}

export async function getResourceById(id: string) {
  if (!isMongoConfigured() || !ObjectId.isValid(id)) {
    return null;
  }

  await ensureResourceIndexes();
  const collection = await getResourceCollection();
  const resource = await collection.findOne({ _id: new ObjectId(id) });

  return resource ? serializeResource(resource) : null;
}

export async function getResourceForAdminById(id: string) {
  if (!isMongoConfigured() || !ObjectId.isValid(id)) {
    return defaultResources.find((resource) => resource._id === id) ?? null;
  }

  await ensureResourceIndexes();
  const collection = await getResourceCollection();
  const resource = await collection.findOne({ _id: new ObjectId(id) });

  return resource ? serializeResource(resource) : null;
}

export async function updateResourceMetadata(id: string, input: ResourceUpdateInput) {
  if (!isMongoConfigured()) {
    throw new Error("Set MONGODB_URI before updating resources.");
  }

  if (!ObjectId.isValid(id)) {
    throw new Error("Invalid resource id.");
  }

  await ensureResourceIndexes();
  const collection = await getResourceCollection();
  const result = await collection.updateOne(
    { _id: new ObjectId(id) },
    {
      $set: {
        title: input.title,
        description: input.description,
        category: input.category,
        tags: input.tags,
      },
    },
  );

  if (!result.matchedCount) {
    throw new Error("Resource not found.");
  }

  const resource = await collection.findOne({ _id: new ObjectId(id) });

  if (!resource) {
    throw new Error("Resource update failed.");
  }

  return serializeResource(resource);
}

export async function replaceResourceFile(id: string, input: ResourceInput) {
  if (!isMongoConfigured()) {
    throw new Error("Set MONGODB_URI before replacing resources.");
  }

  if (!ObjectId.isValid(id)) {
    throw new Error("Invalid resource id.");
  }

  await ensureResourcesDirectory();
  await ensureResourceIndexes();

  const collection = await getResourceCollection();
  const existing = await collection.findOne({ _id: new ObjectId(id) });

  if (!existing) {
    throw new Error("Resource not found.");
  }

  const safeName = sanitizeFileName(input.originalName);
  const storedName = `${Date.now()}-${randomUUID()}-${safeName}`;
  const storedPath = getStoredPath(storedName);

  await writeFile(storedPath, input.bytes);

  try {
    await unlink(getStoredPath(existing.storedName));
  } catch {
    // The metadata is still updated if the previous file is already gone.
  }

  await collection.updateOne(
    { _id: existing._id },
    {
      $set: {
        title: input.title,
        description: input.description,
        category: input.category,
        tags: input.tags,
        originalName: input.originalName,
        storedName,
        mimeType: input.mimeType || "application/octet-stream",
        size: input.size,
      },
    },
  );

  const updated = await collection.findOne({ _id: existing._id });

  if (!updated) {
    throw new Error("Resource replacement failed.");
  }

  return serializeResource(updated);
}

export async function deleteResource(id: string) {
  if (!isMongoConfigured()) {
    throw new Error("Set MONGODB_URI before deleting resources.");
  }

  if (!ObjectId.isValid(id)) {
    throw new Error("Invalid resource id.");
  }

  await ensureResourceIndexes();
  const collection = await getResourceCollection();
  const resource = await collection.findOne({ _id: new ObjectId(id) });

  if (!resource) {
    throw new Error("Resource not found.");
  }

  await collection.deleteOne({ _id: resource._id });

  try {
    await unlink(getStoredPath(resource.storedName));
  } catch {
    // The database record is already removed; missing files do not block delete.
  }
}

export async function getResourceAnalytics() {
  if (!isMongoConfigured()) {
    const totalBytes = defaultResources.reduce(
      (total, resource) => total + resource.size,
      0,
    );

    return {
      total: defaultResources.length,
      images: defaultResources.filter((resource) =>
        resource.mimeType.startsWith("image/"),
      ).length,
      documents: defaultResources.filter(
        (resource) => !resource.mimeType.startsWith("image/"),
      ).length,
      totalBytes,
    };
  }

  await ensureResourceIndexes();
  const collection = await getResourceCollection();
  const [total, images, rows] = await Promise.all([
    collection.countDocuments(),
    collection.countDocuments({ mimeType: /^image\// }),
    collection
      .aggregate<{ totalBytes: number }>([
        { $group: { _id: null, totalBytes: { $sum: "$size" } } },
      ])
      .toArray(),
  ]);

  return {
    total,
    images,
    documents: total - images,
    totalBytes: rows[0]?.totalBytes ?? 0,
  };
}

export async function readResourceBytes(resource: ResourceRecord) {
  const storedPath = getStoredPath(resource.storedName);
  return readFile(storedPath);
}
