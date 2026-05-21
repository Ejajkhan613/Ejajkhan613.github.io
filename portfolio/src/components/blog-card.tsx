import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CalendarDays } from "lucide-react";
import type { BlogPost } from "@/lib/types";

export function BlogCard({ post }: { post: BlogPost }) {
  const date = post.publishedAt ?? post.createdAt;

  return (
    <article className="group overflow-hidden rounded-[1.75rem] border border-black/10 bg-white shadow-sm transition hover:-translate-y-1 hover:border-teal-500/40 dark:border-white/10 dark:bg-white/[0.055] dark:hover:border-lime-300/40">
      <Link href={`/blog/${post.slug}`} className="block">
        <div className="relative h-56 overflow-hidden bg-neutral-100 dark:bg-neutral-900">
          <Image
            src={post.coverImage ?? "/assets/photos/server.jpg"}
            alt=""
            fill
            sizes="(min-width: 1024px) 33vw, 100vw"
            className="object-cover transition duration-500 group-hover:scale-[1.04]"
          />
        </div>
        <div className="p-6">
          <div className="flex flex-wrap items-center gap-3 text-xs font-bold uppercase tracking-[0.14em] text-neutral-500 dark:text-neutral-400">
            <span className="inline-flex items-center gap-1">
              <CalendarDays className="size-3.5" />
              {new Intl.DateTimeFormat("en", {
                month: "short",
                day: "numeric",
                year: "numeric",
              }).format(new Date(date))}
            </span>
            <span>{post.readingMinutes} min read</span>
          </div>

          <h3 className="mt-4 text-xl font-black tracking-tight text-neutral-950 dark:text-white">
            {post.title}
          </h3>
          <p className="mt-3 line-clamp-3 text-sm leading-7 text-neutral-600 dark:text-neutral-300">
            {post.excerpt}
          </p>
          <div className="mt-5 flex flex-wrap gap-2">
            {post.tags.slice(0, 3).map((tag) => (
              <span
                key={tag}
                className="rounded-full bg-teal-50 px-3 py-1 text-xs font-black text-teal-800 dark:bg-lime-200/10 dark:text-lime-200"
              >
                {tag}
              </span>
            ))}
          </div>
          <span className="mt-6 inline-flex items-center gap-2 text-sm font-black text-teal-700 dark:text-lime-300">
            Read note
            <ArrowRight className="size-4 transition group-hover:translate-x-1" />
          </span>
        </div>
      </Link>
    </article>
  );
}
