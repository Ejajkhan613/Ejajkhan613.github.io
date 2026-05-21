"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  BarChart3,
  FilePlus2,
  Files,
  LayoutDashboard,
  Newspaper,
  PenLine,
  Settings,
} from "lucide-react";

const sections = [
  {
    label: "Overview",
    items: [
      {
        href: "/admin",
        label: "Dashboard",
        icon: LayoutDashboard,
      },
    ],
  },
  {
    label: "Blogs",
    items: [
      {
        href: "/admin/blogs",
        label: "All Blogs",
        icon: Newspaper,
      },
      {
        href: "/admin/blogs/new",
        label: "Create Blog",
        icon: PenLine,
      },
    ],
  },
  {
    label: "Resources",
    items: [
      {
        href: "/admin/resources",
        label: "All Resources",
        icon: Files,
      },
      {
        href: "/admin/resources/new",
        label: "Add Resource",
        icon: FilePlus2,
      },
    ],
  },
  {
    label: "Account",
    items: [
      {
        href: "/admin/profile",
        label: "Profile",
        icon: Settings,
      },
    ],
  },
];

function isActive(pathname: string, href: string) {
  if (href === "/admin") {
    return pathname === href;
  }

  if (href === "/admin/blogs") {
    return pathname === href || (
      pathname.startsWith("/admin/blogs/") &&
      !pathname.startsWith("/admin/blogs/new")
    );
  }

  if (href === "/admin/resources") {
    return pathname === href || (
      pathname.startsWith("/admin/resources/") &&
      !pathname.startsWith("/admin/resources/new")
    );
  }

  return pathname === href || pathname.startsWith(`${href}/`);
}

export function AdminSidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-full border-b border-black/10 bg-white/80 p-4 backdrop-blur dark:border-white/10 dark:bg-neutral-950/80 lg:sticky lg:top-20 lg:h-[calc(100svh-5rem)] lg:w-72 lg:border-b-0 lg:border-r lg:p-5">
      <div className="flex items-center gap-3 rounded-[1.25rem] bg-neutral-950 p-4 text-white dark:bg-white/10">
        <div className="grid size-11 place-items-center rounded-2xl bg-lime-200 text-neutral-950">
          <BarChart3 className="size-5" />
        </div>
        <div>
          <p className="text-sm font-black">Admin Panel</p>
          <p className="text-xs font-semibold text-neutral-300">Portfolio CMS</p>
        </div>
      </div>

      <nav className="mt-5 grid gap-5">
        {sections.map((section) => (
          <div key={section.label}>
            <p className="px-3 text-[0.68rem] font-black uppercase tracking-[0.2em] text-neutral-400">
              {section.label}
            </p>
            <div className="mt-2 grid gap-1">
              {section.items.map((item) => {
                const Icon = item.icon;
                const active = isActive(pathname, item.href);

                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={[
                      "flex items-center gap-3 rounded-2xl px-3 py-2.5 text-sm font-black transition",
                      active
                        ? "bg-teal-50 text-teal-800 dark:bg-lime-200 dark:text-neutral-950"
                        : "text-neutral-600 hover:bg-neutral-100 hover:text-neutral-950 dark:text-neutral-300 dark:hover:bg-white/10 dark:hover:text-white",
                    ].join(" ")}
                  >
                    <Icon className="size-4" />
                    {item.label}
                  </Link>
                );
              })}
            </div>
          </div>
        ))}
      </nav>
    </aside>
  );
}
