import type { Story } from "@/data/stories";
import { InkCircle, InkPaperclip } from "@/components/Ink";

const tapeVariants = ["washi-tape", "washi-tape-blue", "washi-tape-yellow"] as const;

export function StoryCard({ story, index = 0 }: { story: Story; index?: number }) {
  const tiltClass = index % 3 === 1 ? "tilt-right" : index % 3 === 2 ? "" : "tilt-left";
  const tape = tapeVariants[index % 3];
  const usePaperclip = index % 2 === 1;

  return (
    <article className={`bg-paper-2 border border-rule p-6 flex flex-col gap-4 card-hover dropshadow-paper relative ${tiltClass}`}>
      {/* Tape or paperclip decoration */}
      {usePaperclip ? (
        <span className="absolute -top-1 left-3 text-ink-faint">
          <InkPaperclip size={18} className="text-ink-faint opacity-50" />
        </span>
      ) : (
        <span className={tape} aria-hidden="true" />
      )}

      {/* Opening quote mark — marker red, large */}
      <div className="font-display text-6xl text-marker leading-none select-none opacity-80 -mb-2" aria-hidden>
        &ldquo;
      </div>

      {/* Quote */}
      <blockquote className="font-display italic text-ink text-base leading-relaxed flex-1">
        {story.quote}
      </blockquote>

      {/* Thin rule */}
      <div className="border-t border-rule" />

      {/* Byline with InkCircle avatar */}
      <div className="flex items-center gap-3">
        <div className="relative shrink-0 w-10 h-10 flex items-center justify-center">
          {/* Plain initials box */}
          <div className="w-8 h-8 border border-rule flex items-center justify-center font-mono text-xs text-ink-muted bg-paper-2">
            {story.imageInitials}
          </div>
          {/* Hand-drawn circle overlapping, slightly off-center */}
          <span className="absolute -top-1 -left-1 text-ink-faint">
            <InkCircle size={38} className="text-ink-faint opacity-60" />
          </span>
        </div>
        <div className="min-w-0">
          {/* Signature-style name — italic Newsreader */}
          <p className="font-display italic text-sm text-ink truncate">{story.name}</p>
          <p className="font-mono text-[11px] text-ink-faint truncate tracking-wider">
            {story.title} · {story.company}
          </p>
        </div>
      </div>

      {/* Tags */}
      <div className="flex flex-wrap gap-1.5">
        {story.tags.slice(0, 3).map((tag) => (
          <span
            key={tag}
            className="font-mono text-[10px] tracking-wider px-2 py-0.5 border border-rule text-ink-faint"
          >
            {tag}
          </span>
        ))}
      </div>
    </article>
  );
}
