import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, BriefcaseBusiness, GitBranch, Mail } from "lucide-react";
import { ProjectCard } from "@/components/project-card";
import { SectionHeading } from "@/components/section-heading";
import { projects } from "@/lib/portfolio-data";
import { absoluteUrl, siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Projects I have built and contributed to as Ejajul Ansari, including Silvi Player, the silvi-player npm package, Tic Tac Toe Esports, and AWS Glacier Drive.",
  alternates: {
    canonical: absoluteUrl("/projects"),
  },
};

export default function ProjectsPage() {
  return (
    <>
      <section className="border-b border-black/10 bg-white py-20 dark:border-white/10 dark:bg-white/[0.035] sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[1fr_0.75fr] lg:items-end">
            <SectionHeading
              eyebrow="Projects"
              title="The projects behind my backend and full stack practice."
              description="These builds show how I approach video learning, open source packages, real-time multiplayer systems, and cloud archive tools."
            />
            <div className="rounded-[1.5rem] border border-black/10 bg-[color:var(--background)] p-6 dark:border-white/10">
              <p className="text-sm leading-7 text-neutral-600 dark:text-neutral-300">
                I rewrote this section around what I did, what problem I was
                solving, and what stack I used, so my project history is easier
                to understand than a simple gallery.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-24">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:px-8">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </section>

      <section className="px-4 pb-20 sm:px-6 sm:pb-28 lg:px-8">
        <div className="mx-auto max-w-7xl rounded-[2rem] bg-neutral-950 p-6 text-white sm:p-10 lg:p-12">
          <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.22em] text-lime-200">
                Next step
              </p>
              <h2 className="mt-3 text-balance text-3xl font-black tracking-tight sm:text-4xl">
                Want to see more implementation detail from my work?
              </h2>
            </div>
            <div className="flex flex-wrap gap-3">
              <Link
                href={siteConfig.github}
                target="_blank"
                className="inline-flex h-12 items-center gap-2 rounded-full border border-white/15 px-5 text-sm font-black transition hover:border-lime-200 hover:text-lime-200"
              >
                <GitBranch className="size-4" />
                GitHub
              </Link>
              <Link
                href={siteConfig.linkedin}
                target="_blank"
                className="inline-flex h-12 items-center gap-2 rounded-full border border-white/15 px-5 text-sm font-black transition hover:border-lime-200 hover:text-lime-200"
              >
                <BriefcaseBusiness className="size-4" />
                LinkedIn
              </Link>
              <Link
                href={`mailto:${siteConfig.email}`}
                className="inline-flex h-12 items-center gap-2 rounded-full bg-lime-200 px-5 text-sm font-black text-neutral-950 transition hover:bg-white"
              >
                <Mail className="size-4" />
                Contact
                <ArrowRight className="size-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
