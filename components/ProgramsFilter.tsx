"use client";

import { useState } from "react";
import type { Program, ProgramFocus } from "@/data/programs";

const focusLabels: Record<ProgramFocus | "all", string> = {
  all: "all programs",
  "pure-math": "pure math",
  "applied-math": "applied math",
  statistics: "statistics",
};

const focusTabs = (["all", "pure-math", "applied-math", "statistics"] as const);

const focusBadge: Record<ProgramFocus, string> = {
  "pure-math": "pure",
  "applied-math": "applied",
  statistics: "stats",
};

function ProgramRow({ program, index }: { program: Program; index: number }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="border-b border-rule">
      <button
        onClick={() => setExpanded((v) => !v)}
        className="w-full flex items-start gap-4 py-4 text-left hover:bg-paper-2 transition-colors px-2 -mx-2"
      >
        <span className="font-mono text-xs text-ink-faint shrink-0 mt-0.5 w-6">
          {String(index + 1).padStart(2, "0")}
        </span>
        <div className="flex-1 min-w-0">
          <div className="flex flex-wrap items-baseline gap-2 mb-0.5">
            <span className="font-display text-base text-ink font-normal">
              {program.school}
            </span>
            <span className="font-mono text-[10px] text-ink-faint tracking-wider">
              {program.shortName}
            </span>
          </div>
          <div className="flex flex-wrap gap-1.5">
            {program.focus.map((f) => (
              <span
                key={f}
                className="font-mono text-[10px] tracking-wider px-1.5 py-0.5 border border-rule text-ink-faint"
              >
                {focusBadge[f]}
              </span>
            ))}
            <span className="font-mono text-[10px] text-ink-faint">{program.location}</span>
          </div>
        </div>
        <span className={`font-mono text-ink-faint text-xs shrink-0 mt-0.5 transition-transform duration-200 ${expanded ? "rotate-45" : ""}`}>
          +
        </span>
      </button>

      {expanded && (
        <div className="pb-5 pl-10 pr-2">
          <p className="text-sm text-ink-muted leading-relaxed mb-3">{program.description}</p>
          <ul className="space-y-1 mb-3">
            {program.highlights.slice(0, 3).map((h) => (
              <li key={h} className="font-mono text-[11px] text-ink-faint flex gap-2">
                <span>·</span>{h}
              </li>
            ))}
          </ul>
          <a
            href={program.url}
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-[11px] text-accent hover:text-ink transition-colors tracking-wider"
          >
            visit department ↗
          </a>
        </div>
      )}
    </div>
  );
}

export function ProgramsFilter({ programs }: { programs: Program[] }) {
  const [active, setActive] = useState<ProgramFocus | "all">("all");

  const filtered =
    active === "all"
      ? programs
      : programs.filter((p) => p.focus.includes(active));

  return (
    <div>
      {/* Filter row */}
      <div className="flex flex-wrap gap-2 mb-8 border-b border-rule pb-4">
        {focusTabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActive(tab)}
            className={`font-mono text-xs tracking-wider px-3 py-1.5 border transition-colors ${
              active === tab
                ? "border-accent bg-accent text-paper"
                : "border-rule text-ink-faint hover:border-ink-faint hover:text-ink-muted"
            }`}
          >
            {focusLabels[tab]}
            {tab !== "all" && (
              <span className="ml-1.5 opacity-60">
                ({programs.filter((p) => p.focus.includes(tab as ProgramFocus)).length})
              </span>
            )}
          </button>
        ))}
      </div>

      {/* Programs list */}
      <div>
        {filtered.map((program, i) => (
          <ProgramRow key={program.id} program={program} index={i} />
        ))}
      </div>

      {filtered.length === 0 && (
        <p className="font-mono text-xs text-ink-faint py-12 text-center tracking-wider">
          no programs for this filter
        </p>
      )}
    </div>
  );
}
