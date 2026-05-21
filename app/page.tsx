import Link from "next/link";
import { getFeaturedCareers } from "@/data/careers";
import { stories } from "@/data/stories";
import { CareerCard } from "@/components/CareerCard";
import { StoryCard } from "@/components/StoryCard";
import { FAQAccordion } from "@/components/FAQAccordion";
import {
  InkUnderline,
  InkRule,
  InkAsterisk,
  InkDoodleDivider,
  InkArrowHand,
  InkPaperclip,
  InkScribbleCircle,
} from "@/components/Ink";

const stats = [
  {
    value: "$86K",
    label: "Median Annual Wage",
    sub: "Math degree holders, 2023",
    sourceLabel: "BLS",
    sourceUrl: "https://www.bls.gov/ooh/field-of-degree/mathematics/mathematics-field-of-degree.htm",
    highlight: true,
  },
  {
    value: "34%",
    label: "Data Scientist Growth",
    sub: "Projected 2024–34",
    sourceLabel: "BLS",
    sourceUrl: "https://www.bls.gov/ooh/math/data-scientists.htm",
    highlight: false,
  },
  {
    value: "22%",
    label: "Actuary Growth",
    sub: "Projected 2024–34",
    sourceLabel: "BLS",
    sourceUrl: "https://www.bls.gov/ooh/math/actuaries.htm",
    highlight: false,
  },
  {
    value: "20%",
    label: "CS Research Growth",
    sub: "Projected 2024–34",
    sourceLabel: "BLS",
    sourceUrl: "https://www.bls.gov/ooh/computer-and-information-technology/computer-and-information-research-scientists.htm",
    highlight: false,
  },
];

