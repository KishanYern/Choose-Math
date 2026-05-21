import type { Metadata } from "next";
import { QuizEngine } from "@/components/QuizEngine";

export const metadata: Metadata = {
  title: "Is Math Right for You? — Career Quiz",
  description:
    "Answer 8 questions to discover whether you're a Pure Mathematician, Applied Mathematician, Data Scientist, or Actuary at heart.",
};

export default function QuizPage() {
  return (
    <div>
      {/* Header */}
      <div className="border-b border-rule bg-paper-2">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 py-12 text-center">
          <p className="font-mono text-xs text-ink-faint tracking-widest mb-4 uppercase">career assessment</p>
          <h1 className="font-display text-3xl sm:text-4xl text-ink font-normal mb-3 leading-snug">
            Is Mathematics Right for You?
          </h1>
          <p className="text-ink-muted text-base max-w-lg mx-auto leading-relaxed">
            Answer 8 honest questions about your interests, working style, and goals.
            We&apos;ll identify which branch of mathematics fits you best.
          </p>
          <div className="flex items-center justify-center gap-5 mt-5 font-mono text-[11px] text-ink-faint tracking-wider">
            <span>8 questions</span>
            <span>·</span>
            <span>~2 minutes</span>
            <span>·</span>
            <span>no account needed</span>
          </div>
        </div>
      </div>

      {/* Quiz workbook area */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-14">
        <QuizEngine />
      </div>
    </div>
  );
}
