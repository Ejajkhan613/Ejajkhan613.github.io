import type { Metadata } from "next";
import Link from "next/link";
import { PenLine } from "lucide-react";
import { BlogCard } from "@/components/blog-card";
import { SectionHeading } from "@/components/section-heading";
import { getPublishedPosts } from "@/lib/blogs";
import { absoluteUrl } from "@/lib/site";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "My backend engineering notes, architecture decisions, MongoDB lessons, analytics thinking, and full stack build logs.",
  alternates: {
    canonical: absoluteUrl("/blog"),
  },
};

export default async function BlogPage() {
  const posts = await getPublishedPosts();

  return (
    <>
      <section className="border-b border-black/10 bg-white py-20 dark:border-white/10 dark:bg-white/[0.035] sm:py-28">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-[1fr_auto] lg:items-end lg:px-8">
          <SectionHeading
            eyebrow="Blog"
            title="My working notes from backend, analytics, and full stack builds."
            description="I use this blog to document what I learn while building. Posts are server-rendered, metadata-aware, and stored in MongoDB when the database is configured."
          />
          <Link
            href="/admin"
            className="inline-flex h-12 w-fit items-center gap-2 rounded-full bg-neutral-950 px-5 text-sm font-black text-white transition hover:bg-teal-700 dark:bg-lime-200 dark:text-neutral-950 dark:hover:bg-white"
          >
            <PenLine className="size-4" />
            Admin
          </Link>
        </div>
      </section>

      <section className="py-16 sm:py-24">
        <div className="mx-auto grid max-w-7xl gap-6 px-4 sm:px-6 lg:grid-cols-3 lg:px-8">
          {posts.map((post) => (
            <BlogCard key={post.slug} post={post} />
          ))}
        </div>
      </section>
    </>
  );
}
