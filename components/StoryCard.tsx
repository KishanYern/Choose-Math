import type { Story } from "@/data/stories";

const accentClasses: Record<string, { bg: string; text: string; border: string }> = {
  indigo: {
    bg: "bg-indigo-500/15",
    text: "text-indigo-400",
    border: "border-indigo-500/30",
  },
  violet: {
    bg: "bg-violet-500/15",
    text: "text-violet-400",
    border: "border-violet-500/30",
  },
  cyan: {
    bg: "bg-cyan-500/15",
    text: "text-cyan-400",
    border: "border-cyan-500/30",
  },
  amber: {
    bg: "bg-amber-500/15",
    text: "text-amber-400",
    border: "border-amber-500/30",
  },
  emerald: {
    bg: "bg-emerald-500/15",
    text: "text-emerald-400",
    border: "border-emerald-500/30",
  },
  rose: {
    bg: "bg-rose-500/15",
    text: "text-rose-400",
    border: "border-rose-500/30",
  },
};

export function StoryCard({ story }: { story: Story }) {
  const accent = accentClasses[story.accentColor] ?? accentClasses.indigo;

  return (
    <article className="flex flex-col rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/50 overflow-hidden hover:border-slate-300 dark:hover:border-slate-700 transition-colors">
      {/* Header */}
      <div className="p-6 pb-4">
        <div className="flex items-start gap-4 mb-4">
          {/* Avatar */}
          <div
            className={`w-11 h-11 rounded-full flex items-center justify-center text-sm font-semibold flex-shrink-0 ${accent.bg} ${accent.text} border ${accent.border}`}
          >
            {story.imageInitials}
          </div>
          <div className="min-w-0">
            <p className="font-semibold text-slate-900 dark:text-slate-100 text-sm">{story.name}</p>
            <p className="text-slate-500 dark:text-slate-400 text-xs mt-0.5 truncate">
              {story.title} · {story.company}
            </p>
            <p className="text-slate-400 dark:text-slate-600 text-xs mt-0.5">
              {story.degree} · {story.school} · {story.gradYear}
            </p>
          </div>
        </div>

        {/* Quote */}
        <blockquote className="text-slate-700 dark:text-slate-300 text-sm leading-relaxed italic border-l-2 border-indigo-500/40 pl-3">
          &ldquo;{story.quote}&rdquo;
        </blockquote>
      </div>

      {/* Story body */}
      <div className="px-6 pb-5 flex-1">
        <p className="text-slate-500 dark:text-slate-500 text-sm leading-relaxed line-clamp-4">{story.fullStory}</p>
      </div>

      {/* Tags */}
      <div className="px-6 pb-5 flex flex-wrap gap-1.5">
        {story.tags.map((tag) => (
          <span
            key={tag}
            className="text-xs px-2 py-0.5 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400"
          >
            {tag}
          </span>
        ))}
      </div>
    </article>
  );
}
