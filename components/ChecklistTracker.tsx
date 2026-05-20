"use client";

import { useEffect, useState } from "react";
import { checklistCategories } from "@/data/checklist";

const STORAGE_KEY = "choosemath-checklist";

export function ChecklistTracker() {
  const [checked, setChecked] = useState<Set<string>>(new Set());
  const [mounted, setMounted] = useState(false);

  // Load from localStorage on mount
  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) {
        setChecked(new Set(JSON.parse(stored)));
      }
    } catch {
      // Ignore parse errors
    }
    setMounted(true);
  }, []);

  // Persist to localStorage on change
  useEffect(() => {
    if (!mounted) return;
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(Array.from(checked)));
    } catch {
      // Ignore storage errors
    }
  }, [checked, mounted]);

  function toggle(id: string) {
    setChecked((prev) => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }
      return next;
    });
  }

  function clearAll() {
    setChecked(new Set());
  }

  const totalItems = checklistCategories.reduce((sum, cat) => sum + cat.items.length, 0);
  const totalChecked = checked.size;
  const overallPercent = Math.round((totalChecked / totalItems) * 100);

  if (!mounted) {
    return (
      <div className="space-y-4">
        {checklistCategories.map((cat) => (
          <div key={cat.id} className="rounded-2xl border border-slate-800 bg-slate-900/50 h-32 animate-pulse" />
        ))}
      </div>
    );
  }

  return (
    <div>
      {/* Overall progress */}
      <div className="mb-8 p-5 rounded-2xl border border-slate-800 bg-slate-900/50">
        <div className="flex items-center justify-between mb-3">
          <div>
            <p className="text-slate-300 font-semibold text-sm">Overall Progress</p>
            <p className="text-slate-500 text-xs mt-0.5">{totalChecked} of {totalItems} items completed</p>
          </div>
          <div className="text-right">
            <p className="text-2xl font-bold text-indigo-400">{overallPercent}%</p>
            {totalChecked > 0 && (
              <button
                onClick={clearAll}
                className="text-xs text-slate-600 hover:text-slate-400 transition-colors mt-0.5"
              >
                Reset all
              </button>
            )}
          </div>
        </div>
        <div className="h-2 bg-slate-800 rounded-full overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-indigo-500 to-violet-500 rounded-full transition-all duration-500"
            style={{ width: `${overallPercent}%` }}
          />
        </div>
      </div>

      {/* Categories */}
      <div className="space-y-5">
        {checklistCategories.map((category) => {
          const catChecked = category.items.filter((item) => checked.has(item.id)).length;
          const catPercent = Math.round((catChecked / category.items.length) * 100);
          const allDone = catChecked === category.items.length;

          return (
            <div
              key={category.id}
              className={`rounded-2xl border overflow-hidden transition-colors ${
                allDone
                  ? "border-indigo-500/30 bg-indigo-500/5"
                  : "border-slate-800 bg-slate-900/50"
              }`}
            >
              {/* Category header */}
              <div className="px-6 pt-5 pb-4">
                <div className="flex items-start justify-between gap-4 mb-1">
                  <div className="flex items-center gap-3">
                    <span className="text-xl math-symbol text-indigo-400 font-light">{category.icon}</span>
                    <div>
                      <h3 className={`font-semibold text-base ${allDone ? "text-indigo-300" : "text-slate-100"}`}>
                        {category.title}
                        {allDone && (
                          <span className="ml-2 text-xs px-1.5 py-0.5 rounded-md bg-indigo-500/20 text-indigo-400 font-medium align-middle">
                            Complete ✓
                          </span>
                        )}
                      </h3>
                      <p className="text-slate-500 text-xs mt-0.5">{category.description}</p>
                    </div>
                  </div>
                  <div className="text-right flex-shrink-0">
                    <span className="text-sm font-semibold text-slate-300">{catChecked}/{category.items.length}</span>
                  </div>
                </div>

                {/* Category progress bar */}
                <div className="h-1 bg-slate-800 rounded-full overflow-hidden mt-3">
                  <div
                    className={`h-full rounded-full transition-all duration-300 ${
                      allDone
                        ? "bg-indigo-400"
                        : "bg-gradient-to-r from-indigo-600 to-violet-600"
                    }`}
                    style={{ width: `${catPercent}%` }}
                  />
                </div>
              </div>

              {/* Items */}
              <div className="px-6 pb-5 space-y-2">
                {category.items.map((item) => {
                  const isChecked = checked.has(item.id);
                  return (
                    <label
                      key={item.id}
                      className="flex items-start gap-3 cursor-pointer group"
                    >
                      <div className="relative flex-shrink-0 mt-0.5">
                        <input
                          type="checkbox"
                          checked={isChecked}
                          onChange={() => toggle(item.id)}
                          className="sr-only"
                        />
                        <div
                          className={`w-4.5 h-4.5 rounded border-2 transition-all flex items-center justify-center ${
                            isChecked
                              ? "border-indigo-500 bg-indigo-500"
                              : "border-slate-600 group-hover:border-slate-400"
                          }`}
                          style={{ width: "1.125rem", height: "1.125rem" }}
                        >
                          {isChecked && (
                            <svg
                              className="w-2.5 h-2.5 text-white"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                              strokeWidth={3}
                            >
                              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                            </svg>
                          )}
                        </div>
                      </div>
                      <span
                        className={`text-sm leading-relaxed transition-colors ${
                          isChecked
                            ? "text-slate-500 line-through"
                            : "text-slate-300 group-hover:text-slate-100"
                        }`}
                      >
                        {item.text}
                      </span>
                    </label>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
