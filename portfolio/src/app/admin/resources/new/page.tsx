import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { AdminShell } from "@/components/admin-shell";
import { ResourceFormFields } from "@/components/admin-fields";
import { SubmitButton } from "@/components/submit-button";
import { requireAdmin } from "@/lib/auth";
import { absoluteUrl } from "@/lib/site";
import { uploadResourceAction } from "../../actions";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Add Resource",
  description: "Add a portfolio resource.",
  robots: {
    index: false,
    follow: false,
  },
  alternates: {
    canonical: absoluteUrl("/admin/resources/new"),
  },
};

export default async function NewResourcePage() {
  const admin = await requireAdmin();

  return (
    <AdminShell
      admin={admin}
      title="Add Resource"
      description="Upload a file and attach category, tags, and descriptive metadata."
      action={
        <Link
          href="/admin/resources"
          className="inline-flex h-11 items-center justify-center gap-2 rounded-full border border-black/10 px-4 text-sm font-black text-neutral-900 transition hover:border-teal-600 hover:text-teal-700 dark:border-white/15 dark:text-white dark:hover:border-lime-300 dark:hover:text-lime-200"
        >
          <ArrowLeft className="size-4" />
          All Resources
        </Link>
      }
    >
      <form
        action={uploadResourceAction}
        className="grid max-w-3xl gap-5 rounded-[1.75rem] border border-black/10 bg-white p-6 shadow-sm dark:border-white/10 dark:bg-white/[0.055]"
      >
        <ResourceFormFields />
        <SubmitButton label="Upload resource" />
      </form>
    </AdminShell>
  );
}
