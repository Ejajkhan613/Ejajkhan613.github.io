import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Code2, ExternalLink } from "lucide-react";
import type { Project } from "@/lib/types";

type ProjectCardProps = {
  project: Project;
};

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="group overflow-hidden rounded-[2rem] border border-black/10 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:border-teal-500/40 hover:shadow-2xl dark:border-white/10 dark:bg-white/[0.055] dark:hover:border-lime-300/40 lg:grid lg:grid-cols-[1.05fr_0.95fr]">
      <div className="relative min-h-72 overflow-hidden bg-neutral-100 dark:bg-neutral-900">
        <Image
          src={project.image}
          alt={project.imageAlt}
          fill
          sizes="(min-width: 1024px) 45vw, 100vw"
          className="object-cover transition duration-500 group-hover:scale-[1.04]"
        />
        <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/55 to-transparent" />
        <p className="absolute left-5 top-5 rounded-full bg-white/90 px-3 py-1 text-xs font-black uppercase tracking-[0.16em] text-neutral-950 shadow-sm">
          {project.category}
        </p>
      </div>

      <div className="flex min-h-full flex-col p-6 sm:p-8">
        <div className="flex items-start justify-between gap-4">
          <h3 className="text-2xl font-black tracking-tight text-neutral-950 dark:text-white">
            {project.title}
          </h3>
          <Code2 className="mt-1 size-5 shrink-0 text-teal-700 dark:text-lime-300" />
        </div>
        <p className="mt-4 text-sm leading-7 text-neutral-600 dark:text-neutral-300">
          {project.summary}
        </p>

        <div className="mt-6 grid gap-4 text-sm sm:grid-cols-2">
          <div>
            <p className="font-black uppercase tracking-[0.16em] text-neutral-400">
              Challenge
            </p>
            <p className="mt-2 leading-6 text-neutral-700 dark:text-neutral-200">
              {project.challenge}
            </p>
          </div>
          <div>
            <p className="font-black uppercase tracking-[0.16em] text-neutral-400">
              Outcome
            </p>
            <p className="mt-2 leading-6 text-neutral-700 dark:text-neutral-200">
              {project.outcome}
            </p>
          </div>
        </div>

        <div className="mt-6 flex flex-wrap gap-2">
          {project.tech.map((tech) => (
            <span
              key={tech}
              className="rounded-full border border-black/10 bg-neutral-50 px-3 py-1 text-xs font-bold text-neutral-700 dark:border-white/10 dark:bg-white/10 dark:text-neutral-200"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="mt-8 flex flex-wrap gap-3">
          {project.github ? (
            <Link
              href={project.github}
              target="_blank"
              className="inline-flex items-center gap-2 rounded-full bg-neutral-950 px-4 py-2 text-sm font-black text-white transition hover:bg-teal-700 dark:bg-lime-200 dark:text-neutral-950 dark:hover:bg-white"
            >
              Code
              <ArrowUpRight className="size-4" />
            </Link>
          ) : null}
          {project.live ? (
            <Link
              href={project.live}
              target="_blank"
              className="inline-flex items-center gap-2 rounded-full border border-black/10 px-4 py-2 text-sm font-black text-neutral-900 transition hover:border-teal-600 hover:text-teal-700 dark:border-white/15 dark:text-white dark:hover:border-lime-300 dark:hover:text-lime-200"
            >
              Live
              <ExternalLink className="size-4" />
            </Link>
          ) : null}
        </div>
      </div>
    </article>
  );
}
