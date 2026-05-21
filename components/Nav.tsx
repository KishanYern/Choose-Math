"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { ThemeToggle } from "./ThemeToggle";

const navLinks = [
  { href: "/quiz", label: "quiz" },
  { href: "/careers", label: "careers" },
  { href: "/roadmap", label: "roadmap" },
  { href: "/programs", label: "programs" },
  { href: "/stories", label: "stories" },
  { href: "/resources", label: "resources" },
  { href: "/checklist", label: "checklist" },
];

export function Nav() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-paper border-b border-rule">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-14 flex items-center justify-between">
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-1.5 group"
          onClick={() => setMobileOpen(false)}
        >
          <span className="font-mono text-marker text-base font-light select-none">ƒ</span>
          <span className="font-display italic text-ink text-base font-normal tracking-tight group-hover:text-accent transition-colors">
            ChooseMath
          </span>
        </Link>

        {/* Desktop nav links */}
        <div className="hidden md:flex items-center gap-5">
          {navLinks.map((link) => {
            const active = pathname === link.href || pathname.startsWith(link.href + "/");
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`font-mono text-xs tracking-wider transition-colors relative pb-0.5 ${
                  active
                    ? "text-ink"
                    : "text-ink-muted hover:text-ink"
                }`}
              >
                {link.label}
                {active && (
                  <span className="absolute bottom-0 left-0 right-0 block h-px bg-accent" />
                )}
              </Link>
            );
          })}
        </div>

        {/* Right: Theme toggle + hamburger */}
        <div className="flex items-center gap-3">
          <ThemeToggle />

          {/* Mobile hamburger */}
          <button
            className="md:hidden w-8 h-8 flex items-center justify-center text-ink-muted hover:text-ink transition-colors"
            onClick={() => setMobileOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? (
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden border-t border-rule bg-paper px-4 py-5 flex flex-col gap-3">
          {navLinks.map((link) => {
            const active = pathname === link.href || pathname.startsWith(link.href + "/");
            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className={`font-mono text-sm tracking-wider transition-colors ${
                  active ? "text-ink" : "text-ink-muted hover:text-ink"
                }`}
              >
                {active ? "→ " : "· "}{link.label}
              </Link>
            );
          })}
          <div className="mt-2 pt-3 border-t border-rule">
            <Link
              href="/quiz"
              onClick={() => setMobileOpen(false)}
              className="font-mono text-xs tracking-wider text-accent hover:text-ink transition-colors"
            >
              start the quiz →
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
