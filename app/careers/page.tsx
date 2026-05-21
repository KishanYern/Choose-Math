import type { Metadata } from "next";
import { careers } from "@/data/careers";
import { CareerCard } from "@/components/CareerCard";

export const metadata: Metadata = {
  title: "Mathematics Career Paths",
  description:
    "Explore 8 career paths for math majors — from quantitative finance and machine learning to actuarial science, cryptography, and academia.",
};

export default function CareersPage() {
  return (
    <div>
      {/* Header */}
      <div className="border-b border-rule bg-paper-2">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <p className="font-mono text-xs text-ink-faint tracking-widest mb-4 uppercase">career paths</p>
          <h1 className="font-display text-4xl sm:text-5xl text-ink font-normal mb-4 leading-snug">
            Where Math Takes You
          </h1>
          <p className="text-ink-muted text-lg max-w-2xl leading-relaxed">
            A mathematics degree is a passport to high-impact quantitative careers across
            the modern economy. Explore the full landscape.
          </p>
        </div>
      </div>

      {/* Careers grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-rule">
          {careers.map((career, i) => (
            <CareerCard key={career.id} career={career} index={i} />
          ))}
        </div>

        {/* Bottom context */}
        <div className="mt-16 pt-10 border-t border-rule">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-10">
            {[
              {
                symbol: "∂",
                title: "Cross-industry transferability",
                desc: "Mathematical reasoning is applicable in every industry. Math graduates routinely pivot between finance, tech, government, and academia.",
              },
              {
                symbol: "∑",
                title: "Premium compensation",
                desc: "Math graduates at the BS level earn among the highest median salaries of any undergraduate degree.",
              },
              {
                symbol: "∞",
                title: "Future-proof skills",
                desc: "As AI automates routine analysis, the demand for deep mathematical understanding continues to rise across every sector.",
              },
            ].map((item) => (
              <div key={item.title} className="flex gap-4">
                <span className="font-mono text-xl text-ink-faint font-light shrink-0 mt-0.5">
                  {item.symbol}
                </span>
                <div>
                  <h3 className="font-display text-base text-ink font-normal mb-2">{item.title}</h3>
                  <p className="text-ink-muted text-sm leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
