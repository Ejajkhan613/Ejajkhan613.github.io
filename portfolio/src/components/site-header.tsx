import Link from "next/link";
import { Download, Sparkles } from "lucide-react";
import { siteConfig } from "@/lib/site";
import { ThemeToggle } from "./theme-toggle";

const navigation = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
  { href: "/blog", label: "Blog" },
  { href: "/resources", label: "Resources" },
  { href: "/admin", label: "Admin" },
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-black/10 bg-[color:var(--surface-glass)] backdrop-blur-xl dark:border-white/10">
      <div className="mx-auto flex h-20 w-full max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="group flex items-center gap-3" aria-label="Ejajul Ansari home">
          <span className="grid size-11 place-items-center rounded-full bg-neutral-950 text-sm font-black text-lime-200 shadow-sm dark:bg-lime-200 dark:text-neutral-950">
            EA
          </span>
          <span className="leading-tight">
            <span className="block text-sm font-black tracking-[0.18em] text-neutral-950 dark:text-white">
              EJAJUL
            </span>
            <span className="flex items-center gap-1 text-xs font-semibold uppercase tracking-[0.16em] text-neutral-500 dark:text-neutral-400">
              <Sparkles className="size-3" />
              Backend Systems
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-1 rounded-full border border-black/10 bg-white/55 p-1 shadow-sm dark:border-white/10 dark:bg-white/5 lg:flex">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-full px-4 py-2 text-sm font-bold text-neutral-600 transition hover:bg-neutral-950 hover:text-white dark:text-neutral-300 dark:hover:bg-lime-200 dark:hover:text-neutral-950"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <Link
            href={siteConfig.resume}
            target="_blank"
            className="inline-flex h-11 items-center justify-center gap-2 rounded-full bg-neutral-950 px-4 text-sm font-black text-white shadow-sm transition hover:-translate-y-0.5 hover:bg-teal-700 dark:bg-lime-200 dark:text-neutral-950 dark:hover:bg-white"
          >
            <Download className="size-4" />
            <span className="hidden sm:inline">Resume</span>
          </Link>
        </div>
      </div>

      <nav className="mx-auto flex max-w-7xl gap-2 overflow-x-auto px-4 pb-3 sm:px-6 lg:hidden">
        {navigation.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="shrink-0 rounded-full border border-black/10 bg-white/70 px-4 py-2 text-sm font-bold text-neutral-700 dark:border-white/10 dark:bg-white/10 dark:text-neutral-200"
          >
            {item.label}
          </Link>
        ))}
      </nav>
    </header>
  );
}
