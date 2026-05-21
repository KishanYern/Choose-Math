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

const categorySymbols: Record<ResourceCategory, string> = {
  textbooks: "∂",
  "online-courses": "∫",
  competitions: "∑",
  tools: "⊕",
  communities: "∇",
};

export default function ResourcesPage() {
  const byCategory = categoryOrder.map((cat) => ({
    category: cat,
    label: categoryLabels[cat],
    symbol: categorySymbols[cat],
    items: resources.filter((r) => r.category === cat),
  }));

  return (
    <div>
      {/* Header */}
      <div className="border-b border-rule bg-paper-2">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
          <p className="font-mono text-xs text-ink-faint tracking-widest mb-4 uppercase">resources</p>
          <h1 className="font-display text-4xl sm:text-5xl text-ink font-normal mb-4 leading-snug">
            The Math Student&apos;s Toolkit
          </h1>
          <p className="text-ink-muted text-lg max-w-2xl leading-relaxed">
            Carefully curated textbooks, courses, competitions, and tools — everything a serious
            mathematics student needs, organized by category.
          </p>
        </div>
      </div>

      {/* Resources by category */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-14">
        {byCategory.map(({ category, label, symbol, items }) => (
          <section key={category}>
            {/* Section header */}
            <div className="flex items-baseline gap-3 mb-1 pb-3 border-b border-rule">
              <span className="font-mono text-lg text-ink-faint font-light">{symbol}</span>
              <h2 className="font-display text-xl text-ink font-normal">{label}</h2>
              <span className="font-mono text-[11px] text-ink-faint ml-auto">{items.length} items</span>
            </div>

            <div className="space-y-0">
              {items.map((resource) => (
                <a
                  key={resource.id}
                  href={resource.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-start gap-4 py-4 border-b border-rule hover:bg-paper-2 transition-colors px-2 -mx-2"
                >
                  <div className="flex-1 min-w-0">
                    <div className="flex flex-wrap items-baseline gap-2 mb-0.5">
                      <span className="font-display text-base text-ink group-hover:text-accent transition-colors">
                        {resource.title}
                      </span>
                      {resource.author && (
                        <span className="font-mono text-[11px] text-ink-faint tracking-wider">
                          {resource.author}
                        </span>
                      )}
                    </div>
                    <p className="text-ink-muted text-sm leading-relaxed">{resource.description}</p>
                  </div>
                  <div className="flex items-center gap-2 shrink-0">
                    {resource.free && (
                      <span className="font-mono text-[10px] tracking-wider px-1.5 py-0.5 border border-rule text-ink-faint">
                        free
                      </span>
                    )}
                    <span className="font-mono text-[10px] tracking-wider px-1.5 py-0.5 border border-rule text-ink-faint capitalize">
                      {resource.difficulty}
                    </span>
                    <span className="font-mono text-[10px] text-ink-faint group-hover:text-accent transition-colors">↗</span>
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
