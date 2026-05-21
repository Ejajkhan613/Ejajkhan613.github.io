import type { Metadata } from "next";
import { AdminField } from "@/components/admin-fields";
import { AdminShell } from "@/components/admin-shell";
import { SubmitButton } from "@/components/submit-button";
import { requireAdmin } from "@/lib/auth";
import { absoluteUrl } from "@/lib/site";
import { updatePasswordAction, updateProfileAction } from "../actions";

type ProfilePageProps = {
  searchParams: Promise<{
    updated?: string;
  }>;
};

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Admin Profile",
  description: "Update admin profile details and password.",
  robots: {
    index: false,
    follow: false,
  },
  alternates: {
    canonical: absoluteUrl("/admin/profile"),
  },
};

export default async function AdminProfilePage({ searchParams }: ProfilePageProps) {
  const [admin, params] = await Promise.all([requireAdmin(), searchParams]);

  return (
    <AdminShell
      admin={admin}
      title="Profile Settings"
      description="Manage account details and update the admin password."
    >
      {params.updated ? (
        <p className="mb-6 rounded-2xl bg-teal-50 px-4 py-3 text-sm font-bold text-teal-800 dark:bg-lime-200/10 dark:text-lime-200">
          {params.updated === "password"
            ? "Password updated."
            : "Profile details updated."}
        </p>
      ) : null}

      <div className="grid gap-6 xl:grid-cols-2">
        <form
          action={updateProfileAction}
          className="grid gap-5 rounded-[1.75rem] border border-black/10 bg-white p-6 shadow-sm dark:border-white/10 dark:bg-white/[0.055]"
        >
          <div>
            <h2 className="text-2xl font-black text-neutral-950 dark:text-white">
              Account Details
            </h2>
            <p className="mt-2 text-sm leading-7 text-neutral-600 dark:text-neutral-300">
              Update the name and email shown inside the admin panel.
            </p>
          </div>
          <AdminField label="Name" name="name" required defaultValue={admin.name} />
          <AdminField
            label="Email"
            name="email"
            type="email"
            required
            defaultValue={admin.email}
          />
          <SubmitButton label="Save profile" />
        </form>

        <form
          action={updatePasswordAction}
          className="grid gap-5 rounded-[1.75rem] border border-black/10 bg-white p-6 shadow-sm dark:border-white/10 dark:bg-white/[0.055]"
        >
          <div>
            <h2 className="text-2xl font-black text-neutral-950 dark:text-white">
              Password
            </h2>
            <p className="mt-2 text-sm leading-7 text-neutral-600 dark:text-neutral-300">
              Use a minimum of 8 characters for the new password.
            </p>
          </div>
          <AdminField
            label="Current Password"
            name="currentPassword"
            type="password"
            required
          />
          <AdminField
            label="New Password"
            name="newPassword"
            type="password"
            required
          />
          <AdminField
            label="Confirm New Password"
            name="confirmPassword"
            type="password"
            required
          />
          <SubmitButton label="Update password" />
        </form>
      </div>
    </AdminShell>
  );
}
