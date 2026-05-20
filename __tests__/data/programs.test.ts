import { describe, it, expect } from "vitest";
import { programs, filterPrograms } from "@/data/programs";
import type { ProgramFocus } from "@/data/programs";

describe("filterPrograms", () => {
  it("returns all programs when no focus is provided", () => {
    expect(filterPrograms()).toHaveLength(programs.length);
  });

  it("returns only programs that include 'pure-math' focus", () => {
    const result = filterPrograms("pure-math");
    expect(result.length).toBeGreaterThan(0);
    for (const p of result) {
      expect(p.focus).toContain("pure-math");
    }
  });

  it("returns only programs that include 'applied-math' focus", () => {
    const result = filterPrograms("applied-math");
    expect(result.length).toBeGreaterThan(0);
    for (const p of result) {
      expect(p.focus).toContain("applied-math");
    }
  });

  it("returns only programs that include 'statistics' focus", () => {
    const result = filterPrograms("statistics");
    expect(result.length).toBeGreaterThan(0);
    for (const p of result) {
      expect(p.focus).toContain("statistics");
    }
  });

  it("a multi-focus program appears in results for each of its focuses", () => {
    // Berkeley has all three focuses
    const berkeley = programs.find((p) => p.shortName === "Berkeley");
    expect(berkeley).toBeDefined();

    const focuses: ProgramFocus[] = ["pure-math", "applied-math", "statistics"];
    for (const focus of focuses) {
      const result = filterPrograms(focus);
      expect(result.some((p) => p.id === berkeley!.id)).toBe(true);
    }
  });

  it("a pure-math-only program does not appear in statistics results", () => {
    // Princeton is pure-math only
    const princeton = programs.find((p) => p.shortName === "Princeton");
    expect(princeton).toBeDefined();

    const statsResult = filterPrograms("statistics");
    expect(statsResult.some((p) => p.id === princeton!.id)).toBe(false);
  });
});

describe("programs data integrity", () => {
  it("has exactly 10 programs", () => {
    expect(programs).toHaveLength(10);
  });

  it("all program IDs are unique", () => {
    const ids = programs.map((p) => p.id);
    expect(new Set(ids).size).toBe(ids.length);
  });

  it("every program has at least one focus area", () => {
    for (const p of programs) {
      expect(p.focus.length).toBeGreaterThan(0);
    }
  });

  it("every program has a valid URL", () => {
    for (const p of programs) {
      expect(p.url).toMatch(/^https?:\/\//);
    }
  });

  it("every program has non-empty highlights and notableAreas", () => {
    for (const p of programs) {
      expect(p.highlights.length).toBeGreaterThan(0);
      expect(p.notableAreas.length).toBeGreaterThan(0);
    }
  });
});
