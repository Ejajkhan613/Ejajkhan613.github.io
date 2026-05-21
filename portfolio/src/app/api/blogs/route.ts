import { NextRequest, NextResponse } from "next/server";
import { ADMIN_SESSION_COOKIE, getAdminBySessionToken } from "@/lib/auth";
import { createBlogPost, getAllPostsForAdmin, getPublishedPosts } from "@/lib/blogs";
import { createSlug, readingMinutes } from "@/lib/slug";

export const dynamic = "force-dynamic";

async function isAdminRequest(request: NextRequest) {
  const bearer = request.headers.get("authorization")?.replace(/^Bearer\s+/i, "");
  const cookieToken = request.cookies.get(ADMIN_SESSION_COOKIE)?.value;

  return Boolean(await getAdminBySessionToken(bearer || cookieToken));
}

export async function GET(request: NextRequest) {
  const posts = (await isAdminRequest(request))
    ? await getAllPostsForAdmin()
    : await getPublishedPosts();

  return NextResponse.json({ data: posts });
}

export async function POST(request: NextRequest) {
  if (!(await isAdminRequest(request))) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const body = await request.json();
  const title = String(body.title ?? "").trim();
  const excerpt = String(body.excerpt ?? "").trim();
  const content = String(body.content ?? "").trim();

  if (!title || !excerpt || !content) {
    return NextResponse.json(
      { error: "title, excerpt, and content are required" },
      { status: 400 },
    );
  }

  const post = await createBlogPost({
    title,
    excerpt,
    content,
    slug: String(body.slug ?? "").trim() || createSlug(title),
    tags: Array.isArray(body.tags) ? body.tags.map(String) : [],
    coverImage: body.coverImage ? String(body.coverImage) : undefined,
    status: body.status === "draft" ? "draft" : "published",
    seoTitle: body.seoTitle ? String(body.seoTitle) : undefined,
    seoDescription: body.seoDescription ? String(body.seoDescription) : undefined,
    readingMinutes: readingMinutes(content),
  });

  return NextResponse.json({ data: post }, { status: 201 });
}
