"use client";

import { useState, useEffect, useRef } from "react";
import { useDebounce } from "@/lib/hooks/useDebounce";
import type { University } from "@/types/university";

type Status = "idle" | "loading" | "results" | "empty" | "error";
type SortKey = "name" | "size" | "sat" | "admissionRate";

const US_STATES_LIST = [
  { abbr: "AL", name: "Alabama" }, { abbr: "AK", name: "Alaska" },
  { abbr: "AZ", name: "Arizona" }, { abbr: "AR", name: "Arkansas" },
  { abbr: "CA", name: "California" }, { abbr: "CO", name: "Colorado" },
  { abbr: "CT", name: "Connecticut" }, { abbr: "DE", name: "Delaware" },
  { abbr: "FL", name: "Florida" }, { abbr: "GA", name: "Georgia" },
  { abbr: "HI", name: "Hawaii" }, { abbr: "ID", name: "Idaho" },
  { abbr: "IL", name: "Illinois" }, { abbr: "IN", name: "Indiana" },
  { abbr: "IA", name: "Iowa" }, { abbr: "KS", name: "Kansas" },
  { abbr: "KY", name: "Kentucky" }, { abbr: "LA", name: "Louisiana" },
  { abbr: "ME", name: "Maine" }, { abbr: "MD", name: "Maryland" },
  { abbr: "MA", name: "Massachusetts" }, { abbr: "MI", name: "Michigan" },
  { abbr: "MN", name: "Minnesota" }, { abbr: "MS", name: "Mississippi" },
  { abbr: "MO", name: "Missouri" }, { abbr: "MT", name: "Montana" },
  { abbr: "NE", name: "Nebraska" }, { abbr: "NV", name: "Nevada" },
  { abbr: "NH", name: "New Hampshire" }, { abbr: "NJ", name: "New Jersey" },
  { abbr: "NM", name: "New Mexico" }, { abbr: "NY", name: "New York" },
  { abbr: "NC", name: "North Carolina" }, { abbr: "ND", name: "North Dakota" },
  { abbr: "OH", name: "Ohio" }, { abbr: "OK", name: "Oklahoma" },
  { abbr: "OR", name: "Oregon" }, { abbr: "PA", name: "Pennsylvania" },
  { abbr: "RI", name: "Rhode Island" }, { abbr: "SC", name: "South Carolina" },
  { abbr: "SD", name: "South Dakota" }, { abbr: "TN", name: "Tennessee" },
  { abbr: "TX", name: "Texas" }, { abbr: "UT", name: "Utah" },
  { abbr: "VT", name: "Vermont" }, { abbr: "VA", name: "Virginia" },
  { abbr: "WA", name: "Washington" }, { abbr: "WV", name: "West Virginia" },
  { abbr: "WI", name: "Wisconsin" }, { abbr: "WY", name: "Wyoming" },
  { abbr: "DC", name: "Washington D.C." },
];

const SORT_LABELS: Record<SortKey, string> = {
  name: "Name",
  size: "Size",
  sat: "SAT score",
  admissionRate: "Selectivity",
};

function SearchIcon({ className = "" }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
      <circle cx={11} cy={11} r={8} />
      <path d="m21 21-4.35-4.35" strokeLinecap="round" />
    </svg>
  );
}

function ChevronDown({ className = "" }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
      <path d="m6 9 6 6 6-6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function PinIcon({ className = "" }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
      <path d="M12 22s-7-7-7-12a7 7 0 1 1 14 0c0 5-7 12-7 12Z" strokeLinejoin="round" />
      <circle cx={12} cy={10} r={2.5} />
    </svg>
  );
}

