import Link from "next/link";
import type { CareerTrack } from "@/data/careers";

interface CareerCardProps {
  career: CareerTrack;
  compact?: boolean;
}

export function CareerCard({ career, compact = false }: CareerCardProps) {
  const salaryK = (n: number) => `$${Math.round(n / 1000)}K`;

  return (
    <Link
      href={`/careers/${career.slug}`}
      className="group block rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/50 hover:border-indigo-400/50 dark:hover:border-indigo-500/50 hover:bg-white dark:hover:bg-slate-900 transition-all duration-200 card-hover overflow-hidden"
    >
      <div className="p-6">
        {/* Icon + Title */}
        <div className="flex items-start justify-between gap-3 mb-3">
          <span className="text-3xl math-symbol text-indigo-400 font-light leading-none select-none">
            {career.icon}
          </span>
          <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
            {salaryK(career.salaryRange.min)}–{salaryK(career.salaryRange.max)}
          </span>
        </div>

        <h3 className="font-semibold text-slate-900 dark:text-slate-100 text-lg mb-2 group-hover:text-indigo-600 dark:group-hover:text-indigo-300 transition-colors">
          {career.title}
        </h3>
        <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed line-clamp-2">
          {career.shortDescription}
        </p>

        {!compact && (
          <>
            {/* Skills */}
            <div className="mt-4 flex flex-wrap gap-1.5">
              {career.requiredSkills.slice(0, 3).map((skill) => (
                <span
                  key={skill}
                  className="text-xs px-2 py-0.5 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400"
                >
                  {skill}
                </span>
              ))}
              {career.requiredSkills.length > 3 && (
                <span className="text-xs px-2 py-0.5 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-400 dark:text-slate-500">
                  +{career.requiredSkills.length - 3} more
                </span>
              )}
            </div>
          </>
        )}

        {/* CTA arrow */}
        <div className="mt-4 flex items-center gap-1 text-indigo-400 text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity">
          <span>Explore path</span>
          <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
          </svg>
        </div>
      </div>
    </Link>
  );
}
