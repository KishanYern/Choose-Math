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
    <div>
      {/* Header */}
      <div className="border-b border-rule bg-paper-2">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
          <p className="font-mono text-xs text-ink-faint tracking-widest mb-4 uppercase">alumni</p>
          <h1 className="font-display text-4xl sm:text-5xl text-ink font-normal mb-4 leading-snug">
            Where They Are Now
          </h1>
          <p className="text-ink-muted text-lg max-w-2xl leading-relaxed">
            Real mathematicians, real careers, real advice. Hear from people who started where
            you are and built exceptional careers with a mathematics degree.
          </p>
        </div>
      </div>

      {/* Stories grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 items-start">
          {stories.map((story, i) => (
            <StoryCard key={story.id} story={story} index={i} />
          ))}
        </div>

        <div className="mt-10 border border-dashed border-rule p-6 text-center">
          <p className="font-display italic text-ink-muted text-base">More stories coming soon</p>
          <p className="font-mono text-[11px] text-ink-faint mt-2 tracking-wider max-w-md mx-auto">
            We&apos;ll be opening a contributor portal where math alumni can share their own journeys.
          </p>
        </div>
      </div>

      {/* Common threads */}
      <div className="border-t border-rule bg-paper-2">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <h2 className="font-display text-xl text-ink font-normal mb-8">Common Threads</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-rule">
            {[
              { symbol: "∂", title: "The proof skills transfer", desc: "Every person above cited proof-writing and rigorous reasoning as directly applicable to their work, even in industry." },
              { symbol: "∫", title: "Start coding early", desc: "Nearly every industry mathematician wishes they had started programming earlier. Python first, then specialize by role." },
              { symbol: "λ", title: "Internships are decisive", desc: "Practical experience during undergrad dramatically changed what each of them wanted from their career. Intern early." },
              { symbol: "∑", title: "The abstract pays off", desc: "Courses that felt purely theoretical — measure theory, abstract algebra — repeatedly showed up as career advantages." },
            ].map((item) => (
              <div key={item.title} className="bg-paper-2 p-6">
                <span className="font-mono text-xl text-ink-faint font-light block mb-3">{item.symbol}</span>
                <h3 className="font-display text-base text-ink font-normal mb-2">{item.title}</h3>
                <p className="text-ink-muted text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="border-t border-rule py-16 text-center px-4">
        <p className="font-mono text-xs text-ink-faint tracking-widest mb-4 uppercase">find your path</p>
        <h2 className="font-display text-2xl text-ink font-normal mb-6 leading-snug">
          Which track is right for you?
        </h2>
        <Link
          href="/quiz"
          className="inline-block font-mono text-xs tracking-wider px-7 py-3 bg-accent text-paper hover:bg-ink transition-colors"
        >
          take the career quiz →
        </Link>
      </div>
    </div>
  );
}
