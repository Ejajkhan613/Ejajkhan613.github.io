"use server";

import { redirect } from "next/navigation";
import { loginAdmin, logoutAdmin, signupAdmin } from "@/lib/auth";

function textField(formData: FormData, name: string) {
  return formData.get(name)?.toString().trim() ?? "";
}

function safeNext(value: string) {
  return value.startsWith("/admin") && !value.startsWith("//") ? value : "/admin";
}

function errorPath(path: string, message: string, next?: string) {
  const params = new URLSearchParams({ error: message });

  if (next) {
    params.set("next", next);
  }

  return `${path}?${params.toString()}`;
}

export async function loginAction(formData: FormData) {
  const next = safeNext(textField(formData, "next") || "/admin");
  let error = "";

  try {
    await loginAdmin({
      email: textField(formData, "email"),
      password: textField(formData, "password"),
    });
  } catch (caught) {
    error = caught instanceof Error ? caught.message : "Unable to login.";
  }

  if (error) {
    redirect(errorPath("/admin/login", error, next));
  }

  redirect(next);
}

export async function signupAction(formData: FormData) {
  let error = "";

  try {
    await signupAdmin({
      name: textField(formData, "name"),
      email: textField(formData, "email"),
      password: textField(formData, "password"),
      inviteCode: textField(formData, "inviteCode"),
    });
  } catch (caught) {
    error = caught instanceof Error ? caught.message : "Unable to create account.";
  }

  if (error) {
    redirect(errorPath("/admin/signup", error));
  }

  redirect("/admin");
}

export async function logoutAction() {
  await logoutAdmin();
  redirect("/admin/login");
}
