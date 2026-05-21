import type { Metadata } from "next";
import Link from "next/link";
import { ChecklistTracker } from "@/components/ChecklistTracker";

export const metadata: Metadata = {
  title: "Mathematics Skills Checklist",
  description:
    "Track your mathematical skills and course progress — from proof fundamentals and calculus to programming and career preparation.",
};

export default function ChecklistPage() {
  return (
    <div>
      {/* Header */}
      <div className="border-b border-rule bg-paper-2">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
          <p className="font-mono text-xs text-ink-faint tracking-widest mb-4 uppercase">checklist</p>
          <h1 className="font-display text-4xl sm:text-5xl text-ink font-normal mb-4 leading-snug">
            Are You on Track?
          </h1>
          <p className="text-ink-muted text-lg max-w-2xl leading-relaxed">
            Track your mathematical skills and course progress. Your progress saves
            automatically in this browser.
          </p>
          <div className="flex flex-wrap items-center gap-4 mt-5 font-mono text-[11px] text-ink-faint tracking-wider">
            <span>· saves in your browser</span>
            <span>· no account required</span>
          </div>
        </div>
      </div>

      {/* Checklist workbook */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <ChecklistTracker />

        {/* Links */}
        <div className="mt-12 pt-8 border-t border-rule">
          <p className="text-ink-muted text-sm mb-5">
            Use the roadmap to understand the timeline behind these skills.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <Link
              href="/roadmap"
              className="font-mono text-xs tracking-wider px-5 py-2.5 bg-accent text-paper text-center hover:bg-ink transition-colors"
            >
              view the roadmap →
            </Link>
            <Link
              href="/resources"
              className="font-mono text-xs tracking-wider px-5 py-2.5 border border-rule text-ink-muted text-center hover:border-ink-faint hover:text-ink transition-colors"
            >
              find learning resources
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
