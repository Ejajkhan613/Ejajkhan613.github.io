import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { AdminShell } from "@/components/admin-shell";
import { BlogFormFields } from "@/components/admin-fields";
import { SubmitButton } from "@/components/submit-button";
import { requireAdmin } from "@/lib/auth";
import { getBlogPostForAdminById } from "@/lib/blogs";
import { absoluteUrl } from "@/lib/site";
import { updateBlogAction } from "../../../actions";

type EditBlogPageProps = {
  params: Promise<{
    id: string;
  }>;
};

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Edit Blog",
  description: "Edit a portfolio blog post.",
  robots: {
    index: false,
    follow: false,
  },
  alternates: {
    canonical: absoluteUrl("/admin/blogs"),
  },
};

export default async function EditBlogPage({ params }: EditBlogPageProps) {
  const { id } = await params;
  const [admin, post] = await Promise.all([
    requireAdmin(),
    getBlogPostForAdminById(id),
  ]);

  if (!post || !post._id) {
    notFound();
  }

  return (
    <AdminShell
      admin={admin}
      title="Edit Blog"
      description="Update content, metadata, publishing status, or replace the cover image."
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
        action={updateBlogAction}
        className="grid max-w-4xl gap-5 rounded-[1.75rem] border border-black/10 bg-white p-6 shadow-sm dark:border-white/10 dark:bg-white/[0.055]"
      >
        <input type="hidden" name="id" value={post._id} />
        <input type="hidden" name="previousSlug" value={post.slug} />
        <BlogFormFields post={post} />
        <SubmitButton label="Save changes" />
      </form>
    </AdminShell>
  );
}
