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
    sourceLabel: "BLS Field of Degree: Mathematics",
    sourceUrl: "https://www.bls.gov/ooh/field-of-degree/mathematics/mathematics-field-of-degree.htm",
  },
  {
    value: "34%",
    label: "Data Scientist Growth",
    sub: "Projected 2024-34",
    sourceLabel: "BLS",
    sourceUrl: "https://www.bls.gov/ooh/math/data-scientists.htm",
  },
  {
    value: "22%",
    label: "Actuary Growth",
    sub: "Projected 2024-34",
    sourceLabel: "BLS",
    sourceUrl: "https://www.bls.gov/ooh/math/actuaries.htm",
  },
  {
    value: "20%",
    label: "Computer Research Growth",
    sub: "Projected 2024-34",
    sourceLabel: "BLS",
    sourceUrl: "https://www.bls.gov/ooh/computer-and-information-technology/computer-and-information-research-scientists.htm",
  },
];

const personas = [
  {
    icon: "📐",
    title: "High School Student",
    description: "Discover what math majors actually do, which colleges have the best programs, and whether a math degree is the right choice for you.",
    href: "/quiz",
    cta: "Take the quiz",
  },
  {
    icon: "∑",
    title: "Current Undergraduate",
    description: "Use the checklist to track your progress, explore career paths you can target, and find resources to get ahead of your peers.",
    href: "/checklist",
    cta: "Open checklist",
  },
  {
    icon: "→",
    title: "Career Changer",
    description: "See how mathematical thinking translates across industries and which roles value a quantitative background most highly.",
    href: "/careers",
    cta: "Explore careers",
  },
];

const floatingSymbols = [
  { symbol: "∫", top: "15%", left: "5%", size: "text-5xl", opacity: "opacity-[0.04]" },
  { symbol: "∑", top: "60%", left: "3%", size: "text-6xl", opacity: "opacity-[0.03]" },
  { symbol: "∂", top: "25%", right: "6%", size: "text-5xl", opacity: "opacity-[0.04]" },
  { symbol: "∇", top: "70%", right: "4%", size: "text-4xl", opacity: "opacity-[0.03]" },
  { symbol: "λ", top: "45%", left: "8%", size: "text-4xl", opacity: "opacity-[0.025]" },
  { symbol: "π", top: "10%", right: "12%", size: "text-4xl", opacity: "opacity-[0.035]" },
  { symbol: "∞", top: "80%", left: "15%", size: "text-3xl", opacity: "opacity-[0.03]" },
  { symbol: "√", top: "50%", right: "10%", size: "text-3xl", opacity: "opacity-[0.025]" },
];

