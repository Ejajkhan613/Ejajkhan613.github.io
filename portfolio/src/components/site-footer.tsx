import Link from "next/link";
import { BriefcaseBusiness, GitBranch, Mail, Phone } from "lucide-react";
import { siteConfig } from "@/lib/site";

const footerLinks = [
  { href: siteConfig.github, label: "GitHub", icon: GitBranch },
  { href: siteConfig.linkedin, label: "LinkedIn", icon: BriefcaseBusiness },
  { href: `mailto:${siteConfig.email}`, label: "Email", icon: Mail },
  { href: `tel:${siteConfig.phone.replace(/\s/g, "")}`, label: "Phone", icon: Phone },
];

export function SiteFooter() {
  return (
    <footer className="border-t border-black/10 bg-neutral-950 text-white dark:border-white/10">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-10 sm:px-6 lg:grid-cols-[1fr_auto] lg:px-8">
        <div>
          <p className="text-sm font-black uppercase tracking-[0.2em] text-lime-200">
            Ejajul Ansari
          </p>
          <p className="mt-3 max-w-2xl text-sm leading-6 text-neutral-300">
            I build API-first, MongoDB-backed, SSR-ready products and train
            learners in full stack development and predictive analytics.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-3">
          {footerLinks.map((item) => {
            const Icon = item.icon;

            return (
              <Link
                key={item.label}
                href={item.href}
                target={item.href.startsWith("http") ? "_blank" : undefined}
                className="inline-flex size-11 items-center justify-center rounded-full border border-white/15 text-neutral-300 transition hover:border-lime-200 hover:text-lime-200"
                aria-label={item.label}
                title={item.label}
              >
                <Icon className="size-4" />
              </Link>
            );
          })}
        </div>
      </div>
    </footer>
  );
}
