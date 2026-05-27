"use client";

import { useState, useEffect, useRef } from "react";
import { useDebounce } from "@/lib/hooks/useDebounce";
import type { University } from "@/types/university";

type Status = "idle" | "loading" | "results" | "empty" | "error";

function SearchIcon() {
  return (
    <svg
      className="w-4 h-4 text-ink-faint shrink-0"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      viewBox="0 0 24 24"
    >
      <circle cx={11} cy={11} r={8} />
      <path d="m21 21-4.35-4.35" strokeLinecap="round" />
    </svg>
  );
}

function SkeletonRows() {
  return (
    <div>
      {Array.from({ length: 5 }).map((_, i) => (
        <div key={i} className="border-b border-rule py-4 px-2 flex items-start gap-4">
          <div className="w-6 h-4 bg-paper-3 animate-pulse rounded" />
          <div className="flex-1 space-y-2">
            <div className="h-5 bg-paper-3 animate-pulse rounded w-3/5" />
            <div className="h-3 bg-paper-3 animate-pulse rounded w-2/5" />
          </div>
        </div>
      ))}
    </div>
  );
}

function formatSize(size: number): string {
  if (size >= 1000) return `~${Math.round(size / 1000)}k students`;
  return `~${size} students`;
}

export function UniversitySearch() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<University[]>([]);
  const [status, setStatus] = useState<Status>("idle");
  const debouncedQuery = useDebounce(query, 300);
  const abortRef = useRef<AbortController | null>(null);

  useEffect(() => {
    if (debouncedQuery.length < 2) {
      setStatus("idle");
      setResults([]);
      return;
    }

    abortRef.current?.abort();
    const controller = new AbortController();
    abortRef.current = controller;

    setStatus("loading");

    fetch(`/api/universities?q=${encodeURIComponent(debouncedQuery)}`, {
      signal: controller.signal,
    })
      .then((res) => {
        if (!res.ok) throw new Error("fetch failed");
        return res.json();
      })
      .then((data: University[]) => {
        setResults(data);
        setStatus(data.length > 0 ? "results" : "empty");
      })
      .catch((err) => {
        if (err instanceof DOMException && err.name === "AbortError") return;
        setStatus("error");
      });

    return () => controller.abort();
  }, [debouncedQuery]);

  function retry() {
    setQuery((prev) => prev + " ");
    setTimeout(() => setQuery((prev) => prev.trimEnd()), 0);
  }

  return (
    <div>
      {/* Search input */}
      <div className="relative mb-8">
        <div className="absolute left-3 top-1/2 -translate-y-1/2">
          <SearchIcon />
        </div>
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search by university name, city, or state..."
          className="w-full pl-10 pr-4 py-3 border border-rule bg-paper text-ink font-mono text-sm tracking-wide placeholder:text-ink-faint focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-colors"
        />
      </div>

      {/* Idle */}
      {status === "idle" && query.length === 0 && (
        <p className="text-ink-muted text-sm text-center py-12 leading-relaxed">
          Search for universities across the United States by name, city, or
          state abbreviation.
        </p>
      )}

      {/* Loading */}
      {status === "loading" && <SkeletonRows />}

      {/* Results */}
      {status === "results" && (
        <div>
          {results.map((uni, i) => (
            <div key={uni.id} className="border-b border-rule">
              {uni.url ? (
                <a
                  href={uni.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-start gap-4 py-4 text-left hover:bg-paper-2 transition-colors px-2 -mx-2 group"
                >
                  <span className="font-mono text-xs text-ink-faint shrink-0 mt-0.5 w-6">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div className="flex-1 min-w-0">
                    <div className="flex flex-wrap items-baseline gap-2 mb-0.5">
                      <span className="font-display text-base text-ink font-normal group-hover:text-accent transition-colors">
                        {uni.name}
                      </span>
                    </div>
                    <div className="flex flex-wrap gap-3">
                      <span className="font-mono text-[10px] text-ink-faint tracking-wider">
                        {uni.city}, {uni.state}
                      </span>
                      {uni.size && (
                        <span className="font-mono text-[10px] text-ink-faint tracking-wider">
                          {formatSize(uni.size)}
                        </span>
                      )}
                    </div>
                  </div>
                  <span className="font-mono text-ink-faint text-xs shrink-0 mt-0.5 opacity-0 group-hover:opacity-100 transition-opacity">
                    ↗
                  </span>
                </a>
              ) : (
                <div className="w-full flex items-start gap-4 py-4 px-2 -mx-2">
                  <span className="font-mono text-xs text-ink-faint shrink-0 mt-0.5 w-6">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div className="flex-1 min-w-0">
                    <span className="font-display text-base text-ink font-normal">
                      {uni.name}
                    </span>
                    <div className="flex flex-wrap gap-3">
                      <span className="font-mono text-[10px] text-ink-faint tracking-wider">
                        {uni.city}, {uni.state}
                      </span>
                      <span className="font-mono text-[10px] text-ink-faint tracking-wider italic">
                        website unavailable
                      </span>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      )}

      {/* Empty */}
      {status === "empty" && (
        <p className="font-mono text-xs text-ink-faint py-12 text-center tracking-wider">
          no universities found for &ldquo;{debouncedQuery}&rdquo;
        </p>
      )}

      {/* Error */}
      {status === "error" && (
        <div className="py-12 text-center">
          <p className="font-mono text-xs text-ink-faint tracking-wider mb-4">
            something went wrong &mdash; please try again
          </p>
          <button onClick={retry} className="btn-ghost font-mono text-xs tracking-wider">
            retry
          </button>
        </div>
      )}
    </div>
  );
}
