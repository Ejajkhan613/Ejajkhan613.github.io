import type { Metadata } from "next";
import Link from "next/link";
import { redirect } from "next/navigation";
import { UserRoundPlus } from "lucide-react";
import { SubmitButton } from "@/components/submit-button";
import { getAdminAuthStatus, getCurrentAdmin } from "@/lib/auth";
import { absoluteUrl } from "@/lib/site";
import { signupAction } from "../auth-actions";

type SignupPageProps = {
  searchParams: Promise<{
    error?: string;
  }>;
};

const inputClass =
  "h-12 w-full rounded-2xl border border-black/10 bg-white px-4 text-sm font-semibold text-neutral-950 outline-none transition placeholder:text-neutral-400 focus:border-teal-600 focus:ring-4 focus:ring-teal-500/10 dark:border-white/10 dark:bg-white/10 dark:text-white dark:focus:border-lime-300 dark:focus:ring-lime-300/10";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Admin Signup",
  description: "Create an admin account for the portfolio.",
  robots: {
    index: false,
    follow: false,
  },
  alternates: {
    canonical: absoluteUrl("/admin/signup"),
  },
};

export default async function SignupPage({ searchParams }: SignupPageProps) {
  const [admin, status, params] = await Promise.all([
    getCurrentAdmin(),
    getAdminAuthStatus(),
    searchParams,
  ]);

  if (admin) {
    redirect("/admin");
  }

  return (
    <section className="grid min-h-[calc(100svh-5rem)] place-items-center px-4 py-16 sm:px-6 lg:px-8">
      <div className="w-full max-w-md rounded-[2rem] border border-black/10 bg-white p-6 shadow-sm dark:border-white/10 dark:bg-white/[0.055] sm:p-8">
        <div className="grid size-12 place-items-center rounded-2xl bg-teal-50 text-teal-700 dark:bg-lime-200/10 dark:text-lime-200">
          <UserRoundPlus className="size-5" />
        </div>
        <h1 className="mt-6 text-3xl font-black tracking-tight text-neutral-950 dark:text-white">
          Admin signup
        </h1>

        {params.error ? (
          <p className="mt-5 rounded-2xl bg-red-50 px-4 py-3 text-sm font-bold text-red-700 dark:bg-red-500/10 dark:text-red-200">
            {params.error}
          </p>
        ) : null}

        <form action={signupAction} className="mt-8 grid gap-5">
          <label className="grid gap-2">
            <span className="text-xs font-black uppercase tracking-[0.16em] text-neutral-500 dark:text-neutral-400">
              Name
            </span>
            <input name="name" type="text" required className={inputClass} />
          </label>
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
          <label className="grid gap-2">
            <span className="text-xs font-black uppercase tracking-[0.16em] text-neutral-500 dark:text-neutral-400">
              Invite Code
            </span>
            <input
              name="inviteCode"
              type="password"
              className={inputClass}
              required={status.signupProtected}
            />
          </label>
          <SubmitButton label="Create admin account" />
        </form>

        <p className="mt-6 text-sm text-neutral-600 dark:text-neutral-300">
          Already have an account?{" "}
          <Link href="/admin/login" className="font-black text-teal-700 dark:text-lime-300">
            Login
          </Link>
        </p>
      </div>
    </section>
  );
}