export default function HomePage() {
  const featuredCareers = getFeaturedCareers();
  const featuredStories = stories.slice(0, 3);

  return (
    <div>
      {/* Hero — intentionally always dark */}
      <section className="relative overflow-hidden bg-slate-950 grid-bg">
        {floatingSymbols.map((s, i) => (
          <span
            key={i}
            className={`absolute math-symbol pointer-events-none select-none ${s.size} ${s.opacity} text-indigo-400`}
            style={{ top: s.top, left: s.left, right: s.right }}
          >
            {s.symbol}
          </span>
        ))}
        <div className="absolute inset-0 pointer-events-none" style={{
          background: "radial-gradient(ellipse 80% 50% at 50% 0%, rgba(99,102,241,0.12) 0%, transparent 70%)"
        }} />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-28 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-indigo-500/30 bg-indigo-500/10 text-indigo-400 text-xs font-medium mb-8">
            <span className="math-symbol">∑</span>
            <span>Is Mathematics the right career for you?</span>
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white mb-6 leading-[1.1]">
            A Math Degree
            <br />
            <span className="gradient-text">Opens Every Door</span>
          </h1>
          <p className="max-w-2xl mx-auto text-slate-400 text-lg sm:text-xl leading-relaxed mb-10">
            From hedge fund quant to AI researcher, actuary to cryptographer — mathematics
            is the most versatile quantitative degree you can earn. Discover where it can take you.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link
              href="/quiz"
              className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-base transition-all hover:shadow-lg hover:shadow-indigo-500/25"
            >
              Take the Career Quiz
            </Link>
            <Link
              href="/careers"
              className="w-full sm:w-auto px-7 py-3.5 rounded-xl border border-slate-600 hover:border-slate-400 text-slate-300 hover:text-white font-medium text-base transition-colors"
            >
              Explore Career Paths
            </Link>
          </div>
        </div>
      </section>

      {/* Stats bar */}
      <section className="border-y border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-0 md:divide-x md:divide-slate-200 dark:md:divide-slate-800">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center px-4">
                <p className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white">{stat.value}</p>
                <p className="text-slate-700 dark:text-slate-300 text-sm font-medium mt-0.5">{stat.label}</p>
                <p className="text-slate-500 text-xs mt-0.5">{stat.sub}</p>
                <a
                  href={stat.sourceUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block text-[11px] text-indigo-600 dark:text-indigo-400/80 hover:text-indigo-500 dark:hover:text-indigo-300 mt-1"
                >
                  Source: {stat.sourceLabel}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Persona Router */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-slate-100 mb-3">
            Where are you in your journey?
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-lg max-w-xl mx-auto">
            Get the most relevant information for where you are right now.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
          {personas.map((persona) => (
            <Link
              key={persona.title}
              href={persona.href}
              className="group flex flex-col gap-4 p-7 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/40 hover:border-indigo-400/50 dark:hover:border-indigo-500/40 hover:bg-slate-50 dark:hover:bg-slate-900 transition-all duration-200 card-hover"
            >
              <span className="text-4xl">{persona.icon}</span>
              <div>
                <h3 className="font-semibold text-slate-900 dark:text-slate-100 text-lg mb-2 group-hover:text-indigo-600 dark:group-hover:text-indigo-300 transition-colors">
                  {persona.title}
                </h3>
                <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">{persona.description}</p>
              </div>
              <div className="flex items-center gap-1.5 text-indigo-600 dark:text-indigo-400 text-sm font-medium mt-auto">
                <span>{persona.cta}</span>
                <svg className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* What is Math? */}
      <section className="py-16 bg-slate-50 dark:bg-slate-900/30 border-y border-slate-200 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-slate-100 mb-5">
                More Than Solving Equations
              </h2>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-6">
                Mathematicians are the problem-solvers modern society depends on — designing the algorithms
                that secure your data, pricing the derivatives that manage financial risk, building
                the models that power AI, and proving the theorems that become tomorrow&apos;s technology.
              </p>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-8">
                A mathematics degree is unique in how transferable it is. The abstract reasoning,
                rigorous proof-writing, and quantitative modeling skills it builds are the exact
                toolkit that every data-driven industry is desperately seeking.
              </p>
              <blockquote className="border-l-2 border-indigo-500/50 pl-4">
                <p className="text-slate-700 dark:text-slate-300 italic text-base leading-relaxed">
                  &ldquo;Pure mathematics is, in its way, the poetry of logical ideas.&rdquo;
                </p>
                <footer className="text-slate-500 text-sm mt-1">— Albert Einstein</footer>
              </blockquote>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { symbol: "∂", title: "Deep Rigor", desc: "Train your brain to reason precisely about hard problems — the rarest cognitive skill in any workforce." },
                { symbol: "∇", title: "Endless Applications", desc: "Finance, AI, cryptography, physics, engineering, medicine — math underlies every quantitative field." },
                { symbol: "∞", title: "Career Optionality", desc: "Switch between academia and industry freely. Math expertise translates across sectors." },
                { symbol: "Σ", title: "Strong Compensation", desc: "Several math-heavy roles have high median pay and strong projected growth in public labor data." },
              ].map((item) => (
                <div key={item.title} className="p-5 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/50">
                  <span className="text-2xl math-symbol text-indigo-500 dark:text-indigo-400 font-light">{item.symbol}</span>
                  <h3 className="text-slate-800 dark:text-slate-200 font-semibold text-sm mt-2 mb-1">{item.title}</h3>
                  <p className="text-slate-500 text-xs leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Careers */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="flex items-end justify-between mb-10 gap-4">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-slate-100 mb-2">
              Featured Career Paths
            </h2>
            <p className="text-slate-600 dark:text-slate-400">Where math majors are building exceptional careers.</p>
          </div>
          <Link
            href="/careers"
            className="shrink-0 text-sm text-indigo-600 dark:text-indigo-400 hover:text-indigo-500 dark:hover:text-indigo-300 font-medium flex items-center gap-1 transition-colors"
          >
            All 7 paths
            <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {featuredCareers.map((career) => (
            <CareerCard key={career.id} career={career} />
          ))}
        </div>
      </section>

      {/* Career Fit Quiz CTA */}
      <section className="py-16 bg-linear-to-b from-indigo-50 to-white dark:from-indigo-950/30 dark:to-slate-950 border-y border-indigo-100 dark:border-indigo-900/30">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <div className="text-5xl math-symbol text-indigo-400/60 dark:text-indigo-400/40 mb-6 font-light">?</div>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-slate-100 mb-4">
            Not sure which path is right?
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-lg mb-8 leading-relaxed">
            Answer 8 honest questions about your interests, working style, and goals. We&apos;ll
            identify whether you&apos;re a Pure Mathematician, Applied Mathematician, Data Scientist,
            or Actuary at heart.
          </p>
          <Link
            href="/quiz"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-base transition-all hover:shadow-lg hover:shadow-indigo-500/25"
          >
            Take the Career Quiz →
          </Link>
          <p className="text-slate-500 dark:text-slate-600 text-sm mt-4">8 questions · ~2 minutes · No account needed</p>
        </div>
      </section>

      {/* Featured Alumni Stories */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="flex items-end justify-between mb-10 gap-4">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-slate-100 mb-2">
              Where They Are Now
            </h2>
            <p className="text-slate-600 dark:text-slate-400">Real mathematicians, real careers, real insight.</p>
          </div>
          <Link
            href="/stories"
            className="shrink-0 text-sm text-indigo-600 dark:text-indigo-400 hover:text-indigo-500 dark:hover:text-indigo-300 font-medium flex items-center gap-1 transition-colors"
          >
            All stories
            <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {featuredStories.map((story) => (
            <StoryCard key={story.id} story={story} />
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 border-t border-slate-200 dark:border-slate-800 bg-slate-50/80 dark:bg-slate-900/20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-slate-100 mb-3">
              Frequently Asked Questions
            </h2>
            <p className="text-slate-600 dark:text-slate-400">
              Real answers to the questions every pre-math student is searching at midnight.
            </p>
          </div>
          <FAQAccordion />
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 px-4 sm:px-6 text-center bg-slate-50 dark:bg-slate-950">
        <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-slate-100 mb-4">
          Ready to start your math journey?
        </h2>
        <p className="text-slate-600 dark:text-slate-400 text-lg mb-8 max-w-lg mx-auto">
          Explore career paths, top programs, and take our quiz to find your direction.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link
            href="/quiz"
            className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-semibold transition-all hover:shadow-lg hover:shadow-indigo-500/20"
          >
            Take the Quiz
          </Link>
          <Link
            href="/programs"
            className="w-full sm:w-auto px-7 py-3.5 rounded-xl border border-slate-300 dark:border-slate-700 hover:border-slate-400 dark:hover:border-slate-500 text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white font-medium transition-colors"
          >
            Explore Programs
          </Link>
        </div>
      </section>
    </div>
  );
}
