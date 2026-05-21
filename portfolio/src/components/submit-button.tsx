"use client";

import { LoaderCircle } from "lucide-react";
import { useFormStatus } from "react-dom";

export function SubmitButton({ label }: { label: string }) {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      disabled={pending}
      className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-neutral-950 px-6 text-sm font-black text-white transition hover:bg-teal-700 disabled:cursor-wait disabled:opacity-70 dark:bg-lime-200 dark:text-neutral-950 dark:hover:bg-white"
    >
      {pending ? <LoaderCircle className="size-4 animate-spin" /> : null}
      {pending ? "Working..." : label}
    </button>
  );
}
