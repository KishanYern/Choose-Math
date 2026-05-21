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
    <div>
      {/* Header */}
      <div className="border-b border-rule bg-paper-2">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
          <p className="font-mono text-xs text-ink-faint tracking-widest mb-4 uppercase">roadmap</p>
          <h1 className="font-display text-4xl sm:text-5xl text-ink font-normal mb-4 leading-snug">
            The Path to a Mathematics Career
          </h1>
          <p className="text-ink-muted text-lg max-w-2xl leading-relaxed">
            From high school geometry to a career at the frontier of quantitative work —
            every step laid out clearly, with honest advice at each stage.
          </p>
        </div>
      </div>

      {/* Steps */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="relative">
          {/* Vertical ink rule */}
          <div className="absolute left-[22px] top-0 bottom-0 w-px bg-rule hidden sm:block" />

          <div className="space-y-0">
            {roadmapSteps.map((step, index) => (
              <div key={step.id} className="relative sm:pl-16 border-b border-rule last:border-b-0">
                {/* Step circle */}
                <div className="hidden sm:flex absolute left-0 w-11 h-11 border border-rule bg-paper items-center justify-center">
                  <span className="font-mono text-xs text-ink-faint">{String(step.id).padStart(2, "0")}</span>
                </div>

                {/* Step content */}
                <div className="py-10">
                  {/* Phase + duration */}
                  <div className="flex flex-wrap items-baseline gap-3 mb-3">
                    <span className="font-mono text-[10px] tracking-widest text-ink-faint uppercase">{step.phase}</span>
                    <span className="font-mono text-[10px] text-rule">·</span>
                    <span className="font-mono text-[10px] tracking-wider text-ink-faint">{step.duration}</span>
                  </div>

                  <h2 className="font-display text-xl text-ink font-normal mb-3 leading-snug">{step.title}</h2>
                  <p className="text-ink-muted text-sm leading-relaxed mb-6">{step.description}</p>

                  {/* Actions */}
                  <div className="mb-5">
                    <p className="font-mono text-[10px] text-ink-faint tracking-widest uppercase mb-3">action items</p>
                    <ul className="space-y-2">
                      {step.actions.map((action, i) => (
                        <li key={i} className="flex items-start gap-3 text-sm text-ink-muted">
                          <span className="font-mono text-ink-faint shrink-0 mt-0.5">·</span>
                          {action.text}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Tip */}
                  <div className="border-l border-marker pl-4">
                    <p className="font-mono text-[10px] text-marker tracking-widest uppercase mb-1">note</p>
                    <p className="text-ink-muted text-sm leading-relaxed">{step.tip}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-12 pt-10 border-t border-rule text-center">
          <h2 className="font-display text-2xl text-ink font-normal mb-6 leading-snug">
            Ready to get started?
          </h2>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/checklist"
              className="font-mono text-xs tracking-wider px-6 py-3 bg-accent text-paper hover:bg-ink transition-colors"
            >
              open the checklist →
            </Link>
            <Link
              href="/quiz"
              className="font-mono text-xs tracking-wider px-6 py-3 border border-rule text-ink-muted hover:border-ink-faint hover:text-ink transition-colors"
            >
              take the career quiz
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
