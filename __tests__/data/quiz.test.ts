import { describe, it, expect } from "vitest";
import { scoreQuiz, questionsByLevel, results, type ExperienceLevel } from "@/data/quiz";

// Use the advanced question set as the reference (most complete, original questions)
const level: ExperienceLevel = "advanced";
const questions = questionsByLevel[level];

// Build answer sets where every question picks the option that most scores a given type.
// Each question has options ending in a/b/c/d corresponding to pure-math/applied-math/data-science/actuarial.
const allPureMath = Object.fromEntries(questions.map((q) => [q.id, `${q.id}a`]));
const allApplied = Object.fromEntries(questions.map((q) => [q.id, `${q.id}b`]));
const allDataScience = Object.fromEntries(questions.map((q) => [q.id, `${q.id}c`]));
const allActuarial = Object.fromEntries(questions.map((q) => [q.id, `${q.id}d`]));

describe("scoreQuiz", () => {
  it("returns pure-math result when all answers favour pure math", () => {
    const result = scoreQuiz(allPureMath, level);
    expect(result.type).toBe("pure-math");
  });

  it("returns applied-math result when all answers favour applied math", () => {
    const result = scoreQuiz(allApplied, level);
    expect(result.type).toBe("applied-math");
  });

  it("returns data-science result when all answers favour data science", () => {
    const result = scoreQuiz(allDataScience, level);
    expect(result.type).toBe("data-science");
  });

  it("returns actuarial result when all answers favour actuarial", () => {
    const result = scoreQuiz(allActuarial, level);
    expect(result.type).toBe("actuarial");
  });

  it("falls back to pure-math when answers are empty (seed default)", () => {
    const result = scoreQuiz({}, level);
    expect(result.type).toBe("pure-math");
  });

  it("ignores answers for question IDs that do not exist", () => {
    const result = scoreQuiz({ ...allPureMath, 999: "999a" }, level);
    expect(result.type).toBe("pure-math");
  });

  it("ignores answers with invalid option IDs", () => {
    const result = scoreQuiz({ 1: "bad-option-id" }, level);
    expect(result.type).toBe("pure-math");
  });

  it("returns a result with all required fields", () => {
    const result = scoreQuiz(allPureMath, level);
    expect(result).toHaveProperty("type");
    expect(result).toHaveProperty("title");
    expect(result).toHaveProperty("emoji");
    expect(result).toHaveProperty("description");
    expect(Array.isArray(result.careers)).toBe(true);
    expect(Array.isArray(result.nextSteps)).toBe(true);
    expect(Array.isArray(result.courses)).toBe(true);
  });

  it("returns results that exist in the results map", () => {
    for (const answerSet of [allPureMath, allApplied, allDataScience, allActuarial]) {
      const result = scoreQuiz(answerSet, level);
      expect(results[result.type]).toBeDefined();
      expect(results[result.type].type).toBe(result.type);
    }
  });

  it("works correctly for all three experience levels", () => {
    const levels: ExperienceLevel[] = ["beginner", "intermediate", "advanced"];
    for (const lvl of levels) {
      const qs = questionsByLevel[lvl];
      const pureMathAnswers = Object.fromEntries(qs.map((q) => [q.id, `${q.id}a`]));
      const result = scoreQuiz(pureMathAnswers, lvl);
      expect(result.type).toBe("pure-math");
    }
  });
});

describe("quiz data integrity", () => {
  it("each level has exactly 7 questions", () => {
    for (const lvl of ["beginner", "intermediate", "advanced"] as ExperienceLevel[]) {
      expect(questionsByLevel[lvl]).toHaveLength(7);
    }
  });

  it("questions have sequential IDs from 1 to 7", () => {
    for (const lvl of ["beginner", "intermediate", "advanced"] as ExperienceLevel[]) {
      const ids = questionsByLevel[lvl].map((q) => q.id).sort((a, b) => a - b);
      expect(ids).toEqual([1, 2, 3, 4, 5, 6, 7]);
    }
  });

  it("every question has exactly 4 options", () => {
    for (const lvl of ["beginner", "intermediate", "advanced"] as ExperienceLevel[]) {
      for (const q of questionsByLevel[lvl]) {
        expect(q.options).toHaveLength(4);
      }
    }
  });

  it("every option has at least one score entry", () => {
    for (const lvl of ["beginner", "intermediate", "advanced"] as ExperienceLevel[]) {
      for (const q of questionsByLevel[lvl]) {
        for (const opt of q.options) {
          expect(Object.keys(opt.scores).length).toBeGreaterThan(0);
        }
      }
    }
  });

  it("has results for all four types", () => {
    const types: string[] = ["pure-math", "applied-math", "data-science", "actuarial"];
    for (const type of types) {
      expect(results).toHaveProperty(type);
    }
  });
});
