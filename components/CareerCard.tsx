import Link from "next/link";
import type { CareerTrack } from "@/data/careers";

interface CareerCardProps {
  career: CareerTrack;
  index?: number;
  compact?: boolean;
}

export function CareerCard({ career, index, compact = false }: CareerCardProps) {
  const salaryK = (n: number) => `$${Math.round(n / 1000)}K`;
  const num = index !== undefined ? String(index + 1).padStart(2, "0") : null;

  return (
    <Link
      href={`/careers/${career.slug}`}
      className="group block bg-paper-2 border border-rule hover:border-ink-muted transition-colors card-hover"
    >
      <div className="p-6">
        {/* Number + salary */}
        <div className="flex items-start justify-between gap-3 mb-4">
          {num && (
            <span className="font-mono text-xs text-ink-faint">{num}</span>
          )}
          <span className="font-mono text-xs text-ink-muted ml-auto">
            {salaryK(career.salaryRange.min)}–{salaryK(career.salaryRange.max)}
          </span>
        </div>

        {/* Title */}
        <h3 className="font-display text-xl font-normal text-ink mb-1 group-hover:text-accent transition-colors leading-snug">
          {career.title}
        </h3>

        {/* Underline appears on hover */}
        <div className="h-px w-0 group-hover:w-full bg-accent transition-all duration-300 mb-3" />

        <p className="text-ink-muted text-sm leading-relaxed line-clamp-2">
          {career.shortDescription}
        </p>

        {!compact && (
          <div className="mt-4 flex flex-wrap gap-1.5">
            {career.requiredSkills.slice(0, 3).map((skill) => (
              <span
                key={skill}
                className="font-mono text-[10px] tracking-wider px-2 py-0.5 border border-rule text-ink-faint"
              >
                {skill}
              </span>
            ))}
          </div>
        )}

        <div className="mt-4 font-mono text-xs text-ink-faint group-hover:text-accent transition-colors">
          explore →
        </div>
      </div>
    </Link>
  );
}
