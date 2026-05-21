"use client";

import { useSyncExternalStore } from "react";
import { checklistCategories } from "@/data/checklist";
import { InkCheck } from "./Ink";

const STORAGE_KEY = "choosemath-checklist";

// ── localStorage store ──────────────────────────────────────────────────────

const _listeners = new Set<() => void>();
let _snapshot: Set<string> | undefined;

function _readFromStorage(): Set<string> {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? new Set<string>(JSON.parse(raw)) : new Set();
  } catch {
    return new Set();
  }
}

function subscribeToChecked(cb: () => void) {
  _listeners.add(cb);
  return () => _listeners.delete(cb);
}

function getCheckedSnapshot(): Set<string> {
  if (_snapshot === undefined) _snapshot = _readFromStorage();
  return _snapshot;
}

function getCheckedServerSnapshot(): Set<string> {
  return new Set();
}

function updateChecked(next: Set<string>) {
  _snapshot = next;
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(Array.from(next)));
  } catch {}
  _listeners.forEach((l) => l());
}

function noopSubscribe() {
  return () => {};
}

// ── Component ───────────────────────────────────────────────────────────────

export function ChecklistTracker() {
  const checked = useSyncExternalStore(
    subscribeToChecked,
    getCheckedSnapshot,
    getCheckedServerSnapshot,
  );
  const mounted = useSyncExternalStore(noopSubscribe, () => true, () => false);

  function toggle(id: string) {
    const next = new Set(checked);
    if (next.has(id)) {
      next.delete(id);
    } else {
      next.add(id);
    }
    updateChecked(next);
  }

  function clearAll() {
    updateChecked(new Set());
  }

  const totalItems = checklistCategories.reduce((sum, cat) => sum + cat.items.length, 0);
  const totalChecked = checked.size;
  const overallPercent = Math.round((totalChecked / totalItems) * 100);

  if (!mounted) {
    return (
      <div className="space-y-4">
        {checklistCategories.map((cat) => (
          <div key={cat.id} className="border border-rule bg-paper-2 h-24 animate-pulse" />
        ))}
      </div>
    );
  }

  return (
    <div>
      {/* Overall progress */}
      <div className="mb-8 bg-paper-2 border border-rule p-5">
        <div className="flex items-center justify-between mb-3">
          <div>
            <p className="font-mono text-xs text-ink-faint tracking-wider uppercase">Overall Progress</p>
            <p className="text-ink text-sm mt-1">{totalChecked} of {totalItems} items complete</p>
          </div>
          <div className="text-right">
            <p className="font-display text-3xl text-ink font-normal">{overallPercent}<span className="text-xl text-ink-faint">%</span></p>
            {totalChecked > 0 && (
              <button
                onClick={clearAll}
                className="font-mono text-[11px] text-ink-faint hover:text-marker transition-colors tracking-wider"
              >
                reset all
              </button>
            )}
          </div>
        </div>
        <div className="h-px bg-rule overflow-hidden">
          <div
            className="h-full bg-accent transition-all duration-500"
            style={{ width: `${overallPercent}%` }}
          />
        </div>
      </div>

      {/* Categories */}
      <div className="space-y-6">
        {checklistCategories.map((category) => {
          const catChecked = category.items.filter((item) => checked.has(item.id)).length;
          const catPercent = Math.round((catChecked / category.items.length) * 100);
          const allDone = catChecked === category.items.length;

          return (
            <div
              key={category.id}
              className={`border transition-colors ${
                allDone ? "border-accent" : "border-rule"
              } bg-paper-2`}
            >
              {/* Category header */}
              <div className="px-5 pt-5 pb-3 border-b border-rule">
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <h3 className="font-display text-base text-ink font-normal">
                      {category.title}
                      {allDone && (
                        <span className="ml-2 font-mono text-[10px] text-accent tracking-wider align-middle">
                          complete ✓
                        </span>
                      )}
                    </h3>
                    <p className="font-mono text-[11px] text-ink-faint mt-0.5 tracking-wider">{category.description}</p>
                  </div>
                  <span className="font-mono text-xs text-ink-faint shrink-0">
                    {catChecked}/{category.items.length}
                  </span>
                </div>
                {/* Category progress */}
                <div className="h-px bg-rule overflow-hidden mt-3">
                  <div
                    className={`h-full transition-all duration-300 ${allDone ? "bg-accent" : "bg-ink-faint"}`}
                    style={{ width: `${catPercent}%` }}
                  />
                </div>
              </div>

              {/* Items */}
              <div className="px-5 py-4 space-y-3">
                {category.items.map((item) => {
                  const isChecked = checked.has(item.id);
                  return (
                    <label key={item.id} className="flex items-start gap-3 cursor-pointer group">
                      <div className="relative shrink-0 mt-0.5">
                        <input
                          type="checkbox"
                          checked={isChecked}
                          onChange={() => toggle(item.id)}
                          className="sr-only"
                        />
                        <div
                          className={`w-5 h-5 border flex items-center justify-center transition-colors ${
                            isChecked
                              ? "border-accent bg-accent-soft"
                              : "border-rule group-hover:border-ink-faint"
                          }`}
                        >
                          {isChecked && (
                            <InkCheck size={14} className="text-accent" />
                          )}
                        </div>
                      </div>
                      <span
                        className={`text-sm leading-relaxed transition-colors ${
                          isChecked
                            ? "text-ink-faint line-through"
                            : "text-ink-muted group-hover:text-ink"
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
