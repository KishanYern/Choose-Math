import { describe, it, expect } from "vitest";
import { careers, getCareerBySlug, getFeaturedCareers } from "@/data/careers";

describe("getCareerBySlug", () => {
  it("returns the correct career for a valid slug", () => {
    const career = getCareerBySlug("data-science");
    expect(career).toBeDefined();
    expect(career?.slug).toBe("data-science");
  });

  it("returns undefined for a slug that does not exist", () => {
    expect(getCareerBySlug("not-a-real-career")).toBeUndefined();
  });

  it("returns undefined for an empty string", () => {
    expect(getCareerBySlug("")).toBeUndefined();
  });

  it("finds every career by its own slug", () => {
    for (const career of careers) {
      expect(getCareerBySlug(career.slug)?.id).toBe(career.id);
    }
  });
});

describe("getFeaturedCareers", () => {
  it("returns only careers marked featured", () => {
    const featured = getFeaturedCareers();
    for (const career of featured) {
      expect(career.featured).toBe(true);
    }
  });

  it("returns exactly 3 featured careers", () => {
    expect(getFeaturedCareers()).toHaveLength(3);
  });
});

describe("careers data integrity", () => {
  it("has exactly 7 career tracks", () => {
    expect(careers).toHaveLength(7);
  });

  it("all career slugs are unique", () => {
    const slugs = careers.map((c) => c.slug);
    expect(new Set(slugs).size).toBe(slugs.length);
  });

  it("all career IDs are unique", () => {
    const ids = careers.map((c) => c.id);
    expect(new Set(ids).size).toBe(ids.length);
  });

  it("every career has a salary range where min < max", () => {
    for (const career of careers) {
      expect(career.salaryRange.min).toBeLessThan(career.salaryRange.max);
    }
  });

  it("every career has non-empty required skills and employers", () => {
    for (const career of careers) {
      expect(career.requiredSkills.length).toBeGreaterThan(0);
      expect(career.employers.length).toBeGreaterThan(0);
    }
  });

  it("every career has a salary source with a label and URL", () => {
    for (const career of careers) {
      expect(career.salarySource.label).toBeTruthy();
      expect(career.salarySource.url).toMatch(/^https?:\/\//);
    }
  });

  it("known slugs are present", () => {
    const expectedSlugs = [
      "quantitative-finance",
      "machine-learning-ai",
      "actuarial-science",
      "cryptography",
      "operations-research",
      "academia",
      "data-science",
    ];
    for (const slug of expectedSlugs) {
      expect(getCareerBySlug(slug)).toBeDefined();
    }
  });
});