function SkeletonRows() {
  return (
    <div>
      {Array.from({ length: 5 }).map((_, i) => (
        <div key={i} className="border-b border-rule py-5 px-2 flex items-start gap-4">
          <div className="w-6 h-4 bg-paper-3 animate-pulse rounded" />
          <div className="flex-1 space-y-2">
            <div className="h-5 bg-paper-3 animate-pulse rounded w-3/5" />
            <div className="h-3 bg-paper-3 animate-pulse rounded w-2/5" />
            <div className="flex gap-2 pt-1">
              <div className="h-4 w-12 bg-paper-3 animate-pulse rounded" />
              <div className="h-4 w-16 bg-paper-3 animate-pulse rounded" />
              <div className="h-4 w-14 bg-paper-3 animate-pulse rounded" />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

function formatSize(size: number): string {
  if (size >= 1000) return `~${Math.round(size / 1000)}k`;
  return `~${size}`;
}

function sortResults(results: University[], key: SortKey): University[] {
  const copy = [...results];
  if (key === "name") return copy.sort((a, b) => a.name.localeCompare(b.name));
  if (key === "size") return copy.sort((a, b) => (b.size ?? 0) - (a.size ?? 0));
  if (key === "sat") return copy.sort((a, b) => (b.satAvg ?? 0) - (a.satAvg ?? 0));
  if (key === "admissionRate") {
    return copy.sort((a, b) => {
      if (a.admissionRate === null && b.admissionRate === null) return 0;
      if (a.admissionRate === null) return 1;
      if (b.admissionRate === null) return -1;
      return a.admissionRate - b.admissionRate;
    });
  }
  return copy;
}

export function UniversitySearch() {
  const [query, setQuery] = useState("");
  const [selectedState, setSelectedState] = useState("");
  const [cityFilter, setCityFilter] = useState("");
  const [sortKey, setSortKey] = useState<SortKey>("name");
  const [rawResults, setRawResults] = useState<University[]>([]);
  const [settled, setSettled] = useState<"idle" | "results" | "empty" | "error">("idle");
  const [fetchKey, setFetchKey] = useState("");
  const [retryCount, setRetryCount] = useState(0);
  const debouncedQuery = useDebounce(query, 300);
  const debouncedCity = useDebounce(cityFilter, 350);
  const abortRef = useRef<AbortController | null>(null);

  const shouldSearch =
    debouncedQuery.length >= 2 ||
    selectedState !== "" ||
    debouncedCity.length >= 2;
  const currentKey = `${debouncedQuery}|${selectedState}|${debouncedCity}`;
  const isLoading = shouldSearch && fetchKey !== currentKey;
  const status: Status = !shouldSearch ? "idle" : isLoading ? "loading" : settled;

  // When the user clears all filters, we want results gone visually. The
  // `status === "idle"` branch already hides the list, but we also derive an
  // empty results array so nothing leaks into other render paths.
  const results = shouldSearch ? sortResults(rawResults, sortKey) : [];

  useEffect(() => {
    if (!shouldSearch) return;

    abortRef.current?.abort();
    const controller = new AbortController();
    abortRef.current = controller;

    const params = new URLSearchParams();
    if (debouncedQuery.length >= 2) params.set("q", debouncedQuery);
    if (selectedState) params.set("state", selectedState);
    if (debouncedCity.length >= 2) params.set("city", debouncedCity);

    fetch(`/api/universities?${params.toString()}`, { signal: controller.signal })
      .then((res) => {
        if (!res.ok) throw new Error("fetch failed");
        return res.json();
      })
      .then((data: University[]) => {
        setRawResults(data);
        setSettled(data.length > 0 ? "results" : "empty");
        setFetchKey(currentKey);
      })
      .catch((err) => {
        if (err instanceof DOMException && err.name === "AbortError") return;
        setSettled("error");
        setFetchKey(currentKey);
      });

    return () => controller.abort();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [debouncedQuery, selectedState, debouncedCity, retryCount]);

  const activeFilterSummary = [
    debouncedCity && debouncedCity.length >= 2 ? debouncedCity : null,
    selectedState || null,
  ]
    .filter(Boolean)
    .join(", ");

  return (
    <div>
      {/* Search bar */}
      <div className="group flex items-center gap-3 px-4 py-3 border border-rule bg-paper focus-within:border-accent focus-within:ring-1 focus-within:ring-accent transition-colors mb-3">
        <SearchIcon className="w-4 h-4 text-ink-faint shrink-0" />
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search universities..."
          className="flex-1 bg-transparent border-0 outline-none text-ink font-mono text-sm tracking-wide placeholder:text-ink-faint min-w-0"
        />
        {query && (
          <button
            onClick={() => setQuery("")}
            className="font-mono text-xs text-ink-faint hover:text-ink transition-colors shrink-0"
            aria-label="Clear search"
          >
            ×
          </button>
        )}
      </div>

      {/* Filter pills + sort */}
      <div className="flex flex-wrap items-center gap-2 mb-8">
        {/* State pill */}
        <div className="relative inline-flex">
          <select
            value={selectedState}
            onChange={(e) => setSelectedState(e.target.value)}
            className={`appearance-none font-mono text-[11px] tracking-wider pl-3 pr-7 py-1.5 border bg-paper outline-none transition-colors cursor-pointer ${
              selectedState
                ? "border-accent text-accent"
                : "border-rule text-ink-muted hover:border-ink-faint"
            }`}
          >
            <option value="">All states</option>
            {US_STATES_LIST.map((s) => (
              <option key={s.abbr} value={s.abbr}>
                {s.name}
              </option>
            ))}
          </select>
          <ChevronDown className="pointer-events-none absolute right-2 top-1/2 -translate-y-1/2 w-3 h-3 text-ink-faint" />
        </div>

        {/* City pill */}
        <div className="relative inline-flex items-center">
          <PinIcon className="pointer-events-none absolute left-2.5 w-3 h-3 text-ink-faint" />
          <input
            type="text"
            value={cityFilter}
            onChange={(e) => setCityFilter(e.target.value)}
            placeholder="City"
            className={`font-mono text-[11px] tracking-wider pl-7 pr-7 py-1.5 border bg-paper outline-none transition-colors w-32 ${
              cityFilter
                ? "border-accent text-accent placeholder:text-accent/40"
                : "border-rule text-ink-muted placeholder:text-ink-faint hover:border-ink-faint focus:border-accent"
            }`}
          />
          {cityFilter && (
            <button
              onClick={() => setCityFilter("")}
              className="absolute right-2 font-mono text-xs text-ink-faint hover:text-ink transition-colors"
              aria-label="Clear city"
            >
              ×
            </button>
          )}
        </div>

        {/* Spacer */}
        <div className="flex-1 min-w-0" />

        {/* Sort */}
        <div className="flex items-center gap-2">
          <span className="font-mono text-[10px] text-ink-faint tracking-widest uppercase">Sort</span>
          <div className="relative inline-flex">
            <select
              value={sortKey}
              onChange={(e) => setSortKey(e.target.value as SortKey)}
              className="appearance-none font-mono text-[11px] tracking-wider pl-3 pr-7 py-1.5 border border-rule bg-paper text-ink-muted hover:border-ink-faint focus:border-accent outline-none transition-colors cursor-pointer"
            >
              {(Object.keys(SORT_LABELS) as SortKey[]).map((k) => (
                <option key={k} value={k}>
                  {SORT_LABELS[k]}
                </option>
              ))}
            </select>
            <ChevronDown className="pointer-events-none absolute right-2 top-1/2 -translate-y-1/2 w-3 h-3 text-ink-faint" />
          </div>
        </div>
      </div>

      {/* Idle */}
      {status === "idle" && (
        <p className="text-ink-muted text-sm text-center py-12 leading-relaxed">
          Search by name, pick a state, or filter by city to begin.
        </p>
      )}

      {/* Loading */}
      {status === "loading" && <SkeletonRows />}

      {/* Results */}
      {status === "results" && (
        <div>
          <p className="font-mono text-[10px] text-ink-faint tracking-widest uppercase mb-4">
            {results.length} {results.length === 1 ? "result" : "results"}
            {activeFilterSummary && <span> · {activeFilterSummary}</span>}
          </p>
          {results.map((uni, i) => {
            const inner = (
              <>
                <span className="font-mono text-xs text-ink-faint shrink-0 mt-1 w-6">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div className="flex-1 min-w-0">
                  <div className="flex items-baseline gap-2 mb-1">
                    <span className="font-display text-base text-ink font-normal group-hover:text-accent transition-colors">
                      {uni.name}
                    </span>
                  </div>
                  <p className="font-mono text-[10px] text-ink-faint tracking-wider mb-2">
                    {uni.city}, {uni.state}
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {uni.size !== null && (
                      <span className="inline-block font-mono text-[10px] tracking-wider px-1.5 py-0.5 border border-rule text-ink-muted">
                        {formatSize(uni.size)} students
                      </span>
                    )}
                    {uni.satAvg !== null && (
                      <span className="inline-block font-mono text-[10px] tracking-wider px-1.5 py-0.5 border border-accent/40 bg-accent/5 text-accent">
                        SAT {uni.satAvg}
                      </span>
                    )}
                    {uni.admissionRate !== null && (
                      <span className="inline-block font-mono text-[10px] tracking-wider px-1.5 py-0.5 border border-rule text-ink-muted">
                        {(uni.admissionRate * 100).toFixed(0)}% admit
                      </span>
                    )}
                  </div>
                </div>
                <span className="font-mono text-ink-faint text-xs shrink-0 mt-1 opacity-0 group-hover:opacity-100 transition-opacity">
                  ↗
                </span>
              </>
            );

            return (
              <div key={uni.id} className="border-b border-rule">
                {uni.url ? (
                  <a
                    href={uni.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-start gap-4 py-5 text-left hover:bg-paper-2 transition-colors px-2 -mx-2 group"
                  >
                    {inner}
                  </a>
                ) : (
                  <div className="w-full flex items-start gap-4 py-5 px-2 -mx-2 group">
                    {inner}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      )}

      {/* Empty */}
      {status === "empty" && (
        <p className="font-mono text-xs text-ink-faint py-12 text-center tracking-wider">
          no universities found
          {debouncedQuery && ` for "${debouncedQuery}"`}
          {activeFilterSummary && ` in ${activeFilterSummary}`}
        </p>
      )}

      {/* Error */}
      {status === "error" && (
        <div className="py-12 text-center">
          <p className="font-mono text-xs text-ink-faint tracking-wider mb-4">
            something went wrong &mdash; please try again
          </p>
          <button
            onClick={() => setRetryCount((c) => c + 1)}
            className="font-mono text-xs tracking-wider px-4 py-2 border border-rule text-ink-faint hover:border-ink-faint hover:text-ink transition-colors"
          >
            retry
          </button>
        </div>
      )}
    </div>
  );
}
