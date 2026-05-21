import { ObjectId, type WithId } from "mongodb";
import { fallbackPosts } from "./portfolio-data";
import { getCollection, isMongoConfigured } from "./mongodb";
import type { BlogPost, BlogStatus } from "./types";

type BlogDocument = Omit<
  BlogPost,
  "_id" | "createdAt" | "updatedAt" | "publishedAt"
> & {
  createdAt: Date;
  updatedAt: Date;
  publishedAt?: Date;
};

type BlogPostInput = {
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  tags: string[];
  coverImage?: string;
  status: BlogStatus;
  seoTitle?: string;
  seoDescription?: string;
  readingMinutes: number;
};

type BlogPostUpdateInput = Partial<BlogPostInput>;

const collectionName = "blog_posts";
let indexesReady: Promise<void> | undefined;

function serializePost(post: WithId<BlogDocument>): BlogPost {
  return {
    ...post,
    _id: post._id.toString(),
    createdAt: post.createdAt.toISOString(),
    updatedAt: post.updatedAt.toISOString(),
    publishedAt: post.publishedAt?.toISOString(),
  };
}

async function getBlogCollection() {
  return getCollection<BlogDocument>(collectionName);
}

async function ensureBlogIndexes() {
  if (!indexesReady) {
    indexesReady = getBlogCollection().then(async (collection) => {
      await collection.createIndex({ slug: 1 }, { unique: true });
      await collection.createIndex({ status: 1, publishedAt: -1 });
      await collection.createIndex({ tags: 1 });
    });
  }

  return indexesReady;
}

function fallback(limit?: number) {
  return typeof limit === "number" ? fallbackPosts.slice(0, limit) : fallbackPosts;
}

export async function getPublishedPosts(limit?: number): Promise<BlogPost[]> {
  if (!isMongoConfigured()) {
    return fallback(limit);
  }

  try {
    await ensureBlogIndexes();
    const collection = await getBlogCollection();
    const cursor = collection
      .find({ status: "published" })
      .sort({ publishedAt: -1, createdAt: -1 });

    if (limit) {
      cursor.limit(limit);
    }

    const posts = (await cursor.toArray()).map(serializePost);
    return posts.length ? posts : fallback(limit);
  } catch {
    return fallback(limit);
  }
}

export async function getAllPostsForAdmin(): Promise<BlogPost[]> {
  if (!isMongoConfigured()) {
    return fallbackPosts;
  }

  await ensureBlogIndexes();
  const collection = await getBlogCollection();
  return (
    await collection.find({}).sort({ updatedAt: -1, createdAt: -1 }).toArray()
  ).map(serializePost);
}

export async function getBlogPostForAdminById(id: string): Promise<BlogPost | null> {
  if (!isMongoConfigured() || !ObjectId.isValid(id)) {
    return fallbackPosts.find((post) => post._id === id || post.slug === id) ?? null;
  }

  await ensureBlogIndexes();
  const collection = await getBlogCollection();
  const post = await collection.findOne({ _id: new ObjectId(id) });

  return post ? serializePost(post) : null;
}

export async function getPostBySlug(slug: string): Promise<BlogPost | null> {
  const localPost = fallbackPosts.find((post) => post.slug === slug) ?? null;

  if (!isMongoConfigured()) {
    return localPost;
  }

  try {
    await ensureBlogIndexes();
    const collection = await getBlogCollection();
    const post = await collection.findOne({ slug, status: "published" });
    return post ? serializePost(post) : localPost;
  } catch {
    return localPost;
  }
}

export async function createBlogPost(input: BlogPostInput) {
  if (!isMongoConfigured()) {
    throw new Error("Set MONGODB_URI before creating blog posts.");
  }

  await ensureBlogIndexes();
  const now = new Date();
  const document: BlogDocument = {
    ...input,
    createdAt: now,
    updatedAt: now,
    publishedAt: input.status === "published" ? now : undefined,
  };

  const collection = await getBlogCollection();
  const result = await collection.insertOne(document);

  return serializePost({
    ...document,
    _id: new ObjectId(result.insertedId),
  });
}

export async function updateBlogPost(id: string, input: BlogPostUpdateInput) {
  if (!isMongoConfigured()) {
    throw new Error("Set MONGODB_URI before updating blog posts.");
  }

  if (!ObjectId.isValid(id)) {
    throw new Error("Invalid blog post id.");
  }

  await ensureBlogIndexes();

  const collection = await getBlogCollection();
  const existing = await collection.findOne({ _id: new ObjectId(id) });

  if (!existing) {
    throw new Error("Blog post not found.");
  }

  const now = new Date();
  const nextStatus = input.status ?? existing.status;
  const publishedAt =
    nextStatus === "published"
      ? existing.publishedAt ?? now
      : undefined;

  const update: Partial<BlogDocument> = {
    ...input,
    status: nextStatus,
    publishedAt,
    updatedAt: now,
  };

  await collection.updateOne({ _id: existing._id }, { $set: update });

  const updated = await collection.findOne({ _id: existing._id });

  if (!updated) {
    throw new Error("Blog post update failed.");
  }

  return serializePost(updated);
}

export async function deleteBlogPost(id: string) {
  if (!isMongoConfigured()) {
    throw new Error("Set MONGODB_URI before deleting blog posts.");
  }

  if (!ObjectId.isValid(id)) {
    throw new Error("Invalid blog post id.");
  }

  await ensureBlogIndexes();
  const collection = await getBlogCollection();
  const result = await collection.deleteOne({ _id: new ObjectId(id) });

  if (!result.deletedCount) {
    throw new Error("Blog post not found.");
  }
}

export async function getBlogAnalytics() {
  if (!isMongoConfigured()) {
    return {
      total: fallbackPosts.length,
      published: fallbackPosts.filter((post) => post.status === "published").length,
      drafts: fallbackPosts.filter((post) => post.status === "draft").length,
      tags: new Set(fallbackPosts.flatMap((post) => post.tags)).size,
    };
  }

  await ensureBlogIndexes();
  const collection = await getBlogCollection();
  const [total, published, drafts, tagRows] = await Promise.all([
    collection.countDocuments(),
    collection.countDocuments({ status: "published" }),
    collection.countDocuments({ status: "draft" }),
    collection.distinct("tags"),
  ]);

  return {
    total,
    published,
    drafts,
    tags: tagRows.length,
  };
}
