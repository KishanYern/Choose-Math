import type { Metadata } from "next";
import Link from "next/link";
import { roadmapSteps } from "@/data/roadmap";

export const metadata: Metadata = {
  title: "Mathematics Career Roadmap",
  description:
    "Step-by-step path from high school mathematics through undergraduate, graduate school, and into a mathematics career.",
};

export default function RoadmapPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-slate-950">
      {/* Header */}
      <div className="border-b border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/40">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
          <p className="text-indigo-600 dark:text-indigo-400 text-xs font-medium uppercase tracking-widest mb-3">Roadmap</p>
          <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-slate-100 mb-3">
            The Path to a Mathematics Career
          </h1>
          <p className="text-slate-600 dark:text-slate-400 text-lg max-w-2xl leading-relaxed">
            From high school geometry to a career at the frontier of quantitative work —
            every step laid out clearly, with honest advice at each stage.
          </p>
        </div>
      </div>

      {/* Steps */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-6 top-0 bottom-0 w-px bg-slate-200 dark:bg-slate-800 hidden sm:block" />

          <div className="space-y-10">
            {roadmapSteps.map((step, index) => (
              <div key={step.id} className="relative sm:pl-16">
                {/* Step icon circle */}
                <div className="hidden sm:flex absolute left-0 w-12 h-12 rounded-full border-2 border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 items-center justify-center">
                  <span className="text-lg math-symbol text-indigo-500 dark:text-indigo-400 font-light">{step.icon}</span>
                </div>

                {/* Step card */}
                <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/50 overflow-hidden">
                  {/* Card header */}
                  <div className="px-6 pt-6 pb-4 border-b border-slate-100 dark:border-slate-800">
                    <div className="flex items-start justify-between gap-4 flex-wrap">
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-indigo-500/15 text-indigo-600 dark:text-indigo-400 border border-indigo-500/20">
                            Step {step.id}
                          </span>
                          <span className="text-xs text-slate-500">{step.phase}</span>
                        </div>
                        <h2 className="text-xl font-semibold text-slate-900 dark:text-slate-100">{step.title}</h2>
                      </div>
                      <span className="text-xs font-medium px-3 py-1 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 shrink-0">
                        {step.duration}
                      </span>
                    </div>
                    <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mt-3">{step.description}</p>
                  </div>

                  {/* Actions */}
                  <div className="px-6 py-5">
                    <h3 className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-3">
                      Action Items
                    </h3>
                    <ul className="space-y-2.5">
                      {step.actions.map((action, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <span className="shrink-0 w-5 h-5 rounded-md bg-indigo-500/15 border border-indigo-500/20 text-indigo-600 dark:text-indigo-400 text-xs flex items-center justify-center font-medium mt-0.5">
                            ✓
                          </span>
                          <span className="text-slate-700 dark:text-slate-300 text-sm leading-relaxed">{action.text}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Tip */}
                  <div className="mx-6 mb-6 px-4 py-3 rounded-lg bg-amber-50 dark:bg-amber-500/5 border border-amber-200 dark:border-amber-500/15">
                    <p className="text-xs font-semibold text-amber-600 dark:text-amber-400/80 mb-1">Pro Tip</p>
                    <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">{step.tip}</p>
                  </div>
                </div>

                {/* Connector (not last) */}
                {index < roadmapSteps.length - 1 && (
                  <div className="hidden sm:flex absolute left-6 -translate-x-1/2 mt-2 h-10 w-0 border-l border-dashed border-slate-300 dark:border-slate-700" style={{ top: "100%", marginTop: "0.5rem" }} />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-16 pt-10 border-t border-slate-200 dark:border-slate-800 text-center">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-3">Ready to get started?</h2>
          <p className="text-slate-600 dark:text-slate-400 mb-6 max-w-md mx-auto">
            Use the checklist to track exactly where you are in this journey.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/checklist"
              className="px-6 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-medium text-sm transition-colors"
            >
              Open the checklist
            </Link>
            <Link
              href="/quiz"
              className="px-6 py-3 rounded-xl border border-slate-300 dark:border-slate-700 hover:border-slate-400 dark:hover:border-slate-500 text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white font-medium text-sm transition-colors"
            >
              Take the career quiz
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
