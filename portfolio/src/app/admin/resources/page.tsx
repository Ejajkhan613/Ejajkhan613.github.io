import type { Metadata } from "next";
import Link from "next/link";
import { Download, PenLine, Plus, Trash2 } from "lucide-react";
import { AdminShell } from "@/components/admin-shell";
import { requireAdmin } from "@/lib/auth";
import { getResourcesForAdmin } from "@/lib/resources";
import { absoluteUrl } from "@/lib/site";
import { deleteResourceAction } from "../actions";

type ResourcesAdminPageProps = {
  searchParams: Promise<{
    created?: string;
    updated?: string;
    deleted?: string;
  }>;
};

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Admin Resources",
  description: "Manage portfolio resources.",
  robots: {
    index: false,
    follow: false,
  },
  alternates: {
    canonical: absoluteUrl("/admin/resources"),
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

export default async function AdminResourcesPage({
  searchParams,
}: ResourcesAdminPageProps) {
  const [admin, resources, params] = await Promise.all([
    requireAdmin(),
    getResourcesForAdmin(),
    searchParams,
  ]);
  const notice = params.created || params.updated || params.deleted;

  return (
    <AdminShell
      admin={admin}
      title="Resources"
      description="Upload, edit, replace, download, and delete portfolio files."
      action={
        <Link
          href="/admin/resources/new"
          className="inline-flex h-11 items-center justify-center gap-2 rounded-full bg-teal-700 px-4 text-sm font-black text-white transition hover:bg-neutral-950 dark:bg-lime-200 dark:text-neutral-950 dark:hover:bg-white"
        >
          <Plus className="size-4" />
          Add Resource
        </Link>
      }
    >
      {notice ? (
        <p className="mb-6 rounded-2xl bg-teal-50 px-4 py-3 text-sm font-bold text-teal-800 dark:bg-lime-200/10 dark:text-lime-200">
          Resource {params.created ? "created" : params.updated ? "updated" : "deleted"}.
        </p>
      ) : null}

      <div className="overflow-hidden rounded-[1.75rem] border border-black/10 bg-white shadow-sm dark:border-white/10 dark:bg-white/[0.055]">
        <div className="grid gap-4 border-b border-black/10 p-5 text-xs font-black uppercase tracking-[0.16em] text-neutral-500 dark:border-white/10 dark:text-neutral-400 md:grid-cols-[1fr_130px_110px_170px]">
          <span>Resource</span>
          <span>Category</span>
          <span>Size</span>
          <span>Actions</span>
        </div>
        <div className="divide-y divide-black/10 dark:divide-white/10">
          {resources.map((resource) => {
            const editable = resource._id && resource._id !== "resume";

            return (
              <article
                key={resource._id ?? resource.title}
                className="grid gap-4 p-5 md:grid-cols-[1fr_130px_110px_170px] md:items-center"
              >
                <div>
                  <h2 className="font-black text-neutral-950 dark:text-white">
                    {resource.title}
                  </h2>
                  <p className="mt-2 line-clamp-2 text-sm leading-6 text-neutral-600 dark:text-neutral-300">
                    {resource.description || resource.originalName}
                  </p>
                </div>
                <span className="w-fit rounded-full bg-neutral-100 px-3 py-1 text-xs font-black uppercase tracking-[0.14em] text-neutral-700 dark:bg-white/10 dark:text-neutral-200">
                  {resource.category}
                </span>
                <span className="text-sm font-bold text-neutral-600 dark:text-neutral-300">
                  {formatBytes(resource.size)}
                </span>
                <div className="flex flex-wrap gap-2">
                  <Link
                    href={resource.downloadUrl}
                    target="_blank"
                    className="inline-flex size-10 items-center justify-center rounded-full border border-black/10 text-neutral-700 transition hover:border-teal-600 hover:text-teal-700 dark:border-white/10 dark:text-neutral-200 dark:hover:border-lime-300 dark:hover:text-lime-200"
                    aria-label="Open resource"
                    title="Open resource"
                  >
                    <Download className="size-4" />
                  </Link>
                  {editable ? (
                    <Link
                      href={`/admin/resources/${resource._id}/edit`}
                      className="inline-flex size-10 items-center justify-center rounded-full border border-black/10 text-neutral-700 transition hover:border-teal-600 hover:text-teal-700 dark:border-white/10 dark:text-neutral-200 dark:hover:border-lime-300 dark:hover:text-lime-200"
                      aria-label="Edit resource"
                      title="Edit resource"
                    >
                      <PenLine className="size-4" />
                    </Link>
                  ) : null}
                  {editable ? (
                    <form action={deleteResourceAction}>
                      <input type="hidden" name="id" value={resource._id} />
                      <button
                        type="submit"
                        className="inline-flex size-10 items-center justify-center rounded-full border border-red-200 text-red-700 transition hover:bg-red-50 dark:border-red-400/30 dark:text-red-200 dark:hover:bg-red-500/10"
                        aria-label="Delete resource"
                        title="Delete resource"
                      >
                        <Trash2 className="size-4" />
                      </button>
                    </form>
                  ) : null}
                </div>
              </article>
            );
          })}
          {!resources.length ? (
            <div className="p-8 text-center text-sm font-bold text-neutral-500 dark:text-neutral-400">
              No resources yet.
            </div>
          ) : null}
        </div>
      </div>
    </AdminShell>
  );
}
