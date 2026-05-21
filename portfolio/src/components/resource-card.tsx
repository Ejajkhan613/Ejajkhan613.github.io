import Link from "next/link";
import { Download, FileText } from "lucide-react";
import type { ResourceRecord } from "@/lib/types";

function formatBytes(bytes: number) {
  if (!bytes) {
    return "Stored file";
  }

  const units = ["B", "KB", "MB", "GB"];
  const index = Math.min(Math.floor(Math.log(bytes) / Math.log(1024)), units.length - 1);
  const value = bytes / 1024 ** index;

  return `${value.toFixed(value >= 10 || index === 0 ? 0 : 1)} ${units[index]}`;
}

export function ResourceCard({ resource }: { resource: ResourceRecord }) {
  return (
    <article className="rounded-[1.5rem] border border-black/10 bg-white p-6 shadow-sm dark:border-white/10 dark:bg-white/[0.055]">
      <div className="flex items-start justify-between gap-4">
        <div className="grid size-12 place-items-center rounded-2xl bg-teal-50 text-teal-700 dark:bg-lime-200/10 dark:text-lime-200">
          <FileText className="size-5" />
        </div>
        <span className="rounded-full border border-black/10 px-3 py-1 text-xs font-black uppercase tracking-[0.14em] text-neutral-500 dark:border-white/10 dark:text-neutral-400">
          {resource.category}
        </span>
      </div>

      <h3 className="mt-5 text-xl font-black text-neutral-950 dark:text-white">
        {resource.title}
      </h3>
      <p className="mt-3 text-sm leading-7 text-neutral-600 dark:text-neutral-300">
        {resource.description}
      </p>

      <div className="mt-5 flex flex-wrap gap-2">
        {resource.tags.map((tag) => (
          <span
            key={tag}
            className="rounded-full bg-neutral-100 px-3 py-1 text-xs font-bold text-neutral-700 dark:bg-white/10 dark:text-neutral-200"
          >
            {tag}
          </span>
        ))}
      </div>

      <div className="mt-6 flex items-center justify-between gap-4 border-t border-black/10 pt-5 text-sm text-neutral-500 dark:border-white/10 dark:text-neutral-400">
        <span>{formatBytes(resource.size)}</span>
        <Link
          href={resource.downloadUrl}
          target="_blank"
          className="inline-flex items-center gap-2 rounded-full bg-neutral-950 px-4 py-2 text-sm font-black text-white transition hover:bg-teal-700 dark:bg-lime-200 dark:text-neutral-950 dark:hover:bg-white"
        >
          <Download className="size-4" />
          Open
        </Link>
      </div>
    </article>
  );
}
