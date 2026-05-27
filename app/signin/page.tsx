"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { useAuth } from "@/components/AuthProvider";

function GoogleIcon() {
  return (
    <svg className="w-4 h-4 shrink-0" viewBox="0 0 24 24" fill="currentColor">
      <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
      <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
      <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
      <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
    </svg>
  );
}

const benefits = [
  {
    symbol: "∑",
    gradient: "from-[var(--aurora-1)] to-[var(--aurora-2)]",
    title: "Quiz history",
    description: "Save your career match results and revisit them any time.",
  },
  {
    symbol: "✓",
    gradient: "from-[var(--aurora-3)] to-[var(--aurora-2)]",
    title: "Checklist progress",
    description: "Your college-prep steps stay synced across all your devices.",
  },
  {
    symbol: "∂",
    gradient: "from-[var(--aurora-5)] to-[var(--aurora-4)]",
    title: "Your profile",
    description: "Everything you've explored, collected in one place.",
  },
];

export default function SignInPage() {
  const { user, loading, signIn } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!loading && user) {
      router.replace("/profile");
    }
  }, [user, loading, router]);

  return (
    <div className="min-h-[calc(100vh-4rem)] flex items-center justify-center px-4 py-16">
      {/* Subtle dot-grid background */}
      <div className="pointer-events-none absolute inset-0 dot-grid opacity-40" aria-hidden />

      <div className="relative w-full max-w-md">
        {/* Washi-tape accent */}
        <div
          aria-hidden
          className="absolute -top-3 left-8 h-5 w-24 aurora-bg opacity-70 rotate-[-1.5deg] rounded-sm"
          style={{ filter: "blur(0px)" }}
        />

        <div className="bg-paper border border-rule dropshadow-paper rounded-2xl overflow-hidden">
          {/* Aurora stripe */}
          <div className="h-1 w-full aurora-bg" />

          <div className="p-8 sm:p-10">
            {/* Header */}
            <p className="font-mono text-[11px] text-ink-faint tracking-widest uppercase mb-3">
              account
            </p>
            <h1 className="font-display text-3xl sm:text-4xl text-ink font-normal leading-snug mb-2">
              A few perks
              <br />
              <span className="aurora-text italic">for the curious.</span>
            </h1>
            <p className="font-sans text-sm text-ink-muted mt-3 mb-8 leading-relaxed">
              Most of Choose Math works without an account — the quiz, careers,
              roadmap, all of it. Sign in only if you&apos;d like these extras:
            </p>

            {/* Benefits list */}
            <ul className="space-y-4 mb-8">
              {benefits.map((b) => (
                <li key={b.title} className="flex items-start gap-4">
                  <span
                    className={`mt-0.5 inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br ${b.gradient} font-mono text-sm text-white font-medium`}
                  >
                    {b.symbol}
                  </span>
                  <div>
                    <p className="font-sans text-sm font-medium text-ink leading-tight">
                      {b.title}
                    </p>
                    <p className="font-sans text-xs text-ink-muted mt-0.5 leading-relaxed">
                      {b.description}
                    </p>
                  </div>
                </li>
              ))}
            </ul>

            {/* Divider */}
            <div className="border-t border-rule mb-7" />

            {/* Sign-in button */}
            <button
              onClick={signIn}
              className="btn-aurora w-full justify-center gap-2.5 text-sm py-3"
            >
              <GoogleIcon />
              continue with google
            </button>

            {/* Reassurance */}
            <p className="font-mono text-[10px] text-ink-faint text-center tracking-wider mt-4">
              no password · no newsletter · just google
            </p>

            {/* Skip */}
            <div className="mt-6 text-center">
              <Link
                href="/"
                className="font-mono text-[11px] text-ink-faint hover:text-ink tracking-wider transition-colors"
              >
                continue without signing in →
              </Link>
            </div>
          </div>
        </div>

        {/* Margin note */}
        <div
          className="hidden sm:block absolute -right-4 top-1/3 translate-x-full w-36 border border-rule bg-paper-2 px-3 py-2 rotate-[1.5deg] dropshadow-paper"
          aria-hidden
        >
          <p className="font-mono text-[9px] text-ink-faint leading-relaxed tracking-wide">
            free · always · no pressure
          </p>
        </div>
      </div>
    </div>
  );
}
