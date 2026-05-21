import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <section className="grid min-h-[60svh] place-items-center px-4 py-20 sm:px-6 lg:px-8">
      <div className="max-w-xl text-center">
        <p className="text-xs font-black uppercase tracking-[0.22em] text-teal-700 dark:text-lime-300">
          404
        </p>
        <h1 className="mt-4 text-4xl font-black tracking-tight text-neutral-950 dark:text-white sm:text-6xl">
          Page not found
        </h1>
        <p className="mt-5 text-base leading-8 text-neutral-600 dark:text-neutral-300">
          The page may have moved, or the blog post is not published.
        </p>
        <Link
          href="/"
          className="mt-8 inline-flex h-12 items-center gap-2 rounded-full bg-neutral-950 px-5 text-sm font-black text-white transition hover:bg-teal-700 dark:bg-lime-200 dark:text-neutral-950 dark:hover:bg-white"
        >
          <ArrowLeft className="size-4" />
          Home
        </Link>
      </div>
    </section>
  );
}
