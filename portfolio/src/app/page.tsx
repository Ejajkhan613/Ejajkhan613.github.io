import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  BriefcaseBusiness,
  Database,
  GitBranch,
  Mail,
  Phone,
  ServerCog,
  TerminalSquare,
} from "lucide-react";
import { BlogCard } from "@/components/blog-card";
import { ProjectCard } from "@/components/project-card";
import { ResourceCard } from "@/components/resource-card";
import { SectionHeading } from "@/components/section-heading";
import { getPublishedPosts } from "@/lib/blogs";
import {
  metrics,
  profile,
  projects,
  services,
  skillGroups,
  timeline,
} from "@/lib/portfolio-data";
import { getResources } from "@/lib/resources";
import { absoluteUrl, siteConfig } from "@/lib/site";

export const dynamic = "force-dynamic";

export default async function Home() {
  const [posts, resources] = await Promise.all([
    getPublishedPosts(3),
    getResources(2),
  ]);
  const selectedProjects = projects.slice(0, 3);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: profile.name,
    jobTitle: profile.headline,
    url: siteConfig.url,
    image: absoluteUrl(profile.image),
    email: siteConfig.email,
    telephone: siteConfig.phone,
    sameAs: [siteConfig.github, siteConfig.linkedin],
    knowsAbout: [
      "Node.js",
      "Express.js",
      "MongoDB",
      "Next.js",
      "IBM SPSS Modeler",
      "Predictive analytics",
      "REST API design",
      "Full stack development",
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <section className="relative isolate overflow-hidden bg-neutral-950 text-white">
        <Image
          src={profile.image}
          alt={profile.imageAlt}
          fill
          priority
          sizes="100vw"
          className="absolute inset-0 -z-30 object-cover object-[67%_26%] opacity-42 md:object-[75%_24%]"
        />
        <div className="absolute inset-0 -z-20 bg-[linear-gradient(90deg,rgba(9,10,8,0.94)_0%,rgba(9,10,8,0.84)_38%,rgba(9,10,8,0.36)_100%)]" />
        <div className="noise-overlay absolute inset-0 -z-10 opacity-60" />

        <div className="mx-auto grid min-h-[calc(100svh-5rem)] max-w-7xl content-end gap-10 px-4 pb-10 pt-28 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <p className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs font-black uppercase tracking-[0.2em] text-lime-200 backdrop-blur">
              <ServerCog className="size-4" />
              AI Backend Developer / IBM Trainer
            </p>
            <h1 className="mt-7 max-w-5xl text-balance text-5xl font-black leading-[0.98] tracking-tight sm:text-6xl lg:text-7xl">
              I build backend systems that stay fast, clear, and ready to scale.
            </h1>
            <p className="mt-6 max-w-2xl text-pretty text-lg leading-9 text-neutral-200">
              {profile.shortIntro} I pair Node.js, Express, MongoDB, React,
              Next.js, cloud delivery, and AI integration so I can own the work
              from system design to product experience.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/projects"
                className="inline-flex h-12 items-center gap-2 rounded-full bg-lime-200 px-6 text-sm font-black text-neutral-950 transition hover:-translate-y-0.5 hover:bg-white"
              >
                View work
                <ArrowRight className="size-4" />
              </Link>
              <Link
                href={`mailto:${siteConfig.email}`}
                className="inline-flex h-12 items-center gap-2 rounded-full border border-white/20 px-6 text-sm font-black text-white transition hover:-translate-y-0.5 hover:border-lime-200 hover:text-lime-200"
              >
                <Mail className="size-4" />
                Contact me
              </Link>
            </div>
          </div>

          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {metrics.map((metric) => (
              <div
                key={metric.label}
                className="rounded-[1.35rem] border border-white/12 bg-white/10 p-4 backdrop-blur"
              >
                <p className="text-3xl font-black text-lime-200">{metric.value}</p>
                <p className="mt-2 text-sm leading-6 text-neutral-200">
                  {metric.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-black/10 bg-[color:var(--background)] py-6 dark:border-white/10">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
          {profile.highlights.map((highlight) => (
            <p
              key={highlight}
              className="inline-flex items-center gap-2 text-sm font-bold text-neutral-700 dark:text-neutral-200"
            >
              <span className="size-2 rounded-full bg-teal-600 dark:bg-lime-300" />
              {highlight}
            </p>
          ))}
        </div>
      </section>

      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Practice"
            title="This portfolio reflects how I actually work."
            description="I focus on APIs, data modeling, system performance, cloud deployment, predictive analytics, and training developers through practical project decisions."
          />

          <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {services.map((service) => (
              <article
                key={service.title}
                className="rounded-[1.5rem] border border-black/10 bg-white p-6 shadow-sm dark:border-white/10 dark:bg-white/[0.055]"
              >
                <div className="mb-6 grid size-12 place-items-center rounded-2xl bg-teal-50 text-teal-700 dark:bg-lime-200/10 dark:text-lime-200">
                  <Database className="size-5" />
                </div>
                <h3 className="text-xl font-black text-neutral-950 dark:text-white">
                  {service.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-neutral-600 dark:text-neutral-300">
                  {service.description}
                </p>
                <p className="mt-5 border-t border-black/10 pt-4 text-xs font-black uppercase tracking-[0.16em] text-teal-700 dark:border-white/10 dark:text-lime-300">
                  {service.proof}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-neutral-950 py-20 text-white sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
            <SectionHeading
              eyebrow="Selected Work"
              title="Projects I have built, contributed to, and learned from."
              description="My work spans learning acceleration, open source packages, real-time multiplayer systems, and cloud archive tools."
              tone="inverted"
            />
            <Link
              href="/projects"
              className="inline-flex h-12 w-fit items-center gap-2 rounded-full border border-white/15 px-5 text-sm font-black text-white transition hover:border-lime-200 hover:text-lime-200"
            >
              All projects
              <ArrowRight className="size-4" />
            </Link>
          </div>

          <div className="mt-10 grid gap-6">
            {selectedProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-28">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
          <div>
            <SectionHeading
              eyebrow="Stack"
              title="The stack I use to own full workflows."
              description="My strongest area is backend engineering, but I also work across frontend, analytics, cloud, and delivery so projects do not get stuck between handoffs."
            />
            <div className="mt-8 rounded-[1.5rem] border border-black/10 bg-neutral-950 p-6 text-white dark:border-white/10">
              <TerminalSquare className="size-6 text-lime-200" />
              <p className="mt-5 text-sm font-mono leading-7 text-neutral-200">
                {'api.route("/ideas").validate().designSchema().shipSSR().monitor()'}
              </p>
            </div>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            {skillGroups.map((group) => (
              <article
                key={group.title}
                className="rounded-[1.5rem] border border-black/10 bg-white p-6 shadow-sm dark:border-white/10 dark:bg-white/[0.055]"
              >
                <h3 className="text-xl font-black text-neutral-950 dark:text-white">
                  {group.title}
                </h3>
                <p className="mt-2 text-sm leading-6 text-neutral-500 dark:text-neutral-400">
                  {group.focus}
                </p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-full border border-black/10 bg-neutral-50 px-3 py-1 text-xs font-bold text-neutral-700 dark:border-white/10 dark:bg-white/10 dark:text-neutral-200"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-black/10 bg-white py-20 dark:border-white/10 dark:bg-white/[0.035] sm:py-28">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-[0.85fr_1.15fr] lg:px-8">
          <SectionHeading
            eyebrow="Experience"
            title="I carry engineering practice into training."
            description="My current work combines backend engineering, predictive analytics, developer education, and project leadership."
          />

          <div className="grid gap-5">
            {timeline.map((item) => (
              <article
                key={`${item.role}-${item.period}`}
                className="rounded-[1.5rem] border border-black/10 bg-[color:var(--background)] p-6 dark:border-white/10"
              >
                <div className="flex flex-wrap items-start justify-between gap-4">
                  <div>
                    <p className="text-xs font-black uppercase tracking-[0.18em] text-teal-700 dark:text-lime-300">
                      {item.period}
                    </p>
                    <h3 className="mt-2 text-2xl font-black text-neutral-950 dark:text-white">
                      {item.role}
                    </h3>
                    <p className="mt-1 text-sm font-bold text-neutral-500 dark:text-neutral-400">
                      {item.company}
                    </p>
                  </div>
                </div>
                <p className="mt-5 text-sm leading-7 text-neutral-600 dark:text-neutral-300">
                  {item.description}
                </p>
                <ul className="mt-5 grid gap-2 text-sm text-neutral-700 dark:text-neutral-200">
                  {item.points.map((point) => (
                    <li key={point} className="flex gap-3">
                      <span className="mt-2 size-1.5 shrink-0 rounded-full bg-teal-600 dark:bg-lime-300" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
            <SectionHeading
              eyebrow="Writing"
              title="My notes on backend design, analytics, and build decisions."
              description="I use the blog to write about the engineering patterns I actually use. It is MongoDB-backed and managed from the admin area."
            />
            <Link
              href="/blog"
              className="inline-flex h-12 w-fit items-center gap-2 rounded-full bg-neutral-950 px-5 text-sm font-black text-white transition hover:bg-teal-700 dark:bg-lime-200 dark:text-neutral-950 dark:hover:bg-white"
            >
              Read blog
              <ArrowRight className="size-4" />
            </Link>
          </div>
          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {posts.map((post) => (
              <BlogCard key={post.slug} post={post} />
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-black/10 py-20 dark:border-white/10 sm:py-28">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.95fr_1.05fr] lg:px-8">
          <div>
            <SectionHeading
              eyebrow="Resources"
              title="My files, docs, images, and resume resources."
              description="I can upload resources from the admin area; the files are stored in the resources folder and tracked with MongoDB metadata."
            />
            <Link
              href="/resources"
              className="mt-8 inline-flex h-12 items-center gap-2 rounded-full border border-black/10 px-5 text-sm font-black text-neutral-950 transition hover:border-teal-600 hover:text-teal-700 dark:border-white/15 dark:text-white dark:hover:border-lime-300 dark:hover:text-lime-200"
            >
              Browse resources
              <ArrowRight className="size-4" />
            </Link>
          </div>
          <div className="grid gap-5 sm:grid-cols-2">
            {resources.map((resource) => (
              <ResourceCard key={resource._id ?? resource.title} resource={resource} />
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 pb-20 sm:px-6 sm:pb-28 lg:px-8">
        <div className="mx-auto overflow-hidden rounded-[2rem] bg-neutral-950 text-white">
          <div className="grid gap-10 p-6 sm:p-10 lg:grid-cols-[1fr_auto] lg:items-center lg:p-12">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.22em] text-lime-200">
                Contact
              </p>
              <h2 className="mt-3 max-w-3xl text-balance text-3xl font-black tracking-tight sm:text-5xl">
                If you need someone who can think through backend, analytics,
                cloud, and full stack delivery, I&apos;m ready to talk.
              </h2>
            </div>
            <div className="flex flex-wrap gap-3">
              <Link
                href={siteConfig.github}
                target="_blank"
                className="inline-flex size-12 items-center justify-center rounded-full border border-white/15 text-white transition hover:border-lime-200 hover:text-lime-200"
                aria-label="GitHub"
              >
                <GitBranch className="size-5" />
              </Link>
              <Link
                href={siteConfig.linkedin}
                target="_blank"
                className="inline-flex size-12 items-center justify-center rounded-full border border-white/15 text-white transition hover:border-lime-200 hover:text-lime-200"
                aria-label="LinkedIn"
              >
                <BriefcaseBusiness className="size-5" />
              </Link>
              <Link
                href={`mailto:${siteConfig.email}`}
                className="inline-flex h-12 items-center gap-2 rounded-full bg-lime-200 px-5 text-sm font-black text-neutral-950 transition hover:bg-white"
              >
                <Mail className="size-4" />
                Email
              </Link>
              <Link
                href={`tel:${siteConfig.phone.replace(/\s/g, "")}`}
                className="inline-flex h-12 items-center gap-2 rounded-full border border-white/15 px-5 text-sm font-black text-white transition hover:border-lime-200 hover:text-lime-200"
              >
                <Phone className="size-4" />
                Call
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
