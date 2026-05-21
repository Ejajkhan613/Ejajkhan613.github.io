import Link from "next/link";
import type { ReactNode } from "react";
import { LogOut } from "lucide-react";
import { type AdminUser } from "@/lib/types";
import { logoutAction } from "@/app/admin/auth-actions";
import { AdminSidebar } from "./admin-sidebar";

type AdminShellProps = {
  admin: AdminUser;
  title: string;
  description: string;
  action?: ReactNode;
  children: ReactNode;
};

export function AdminShell({
  admin,
  title,
  description,
  action,
  children,
}: AdminShellProps) {
  return (
    <div className="min-h-[calc(100svh-5rem)] bg-[color:var(--background)]">
      <div className="lg:flex">
        <AdminSidebar />
        <section className="min-w-0 flex-1">
          <div className="border-b border-black/10 bg-white/70 px-4 py-6 backdrop-blur dark:border-white/10 dark:bg-white/[0.035] sm:px-6 lg:px-8">
            <div className="flex flex-col gap-5 xl:flex-row xl:items-center xl:justify-between">
              <div>
                <p className="text-xs font-black uppercase tracking-[0.2em] text-teal-700 dark:text-lime-300">
                  Signed in as {admin.name}
                </p>
                <h1 className="mt-3 text-balance text-3xl font-black tracking-tight text-neutral-950 dark:text-white sm:text-4xl">
                  {title}
                </h1>
                <p className="mt-3 max-w-3xl text-sm leading-7 text-neutral-600 dark:text-neutral-300">
                  {description}
                </p>
              </div>
              <div className="flex flex-wrap items-center gap-3">
                {action}
                <Link
                  href="/"
                  className="inline-flex h-11 items-center justify-center rounded-full border border-black/10 px-4 text-sm font-black text-neutral-900 transition hover:border-teal-600 hover:text-teal-700 dark:border-white/15 dark:text-white dark:hover:border-lime-300 dark:hover:text-lime-200"
                >
                  View Site
                </Link>
                <form action={logoutAction}>
                  <button
                    type="submit"
                    className="inline-flex h-11 items-center justify-center gap-2 rounded-full bg-neutral-950 px-4 text-sm font-black text-white transition hover:bg-teal-700 dark:bg-lime-200 dark:text-neutral-950 dark:hover:bg-white"
                  >
                    <LogOut className="size-4" />
                    Logout
                  </button>
                </form>
              </div>
            </div>
          </div>

          <div className="px-4 py-8 sm:px-6 lg:px-8">{children}</div>
        </section>
      </div>
    </div>
  );
}
