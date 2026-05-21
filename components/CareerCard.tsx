import Link from "next/link";
import type { CareerTrack } from "@/data/careers";
import { InkUnderline, InkStar, InkPaperclip } from "@/components/Ink";

interface CareerCardProps {
  career: CareerTrack;
  index?: number;
  compact?: boolean;
  featured?: boolean;
}

export function CareerCard({ career, index, compact = false, featured = false }: CareerCardProps) {
  const salaryK = (n: number) => `$${Math.round(n / 1000)}K`;
  const num = index !== undefined ? String(index + 1).padStart(2, "0") : null;

  if (featured) {
    return (
      <Link
        href={`/careers/${career.slug}`}
        className="group block bg-paper-2 border border-rule hover:border-ink-muted transition-colors card-hover dropshadow-paper relative"
      >
        {/* Paperclip ornament */}
        <span className="absolute -top-1 left-4 text-ink-faint">
          <InkPaperclip size={20} className="text-ink-faint opacity-60" />
        </span>

        <div className="p-8">
          {/* Number + star + salary */}
          <div className="flex items-start justify-between gap-3 mb-5">
            <div className="flex items-center gap-2">
              {num && (
                <span className="font-mono text-xs text-ink-faint">{num}</span>
              )}
              <InkStar size={14} className="text-marker opacity-80" />
            </div>
            <span className="font-mono text-xs text-ink-muted">
              {salaryK(career.salaryRange.min)}–{salaryK(career.salaryRange.max)}
            </span>
          </div>

          {/* Featured label */}
          <p className="font-display italic text-xs text-marker mb-2 opacity-80">featured path</p>

          {/* Title — larger for featured */}
          <h3 className="font-display text-2xl sm:text-3xl font-normal text-ink mb-2 group-hover:text-accent transition-colors leading-snug">
            {career.title}
          </h3>

          {/* Animated ink underline */}
          <div className="ink-draw text-marker mb-4 w-20">
            <InkUnderline />
          </div>

          <p className="text-ink-muted text-sm leading-relaxed mb-5">
            {career.shortDescription}
          </p>

          {!compact && (
            <div className="flex flex-wrap gap-1.5">
              {career.requiredSkills.slice(0, 3).map((skill, i) => (
                <span
                  key={skill}
                  className={
                    i === 0
                      ? "font-mono text-[10px] tracking-wider px-2 py-0.5 border border-rule text-ink-faint marker-highlight"
                      : "font-mono text-[10px] tracking-wider px-2 py-0.5 border border-rule text-ink-faint"
                  }
                >
                  {skill}
                </span>
              ))}
            </div>
          )}

          <div className="mt-5 font-mono text-xs text-ink-faint group-hover:text-accent transition-colors">
            explore →
          </div>
        </div>
      </Link>
    );
  }

  return (
    <Link
      href={`/careers/${career.slug}`}
      className="group block bg-paper-2 border border-rule hover:border-ink-muted transition-colors card-hover hover:dropshadow-paper"
    >
      <div className="p-6">
        {/* Number + salary */}
        <div className="flex items-start justify-between gap-3 mb-3">
          {num && (
            <div>
              <span className="font-mono text-xs text-ink-faint">{num}</span>
              <div className="ink-draw text-marker w-6 mt-0.5 opacity-0 group-hover:opacity-100 transition-opacity">
                <InkUnderline />
              </div>
            </div>
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
            {career.requiredSkills.slice(0, 3).map((skill, i) => (
              <span
                key={skill}
                className={
                  i === 0
                    ? "font-mono text-[10px] tracking-wider px-2 py-0.5 border border-rule text-ink-faint marker-highlight"
                    : "font-mono text-[10px] tracking-wider px-2 py-0.5 border border-rule text-ink-faint"
                }
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
