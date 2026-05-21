import type { Metadata } from "next";
import Link from "next/link";
import { ExternalLink, PenLine, Plus, Trash2 } from "lucide-react";
import { AdminShell } from "@/components/admin-shell";
import { requireAdmin } from "@/lib/auth";
import { getAllPostsForAdmin } from "@/lib/blogs";
import { absoluteUrl } from "@/lib/site";
import { deleteBlogAction } from "../actions";

type BlogsAdminPageProps = {
  searchParams: Promise<{
    created?: string;
    updated?: string;
    deleted?: string;
  }>;
};

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Admin Blogs",
  description: "Manage portfolio blog posts.",
  robots: {
    index: false,
    follow: false,
  },
  alternates: {
    canonical: absoluteUrl("/admin/blogs"),
  },
};

export default async function AdminBlogsPage({
  searchParams,
}: BlogsAdminPageProps) {
  const [admin, posts, params] = await Promise.all([
    requireAdmin(),
    getAllPostsForAdmin(),
    searchParams,
  ]);
  const notice = params.created || params.updated || params.deleted;

  return (
    <AdminShell
      admin={admin}
      title="Blogs"
      description="Create, edit, publish, draft, and delete portfolio blog posts."
      action={
        <Link
          href="/admin/blogs/new"
          className="inline-flex h-11 items-center justify-center gap-2 rounded-full bg-teal-700 px-4 text-sm font-black text-white transition hover:bg-neutral-950 dark:bg-lime-200 dark:text-neutral-950 dark:hover:bg-white"
        >
          <Plus className="size-4" />
          New Blog
        </Link>
      }
    >
      {notice ? (
        <p className="mb-6 rounded-2xl bg-teal-50 px-4 py-3 text-sm font-bold text-teal-800 dark:bg-lime-200/10 dark:text-lime-200">
          Blog post {params.created ? "created" : params.updated ? "updated" : "deleted"}.
        </p>
      ) : null}

      <div className="overflow-hidden rounded-[1.75rem] border border-black/10 bg-white shadow-sm dark:border-white/10 dark:bg-white/[0.055]">
        <div className="grid gap-4 border-b border-black/10 p-5 text-xs font-black uppercase tracking-[0.16em] text-neutral-500 dark:border-white/10 dark:text-neutral-400 md:grid-cols-[1fr_120px_120px_170px]">
          <span>Post</span>
          <span>Status</span>
          <span>Read Time</span>
          <span>Actions</span>
        </div>
        <div className="divide-y divide-black/10 dark:divide-white/10">
          {posts.map((post) => (
            <article
              key={post._id ?? post.slug}
              className="grid gap-4 p-5 md:grid-cols-[1fr_120px_120px_170px] md:items-center"
            >
              <div>
                <h2 className="font-black text-neutral-950 dark:text-white">
                  {post.title}
                </h2>
                <p className="mt-2 line-clamp-2 text-sm leading-6 text-neutral-600 dark:text-neutral-300">
                  {post.excerpt}
                </p>
              </div>
              <span className="w-fit rounded-full bg-neutral-100 px-3 py-1 text-xs font-black uppercase tracking-[0.14em] text-neutral-700 dark:bg-white/10 dark:text-neutral-200">
                {post.status}
              </span>
              <span className="text-sm font-bold text-neutral-600 dark:text-neutral-300">
                {post.readingMinutes} min
              </span>
              <div className="flex flex-wrap gap-2">
                {post.status === "published" ? (
                  <Link
                    href={`/blog/${post.slug}`}
                    target="_blank"
                    className="inline-flex size-10 items-center justify-center rounded-full border border-black/10 text-neutral-700 transition hover:border-teal-600 hover:text-teal-700 dark:border-white/10 dark:text-neutral-200 dark:hover:border-lime-300 dark:hover:text-lime-200"
                    aria-label="View post"
                    title="View post"
                  >
                    <ExternalLink className="size-4" />
                  </Link>
                ) : null}
                {post._id ? (
                  <Link
                    href={`/admin/blogs/${post._id}/edit`}
                    className="inline-flex size-10 items-center justify-center rounded-full border border-black/10 text-neutral-700 transition hover:border-teal-600 hover:text-teal-700 dark:border-white/10 dark:text-neutral-200 dark:hover:border-lime-300 dark:hover:text-lime-200"
                    aria-label="Edit post"
                    title="Edit post"
                  >
                    <PenLine className="size-4" />
                  </Link>
                ) : null}
                {post._id ? (
                  <form action={deleteBlogAction}>
                    <input type="hidden" name="id" value={post._id} />
                    <button
                      type="submit"
                      className="inline-flex size-10 items-center justify-center rounded-full border border-red-200 text-red-700 transition hover:bg-red-50 dark:border-red-400/30 dark:text-red-200 dark:hover:bg-red-500/10"
                      aria-label="Delete post"
                      title="Delete post"
                    >
                      <Trash2 className="size-4" />
                    </button>
                  </form>
                ) : null}
              </div>
            </article>
          ))}
          {!posts.length ? (
            <div className="p-8 text-center text-sm font-bold text-neutral-500 dark:text-neutral-400">
              No blog posts yet.
            </div>
          ) : null}
        </div>
      </div>
    </AdminShell>
  );
}
