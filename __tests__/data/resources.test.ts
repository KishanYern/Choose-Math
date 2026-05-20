import { describe, it, expect } from "vitest";
import { resources, getResourcesByCategory, categoryLabels } from "@/data/resources";
import type { ResourceCategory, DifficultyLevel } from "@/data/resources";

const VALID_CATEGORIES: ResourceCategory[] = [
  "textbooks",
  "online-courses",
  "competitions",
  "tools",
  "communities",
];

const VALID_DIFFICULTIES: DifficultyLevel[] = ["beginner", "intermediate", "advanced"];

describe("getResourcesByCategory", () => {
  it("returns only resources matching the requested category", () => {
    for (const category of VALID_CATEGORIES) {
      const result = getResourcesByCategory(category);
      for (const r of result) {
        expect(r.category).toBe(category);
      }
    }
  });

  it("returns at least one resource per category", () => {
    for (const category of VALID_CATEGORIES) {
      expect(getResourcesByCategory(category).length).toBeGreaterThan(0);
    }
  });

  it("all category results combined equal total resources", () => {
    const total = VALID_CATEGORIES.reduce(
      (sum, cat) => sum + getResourcesByCategory(cat).length,
      0
    );
    expect(total).toBe(resources.length);
  });
});

describe("resources data integrity", () => {
  it("has at least 20 resources", () => {
    expect(resources.length).toBeGreaterThanOrEqual(20);
  });

  it("all resource IDs are unique", () => {
    const ids = resources.map((r) => r.id);
    expect(new Set(ids).size).toBe(ids.length);
  });

  it("every resource has a valid category", () => {
    for (const r of resources) {
      expect(VALID_CATEGORIES).toContain(r.category);
    }
  });

  it("every resource has a valid difficulty level", () => {
    for (const r of resources) {
      expect(VALID_DIFFICULTIES).toContain(r.difficulty);
    }
  });

  it("every resource has a valid URL", () => {
    for (const r of resources) {
      expect(r.url).toMatch(/^https?:\/\//);
    }
  });

  it("every resource has a non-empty title and description", () => {
    for (const r of resources) {
      expect(r.title.trim()).toBeTruthy();
      expect(r.description.trim()).toBeTruthy();
    }
  });

  it("categoryLabels covers every valid category", () => {
    for (const category of VALID_CATEGORIES) {
      expect(categoryLabels).toHaveProperty(category);
      expect((categoryLabels as Record<string, string>)[category].trim()).toBeTruthy();
    }
  });
});
