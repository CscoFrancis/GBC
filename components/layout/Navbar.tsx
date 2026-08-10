"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import type { NavLink } from "@/types/content";
import { useTheme } from "@/components/layout/ThemeProvider";

interface NavbarProps {
  churchName: string;
  churchSub: string;
  navigation: NavLink[];
}

export function Navbar({ churchName, churchSub, navigation }: NavbarProps) {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const { theme, toggleTheme } = useTheme();

  return (
    <nav className="fixed inset-x-0 top-10 z-[1000] flex h-[70px] items-center justify-between border-b border-border bg-bg/94 px-[5%] backdrop-blur-md transition-colors duration-400">
      <Link href="/" className="flex items-center gap-[11px]">
        <span className="flex h-[48px] w-[38px] shrink-0 items-center justify-center rounded-full bg-green text-base text-white">
          ✝
        </span>
        <span className="flex flex-col leading-tight">
          <span className="font-display text-[2rem] font-semibold text-text">
            {churchName}
          </span>
          <span className="text-[0.62rem] tracking-[0.18em] text-muted uppercase">
            {churchSub}
          </span>
        </span>
      </Link>

      <ul
        className={`${
          open
            ? "flex absolute inset-x-0 top-[70px] flex-col gap-0 border-b border-border bg-bg p-4 shadow-lg"
            : "hidden"
        } items-center gap-[2.2rem] md:static md:flex md:flex-row md:border-none md:bg-transparent md:p-0 md:shadow-none`}
      >
        {navigation.map((link) => {
          const isActive =
            link.href === "/" ? pathname === "/" : pathname.startsWith(link.href);
          return (
            <li key={link.href} className="w-full md:w-auto">
              <Link
                href={link.href}
                onClick={() => setOpen(false)}
                className={`relative block py-3 text-[0.78rem] font-medium tracking-[0.09em] uppercase transition-colors md:py-0 ${
                  isActive ? "text-green" : "text-muted hover:text-green"
                }`}
              >
                {link.label}
              </Link>
            </li>
          );
        })}
      </ul>

      <div className="flex items-center gap-[0.65rem]">
        <button
          onClick={toggleTheme}
          aria-label="Toggle color theme"
          className="flex items-center gap-2 rounded-full border border-border px-3 py-1.5 text-xs text-muted transition-colors hover:text-green"
        >
          <span>{theme === "light" ? "Light" : "Dark"}</span>
          <span>{theme === "light" ? "☀️" : "🌙"}</span>
        </button>
        <button
          onClick={() => setOpen((o) => !o)}
          aria-label="Toggle menu"
          aria-expanded={open}
          className="flex h-9 w-9 flex-col items-center justify-center gap-[5px] md:hidden"
        >
          <span className="h-[1.5px] w-5 bg-text" />
          <span className="h-[1.5px] w-5 bg-text" />
          <span className="h-[1.5px] w-5 bg-text" />
        </button>
      </div>
    </nav>
  );
}
