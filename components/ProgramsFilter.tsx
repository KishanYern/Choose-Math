"use client";

import { useState } from "react";
import type { Program, ProgramFocus } from "@/data/programs";

const focusLabels: Record<ProgramFocus | "all", string> = {
  all: "All Programs",
  "pure-math": "Pure Math",
  "applied-math": "Applied Math",
  statistics: "Statistics",
};

const focusTabs = (["all", "pure-math", "applied-math", "statistics"] as const);

function ProgramCard({ program }: { program: Program }) {
  return (
    <a
      href={program.url}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex flex-col rounded-2xl border border-slate-800 bg-slate-900/50 hover:border-indigo-500/40 hover:bg-slate-900 transition-all duration-200 overflow-hidden card-hover"
    >
      <div className="p-6 flex-1">
        {/* Rank + School */}
        <div className="flex items-start justify-between gap-3 mb-3">
          <div>
            <span className="text-xs text-slate-600 font-mono">#{program.ranking}</span>
            <h3 className="font-semibold text-slate-100 text-base mt-0.5 group-hover:text-indigo-300 transition-colors">
              {program.school}
            </h3>
            <p className="text-slate-500 text-xs mt-0.5">{program.location}</p>
          </div>
          <span className="text-xs font-medium px-2 py-0.5 rounded-md bg-slate-800 text-slate-500 flex-shrink-0">
            {program.shortName}
          </span>
        </div>

        {/* Focus tags */}
        <div className="flex flex-wrap gap-1.5 mb-3">
          {program.focus.map((f) => (
            <span
              key={f}
              className={`text-xs px-2 py-0.5 rounded-full border font-medium ${
                f === "pure-math"
                  ? "bg-indigo-500/10 text-indigo-400 border-indigo-500/20"
                  : f === "applied-math"
                  ? "bg-violet-500/10 text-violet-400 border-violet-500/20"
                  : "bg-cyan-500/10 text-cyan-400 border-cyan-500/20"
              }`}
            >
              {focusLabels[f]}
            </span>
          ))}
        </div>

        <p className="text-slate-400 text-sm leading-relaxed line-clamp-3">{program.description}</p>

        {/* Notable areas */}
        <div className="mt-4">
          <p className="text-xs text-slate-600 mb-1.5">Notable Areas</p>
          <div className="flex flex-wrap gap-1.5">
            {program.notableAreas.map((area) => (
              <span key={area} className="text-xs px-2 py-0.5 rounded-md bg-slate-800 text-slate-500">
                {area}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Card footer */}
      <div className="px-6 py-3 border-t border-slate-800 flex items-center justify-between">
        <span className="text-xs text-slate-600">{program.url.replace("https://", "")}</span>
        <span className="text-xs text-indigo-400 opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-1 font-medium">
          Visit site
          <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
          </svg>
        </span>
      </div>
    </a>
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
      {/* Filter tabs */}
      <div className="flex flex-wrap gap-2 mb-8">
        {focusTabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActive(tab)}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
              active === tab
                ? "bg-indigo-600 text-white"
                : "bg-slate-800 text-slate-400 hover:text-slate-200 hover:bg-slate-700"
            }`}
          >
            {focusLabels[tab]}
            {tab !== "all" && (
              <span className="ml-1.5 text-xs opacity-60">
                ({programs.filter((p) => p.focus.includes(tab as ProgramFocus)).length})
              </span>
            )}
          </button>
        ))}
      </div>

      {/* Programs grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {filtered.map((program) => (
          <ProgramCard key={program.id} program={program} />
        ))}
      </div>

      {filtered.length === 0 && (
        <div className="text-center py-16 text-slate-600">
          No programs found for this filter.
        </div>
      )}
    </div>
  );
}
