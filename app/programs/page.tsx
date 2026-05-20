import type { Metadata } from "next";
import { programs } from "@/data/programs";
import { ProgramsFilter } from "@/components/ProgramsFilter";

export const metadata: Metadata = {
  title: "Notable Mathematics Programs",
  description:
    "Explore notable national mathematics programs — from MIT and Princeton to UCLA and Carnegie Mellon — filtered by pure math, applied math, and statistics.",
};

export default function ProgramsPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-slate-950">
      {/* Header */}
      <div className="border-b border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
          <p className="text-indigo-600 dark:text-indigo-400 text-xs font-medium uppercase tracking-widest mb-3">Programs</p>
          <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-slate-100 mb-3">
            Notable Mathematics Programs
          </h1>
          <p className="text-slate-600 dark:text-slate-400 text-lg max-w-2xl leading-relaxed">
            A curated set of influential mathematics departments in the country — compare by focus area
            and find the right program for your goals.
          </p>

          {/* Focus legend */}
          <div className="flex flex-wrap gap-4 mt-6 text-xs">
            {[
              { label: "Pure Math", color: "bg-indigo-500/15 text-indigo-600 dark:text-indigo-400 border-indigo-500/20" },
              { label: "Applied Math", color: "bg-violet-500/15 text-violet-600 dark:text-violet-400 border-violet-500/20" },
              { label: "Statistics", color: "bg-cyan-500/15 text-cyan-600 dark:text-cyan-400 border-cyan-500/20" },
            ].map((item) => (
              <span key={item.label} className={`px-2.5 py-1 rounded-full border font-medium ${item.color}`}>
                {item.label}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Filterable programs */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <ProgramsFilter programs={programs} />
      </div>

      {/* Advice section */}
      <div className="border-t border-slate-200 dark:border-slate-800 bg-slate-50/80 dark:bg-slate-900/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <h2 className="text-xl font-semibold text-slate-900 dark:text-slate-100 mb-6">Choosing the Right Program</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {[
              {
                title: "If you want a PhD in pure mathematics",
                advice: "Prioritize programs with strong research faculty in your specific area of interest. The advisor relationship matters far more than rankings. Visit and talk to current PhD students.",
              },
              {
                title: "If you want a career in industry after a BS/MS",
                advice: "Look for programs with strong applied math or statistics components, industry connections, and internship pipelines. Location (proximity to financial or tech hubs) matters significantly.",
              },
              {
                title: "If you want flexibility to decide later",
                advice: "Choose a program with strong pure and applied offerings, and take courses in both during your first two years. The transition from pure to applied is much easier than the reverse.",
              },
            ].map((item) => (
              <div key={item.title} className="p-5 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/50">
                <h3 className="text-sm font-semibold text-slate-800 dark:text-slate-300 mb-2">{item.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{item.advice}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
