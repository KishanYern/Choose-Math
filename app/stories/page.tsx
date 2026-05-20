import type { Metadata } from "next";
import Link from "next/link";
import { stories } from "@/data/stories";
import { StoryCard } from "@/components/StoryCard";

export const metadata: Metadata = {
  title: "Alumni Stories — Mathematics Careers",
  description:
    "Hear from mathematicians working at top hedge funds, AI labs, insurance firms, and universities about how their math degree launched their career.",
};

export default function StoriesPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-slate-950">
      {/* Header */}
      <div className="border-b border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
          <p className="text-indigo-600 dark:text-indigo-400 text-xs font-medium uppercase tracking-widest mb-3">Stories</p>
          <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-slate-100 mb-3">
            Where They Are Now
          </h1>
          <p className="text-slate-600 dark:text-slate-400 text-lg max-w-2xl leading-relaxed">
            Real mathematicians, real careers, real advice. Hear from people who started where you are
            and built exceptional careers with a mathematics degree.
          </p>
        </div>
      </div>

      {/* Stories grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {stories.map((story) => (
            <StoryCard key={story.id} story={story} />
          ))}
        </div>

        {/* Phase 2 note */}
        <div className="mt-12 p-6 rounded-2xl border border-dashed border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-900/30 text-center">
          <p className="text-slate-500 text-sm mb-1 font-medium">More stories coming soon</p>
          <p className="text-slate-400 dark:text-slate-600 text-xs max-w-md mx-auto">
            We&apos;ll be opening a contributor portal where math alumni can share their own journeys.
            For now, these profiles represent common paths across career tracks.
          </p>
        </div>
      </div>

      {/* Common themes */}
      <div className="border-t border-slate-200 dark:border-slate-800 bg-slate-50/80 dark:bg-slate-900/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <h2 className="text-xl font-semibold text-slate-900 dark:text-slate-100 mb-6">Common Threads</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              {
                symbol: "∂",
                title: "The proof skills transfer",
                desc: "Every person above cited proof-writing and rigorous reasoning as directly applicable to their work, even in industry.",
              },
              {
                symbol: "∫",
                title: "Start coding early",
                desc: "Nearly every industry mathematician wishes they had started programming earlier. Python first, then specialize by role.",
              },
              {
                symbol: "λ",
                title: "Internships are decisive",
                desc: "Practical experience during undergrad dramatically changed what each of them wanted from their career. Intern early.",
              },
              {
                symbol: "∑",
                title: "The abstract pays off",
                desc: "Courses that felt purely theoretical — measure theory, abstract algebra — repeatedly showed up as career advantages.",
              },
            ].map((item) => (
              <div key={item.title} className="p-5 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/50">
                <span className="text-2xl math-symbol text-indigo-400/70 dark:text-indigo-400/50 font-light block mb-3">
                  {item.symbol}
                </span>
                <h3 className="text-slate-800 dark:text-slate-300 font-semibold text-sm mb-1.5">{item.title}</h3>
                <p className="text-slate-500 text-xs leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="border-t border-slate-200 dark:border-slate-800 py-16 text-center px-4">
        <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-3">
          Find your own path
        </h2>
        <p className="text-slate-600 dark:text-slate-400 mb-6 max-w-md mx-auto">
          Take the quiz to discover which career track fits your personality and goals.
        </p>
        <Link
          href="/quiz"
          className="inline-flex px-7 py-3.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-semibold transition-colors"
        >
          Take the Career Quiz
        </Link>
      </div>
    </div>
  );
}
