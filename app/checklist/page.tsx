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
    <div className="min-h-screen bg-slate-950">
      {/* Header */}
      <div className="border-b border-slate-800 bg-slate-900/40">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
          <p className="text-indigo-400 text-xs font-medium uppercase tracking-widest mb-3">Checklist</p>
          <h1 className="text-3xl sm:text-4xl font-bold text-slate-100 mb-3">
            Are You on Track?
          </h1>
          <p className="text-slate-400 text-lg max-w-2xl leading-relaxed">
            Use this checklist to track your mathematical skills and course progress.
            Your progress saves automatically in this browser.
          </p>
          <div className="flex flex-wrap items-center gap-4 mt-5 text-xs text-slate-600">
            <span className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-indigo-500" />
              Progress auto-saved in browser
            </span>
            <span className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-violet-500" />
              No account required
            </span>
          </div>
        </div>
      </div>

      {/* Checklist */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <ChecklistTracker />

        {/* Links */}
        <div className="mt-12 pt-8 border-t border-slate-800">
          <p className="text-slate-500 text-sm mb-4">
            Use the roadmap to understand the timeline behind these skills.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <Link
              href="/roadmap"
              className="px-5 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-sm font-medium text-center transition-colors"
            >
              View the roadmap
            </Link>
            <Link
              href="/resources"
              className="px-5 py-2.5 rounded-xl border border-slate-700 hover:border-slate-500 text-slate-300 hover:text-white text-sm font-medium text-center transition-colors"
            >
              Find learning resources
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
