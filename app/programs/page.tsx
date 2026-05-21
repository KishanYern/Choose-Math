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
    <div>
      {/* Header */}
      <div className="border-b border-rule bg-paper-2">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
          <p className="font-mono text-xs text-ink-faint tracking-widest mb-4 uppercase">programs</p>
          <h1 className="font-display text-4xl sm:text-5xl text-ink font-normal mb-4 leading-snug">
            Notable Mathematics Programs
          </h1>
          <p className="text-ink-muted text-lg max-w-2xl leading-relaxed">
            A curated directory of influential mathematics departments. Compare by focus area
            and find the right program for your goals.
          </p>
        </div>
      </div>

      {/* Filterable programs */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <ProgramsFilter programs={programs} />
      </div>

      {/* Advice */}
      <div className="border-t border-rule bg-paper-2">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <h2 className="font-display text-xl text-ink font-normal mb-8 leading-snug">
            Choosing the Right Program
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-px bg-rule">
            {[
              {
                title: "Aiming for a PhD in pure math",
                advice: "Prioritize programs with strong research faculty in your specific area. The advisor relationship matters far more than rankings. Visit and talk to current PhD students.",
              },
              {
                title: "Heading to industry after BS/MS",
                advice: "Look for programs with strong applied or statistics components, industry connections, and internship pipelines. Location near financial or tech hubs matters significantly.",
              },
              {
                title: "Keeping options open",
                advice: "Choose a program with strong pure and applied offerings and take courses in both your first two years. The transition from pure to applied is much easier than the reverse.",
              },
            ].map((item) => (
              <div key={item.title} className="bg-paper-2 p-6">
                <h3 className="font-display text-base text-ink font-normal mb-2 leading-snug">{item.title}</h3>
                <p className="text-ink-muted text-sm leading-relaxed">{item.advice}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
