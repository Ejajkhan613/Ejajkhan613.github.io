import type { Metadata } from "next";
import Link from "next/link";
import { redirect } from "next/navigation";
import { LockKeyhole } from "lucide-react";
import { SubmitButton } from "@/components/submit-button";
import { getCurrentAdmin } from "@/lib/auth";
import { absoluteUrl } from "@/lib/site";
import { loginAction } from "../auth-actions";

type LoginPageProps = {
  searchParams: Promise<{
    error?: string;
    next?: string;
  }>;
};

const inputClass =
  "h-12 w-full rounded-2xl border border-black/10 bg-white px-4 text-sm font-semibold text-neutral-950 outline-none transition placeholder:text-neutral-400 focus:border-teal-600 focus:ring-4 focus:ring-teal-500/10 dark:border-white/10 dark:bg-white/10 dark:text-white dark:focus:border-lime-300 dark:focus:ring-lime-300/10";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Admin Login",
  description: "Login to manage portfolio blog posts and resources.",
  robots: {
    index: false,
    follow: false,
  },
  alternates: {
    canonical: absoluteUrl("/admin/login"),
  },
};

export default async function LoginPage({ searchParams }: LoginPageProps) {
  const [admin, params] = await Promise.all([getCurrentAdmin(), searchParams]);

  if (admin) {
    redirect("/admin");
  }

  const next = params.next?.startsWith("/admin") ? params.next : "/admin";

  return (
    <section className="grid min-h-[calc(100svh-5rem)] place-items-center px-4 py-16 sm:px-6 lg:px-8">
      <div className="w-full max-w-md rounded-[2rem] border border-black/10 bg-white p-6 shadow-sm dark:border-white/10 dark:bg-white/[0.055] sm:p-8">
        <div className="grid size-12 place-items-center rounded-2xl bg-teal-50 text-teal-700 dark:bg-lime-200/10 dark:text-lime-200">
          <LockKeyhole className="size-5" />
        </div>
        <h1 className="mt-6 text-3xl font-black tracking-tight text-neutral-950 dark:text-white">
          Admin login
        </h1>

        {params.error ? (
          <p className="mt-5 rounded-2xl bg-red-50 px-4 py-3 text-sm font-bold text-red-700 dark:bg-red-500/10 dark:text-red-200">
            {params.error}
          </p>
        ) : null}

        <form action={loginAction} className="mt-8 grid gap-5">
          <input type="hidden" name="next" value={next} />
          <label className="grid gap-2">
            <span className="text-xs font-black uppercase tracking-[0.16em] text-neutral-500 dark:text-neutral-400">
              Email
            </span>
            <input name="email" type="email" required className={inputClass} />
          </label>
          <label className="grid gap-2">
            <span className="text-xs font-black uppercase tracking-[0.16em] text-neutral-500 dark:text-neutral-400">
              Password
            </span>
            <input name="password" type="password" required className={inputClass} />
          </label>
          <SubmitButton label="Login" />
        </form>

        <p className="mt-6 text-sm text-neutral-600 dark:text-neutral-300">
          Need an account?{" "}
          <Link href="/admin/signup" className="font-black text-teal-700 dark:text-lime-300">
            Sign up
          </Link>
        </p>
      </div>
    </section>
  );
}
