import Link from "next/link";

import type { NavLink, SiteSettings } from "@/types/content";

interface FooterProps {
  settings: SiteSettings;
  navigation: NavLink[];
}

export function Footer({ settings, navigation }: FooterProps) {
  return (
    <footer className="mt-24 flex flex-col items-center gap-4 border-t border-border bg-bg-alt px-6 py-16 text-center transition-colors duration-400">
      <div className="font-display text-2xl font-semibold text-text">
        {settings.churchName}
      </div>
      <p className="text-[0.78rem] text-muted">
        {settings.address} · {settings.phone}
      </p>
      <ul className="flex flex-wrap justify-center gap-6">
        {navigation.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              className="text-xs tracking-[0.08em] text-muted uppercase transition-colors hover:text-green"
            >
              {link.label}
            </Link>
          </li>
        ))}
        <li>
          <Link
            href="/#contactSection"
            className="text-xs tracking-[0.08em] text-muted uppercase transition-colors hover:text-green"
          >
            Contact
          </Link>
        </li>
      </ul>
      <div className="mt-4 text-xs text-muted">{settings.footerCopy}</div>
    </footer>
  );
}