const streakColors = ["bg-marker", "bg-accent", "bg-highlight", "bg-ink-faint"];

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
                <span className="italic">to </span>
                <span className="relative inline-block">
                  <span className="relative z-10 italic">careers in</span>
                  {/* Highlighter swipe */}
                  <span
                    className="absolute inset-x-0 bottom-1 h-[0.45em] bg-highlight opacity-50 -z-0 pointer-events-none"
                    aria-hidden="true"
                  />
                </span>
                <br />
                mathematics.
              </h1>

              {/* Equation accent with scribble circle */}
              <div className="relative inline-flex items-center gap-2 mb-8">
                <p className="font-mono text-sm text-ink-faint tracking-wide">
                  ƒ(career) = passion · rigor
                </p>
                <span className="absolute -top-3 -right-5 text-marker opacity-40 pointer-events-none">
                  <InkScribbleCircle size={52} />
                </span>
              </div>

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

            {/* Margin note — tilted, pinned */}
            <div className="hidden lg:block pt-4">
              <div className="relative tilt-right dropshadow-paper border border-rule bg-paper-2 p-5">
                <span className="absolute -top-1 left-4">
                  <InkPaperclip size={18} className="text-ink-faint opacity-50" />
                </span>
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

              {/* Doodle arrow + hand-annotation below the card */}
              <div className="mt-5 flex items-center gap-2 pl-2 text-ink-faint">
                <InkArrowHand className="w-10 h-7 text-ink-faint opacity-50" rotate={170} />
                <span className="font-display italic text-xs text-ink-faint opacity-70 select-none">
                  start here
                </span>
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
              <div
                key={stat.label}
                className={`text-center px-4 py-2 md:py-0 ${i % 2 === 0 ? "border-r border-rule" : ""} ${i >= 2 ? "border-t md:border-t-0 border-rule" : ""} md:border-r md:last:border-r-0 md:px-6`}
              >
                <p className={`font-display text-3xl md:text-4xl font-normal mb-1 ${stat.highlight ? "marker-highlight text-ink" : "text-ink"}`}>
                  {stat.value}
                </p>
                {/* Ink underline instead of plain rule */}
                <div className="ink-draw text-marker mx-auto mb-2 w-10">
                  <InkUnderline />
                </div>
                <p className="text-ink-muted text-xs font-medium">{stat.label}</p>
                <p className="font-mono text-[10px] text-ink-faint mt-0.5">{stat.sub}</p>
                {!stat.highlight && (
                  <span className="font-mono text-[10px] text-ink-faint mt-0.5 inline-block">↗</span>
                )}
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
                Mathematicians are the{" "}
                <span className="marker-highlight">problem-solvers</span>{" "}
                modern society depends on.
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

            {/* 4-cell grid — tilted notebook cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { symbol: "∂", title: "Deep Rigor", desc: "Train your brain to reason precisely about hard problems — the rarest cognitive skill in any workforce.", tilt: "tilt-left", streak: 0 },
                { symbol: "∇", title: "Endless Applications", desc: "Finance, AI, cryptography, physics, engineering, medicine — math underlies every quantitative field.", tilt: "tilt-right", streak: 1 },
                { symbol: "∞", title: "Career Optionality", desc: "Switch between academia and industry freely. Math expertise translates across sectors.", tilt: "tilt-right", streak: 2 },
                { symbol: "Σ", title: "Strong Compensation", desc: "Several math-heavy roles have high median pay and strong projected growth in public labor data.", tilt: "tilt-left", streak: 3 },
              ].map((item) => (
                <div key={item.title} className={`bg-paper-2 border border-rule dropshadow-paper overflow-hidden ${item.tilt}`}>
                  {/* Colored streak at top */}
                  <div className={`h-1 w-full ${streakColors[item.streak]} opacity-70`} />
                  <div className="p-6">
                    <span className="font-mono text-2xl text-ink-faint font-light block mb-3 transition-transform duration-200 hover:scale-125 cursor-default select-none">
                      {item.symbol}
                    </span>
                    <h3 className="font-display text-base text-ink font-normal mb-2">{item.title}</h3>
                    <p className="text-ink-muted text-sm leading-relaxed">{item.desc}</p>
                  </div>
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

          {/* Asymmetric grid: first card featured (spans 2 cols on md+) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-rule">
            {featuredCareers.map((career, i) => (
              <div key={career.id} className={i === 0 ? "md:col-span-2 lg:col-span-1" : ""}>
                <CareerCard career={career} index={i} featured={i === 0} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Quiz CTA ──────────────────────────────────────────────────────── */}
      <section className="border-b border-rule bg-paper-2 paper-grain">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 py-20 text-center">
          <p className="font-mono text-xs text-ink-faint tracking-widest mb-6 uppercase">No. 04 — find your path</p>
          <h2 className="font-display text-3xl sm:text-4xl text-ink font-normal mb-4 leading-snug">
            Not sure which path is{" "}
            <span className="marker-highlight">right</span>?
          </h2>
          <p className="text-ink-muted leading-relaxed mb-8 max-w-lg mx-auto">
            Answer 8 honest questions about your interests, working style, and goals. We&apos;ll
            identify whether you&apos;re a Pure Mathematician, Applied Mathematician, Data Scientist,
            or Actuary at heart.
          </p>
          <div className="relative inline-block">
            <Link
              href="/quiz"
              className="inline-block font-mono text-xs tracking-wider px-8 py-3.5 bg-accent text-paper hover:bg-ink transition-colors"
            >
              take the career quiz →
            </Link>
            {/* Doodle arrow pointing at the button */}
            <span className="absolute -right-12 -top-2 text-marker opacity-50 pointer-events-none hidden sm:block">
              <InkArrowHand className="w-10 h-8" rotate={20} />
            </span>
          </div>
          <p className="font-mono text-[11px] text-ink-faint tracking-wider mt-4">8 questions · ~2 minutes · no account needed</p>
        </div>
      </section>

      {/* ── Alumni Stories ────────────────────────────────────────────────── */}
      <section className="border-b border-rule">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="flex items-baseline justify-between mb-10 gap-4">
            <div>
              <p className="font-mono text-xs text-ink-faint tracking-widest mb-3 uppercase">No. 05 — alumni</p>
              <div className="flex items-center gap-3">
                <h2 className="font-display text-3xl sm:text-4xl text-ink font-normal leading-snug">
                  Where They Are Now
                </h2>
                <InkAsterisk size={18} className="text-marker opacity-60 shrink-0" />
              </div>
            </div>
            <Link
              href="/stories"
              className="font-mono text-xs text-ink-faint hover:text-ink transition-colors tracking-wider shrink-0"
            >
              all stories →
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 items-start">
            {featuredStories.map((story, i) => (
              <StoryCard key={story.id} story={story} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ───────────────────────────────────────────────────────────── */}
      <section className="border-b border-rule bg-paper-2">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 py-20">
          <div className="flex justify-center mb-6 text-ink-faint">
            <InkDoodleDivider className="w-36 text-ink-faint opacity-60" />
          </div>
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
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-10">
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
        {/* Sign-off doodle */}
        <div className="flex flex-col items-center gap-2">
          <InkRule className="w-24 text-rule opacity-60" />
          <p className="font-display italic text-ink-faint text-sm select-none" style={{ transform: "rotate(-2deg)" }}>
            fin.
          </p>
        </div>
      </section>
    </div>
  );
}
