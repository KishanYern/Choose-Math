"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { ThemeToggle } from "./ThemeToggle";
import { useAuth } from "./AuthProvider";

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
  const { user, signOut, loading } = useAuth();

  return (
    <header className="sticky top-0 z-50 border-b border-rule/60 backdrop-blur-xl bg-paper/70 supports-[backdrop-filter]:bg-paper/55">
      {/* Gradient hairline under nav */}
      <span aria-hidden className="pointer-events-none absolute inset-x-0 -bottom-px h-px aurora-bg opacity-70" />
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-2 group"
          onClick={() => setMobileOpen(false)}
        >
          <span
            aria-hidden
            className="relative inline-flex h-8 w-8 items-center justify-center rounded-xl aurora-bg shadow-[0_6px_18px_-6px_var(--aurora-1)]"
          >
            <span className="font-display italic text-white text-lg leading-none select-none">ƒ</span>
          </span>
          <span className="font-display text-ink text-lg font-medium tracking-tight">
            Choose<span className="aurora-text italic">Math</span>
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
                  <span className="absolute -bottom-1 left-0 right-0 block h-0.5 aurora-bg rounded-full" />
                )}
              </Link>
            );
          })}
        </div>

        {/* Right: auth + theme + hamburger */}
        <div className="flex items-center gap-3">
          {!loading && (
            user ? (
              <div className="hidden md:flex items-center gap-3">
                <Link
                  href="/profile"
                  className="font-mono text-[11px] text-ink-faint hover:text-ink tracking-wider transition-colors"
                >
                  {user.displayName?.split(" ")[0] ?? "profile"}
                </Link>
                <button
                  onClick={signOut}
                  className="font-mono text-[11px] text-ink-faint hover:text-ink tracking-wider transition-colors"
                >
                  sign out
                </button>
              </div>
            ) : (
              <Link
                href="/signin"
                className="hidden md:block font-mono text-[11px] text-ink-faint hover:text-ink tracking-wider transition-colors"
              >
                sign in
              </Link>
            )
          )}
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
        <div className="md:hidden border-t border-rule bg-paper/95 backdrop-blur-xl px-4 py-5 flex flex-col gap-3">
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
          <div className="mt-2 pt-3 border-t border-rule flex items-center justify-between">
            <Link
              href="/quiz"
              onClick={() => setMobileOpen(false)}
              className="btn-aurora self-start"
            >
              start the quiz →
            </Link>
            {!loading && !user && (
              <Link
                href="/signin"
                onClick={() => setMobileOpen(false)}
                className="font-mono text-[11px] text-ink-faint hover:text-ink tracking-wider transition-colors"
              >
                sign in
              </Link>
            )}
          </div>
        </div>
      )}
    </header>
  );
}
