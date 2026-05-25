import type { Story } from "@/lib/firebase/stories";
import { InkCircle, InkPaperclip } from "@/components/Ink";

const tapeVariants = ["washi-tape", "washi-tape-blue", "washi-tape-yellow"] as const;

const avatarGradients = [
  "linear-gradient(135deg, var(--aurora-1), var(--aurora-4))",
  "linear-gradient(135deg, var(--aurora-2), var(--aurora-3))",
  "linear-gradient(135deg, var(--aurora-5), var(--aurora-4))",
  "linear-gradient(135deg, var(--aurora-6), var(--aurora-1))",
];

export function StoryCard({ story, index = 0 }: { story: Story; index?: number }) {
  const tiltClass = index % 3 === 1 ? "tilt-right" : index % 3 === 2 ? "" : "tilt-left";
  const tape = tapeVariants[index % 3];
  const usePaperclip = index % 2 === 1;
  const avatarGrad = avatarGradients[index % avatarGradients.length];

  return (
    <article
      className={`relative bg-paper-2 border border-rule rounded-2xl p-6 flex flex-col gap-4 card-hover dropshadow-paper gradient-border ${tiltClass}`}
    >
      {usePaperclip ? (
        <span className="absolute -top-1 left-3 text-ink-faint z-10">
          <InkPaperclip size={18} className="text-ink-faint opacity-60" />
        </span>
      ) : (
        <span className={tape} aria-hidden="true" />
      )}

      {/* Aurora-gradient quote glyph */}
      <div
        className="font-display text-7xl leading-none select-none -mb-4 aurora-text-warm"
        aria-hidden
      >
        &ldquo;
      </div>

      <blockquote className="font-display italic text-ink text-base leading-relaxed flex-1">
        {story.quote}
      </blockquote>

      <div
        aria-hidden
        className="h-px w-full rounded-full"
        style={{ background: avatarGrad, opacity: 0.4 }}
      />

      <div className="flex items-center gap-3">
        <div className="relative shrink-0 w-11 h-11 flex items-center justify-center">
          {/* Gradient ring around initials */}
          <div
            className="absolute inset-0 rounded-full p-[1.5px]"
            style={{ background: avatarGrad }}
          >
            <div className="w-full h-full rounded-full bg-paper-2 flex items-center justify-center font-mono text-xs text-ink font-semibold">
              {story.imageInitials}
            </div>
          </div>
          {/* Hand-drawn circle overlapping, slightly off-center */}
          <span className="absolute -top-1.5 -left-1.5 text-ink-faint pointer-events-none">
            <InkCircle size={44} className="text-ink-faint opacity-40" />
          </span>
        </div>
        <div className="min-w-0">
          <p className="font-display italic text-sm text-ink truncate">{story.name}</p>
          <p className="font-mono text-[11px] text-ink-muted truncate tracking-wider">
            {story.title} · {story.company}
          </p>
        </div>
      </div>

      <div className="flex flex-wrap gap-1.5">
        {story.tags.slice(0, 3).map((tag) => (
          <span
            key={tag}
            className="font-mono text-[10px] tracking-wider px-2.5 py-1 rounded-full border border-rule text-ink-muted"
          >
            {tag}
          </span>
        ))}
      </div>
    </article>
  );
}
