import type { Metadata } from "next";
import { careers } from "@/data/careers";
import { CareerCard } from "@/components/CareerCard";

export const metadata: Metadata = {
  title: "Mathematics Career Paths",
  description:
    "Explore 7 career paths for math majors — from quantitative finance and machine learning to actuarial science, cryptography, and academia.",
};

export default function CareersPage() {
  return (
    <div className="min-h-screen bg-slate-950">
      {/* Header */}
      <div className="border-b border-slate-800 bg-slate-900/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
          <p className="text-indigo-400 text-xs font-medium uppercase tracking-widest mb-3">Career Paths</p>
          <h1 className="text-3xl sm:text-4xl font-bold text-slate-100 mb-3">
            Where Math Takes You
          </h1>
          <p className="text-slate-400 text-lg max-w-2xl leading-relaxed">
            A mathematics degree is a passport to some of the highest-impact, highest-compensation
            careers in the modern economy. Explore the full landscape.
          </p>
        </div>
      </div>

      {/* Careers grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {careers.map((career) => (
            <CareerCard key={career.id} career={career} />
          ))}
        </div>

        {/* Bottom context */}
        <div className="mt-16 pt-10 border-t border-slate-800">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {[
              {
                symbol: "∂",
                title: "Cross-industry transferability",
                desc: "Mathematical reasoning is applicable in every industry. Math graduates routinely pivot between finance, tech, government, and academia throughout their careers.",
              },
              {
                symbol: "∑",
                title: "Premium compensation",
                desc: "Math graduates at the BS level earn among the highest median salaries of any undergraduate degree. PhD or specialized MS credentials push compensation further.",
              },
              {
                symbol: "∞",
                title: "Future-proof skills",
                desc: "As AI automates routine analysis, the demand for deep mathematical understanding — not just software skills — continues to rise across every sector.",
              },
            ].map((item) => (
              <div key={item.title} className="flex gap-4">
                <span className="text-2xl math-symbol text-indigo-400/50 font-light flex-shrink-0 mt-0.5">
                  {item.symbol}
                </span>
                <div>
                  <h3 className="text-slate-300 font-semibold text-sm mb-1">{item.title}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
