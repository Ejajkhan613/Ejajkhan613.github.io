import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { AdminShell } from "@/components/admin-shell";
import { BlogFormFields } from "@/components/admin-fields";
import { SubmitButton } from "@/components/submit-button";
import { requireAdmin } from "@/lib/auth";
import { absoluteUrl } from "@/lib/site";
import { createBlogAction } from "../../actions";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Create Blog",
  description: "Create a portfolio blog post.",
  robots: {
    index: false,
    follow: false,
  },
  alternates: {
    canonical: absoluteUrl("/admin/blogs/new"),
  },
};

export default async function NewBlogPage() {
  const admin = await requireAdmin();

  return (
    <AdminShell
      admin={admin}
      title="Create Blog"
      description="Write a new post with Markdown content, SEO metadata, tags, status, and optional cover upload."
      action={
        <Link
          href="/admin/blogs"
          className="inline-flex h-11 items-center justify-center gap-2 rounded-full border border-black/10 px-4 text-sm font-black text-neutral-900 transition hover:border-teal-600 hover:text-teal-700 dark:border-white/15 dark:text-white dark:hover:border-lime-300 dark:hover:text-lime-200"
        >
          <ArrowLeft className="size-4" />
          All Blogs
        </Link>
      }
    >
      <form
        action={createBlogAction}
        className="grid max-w-4xl gap-5 rounded-[1.75rem] border border-black/10 bg-white p-6 shadow-sm dark:border-white/10 dark:bg-white/[0.055]"
      >
        <BlogFormFields />
        <SubmitButton label="Publish post" />
      </form>
    </AdminShell>
  );
}
