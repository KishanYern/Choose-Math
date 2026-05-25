import Link from "next/link";
import { getFeaturedCareers } from "@/data/careers";
import { stories } from "@/data/stories";
import { CareerCard } from "@/components/CareerCard";
import { StoryCard } from "@/components/StoryCard";
import { FAQAccordion } from "@/components/FAQAccordion";
import { QuizEngine } from "@/components/QuizEngine";
import {
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
    gradient: "var(--grad-aurora)",
  },
  {
    value: "34%",
    label: "Data Scientist Growth",
    sub: "Projected 2024–34",
    sourceLabel: "BLS",
    sourceUrl: "https://www.bls.gov/ooh/math/data-scientists.htm",
    gradient: "var(--grad-cool)",
  },
  {
    value: "22%",
    label: "Actuary Growth",
    sub: "Projected 2024–34",
    sourceLabel: "BLS",
    sourceUrl: "https://www.bls.gov/ooh/math/actuaries.htm",
    gradient: "var(--grad-acid)",
  },
  {
    value: "20%",
    label: "CS Research Growth",
    sub: "Projected 2024–34",
    sourceLabel: "BLS",
    sourceUrl: "https://www.bls.gov/ooh/computer-and-information-technology/computer-and-information-research-scientists.htm",
    gradient: "var(--grad-warm)",
  },
];

const pillars = [
  {
    symbol: "∂",
    title: "Deep Rigor",
    desc: "Train your brain to reason precisely about hard problems — the rarest cognitive skill in any workforce.",
    gradient: "linear-gradient(135deg, var(--aurora-1), var(--aurora-2))",
  },
  {
    symbol: "∇",
    title: "Endless Applications",
    desc: "Finance, AI, cryptography, physics, engineering, medicine — math underlies every quantitative field.",
    gradient: "linear-gradient(135deg, var(--aurora-2), var(--aurora-3))",
  },
  {
    symbol: "∞",
    title: "Career Optionality",
    desc: "Switch between academia and industry freely. Math expertise translates across sectors.",
    gradient: "linear-gradient(135deg, var(--aurora-4), var(--aurora-5))",
  },
  {
    symbol: "Σ",
    title: "Strong Compensation",
    desc: "Several math-heavy roles have high median pay and strong projected growth in public labor data.",
    gradient: "linear-gradient(135deg, var(--aurora-5), var(--aurora-1))",
  },
];

