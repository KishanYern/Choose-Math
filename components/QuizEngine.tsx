"use client";

import { useState } from "react";
import Link from "next/link";
import { questions, scoreQuiz, type QuizResult } from "@/data/quiz";
import { InkCheck } from "./Ink";

export function QuizEngine() {
  const [currentQ, setCurrentQ] = useState(0);
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [selected, setSelected] = useState<string | null>(null);
  const [result, setResult] = useState<QuizResult | null>(null);

  const question = questions[currentQ];
  const progress = (currentQ / questions.length) * 100;
  const isLast = currentQ === questions.length - 1;

  function handleSelect(optionId: string) {
    setSelected(optionId);
  }

  function handleNext() {
    if (!selected) return;
    const newAnswers = { ...answers, [question.id]: selected };
    setAnswers(newAnswers);

    if (isLast) {
      setResult(scoreQuiz(newAnswers));
    } else {
      setCurrentQ((q) => q + 1);
      setSelected(null);
    }
  }

  function handleBack() {
    if (currentQ === 0) return;
    setCurrentQ((q) => q - 1);
    setSelected(answers[questions[currentQ - 1].id] ?? null);
  }

  function handleRestart() {
    setCurrentQ(0);
    setAnswers({});
    setSelected(null);
    setResult(null);
  }

  if (result) {
    return <QuizResultView result={result} onRestart={handleRestart} />;
  }

  return (
    <div className="max-w-2xl mx-auto">
      {/* Progress */}
      <div className="mb-10">
        <div className="flex justify-between items-baseline mb-3">
          <span className="font-mono text-xs text-ink-faint tracking-wider">
            Question {String(currentQ + 1).padStart(2, "0")} / {String(questions.length).padStart(2, "0")}
          </span>
          <span className="font-mono text-xs text-ink-faint">{Math.round(progress)}%</span>
        </div>
        {/* Thin progress underline */}
        <div className="h-px bg-rule overflow-hidden">
          <div
            className="h-full bg-accent transition-all duration-300"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      {/* Question */}
      <div className="mb-8">
        <h2 className="font-display text-2xl sm:text-3xl text-ink font-normal leading-snug">
          {question.question}
        </h2>
        {currentQ === 0 && (
          <p className="sidenote mt-2">circle one below</p>
        )}
      </div>

      {/* Options */}
      <div className="space-y-2 mb-10">
        {question.options.map((option) => {
          const isChosen = selected === option.id;
          return (
            <button
              key={option.id}
              onClick={() => handleSelect(option.id)}
              className={`w-full text-left px-5 py-4 border transition-colors duration-150 flex items-start gap-4 ${
                isChosen
                  ? "border-accent bg-accent-soft text-ink"
                  : "border-rule bg-paper-2 text-ink-muted hover:border-ink-faint hover:bg-paper-3"
              }`}
            >
              {/* Circle indicator */}
              <span
                className={`mt-0.5 w-4 h-4 shrink-0 border rounded-full flex items-center justify-center transition-colors ${
                  isChosen ? "border-accent bg-accent" : "border-rule"
                }`}
              >
                {isChosen && (
                  <svg viewBox="0 0 8 8" className="w-2 h-2 fill-paper">
                    <circle cx="4" cy="4" r="3" />
                  </svg>
                )}
              </span>
              <span className="text-sm sm:text-base leading-relaxed">{option.text}</span>
            </button>
          );
        })}
      </div>

      {/* Navigation */}
      <div className="flex items-center justify-between border-t border-rule pt-5">
        <button
          onClick={handleBack}
          disabled={currentQ === 0}
          className="font-mono text-xs text-ink-faint hover:text-ink disabled:opacity-30 disabled:cursor-not-allowed transition-colors tracking-wider"
        >
          ← back
        </button>
        <button
          onClick={handleNext}
          disabled={!selected}
          className="font-mono text-xs tracking-wider px-6 py-2.5 bg-accent text-paper hover:bg-ink disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
        >
          {isLast ? "see result →" : "next →"}
        </button>
      </div>
    </div>
  );
}

function QuizResultView({ result, onRestart }: { result: QuizResult; onRestart: () => void }) {
  const careerSlugMap: Record<string, string> = {
    "pure-math": "academia",
    "applied-math": "quantitative-finance",
    "data-science": "data-science",
    actuarial: "actuarial-science",
  };

  return (
    <div className="max-w-2xl mx-auto">
      {/* Result header */}
      <div className="mb-10">
        <p className="font-mono text-xs text-ink-faint tracking-wider mb-3">your result</p>
        <div className="flex items-start gap-3 mb-4">
          <InkCheck size={28} className="text-accent shrink-0 mt-1" />
          <h2 className="font-display text-3xl sm:text-4xl text-ink font-normal leading-tight">
            {result.title}
          </h2>
        </div>
        <div className="border-t border-rule mb-4" />
        <p className="text-ink-muted leading-relaxed">{result.description}</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-rule mb-px">
        {/* Careers */}
        <div className="bg-paper-2 p-5">
          <h3 className="font-mono text-xs text-ink-faint tracking-wider mb-4 uppercase">
            career paths
          </h3>
          <ul className="space-y-2">
            {result.careers.map((career) => (
              <li key={career} className="text-sm text-ink-muted flex items-center gap-2">
                <span className="font-mono text-ink-faint">→</span>
                {career}
              </li>
            ))}
          </ul>
        </div>

        {/* Courses */}
        <div className="bg-paper-2 p-5">
          <h3 className="font-mono text-xs text-ink-faint tracking-wider mb-4 uppercase">
            key courses
          </h3>
          <ul className="space-y-2">
            {result.courses.map((course) => (
              <li key={course} className="text-sm text-ink-muted flex items-center gap-2">
                <span className="font-mono text-ink-faint">∑</span>
                {course}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Next steps */}
      <div className="bg-paper-2 border border-rule p-5 mb-8">
        <h3 className="font-mono text-xs text-ink-faint tracking-wider mb-4 uppercase">
          next steps
        </h3>
        <ol className="space-y-3">
          {result.nextSteps.map((step, i) => (
            <li key={i} className="flex items-start gap-3 text-sm text-ink-muted">
              <span className="font-mono text-ink-faint shrink-0">{String(i + 1).padStart(2, "0")}.</span>
              {step}
            </li>
          ))}
        </ol>
      </div>

      {/* Actions */}
      <div className="flex flex-col sm:flex-row gap-3">
        <Link
          href={`/careers/${careerSlugMap[result.type] ?? "data-science"}`}
          className="flex-1 font-mono text-xs tracking-wider px-5 py-3 bg-accent text-paper text-center hover:bg-ink transition-colors"
        >
          explore related career →
        </Link>
        <Link
          href="/roadmap"
          className="flex-1 font-mono text-xs tracking-wider px-5 py-3 border border-rule text-ink-muted text-center hover:border-ink-faint hover:text-ink transition-colors"
        >
          view the roadmap
        </Link>
        <button
          onClick={onRestart}
          className="font-mono text-xs tracking-wider px-5 py-3 border border-rule text-ink-faint hover:text-ink-muted transition-colors"
        >
          retake quiz
        </button>
      </div>
    </div>
  );
}
