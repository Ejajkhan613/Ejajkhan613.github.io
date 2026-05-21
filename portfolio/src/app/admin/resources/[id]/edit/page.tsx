import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { AdminShell } from "@/components/admin-shell";
import { ResourceFormFields } from "@/components/admin-fields";
import { SubmitButton } from "@/components/submit-button";
import { requireAdmin } from "@/lib/auth";
import { getResourceForAdminById } from "@/lib/resources";
import { absoluteUrl } from "@/lib/site";
import { updateResourceAction } from "../../../actions";

type EditResourcePageProps = {
  params: Promise<{
    id: string;
  }>;
};

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Edit Resource",
  description: "Edit a portfolio resource.",
  robots: {
    index: false,
    follow: false,
  },
  alternates: {
    canonical: absoluteUrl("/admin/resources"),
  },
};

export default async function EditResourcePage({ params }: EditResourcePageProps) {
  const { id } = await params;
  const [admin, resource] = await Promise.all([
    requireAdmin(),
    getResourceForAdminById(id),
  ]);

  if (!resource || !resource._id || resource._id === "resume") {
    notFound();
  }

  return (
    <AdminShell
      admin={admin}
      title="Edit Resource"
      description="Update metadata or choose a new file to replace the stored resource."
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
        action={updateResourceAction}
        className="grid max-w-3xl gap-5 rounded-[1.75rem] border border-black/10 bg-white p-6 shadow-sm dark:border-white/10 dark:bg-white/[0.055]"
      >
        <input type="hidden" name="id" value={resource._id} />
        <ResourceFormFields resource={resource} />
        <p className="text-sm font-bold text-neutral-500 dark:text-neutral-400">
          Leave the file input empty to keep the existing file.
        </p>
        <SubmitButton label="Save resource" />
      </form>
    </AdminShell>
  );
}