export default function HomePage() {
  const featuredCareers = getFeaturedCareers();
  const featuredStories = stories.slice(0, 3);

  return (
    <div className="relative">
      {/* ── Hero ─────────────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden border-b border-rule/60">
        {/* Animated aurora mesh background */}
        <div className="aurora-mesh" aria-hidden>
          <span className="blob" />
          <span className="blob acid" />
        </div>
        {/* Subtle dot grid over the mesh */}
        <div
          className="absolute inset-0 dot-grid opacity-40 pointer-events-none"
          aria-hidden
        />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-12 items-start">
            <div>
              <p className="font-mono text-[11px] text-ink-muted tracking-[0.25em] mb-8 uppercase rise-in d1 inline-flex items-center gap-2">
                <span className="inline-block h-1.5 w-1.5 rounded-full aurora-bg" />
                No. 01 — a field guide
              </p>

              <h1 className="font-display text-[3.25rem] sm:text-7xl lg:text-[5.5rem] text-ink font-medium leading-[0.95] tracking-[-0.025em] mb-8">
                <span className="block rise-in d1">A field guide</span>
                <span className="block rise-in d2">
                  <span className="italic font-light text-ink-muted">to careers in</span>
                </span>
                <span className="block rise-in d3 relative">
                  <span className="aurora-text italic">mathematics.</span>
                  {/* Scribble circle overlay */}
                  <span
                    aria-hidden
                    className="absolute -top-4 -right-4 sm:-right-8 text-aurora-4/40 hidden sm:block"
                  >
                    <InkScribbleCircle size={88} />
                  </span>
                </span>
              </h1>

              <div className="relative inline-flex items-center gap-2 mb-10 rise-in d4">
                <p className="font-mono text-sm text-ink-muted tracking-wide">
                  ƒ(<span className="aurora-text-cool font-semibold">career</span>) ={" "}
                  <span className="aurora-text-warm font-semibold">passion</span> ·{" "}
                  <span className="aurora-text-acid font-semibold">rigor</span>
                </p>
              </div>

              <div className="flex flex-col sm:flex-row items-start gap-4 rise-in d5">
                <a href="#quiz" className="btn-aurora">
                  start the quiz <span aria-hidden>→</span>
                </a>
                <Link href="/careers" className="btn-ghost">
                  browse careers
                </Link>
              </div>

              {/* Trust strip */}
              <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-2 text-xs text-ink-muted font-mono tracking-wider rise-in d5">
                <span className="inline-flex items-center gap-1.5">
                  <span className="inline-block h-1 w-1 rounded-full bg-aurora-3" /> 3-min quiz
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <span className="inline-block h-1 w-1 rounded-full bg-aurora-2" /> no account needed
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <span className="inline-block h-1 w-1 rounded-full bg-aurora-4" /> BLS-sourced data
                </span>
              </div>
            </div>

            {/* Margin note — tilted, pinned, with gradient border */}
            <div className="hidden lg:block pt-4 rise-in d4">
              <div className="relative tilt-right dropshadow-paper border border-rule bg-paper-2/80 backdrop-blur-md p-6 rounded-2xl gradient-border">
                <span className="absolute -top-1 left-4">
                  <InkPaperclip size={18} className="text-ink-faint opacity-60" />
                </span>
                <p className="sidenote mb-3 text-ink-muted uppercase tracking-widest">
                  <span className="aurora-text-cool font-semibold">note</span>
                </p>
                <p className="font-display italic text-ink text-lg leading-relaxed">
                  for the curious, the precise, the pattern-seekers.
                </p>
                <div className="border-t border-rule mt-5 pt-4">
                  <p className="sidenote text-ink-muted">
                    takes about 3 minutes · no account needed
                  </p>
                </div>
              </div>

              <div className="mt-5 flex items-center gap-2 pl-2 text-ink-muted">
                <InkArrowHand className="w-10 h-7 text-aurora-1 opacity-70" rotate={170} />
                <span className="font-display italic text-sm text-ink-muted select-none">
                  start here
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Stats ────────────────────────────────────────────────────────── */}
      <section className="relative border-b border-rule/60 bg-paper-2/60">
        <div className="absolute inset-0 dot-grid opacity-30 pointer-events-none" aria-hidden />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-rule/60 rounded-2xl overflow-hidden border border-rule/60">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="bg-paper p-6 sm:p-8 text-center flex flex-col items-center"
              >
                <p
                  className="font-display text-4xl sm:text-5xl font-medium mb-2 tabular-nums leading-none"
                  style={{
                    background: stat.gradient,
                    backgroundSize: "200% 200%",
                    WebkitBackgroundClip: "text",
                    backgroundClip: "text",
                    color: "transparent",
                  }}
                >
                  {stat.value}
                </p>
                <div
                  aria-hidden
                  className="h-[2px] w-10 rounded-full mb-3"
                  style={{ background: stat.gradient }}
                />
                <p className="text-ink text-xs font-semibold uppercase tracking-wider">{stat.label}</p>
                <p className="font-mono text-[10px] text-ink-muted mt-1">{stat.sub}</p>
                <a
                  href={stat.sourceUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-mono text-[10px] text-ink-muted hover:text-ink transition-colors mt-2 tracking-wider"
                >
                  source: {stat.sourceLabel} ↗
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── What is math? ─────────────────────────────────────────────────── */}
      <section className="border-b border-rule/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <p className="font-mono text-[11px] text-ink-muted tracking-[0.25em] mb-6 uppercase inline-flex items-center gap-2">
                <span className="inline-block h-1.5 w-1.5 rounded-full bg-aurora-4" />
                No. 02 — more than equations
              </p>
              <h2 className="font-display text-4xl sm:text-5xl text-ink font-medium mb-6 leading-[1.05] tracking-tight">
                Mathematicians are the{" "}
                <span className="aurora-text-warm italic">problem-solvers</span>{" "}
                modern society depends on.
              </h2>
              <p className="text-ink-muted leading-relaxed mb-5 text-lg">
                Designing the algorithms that secure your data, pricing the derivatives that manage
                financial risk, building the models that power AI, proving the theorems that become
                tomorrow&apos;s technology.
              </p>
              <p className="text-ink-muted leading-relaxed mb-8 text-lg">
                A mathematics degree is unique in how transferable it is. The abstract reasoning,
                rigorous proof-writing, and quantitative modeling skills it builds are the exact
                toolkit that every data-driven industry is desperately seeking.
              </p>
              <blockquote className="relative pl-6">
                <span
                  aria-hidden
                  className="absolute left-0 top-1 bottom-1 w-[3px] rounded-full"
                  style={{ background: "var(--grad-aurora)" }}
                />
                <p className="font-display italic text-ink text-lg leading-relaxed">
                  &ldquo;Pure mathematics is, in its way, the poetry of logical ideas.&rdquo;
                </p>
                <footer className="font-mono text-[11px] text-ink-muted mt-2 tracking-wider">
                  — Albert Einstein
                </footer>
              </blockquote>
            </div>

            {/* 4-cell pillar grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {pillars.map((item, i) => (
                <div
                  key={item.title}
                  className={`relative bg-paper-2 border border-rule rounded-2xl overflow-hidden dropshadow-paper gradient-border ${
                    i % 2 === 0 ? "tilt-left" : "tilt-right"
                  }`}
                >
                  <div
                    aria-hidden
                    className="h-1 w-full"
                    style={{ background: item.gradient }}
                  />
                  <div className="p-6">
                    <span
                      className="font-display text-3xl block mb-3 leading-none transition-transform duration-200 hover:scale-125 cursor-default select-none"
                      style={{
                        background: item.gradient,
                        WebkitBackgroundClip: "text",
                        backgroundClip: "text",
                        color: "transparent",
                      }}
                    >
                      {item.symbol}
                    </span>
                    <h3 className="font-display text-lg text-ink font-medium mb-2 tracking-tight">
                      {item.title}
                    </h3>
                    <p className="text-ink-muted text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Featured Careers ──────────────────────────────────────────────── */}
      <section className="relative border-b border-rule/60 overflow-hidden">
        <div className="aurora-mesh opacity-50" aria-hidden>
          <span className="blob" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="flex items-end justify-between mb-12 gap-4 flex-wrap">
            <div>
              <p className="font-mono text-[11px] text-ink-muted tracking-[0.25em] mb-3 uppercase inline-flex items-center gap-2">
                <span className="inline-block h-1.5 w-1.5 rounded-full bg-aurora-2" />
                No. 03 — career paths
              </p>
              <h2 className="font-display text-4xl sm:text-5xl text-ink font-medium leading-[1.05] tracking-tight">
                Featured <span className="aurora-text-cool italic">paths</span>
              </h2>
            </div>
            <Link
              href="/careers"
              className="btn-ghost"
            >
              all 8 paths →
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredCareers.map((career, i) => (
              <div key={career.id} className={i === 0 ? "md:col-span-2 lg:col-span-1" : ""}>
                <CareerCard career={career} index={i} featured={i === 0} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Quiz ─────────────────────────────────────────────────────────── */}
      <section
        className="relative border-b border-rule/60 paper-grain overflow-hidden"
        id="quiz"
        style={{ background: "color-mix(in oklab, var(--aurora-1) 4%, var(--paper-2))" }}
      >
        <div className="aurora-mesh opacity-40" aria-hidden>
          <span className="blob acid" />
        </div>
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 py-24">
          <div className="mb-12 text-center">
            <p className="font-mono text-[11px] text-ink-muted tracking-[0.25em] mb-4 uppercase inline-flex items-center gap-2">
              <span className="inline-block h-1.5 w-1.5 rounded-full bg-aurora-5" />
              No. 04 — find your path
            </p>
            <h2 className="font-display text-4xl sm:text-5xl text-ink font-medium mb-4 leading-[1.05] tracking-tight">
              Not sure which path is{" "}
              <span className="aurora-text italic">right</span>?
            </h2>
            <p className="text-ink-muted leading-relaxed max-w-xl mx-auto text-lg">
              Answer a few honest questions and we&apos;ll identify whether you&apos;re a Pure
              Mathematician, Applied Mathematician, Data Scientist, or Actuary at heart.
            </p>
          </div>
          <QuizEngine />
        </div>
      </section>

      {/* ── Alumni Stories ────────────────────────────────────────────────── */}
      <section className="border-b border-rule/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="flex items-end justify-between mb-12 gap-4 flex-wrap">
            <div>
              <p className="font-mono text-[11px] text-ink-muted tracking-[0.25em] mb-3 uppercase inline-flex items-center gap-2">
                <span className="inline-block h-1.5 w-1.5 rounded-full bg-aurora-3" />
                No. 05 — alumni
              </p>
              <div className="flex items-center gap-3">
                <h2 className="font-display text-4xl sm:text-5xl text-ink font-medium leading-[1.05] tracking-tight">
                  Where they <span className="aurora-text-acid italic">are now</span>
                </h2>
                <InkAsterisk size={22} className="text-aurora-4 opacity-80 shrink-0" />
              </div>
            </div>
            <Link href="/stories" className="btn-ghost">
              all stories →
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-10 items-start pt-4">
            {featuredStories.map((story, i) => (
              <StoryCard key={story.id} story={story} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ───────────────────────────────────────────────────────────── */}
      <section className="border-b border-rule/60 bg-paper-2/60">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 py-24">
          <div className="flex justify-center mb-6 text-aurora-1">
            <InkDoodleDivider className="w-36 opacity-70" />
          </div>
          <p className="font-mono text-[11px] text-ink-muted tracking-[0.25em] mb-4 uppercase text-center inline-flex items-center gap-2 justify-center w-full">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-aurora-6" />
            No. 06 — questions
          </p>
          <h2 className="font-display text-4xl sm:text-5xl text-ink font-medium mb-12 leading-[1.05] tracking-tight text-center">
            Frequently <span className="aurora-text italic">asked</span>
          </h2>
          <FAQAccordion />
        </div>
      </section>

      {/* ── Final CTA ─────────────────────────────────────────────────────── */}
      <section className="relative py-28 px-4 sm:px-6 text-center overflow-hidden">
        <div className="aurora-mesh" aria-hidden>
          <span className="blob" />
          <span className="blob acid" />
        </div>
        <div className="relative">
          <p className="font-mono text-[11px] text-ink-muted tracking-[0.25em] mb-6 uppercase">
            ready to begin?
          </p>
          <h2 className="font-display text-5xl sm:text-6xl text-ink font-medium mb-10 leading-[1.05] tracking-tight">
            Start your <span className="aurora-text italic">mathematics</span> journey.
          </h2>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <a href="#quiz" className="btn-aurora">
              take the quiz <span aria-hidden>→</span>
            </a>
            <Link href="/programs" className="btn-ghost">
              explore programs
            </Link>
          </div>
          <div className="flex flex-col items-center gap-2 text-aurora-1">
            <InkRule className="w-24 opacity-50" />
            <p
              className="font-display italic text-ink-muted text-sm select-none"
              style={{ transform: "rotate(-2deg)" }}
            >
              fin.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
