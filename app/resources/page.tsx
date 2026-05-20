import type { Metadata } from "next";
import { resources, categoryLabels, type ResourceCategory } from "@/data/resources";

export const metadata: Metadata = {
  title: "Mathematics Resources",
  description:
    "The best textbooks, online courses, competitions, tools, and communities for mathematics students at every level.",
};

const categoryOrder: ResourceCategory[] = [
  "textbooks",
  "online-courses",
  "competitions",
  "tools",
  "communities",
];

const categoryIcons: Record<ResourceCategory, string> = {
  textbooks: "∂",
  "online-courses": "∫",
  competitions: "∑",
  tools: "⊕",
  communities: "∇",
};

const difficultyColors = {
  beginner: "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/20",
  intermediate: "bg-amber-500/10 text-amber-600 dark:text-amber-400 border-amber-500/20",
  advanced: "bg-rose-500/10 text-rose-600 dark:text-rose-400 border-rose-500/20",
};

export default function ResourcesPage() {
  const byCategory = categoryOrder.map((cat) => ({
    category: cat,
    label: categoryLabels[cat],
    icon: categoryIcons[cat],
    items: resources.filter((r) => r.category === cat),
  }));

  return (
    <div className="min-h-screen bg-white dark:bg-slate-950">
      {/* Header */}
      <div className="border-b border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
          <p className="text-indigo-600 dark:text-indigo-400 text-xs font-medium uppercase tracking-widest mb-3">Resources</p>
          <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-slate-100 mb-3">
            The Math Student&apos;s Toolkit
          </h1>
          <p className="text-slate-600 dark:text-slate-400 text-lg max-w-2xl leading-relaxed">
            Carefully curated textbooks, courses, competitions, and tools — everything a serious
            mathematics student needs, organized by category.
          </p>
          <div className="flex flex-wrap gap-2 mt-5">
            {["beginner", "intermediate", "advanced"].map((d) => (
              <span
                key={d}
                className={`text-xs px-2.5 py-1 rounded-full border font-medium capitalize ${difficultyColors[d as keyof typeof difficultyColors]}`}
              >
                {d}
              </span>
            ))}
            <span className="text-xs px-2.5 py-1 rounded-full border border-slate-300 dark:border-slate-700 text-slate-500">
              = difficulty level
            </span>
          </div>
        </div>
      </div>

      {/* Resources by category */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-14">
        {byCategory.map(({ category, label, icon, items }) => (
          <section key={category}>
            {/* Section header */}
            <div className="flex items-center gap-3 mb-6">
              <span className="text-2xl math-symbol text-indigo-500 dark:text-indigo-400 font-light">{icon}</span>
              <h2 className="text-xl font-semibold text-slate-900 dark:text-slate-100">{label}</h2>
              <span className="text-xs px-2 py-0.5 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-500">
                {items.length}
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {items.map((resource) => (
                <a
                  key={resource.id}
                  href={resource.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex flex-col rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/50 hover:border-indigo-400/50 dark:hover:border-indigo-500/40 hover:bg-slate-50 dark:hover:bg-slate-900 transition-all duration-200 overflow-hidden"
                >
                  <div className="p-5 flex-1">
                    <div className="flex items-start justify-between gap-3 mb-2">
                      <div className="flex-1 min-w-0">
                        <h3 className="font-semibold text-slate-900 dark:text-slate-100 text-sm group-hover:text-indigo-600 dark:group-hover:text-indigo-300 transition-colors">
                          {resource.title}
                        </h3>
                        {resource.author && (
                          <p className="text-slate-500 text-xs mt-0.5">{resource.author}</p>
                        )}
                      </div>
                      <div className="flex items-center gap-1.5 shrink-0">
                        {resource.free && (
                          <span className="text-xs px-1.5 py-0.5 rounded-md bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20 font-medium">
                            Free
                          </span>
                        )}
                        <span
                          className={`text-xs px-1.5 py-0.5 rounded-md border font-medium capitalize ${
                            difficultyColors[resource.difficulty]
                          }`}
                        >
                          {resource.difficulty}
                        </span>
                      </div>
                    </div>
                    <p className="text-slate-600 dark:text-slate-400 text-xs leading-relaxed">{resource.description}</p>
                  </div>

                  {/* Tags + link */}
                  <div className="px-5 pb-4 flex items-center justify-between gap-3">
                    <div className="flex flex-wrap gap-1">
                      {resource.tags.slice(0, 3).map((tag) => (
                        <span key={tag} className="text-xs px-1.5 py-0.5 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-600">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <span className="text-xs text-indigo-600 dark:text-indigo-400 opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-0.5 font-medium shrink-0">
                      Open
                      <svg className="w-2.5 h-2.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </span>
                  </div>
                </a>
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}
