import Link from "next/link";
import type { CareerTrack } from "@/data/careers";
import { InkUnderline, InkStar, InkPaperclip } from "@/components/Ink";

interface CareerCardProps {
  career: CareerTrack;
  index?: number;
  compact?: boolean;
  featured?: boolean;
}

// Per-card gradient identity — cycles through aurora directions
const cardGradients = [
  "linear-gradient(120deg, var(--aurora-1), var(--aurora-2))",
  "linear-gradient(120deg, var(--aurora-4), var(--aurora-5))",
  "linear-gradient(120deg, var(--aurora-2), var(--aurora-3))",
  "linear-gradient(120deg, var(--aurora-6), var(--aurora-1))",
  "linear-gradient(120deg, var(--aurora-5), var(--aurora-4))",
  "linear-gradient(120deg, var(--aurora-3), var(--aurora-6))",
];

export function CareerCard({ career, index, compact = false, featured = false }: CareerCardProps) {
  const salaryK = (n: number) => `$${Math.round(n / 1000)}K`;
  const num = index !== undefined ? String(index + 1).padStart(2, "0") : null;
  const gradient = cardGradients[(index ?? 0) % cardGradients.length];

  if (featured) {
    return (
      <Link
        href={`/careers/${career.slug}`}
        className="group block relative bg-paper-2 border border-rule rounded-2xl card-hover dropshadow-paper overflow-hidden gradient-border"
        style={{ borderRadius: "1rem" }}
      >
        {/* Top gradient streak */}
        <span
          aria-hidden
          className="absolute inset-x-0 top-0 h-1.5"
          style={{ background: gradient }}
        />

        {/* Paperclip ornament */}
        <span className="absolute -top-1 left-5 text-ink-faint z-10">
          <InkPaperclip size={20} className="text-ink-faint opacity-70" />
        </span>

        <div className="p-8 pt-9">
          <div className="flex items-start justify-between gap-3 mb-5">
            <div className="flex items-center gap-2">
              {num && (
                <span className="font-mono text-xs text-ink-faint tabular-nums">{num}</span>
              )}
              <InkStar size={14} className="text-aurora-4 opacity-90" />
            </div>
            <span className="font-mono text-xs text-ink-muted tabular-nums">
              {salaryK(career.salaryRange.min)}–{salaryK(career.salaryRange.max)}
            </span>
          </div>

          <p className="font-mono text-[10px] uppercase tracking-[0.2em] mb-3">
            <span className="aurora-text-warm font-semibold">featured path</span>
          </p>

          <h3 className="font-display text-3xl sm:text-4xl font-medium text-ink mb-3 leading-[1.05] tracking-tight">
            {career.title}
          </h3>

          <div
            aria-hidden
            className="h-[3px] w-16 rounded-full mb-5"
            style={{ background: gradient }}
          />

          <p className="text-ink-muted text-sm leading-relaxed mb-6">
            {career.shortDescription}
          </p>

          {!compact && (
            <div className="flex flex-wrap gap-1.5">
              {career.requiredSkills.slice(0, 3).map((skill, i) => (
                <span
                  key={skill}
                  className="font-mono text-[10px] tracking-wider px-2.5 py-1 rounded-full border border-rule text-ink-muted bg-paper/60 backdrop-blur-sm"
                  style={i === 0 ? { borderColor: "transparent", background: `linear-gradient(var(--paper-2), var(--paper-2)) padding-box, ${gradient} border-box`, borderWidth: 1, borderStyle: "solid" } : undefined}
                >
                  {skill}
                </span>
              ))}
            </div>
          )}

          <div className="mt-6 font-mono text-xs aurora-text-cool font-semibold tracking-wider inline-flex items-center gap-1">
            explore <span className="transition-transform duration-200 group-hover:translate-x-1">→</span>
          </div>
        </div>
      </Link>
    );
  }

  return (
    <Link
      href={`/careers/${career.slug}`}
      className="group block relative bg-paper-2 border border-rule rounded-2xl card-hover overflow-hidden gradient-border"
    >
      {/* Top gradient streak */}
      <span
        aria-hidden
        className="absolute inset-x-0 top-0 h-1"
        style={{ background: gradient }}
      />

      <div className="p-6 pt-7">
        <div className="flex items-start justify-between gap-3 mb-3">
          {num && (
            <div>
              <span className="font-mono text-xs text-ink-faint tabular-nums">{num}</span>
              <div className="ink-draw w-6 mt-0.5 opacity-0 group-hover:opacity-100 transition-opacity" style={{ color: "var(--aurora-4)" }}>
                <InkUnderline />
              </div>
            </div>
          )}
          <span className="font-mono text-xs text-ink-muted ml-auto tabular-nums">
            {salaryK(career.salaryRange.min)}–{salaryK(career.salaryRange.max)}
          </span>
        </div>

        <h3 className="font-display text-2xl font-medium text-ink mb-2 leading-snug tracking-tight">
          {career.title}
        </h3>

        {/* Gradient sweep on hover */}
        <div
          aria-hidden
          className="h-[2px] w-0 group-hover:w-full transition-all duration-500 mb-3 rounded-full"
          style={{ background: gradient }}
        />

        <p className="text-ink-muted text-sm leading-relaxed line-clamp-2">
          {career.shortDescription}
        </p>

        {!compact && (
          <div className="mt-4 flex flex-wrap gap-1.5">
            {career.requiredSkills.slice(0, 3).map((skill, i) => (
              <span
                key={skill}
                className="font-mono text-[10px] tracking-wider px-2.5 py-1 rounded-full border border-rule text-ink-muted"
                style={i === 0 ? { borderColor: "transparent", background: `linear-gradient(var(--paper-2), var(--paper-2)) padding-box, ${gradient} border-box`, borderWidth: 1, borderStyle: "solid" } : undefined}
              >
                {skill}
              </span>
            ))}
          </div>
        )}

        <div className="mt-4 font-mono text-xs text-ink-muted group-hover:text-ink transition-colors inline-flex items-center gap-1">
          explore <span className="transition-transform duration-200 group-hover:translate-x-1">→</span>
        </div>
      </div>
    </Link>
  );
}
