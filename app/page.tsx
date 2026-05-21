import Link from "next/link";
import { getFeaturedCareers } from "@/data/careers";
import { stories } from "@/data/stories";
import { CareerCard } from "@/components/CareerCard";
import { StoryCard } from "@/components/StoryCard";
import { FAQAccordion } from "@/components/FAQAccordion";

const stats = [
  {
    value: "$86K",
    label: "Median Annual Wage",
    sub: "Math degree holders, 2023",
    sourceLabel: "BLS",
    sourceUrl: "https://www.bls.gov/ooh/field-of-degree/mathematics/mathematics-field-of-degree.htm",
  },
  {
    value: "34%",
    label: "Data Scientist Growth",
    sub: "Projected 2024–34",
    sourceLabel: "BLS",
    sourceUrl: "https://www.bls.gov/ooh/math/data-scientists.htm",
  },
  {
    value: "22%",
    label: "Actuary Growth",
    sub: "Projected 2024–34",
    sourceLabel: "BLS",
    sourceUrl: "https://www.bls.gov/ooh/math/actuaries.htm",
  },
  {
    value: "20%",
    label: "CS Research Growth",
    sub: "Projected 2024–34",
    sourceLabel: "BLS",
    sourceUrl: "https://www.bls.gov/ooh/computer-and-information-technology/computer-and-information-research-scientists.htm",
  },
];

