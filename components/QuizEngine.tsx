"use client";

import { useState } from "react";
import Link from "next/link";
import { questions, scoreQuiz, type QuizResult } from "@/data/quiz";

export function QuizEngine() {
  const [currentQ, setCurrentQ] = useState(0);
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [selected, setSelected] = useState<string | null>(null);
  const [result, setResult] = useState<QuizResult | null>(null);

  const question = questions[currentQ];
  const progress = ((currentQ) / questions.length) * 100;
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
      {/* Progress bar */}
      <div className="mb-8">
        <div className="flex justify-between text-xs text-slate-500 mb-2">
          <span>Question {currentQ + 1} of {questions.length}</span>
          <span>{Math.round(progress)}% complete</span>
        </div>
        <div className="h-1.5 bg-slate-200 dark:bg-slate-800 rounded-full overflow-hidden">
          <div
            className="h-full bg-linear-to-r from-indigo-500 to-violet-500 rounded-full transition-all duration-300"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      {/* Question */}
      <div className="mb-8">
        <p className="text-xs font-medium text-indigo-600 dark:text-indigo-400 uppercase tracking-wider mb-3">
          Question {currentQ + 1}
        </p>
        <h2 className="text-xl sm:text-2xl font-semibold text-slate-900 dark:text-slate-100 leading-snug">
          {question.question}
        </h2>
      </div>

      {/* Options */}
      <div className="space-y-3 mb-8">
        {question.options.map((option) => {
          const isChosen = selected === option.id;
          return (
            <button
              key={option.id}
              onClick={() => handleSelect(option.id)}
              className={`w-full text-left px-5 py-4 rounded-xl border transition-all duration-150 ${
                isChosen
                  ? "border-indigo-500 bg-indigo-500/10 text-slate-900 dark:text-slate-100"
                  : "border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900/50 text-slate-700 dark:text-slate-300 hover:border-indigo-300 dark:hover:border-slate-500 hover:bg-slate-50 dark:hover:bg-slate-800/50"
              }`}
            >
              <div className="flex items-start gap-3">
                <span
                  className={`mt-0.5 w-4 h-4 rounded-full border-2 shrink-0 transition-colors ${
                    isChosen ? "border-indigo-500 bg-indigo-500" : "border-slate-300 dark:border-slate-600"
                  }`}
                />
                <span className="text-sm sm:text-base leading-relaxed">{option.text}</span>
              </div>
            </button>
          );
        })}
      </div>

      {/* Navigation */}
      <div className="flex items-center justify-between">
        <button
          onClick={handleBack}
          disabled={currentQ === 0}
          className="flex items-center gap-1.5 px-4 py-2 rounded-lg text-slate-500 dark:text-slate-400 hover:text-slate-800 dark:hover:text-slate-200 disabled:opacity-30 disabled:cursor-not-allowed transition-colors text-sm font-medium"
        >
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M11 17l-5-5m0 0l5-5m-5 5h12" />
          </svg>
          Back
        </button>
        <button
          onClick={handleNext}
          disabled={!selected}
          className="flex items-center gap-1.5 px-6 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-medium text-sm disabled:opacity-40 disabled:cursor-not-allowed transition-all"
        >
          {isLast ? "See my result" : "Next"}
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
          </svg>
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
      <div className="text-center mb-10">
        <div className="text-6xl math-symbol text-indigo-500 dark:text-indigo-400 font-light mb-5">{result.emoji}</div>
        <p className="text-xs font-medium text-indigo-600 dark:text-indigo-400 uppercase tracking-widest mb-2">Your result</p>
        <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-slate-100 mb-4">{result.title}</h2>
        <p className="text-slate-600 dark:text-slate-400 text-base leading-relaxed max-w-lg mx-auto">{result.description}</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-8">
        {/* Careers */}
        <div className="p-5 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/50">
          <h3 className="text-sm font-semibold text-slate-700 dark:text-slate-300 mb-3 flex items-center gap-2">
            <span className="text-indigo-500 dark:text-indigo-400 math-symbol">→</span> Career Paths
          </h3>
          <ul className="space-y-1.5">
            {result.careers.map((career) => (
              <li key={career} className="text-slate-600 dark:text-slate-400 text-sm flex items-center gap-2">
                <span className="w-1 h-1 rounded-full bg-indigo-500/60 shrink-0" />
                {career}
              </li>
            ))}
          </ul>
        </div>

        {/* Courses */}
        <div className="p-5 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/50">
          <h3 className="text-sm font-semibold text-slate-700 dark:text-slate-300 mb-3 flex items-center gap-2">
            <span className="text-indigo-500 dark:text-indigo-400 math-symbol">∑</span> Key Courses
          </h3>
          <ul className="space-y-1.5">
            {result.courses.map((course) => (
              <li key={course} className="text-slate-600 dark:text-slate-400 text-sm flex items-center gap-2">
                <span className="w-1 h-1 rounded-full bg-violet-500/60 shrink-0" />
                {course}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Next steps */}
      <div className="p-5 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/50 mb-8">
        <h3 className="text-sm font-semibold text-slate-700 dark:text-slate-300 mb-4 flex items-center gap-2">
          <span className="text-indigo-500 dark:text-indigo-400">✓</span> Your Next Steps
        </h3>
        <ol className="space-y-3">
          {result.nextSteps.map((step, i) => (
            <li key={i} className="flex items-start gap-3 text-sm text-slate-600 dark:text-slate-400">
              <span className="shrink-0 w-5 h-5 rounded-full bg-indigo-500/20 text-indigo-600 dark:text-indigo-400 text-xs flex items-center justify-center font-medium mt-0.5">
                {i + 1}
              </span>
              {step}
            </li>
          ))}
        </ol>
      </div>

      {/* Actions */}
      <div className="flex flex-col sm:flex-row gap-3">
        <Link
          href={`/careers/${careerSlugMap[result.type] ?? "data-science"}`}
          className="flex-1 px-5 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-sm font-medium text-center transition-colors"
        >
          Explore related career →
        </Link>
        <Link
          href="/roadmap"
          className="flex-1 px-5 py-3 rounded-xl border border-slate-300 dark:border-slate-700 hover:border-slate-400 dark:hover:border-slate-500 text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white text-sm font-medium text-center transition-colors"
        >
          View the roadmap
        </Link>
        <button
          onClick={onRestart}
          className="px-5 py-3 rounded-xl border border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-600 text-slate-500 hover:text-slate-700 dark:hover:text-slate-300 text-sm font-medium transition-colors"
        >
          Retake quiz
        </button>
      </div>
    </div>
  );
}
