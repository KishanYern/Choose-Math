import type { Metadata } from "next";
import { programs } from "@/data/programs";
import { ProgramsFilter } from "@/components/ProgramsFilter";
import { UniversitySearch } from "@/components/UniversitySearch";

export const metadata: Metadata = {
  title: "Find a University",
  description:
    "Search for universities across the United States by name, city, or state. Explore math programs and find the right place for your journey.",
};

export default function ProgramsPage() {
  return (
    <div>
      {/* Header */}
      <div className="border-b border-rule bg-paper-2">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
          <p className="font-mono text-xs text-ink-faint tracking-widest mb-4 uppercase">
            universities
          </p>
          <h1 className="font-display text-4xl sm:text-5xl text-ink font-normal mb-4 leading-snug">
            Find a University
          </h1>
          <p className="text-ink-muted text-lg max-w-2xl leading-relaxed">
            Search for universities by name or location &mdash; find the right
            place for your math journey.
          </p>
        </div>
      </div>

      {/* Live search */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <UniversitySearch />
      </div>

      {/* Featured programs */}
      <div className="border-t border-rule">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <h2 className="font-display text-xl text-ink font-normal mb-8 leading-snug">
            Featured Mathematics Programs
          </h2>
          <ProgramsFilter programs={programs} />
        </div>
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
                advice:
                  "Prioritize programs with strong research faculty in your specific area. The advisor relationship matters far more than rankings. Visit and talk to current PhD students.",
              },
              {
                title: "Heading to industry after BS/MS",
                advice:
                  "Look for programs with strong applied or statistics components, industry connections, and internship pipelines. Location near financial or tech hubs matters significantly.",
              },
              {
                title: "Keeping options open",
                advice:
                  "Choose a program with strong pure and applied offerings and take courses in both your first two years. The transition from pure to applied is much easier than the reverse.",
              },
            ].map((item) => (
              <div key={item.title} className="bg-paper-2 p-6">
                <h3 className="font-display text-base text-ink font-normal mb-2 leading-snug">
                  {item.title}
                </h3>
                <p className="text-ink-muted text-sm leading-relaxed">
                  {item.advice}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
