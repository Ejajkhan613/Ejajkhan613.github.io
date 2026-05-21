import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Database, FileText, Newspaper, Tags } from "lucide-react";
import { AdminShell } from "@/components/admin-shell";
import { getAdminAuthStatus, requireAdmin } from "@/lib/auth";
import { getBlogAnalytics, getAllPostsForAdmin } from "@/lib/blogs";
import { isMongoConfigured } from "@/lib/mongodb";
import { getResourceAnalytics, getResourcesForAdmin } from "@/lib/resources";
import { absoluteUrl } from "@/lib/site";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Admin Dashboard",
  description: "Admin dashboard for portfolio blogs, resources, and analytics.",
  robots: {
    index: false,
    follow: false,
  },
  alternates: {
    canonical: absoluteUrl("/admin"),
  },
};

function formatBytes(bytes: number) {
  if (!bytes) {
    return "0 B";
  }

  const units = ["B", "KB", "MB", "GB"];
  const index = Math.min(Math.floor(Math.log(bytes) / Math.log(1024)), units.length - 1);
  const value = bytes / 1024 ** index;

  return `${value.toFixed(value >= 10 || index === 0 ? 0 : 1)} ${units[index]}`;
}

export default async function AdminDashboardPage() {
  const [admin, blogStats, resourceStats, authStats, posts, resources] =
    await Promise.all([
      requireAdmin(),
      getBlogAnalytics(),
      getResourceAnalytics(),
      getAdminAuthStatus(),
      getAllPostsForAdmin(),
      getResourcesForAdmin(),
    ]);
  const mongoReady = isMongoConfigured();

  const cards = [
    {
      label: "Blogs",
      value: blogStats.total,
      detail: `${blogStats.published} published / ${blogStats.drafts} drafts`,
      icon: Newspaper,
    },
    {
      label: "Resources",
      value: resourceStats.total,
      detail: `${resourceStats.images} images / ${resourceStats.documents} documents`,
      icon: FileText,
    },
    {
      label: "Storage",
      value: formatBytes(resourceStats.totalBytes),
      detail: "Files tracked in resources",
      icon: Database,
    },
    {
      label: "Tags",
      value: blogStats.tags,
      detail: `${authStats.userCount} admin user${authStats.userCount === 1 ? "" : "s"}`,
      icon: Tags,
    },
  ];

  return (
    <AdminShell
      admin={admin}
      title="Dashboard"
      description="Monitor portfolio content, review publishing activity, and jump into common admin workflows."
      action={
        <Link
          href="/admin/blogs/new"
          className="inline-flex h-11 items-center justify-center gap-2 rounded-full bg-teal-700 px-4 text-sm font-black text-white transition hover:bg-neutral-950 dark:bg-lime-200 dark:text-neutral-950 dark:hover:bg-white"
        >
          New Blog
          <ArrowRight className="size-4" />
        </Link>
      }
    >
      {!mongoReady ? (
        <div className="mb-6 rounded-[1.5rem] border border-amber-300/40 bg-amber-50 p-5 text-sm font-bold text-amber-900 dark:bg-amber-300/10 dark:text-amber-100">
          MongoDB is not configured. Public pages can show fallback content, but
          admin CRUD needs `MONGODB_URI`.
        </div>
      ) : null}

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {cards.map((card) => {
          const Icon = card.icon;

          return (
            <article
              key={card.label}
              className="rounded-[1.5rem] border border-black/10 bg-white p-6 shadow-sm dark:border-white/10 dark:bg-white/[0.055]"
            >
              <div className="flex items-center justify-between gap-4">
                <p className="text-xs font-black uppercase tracking-[0.18em] text-neutral-500 dark:text-neutral-400">
                  {card.label}
                </p>
                <div className="grid size-11 place-items-center rounded-2xl bg-teal-50 text-teal-700 dark:bg-lime-200/10 dark:text-lime-200">
                  <Icon className="size-5" />
                </div>
              </div>
              <p className="mt-5 text-3xl font-black text-neutral-950 dark:text-white">
                {card.value}
              </p>
              <p className="mt-2 text-sm leading-6 text-neutral-600 dark:text-neutral-300">
                {card.detail}
              </p>
            </article>
          );
        })}
      </div>

      <div className="mt-8 grid gap-6 xl:grid-cols-2">
        <section className="rounded-[1.75rem] border border-black/10 bg-white p-6 shadow-sm dark:border-white/10 dark:bg-white/[0.055]">
          <div className="flex items-center justify-between gap-4">
            <h2 className="text-2xl font-black text-neutral-950 dark:text-white">
              Recent Blogs
            </h2>
            <Link
              href="/admin/blogs"
              className="text-sm font-black text-teal-700 dark:text-lime-300"
            >
              Manage
            </Link>
          </div>
          <div className="mt-5 grid gap-3">
            {posts.slice(0, 5).map((post) => (
              <Link
                key={post._id ?? post.slug}
                href={post._id ? `/admin/blogs/${post._id}/edit` : "/admin/blogs"}
                className="rounded-2xl border border-black/10 p-4 transition hover:border-teal-600 dark:border-white/10 dark:hover:border-lime-300"
              >
                <p className="font-black text-neutral-950 dark:text-white">
                  {post.title}
                </p>
                <p className="mt-2 text-xs font-bold uppercase tracking-[0.14em] text-neutral-500 dark:text-neutral-400">
                  {post.status} / {post.readingMinutes} min read
                </p>
              </Link>
            ))}
          </div>
        </section>

        <section className="rounded-[1.75rem] border border-black/10 bg-white p-6 shadow-sm dark:border-white/10 dark:bg-white/[0.055]">
          <div className="flex items-center justify-between gap-4">
            <h2 className="text-2xl font-black text-neutral-950 dark:text-white">
              Recent Resources
            </h2>
            <Link
              href="/admin/resources"
              className="text-sm font-black text-teal-700 dark:text-lime-300"
            >
              Manage
            </Link>
          </div>
          <div className="mt-5 grid gap-3">
            {resources.slice(0, 5).map((resource) => (
              <Link
                key={resource._id ?? resource.title}
                href={
                  resource._id && resource._id !== "resume"
                    ? `/admin/resources/${resource._id}/edit`
                    : "/admin/resources"
                }
                className="rounded-2xl border border-black/10 p-4 transition hover:border-teal-600 dark:border-white/10 dark:hover:border-lime-300"
              >
                <p className="font-black text-neutral-950 dark:text-white">
                  {resource.title}
                </p>
                <p className="mt-2 text-xs font-bold uppercase tracking-[0.14em] text-neutral-500 dark:text-neutral-400">
                  {resource.category} / {formatBytes(resource.size)}
                </p>
              </Link>
            ))}
          </div>
        </section>
      </div>
    </AdminShell>
  );
}
