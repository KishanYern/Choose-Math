"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useAuth } from "@/components/AuthProvider";
import { AuthGate } from "@/components/AuthGate";
import { listMyQuizResults, type QuizHistoryEntry } from "@/lib/firebase/quiz";

const resultTypeLabel: Record<string, string> = {
  "pure-math": "Pure Mathematics",
  "applied-math": "Applied Mathematics",
  "data-science": "Data Science",
  actuarial: "Actuarial Science",
};

const resultTypeSymbol: Record<string, string> = {
  "pure-math": "∂",
  "applied-math": "∫",
  "data-science": "λ",
  actuarial: "∑",
};

function QuizHistoryList() {
  const [results, setResults] = useState<QuizHistoryEntry[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    listMyQuizResults()
      .then(setResults)
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return (
      <div className="py-8 text-center">
        <span className="font-mono text-xs text-ink-faint tracking-wider animate-pulse">loading…</span>
      </div>
    );
  }

  if (results.length === 0) {
    return (
      <div className="border border-dashed border-rule p-8 text-center">
        <p className="font-display italic text-ink-muted">No quiz results yet.</p>
        <p className="font-mono text-[11px] text-ink-faint mt-2">
          <Link href="/quiz" className="hover:text-ink transition-colors">Take the career quiz →</Link>
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-3">
      {results.map((entry) => (
        <div key={entry.id} className="bg-paper-2 border border-rule p-5 flex items-center gap-5">
          <span className="font-mono text-2xl text-ink-faint font-light w-8 shrink-0 text-center">
            {resultTypeSymbol[entry.resultType] ?? "∑"}
          </span>
          <div className="flex-1 min-w-0">
            <p className="font-display text-base text-ink">{entry.resultTitle}</p>
            <p className="font-mono text-[11px] text-ink-faint tracking-wider mt-0.5">
              {resultTypeLabel[entry.resultType]} · {entry.level} level
            </p>
          </div>
          <span className="font-mono text-[11px] text-ink-faint shrink-0">
            {entry.scoredAt.toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })}
          </span>
        </div>
      ))}
    </div>
  );
}

function ProfileContent() {
  const { user, signOut } = useAuth();

  return (
    <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-14 space-y-12">
      {/* Identity */}
      <div className="flex items-start gap-5">
        <div className="w-12 h-12 bg-paper-2 border border-rule flex items-center justify-center font-mono text-sm text-ink-muted shrink-0">
          {user?.displayName?.slice(0, 2).toUpperCase() ?? "??"}
        </div>
        <div className="flex-1 min-w-0">
          <h1 className="font-display text-2xl text-ink font-normal">{user?.displayName}</h1>
          <p className="font-mono text-xs text-ink-faint tracking-wider mt-1">{user?.email}</p>
        </div>
        <button
          onClick={signOut}
          className="font-mono text-[11px] text-ink-faint hover:text-ink tracking-wider transition-colors shrink-0"
        >
          sign out
        </button>
      </div>

      {/* Quiz history */}
      <section>
        <div className="flex items-baseline justify-between mb-6 border-b border-rule pb-3">
          <h2 className="font-display text-lg text-ink font-normal">Quiz History</h2>
          <Link href="/quiz" className="font-mono text-[11px] text-ink-faint hover:text-ink tracking-wider transition-colors">
            retake →
          </Link>
        </div>
        <QuizHistoryList />
      </section>
    </div>
  );
}

export default function ProfilePage() {
  return (
    <div>
      <div className="border-b border-rule bg-paper-2">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <p className="font-mono text-xs text-ink-faint tracking-widest mb-2 uppercase">account</p>
          <h1 className="font-display text-4xl text-ink font-normal">Your Profile</h1>
        </div>
      </div>

      <AuthGate prompt="Sign in with Google to view your profile and quiz history.">
        <ProfileContent />
      </AuthGate>
    </div>
  );
}
