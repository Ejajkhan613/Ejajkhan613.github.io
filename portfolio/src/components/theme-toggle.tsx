"use client";

import { Moon, Sun } from "lucide-react";

export function ThemeToggle() {
  function toggleTheme() {
    const root = document.documentElement;
    const nextTheme = root.classList.contains("dark") ? "light" : "dark";

    root.classList.toggle("dark", nextTheme === "dark");
    window.localStorage.setItem("theme", nextTheme);
  }

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className="group inline-flex size-11 items-center justify-center rounded-full border border-black/10 bg-white/70 text-neutral-950 shadow-sm backdrop-blur transition hover:border-teal-500/50 hover:text-teal-700 dark:border-white/15 dark:bg-white/10 dark:text-white dark:hover:border-lime-300/60 dark:hover:text-lime-200"
      aria-label="Toggle dark and light mode"
      title="Toggle theme"
    >
      <Sun className="size-4 transition group-hover:scale-110 dark:hidden" />
      <Moon className="hidden size-4 transition group-hover:scale-110 dark:block" />
    </button>
  );
}
