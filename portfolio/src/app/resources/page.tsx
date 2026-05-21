import type { Metadata } from "next";
import Link from "next/link";
import { Archive, Upload } from "lucide-react";
import { ResourceCard } from "@/components/resource-card";
import { SectionHeading } from "@/components/section-heading";
import { getResources } from "@/lib/resources";
import { absoluteUrl } from "@/lib/site";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Resources",
  description:
    "My resource library for files, documents, images, and resume downloads.",
  alternates: {
    canonical: absoluteUrl("/resources"),
  },
};

export default async function ResourcesPage() {
  const resources = await getResources();

  return (
    <>
      <section className="border-b border-black/10 bg-white py-20 dark:border-white/10 dark:bg-white/[0.035] sm:py-28">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-[1fr_auto] lg:items-end lg:px-8">
          <SectionHeading
            eyebrow="Resources"
            title="A small library for my resume, docs, images, and future assets."
          />
        </div>
      </section>

      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {resources.length ? (
            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {resources.map((resource) => (
                <ResourceCard key={resource._id ?? resource.title} resource={resource} />
              ))}
            </div>
          ) : (
            <div className="rounded-[1.5rem] border border-black/10 bg-white p-10 text-center shadow-sm dark:border-white/10 dark:bg-white/[0.055]">
              <Archive className="mx-auto size-10 text-teal-700 dark:text-lime-300" />
              <h2 className="mt-4 text-2xl font-black text-neutral-950 dark:text-white">
                No resources yet
              </h2>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
