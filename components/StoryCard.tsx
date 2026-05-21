import type { Story } from "@/data/stories";

export function StoryCard({ story }: { story: Story }) {
  return (
    <article className="bg-paper-2 border border-rule p-6 flex flex-col gap-4 card-hover">
      {/* Opening quote mark */}
      <div className="font-display text-5xl text-rule leading-none select-none" aria-hidden>
        &ldquo;
      </div>

      {/* Quote */}
      <blockquote className="font-display italic text-ink text-base leading-relaxed flex-1">
        {story.quote}
      </blockquote>

      {/* Thin rule */}
      <div className="border-t border-rule" />

      {/* Byline */}
      <div className="flex items-center gap-3">
        <div className="w-8 h-8 border border-rule flex items-center justify-center font-mono text-xs text-ink-muted shrink-0">
          {story.imageInitials}
        </div>
        <div className="min-w-0">
          <p className="text-sm font-medium text-ink truncate">{story.name}</p>
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
