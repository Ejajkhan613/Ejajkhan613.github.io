"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { requireAdmin, updateAdminPassword, updateAdminProfile } from "@/lib/auth";
import {
  createBlogPost,
  deleteBlogPost,
  getBlogPostForAdminById,
  updateBlogPost,
} from "@/lib/blogs";
import {
  deleteResource,
  replaceResourceFile,
  saveResourceFile,
  updateResourceMetadata,
} from "@/lib/resources";
import { createSlug, readingMinutes, splitTags } from "@/lib/slug";

function textField(formData: FormData, name: string) {
  return formData.get(name)?.toString().trim() ?? "";
}

function optionalTextField(formData: FormData, name: string) {
  const value = textField(formData, name);
  return value || undefined;
}

async function saveOptionalCoverImage(formData: FormData, fallback?: string) {
  const file = formData.get("coverImageFile");

  if (!(file instanceof File) || file.size === 0) {
    return fallback;
  }

  if (!file.type.startsWith("image/")) {
    throw new Error("Cover image upload must be an image file.");
  }

  const resource = await saveResourceFile({
    title: textField(formData, "coverImageTitle") || `Cover image - ${file.name}`,
    description: "Blog cover image uploaded from the admin panel.",
    category: "Blog Cover",
    tags: ["Blog", "Cover Image"],
    originalName: file.name,
    mimeType: file.type,
    size: file.size,
    bytes: Buffer.from(await file.arrayBuffer()),
  });

  return resource.downloadUrl;
}

function blogInputFromForm(formData: FormData) {
  const title = textField(formData, "title");
  const content = textField(formData, "content");
  const excerpt = textField(formData, "excerpt");

  if (!title || !content || !excerpt) {
    throw new Error("Title, excerpt, and content are required.");
  }

  return {
    title,
    content,
    excerpt,
    slug: optionalTextField(formData, "slug") ?? createSlug(title),
    status: textField(formData, "status") === "draft" ? "draft" as const : "published" as const,
    tags: splitTags(formData.get("tags")),
    seoTitle: optionalTextField(formData, "seoTitle"),
    seoDescription: optionalTextField(formData, "seoDescription"),
    readingMinutes: readingMinutes(content),
  };
}

function resourceMetadataFromForm(formData: FormData, fallbackTitle?: string) {
  return {
    title: textField(formData, "title") || fallbackTitle || "Untitled resource",
    description: textField(formData, "description"),
    category: textField(formData, "category") || "General",
    tags: splitTags(formData.get("tags")),
  };
}

export async function createBlogAction(formData: FormData) {
  await requireAdmin();

  const input = blogInputFromForm(formData);
  const coverImage = await saveOptionalCoverImage(
    formData,
    optionalTextField(formData, "coverImage"),
  );

  await createBlogPost({
    ...input,
    coverImage,
  });

  revalidatePath("/");
  revalidatePath("/blog");
  revalidatePath(`/blog/${input.slug}`);
  revalidatePath("/admin");
  revalidatePath("/admin/blogs");
  redirect("/admin/blogs?created=blog");
}

export async function updateBlogAction(formData: FormData) {
  await requireAdmin();

  const id = textField(formData, "id");
  const previousSlug = textField(formData, "previousSlug");
  const input = blogInputFromForm(formData);
  const coverImage = await saveOptionalCoverImage(
    formData,
    optionalTextField(formData, "coverImage"),
  );

  await updateBlogPost(id, {
    ...input,
    coverImage,
  });

  revalidatePath("/");
  revalidatePath("/blog");
  revalidatePath(`/blog/${previousSlug}`);
  revalidatePath(`/blog/${input.slug}`);
  revalidatePath("/admin");
  revalidatePath("/admin/blogs");
  redirect("/admin/blogs?updated=blog");
}

export async function deleteBlogAction(formData: FormData) {
  await requireAdmin();

  const id = textField(formData, "id");
  const post = await getBlogPostForAdminById(id);

  await deleteBlogPost(id);

  revalidatePath("/");
  revalidatePath("/blog");

  if (post) {
    revalidatePath(`/blog/${post.slug}`);
  }

  revalidatePath("/admin");
  revalidatePath("/admin/blogs");
  redirect("/admin/blogs?deleted=blog");
}

export async function uploadResourceAction(formData: FormData) {
  await requireAdmin();

  const file = formData.get("file");

  if (!(file instanceof File) || file.size === 0) {
    throw new Error("Choose a file before uploading.");
  }

  const bytes = Buffer.from(await file.arrayBuffer());
  const metadata = resourceMetadataFromForm(formData, file.name);

  await saveResourceFile({
    ...metadata,
    originalName: file.name,
    mimeType: file.type,
    size: file.size,
    bytes,
  });

  revalidatePath("/");
  revalidatePath("/resources");
  revalidatePath("/admin");
  revalidatePath("/admin/resources");
  redirect("/admin/resources?created=resource");
}

export async function updateResourceAction(formData: FormData) {
  await requireAdmin();

  const id = textField(formData, "id");
  const file = formData.get("file");
  const metadata = resourceMetadataFromForm(formData);

  if (file instanceof File && file.size > 0) {
    await replaceResourceFile(id, {
      ...metadata,
      originalName: file.name,
      mimeType: file.type,
      size: file.size,
      bytes: Buffer.from(await file.arrayBuffer()),
    });
  } else {
    await updateResourceMetadata(id, metadata);
  }

  revalidatePath("/");
  revalidatePath("/resources");
  revalidatePath("/admin");
  revalidatePath("/admin/resources");
  redirect("/admin/resources?updated=resource");
}

export async function deleteResourceAction(formData: FormData) {
  await requireAdmin();

  const id = textField(formData, "id");

  await deleteResource(id);

  revalidatePath("/");
  revalidatePath("/resources");
  revalidatePath("/admin");
  revalidatePath("/admin/resources");
  redirect("/admin/resources?deleted=resource");
}

export async function updateProfileAction(formData: FormData) {
  const admin = await requireAdmin();

  await updateAdminProfile({
    userId: admin._id,
    name: textField(formData, "name"),
    email: textField(formData, "email"),
  });

  revalidatePath("/admin");
  revalidatePath("/admin/profile");
  redirect("/admin/profile?updated=profile");
}

export async function updatePasswordAction(formData: FormData) {
  const admin = await requireAdmin();

  const newPassword = textField(formData, "newPassword");
  const confirmPassword = textField(formData, "confirmPassword");

  if (newPassword !== confirmPassword) {
    throw new Error("New password and confirmation do not match.");
  }

  await updateAdminPassword({
    userId: admin._id,
    currentPassword: textField(formData, "currentPassword"),
    newPassword,
  });

  redirect("/admin/profile?updated=password");
}