export default function HomePage() {
  const featuredCareers = getFeaturedCareers();
  const featuredStories = stories.slice(0, 3);

  return (
    <div>
      {/* ── Hero ─────────────────────────────────────────────────────────── */}
      <section className="border-b border-rule">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_280px] gap-12 items-start">
            {/* Main content */}
            <div>
              <p className="font-mono text-xs text-ink-faint tracking-widest mb-6 uppercase">
                No. 01 — a field guide
              </p>

              <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl text-ink font-normal leading-[1.05] mb-6">
                A small field guide
                <br />
                <span className="italic">to careers in</span>
                <br />
                mathematics.
              </h1>

              {/* Equation accent */}
              <p className="font-mono text-sm text-ink-faint mb-8 tracking-wide">
                ƒ(career) = passion · rigor
              </p>

              <div className="flex flex-col sm:flex-row items-start gap-3">
                <Link
                  href="/quiz"
                  className="font-mono text-xs tracking-wider px-7 py-3 bg-accent text-paper hover:bg-ink transition-colors"
                >
                  start the quiz →
                </Link>
                <Link
                  href="/careers"
                  className="font-mono text-xs tracking-wider px-7 py-3 border border-rule text-ink-muted hover:border-ink-faint hover:text-ink transition-colors"
                >
                  browse careers
                </Link>
              </div>
            </div>

            {/* Margin note */}
            <div className="hidden lg:block pt-4">
              <div className="border border-rule bg-paper-2 p-5">
                <p className="sidenote mb-3 text-ink-faint uppercase tracking-widest">note</p>
                <p className="font-display italic text-ink text-base leading-relaxed">
                  for the curious, the precise, the pattern-seekers.
                </p>
                <div className="border-t border-rule mt-4 pt-4">
                  <p className="sidenote text-ink-faint">
                    takes about 3 minutes · no account needed
                  </p>
                </div>
              </div>

              <div className="mt-6 font-mono text-4xl font-light text-rule text-center tracking-widest select-none" aria-hidden>
                ∑ ∫ ∂
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Stats ────────────────────────────────────────────────────────── */}
      <section className="border-b border-rule bg-paper-2">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="grid grid-cols-2 md:grid-cols-4">
            {stats.map((stat, i) => (
              <div key={stat.label} className={`text-center px-4 py-2 md:py-0 ${i % 2 === 0 ? "border-r border-rule" : ""} ${i >= 2 ? "border-t md:border-t-0 border-rule" : ""} md:border-r md:last:border-r-0 md:px-6`}>
                <p className="font-display text-3xl md:text-4xl text-ink font-normal mb-1">
                  {stat.value}
                </p>
                <div className="h-px w-8 bg-rule mx-auto mb-2" />
                <p className="text-ink-muted text-xs font-medium">{stat.label}</p>
                <p className="font-mono text-[10px] text-ink-faint mt-0.5">{stat.sub}</p>
                <a
                  href={stat.sourceUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-mono text-[10px] text-accent hover:text-ink transition-colors mt-1 inline-block tracking-wider"
                >
                  source: {stat.sourceLabel} ↗
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── What is math? ─────────────────────────────────────────────────── */}
      <section className="border-b border-rule">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <p className="font-mono text-xs text-ink-faint tracking-widest mb-6 uppercase">
                No. 02 — more than equations
              </p>
              <h2 className="font-display text-3xl sm:text-4xl text-ink font-normal mb-6 leading-snug">
                Mathematicians are the problem-solvers modern society depends on.
              </h2>
              <p className="text-ink-muted leading-relaxed mb-5">
                Designing the algorithms that secure your data, pricing the derivatives that manage
                financial risk, building the models that power AI, proving the theorems that become
                tomorrow&apos;s technology.
              </p>
              <p className="text-ink-muted leading-relaxed mb-8">
                A mathematics degree is unique in how transferable it is. The abstract reasoning,
                rigorous proof-writing, and quantitative modeling skills it builds are the exact
                toolkit that every data-driven industry is desperately seeking.
              </p>
              <blockquote className="border-l border-accent pl-5">
                <p className="font-display italic text-ink text-base leading-relaxed">
                  &ldquo;Pure mathematics is, in its way, the poetry of logical ideas.&rdquo;
                </p>
                <footer className="font-mono text-[11px] text-ink-faint mt-2 tracking-wider">— Albert Einstein</footer>
              </blockquote>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-rule">
              {[
                { symbol: "∂", title: "Deep Rigor", desc: "Train your brain to reason precisely about hard problems — the rarest cognitive skill in any workforce." },
                { symbol: "∇", title: "Endless Applications", desc: "Finance, AI, cryptography, physics, engineering, medicine — math underlies every quantitative field." },
                { symbol: "∞", title: "Career Optionality", desc: "Switch between academia and industry freely. Math expertise translates across sectors." },
                { symbol: "Σ", title: "Strong Compensation", desc: "Several math-heavy roles have high median pay and strong projected growth in public labor data." },
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
      </section>

      {/* ── Featured Careers ──────────────────────────────────────────────── */}
      <section className="border-b border-rule">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="flex items-baseline justify-between mb-10 gap-4">
            <div>
              <p className="font-mono text-xs text-ink-faint tracking-widest mb-3 uppercase">No. 03 — career paths</p>
              <h2 className="font-display text-3xl sm:text-4xl text-ink font-normal leading-snug">
                Featured Career Paths
              </h2>
            </div>
            <Link
              href="/careers"
              className="font-mono text-xs text-ink-faint hover:text-ink transition-colors tracking-wider shrink-0"
            >
              all 8 paths →
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-rule">
            {featuredCareers.map((career, i) => (
              <CareerCard key={career.id} career={career} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* ── Quiz CTA ──────────────────────────────────────────────────────── */}
      <section className="border-b border-rule bg-paper-2">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 py-20 text-center">
          <p className="font-mono text-xs text-ink-faint tracking-widest mb-6 uppercase">No. 04 — find your path</p>
          <h2 className="font-display text-3xl sm:text-4xl text-ink font-normal mb-4 leading-snug">
            Not sure which path is right?
          </h2>
          <p className="text-ink-muted leading-relaxed mb-8 max-w-lg mx-auto">
            Answer 8 honest questions about your interests, working style, and goals. We&apos;ll
            identify whether you&apos;re a Pure Mathematician, Applied Mathematician, Data Scientist,
            or Actuary at heart.
          </p>
          <Link
            href="/quiz"
            className="inline-block font-mono text-xs tracking-wider px-8 py-3.5 bg-accent text-paper hover:bg-ink transition-colors mb-4"
          >
            take the career quiz →
          </Link>
          <p className="font-mono text-[11px] text-ink-faint tracking-wider">8 questions · ~2 minutes · no account needed</p>
        </div>
      </section>

      {/* ── Alumni Stories ────────────────────────────────────────────────── */}
      <section className="border-b border-rule">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="flex items-baseline justify-between mb-10 gap-4">
            <div>
              <p className="font-mono text-xs text-ink-faint tracking-widest mb-3 uppercase">No. 05 — alumni</p>
              <h2 className="font-display text-3xl sm:text-4xl text-ink font-normal leading-snug">
                Where They Are Now
              </h2>
            </div>
            <Link
              href="/stories"
              className="font-mono text-xs text-ink-faint hover:text-ink transition-colors tracking-wider shrink-0"
            >
              all stories →
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-rule">
            {featuredStories.map((story) => (
              <StoryCard key={story.id} story={story} />
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ───────────────────────────────────────────────────────────── */}
      <section className="border-b border-rule bg-paper-2">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 py-20">
          <p className="font-mono text-xs text-ink-faint tracking-widest mb-4 uppercase">No. 06 — questions</p>
          <h2 className="font-display text-3xl sm:text-4xl text-ink font-normal mb-10 leading-snug">
            Frequently Asked
          </h2>
          <FAQAccordion />
        </div>
      </section>

      {/* ── Final CTA ─────────────────────────────────────────────────────── */}
      <section className="py-20 px-4 sm:px-6 text-center">
        <p className="font-mono text-xs text-ink-faint tracking-widest mb-6 uppercase">ready to begin?</p>
        <h2 className="font-display text-3xl sm:text-4xl text-ink font-normal mb-8 leading-snug">
          Start your mathematics journey.
        </h2>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link
            href="/quiz"
            className="font-mono text-xs tracking-wider px-7 py-3 bg-accent text-paper hover:bg-ink transition-colors"
          >
            take the quiz →
          </Link>
          <Link
            href="/programs"
            className="font-mono text-xs tracking-wider px-7 py-3 border border-rule text-ink-muted hover:border-ink-faint hover:text-ink transition-colors"
          >
            explore programs
          </Link>
        </div>
      </section>
    </div>
  );
}
