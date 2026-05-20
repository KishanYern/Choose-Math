import type { Metadata } from "next";
import { QuizEngine } from "@/components/QuizEngine";

export const metadata: Metadata = {
  title: "Is Math Right for You? — Career Quiz",
  description:
    "Answer 8 questions to discover whether you're a Pure Mathematician, Applied Mathematician, Data Scientist, or Actuary at heart.",
};

export default function QuizPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-slate-950">
      {/* Header */}
      <div className="border-b border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/40">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 py-14 text-center">
          <span className="text-4xl math-symbol text-indigo-500 dark:text-indigo-400 font-light block mb-4">?</span>
          <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-slate-100 mb-3">
            Is Math Right for You?
          </h1>
          <p className="text-slate-600 dark:text-slate-400 text-base max-w-lg mx-auto">
            Answer 8 honest questions about your interests, working style, and goals.
            We&apos;ll identify which branch of mathematics fits you best.
          </p>
          <div className="flex items-center justify-center gap-6 mt-5 text-xs text-slate-500">
            <span>8 questions</span>
            <span>·</span>
            <span>~2 minutes</span>
            <span>·</span>
            <span>No account needed</span>
          </div>
        </div>
      </div>

      {/* Quiz */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-14">
        <QuizEngine />
      </div>
    </div>
  );
}
