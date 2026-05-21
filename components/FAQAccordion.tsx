"use client";

import { useState } from "react";

interface FAQItem {
  question: string;
  answer: string;
  sourceLabel?: string;
  sourceUrl?: string;
}

const faqs: FAQItem[] = [
  {
    question: "Is a mathematics degree worth it in 2026?",
    answer:
      "Yes, if you want a rigorous quantitative path with broad options. It opens doors to finance, technology, government, insurance, research, and academia. Public labor data backs up several math-heavy paths: data scientists, actuaries, operations research analysts, and computer research scientists are all projected to grow much faster than the average occupation.",
    sourceLabel: "BLS Math Occupations",
    sourceUrl: "https://www.bls.gov/ooh/math/",
  },
  {
    question: "What can you actually do with a math degree?",
    answer:
      "Far more than most people realize. Common career paths include quantitative analyst, data scientist, machine learning engineer, actuary, cryptographer, operations researcher, statistician, financial analyst, software engineer, and professor. Many CEOs and founders have math backgrounds. The degree trains you to think rigorously about hard problems — a universally transferable skill.",
  },
  {
    question: "Do I need a PhD to have a successful math career?",
    answer:
      "No — most math careers do not require a PhD. A bachelor's degree is sufficient for most industry roles including data science, actuarial science, quantitative finance (many firms), software engineering, and operations research. A PhD is beneficial or required for academic research, senior research roles at AI labs, and certain government positions. It's worth noting that math PhD programs typically pay a stipend and cover tuition, so it's not a financial sacrifice if research interests you.",
  },
  {
    question: "How hard is a mathematics degree?",
    answer:
      "It's genuinely challenging — among the most demanding undergraduate degrees at any university. The transition from computational to proof-based mathematics (usually in the second year) is the hardest part for most students. However, it's very manageable with consistent effort, good study habits (Anki for theorems, study groups for problem sets, and heavy use of office hours), and genuine interest in the material. The difficulty is also why employers value the degree so much.",
  },
  {
    question: "What programming languages should math majors learn?",
    answer:
      "Python is the most important — it's used in data science, machine learning, scientific computing, and quantitative finance. R is valuable for statistics and actuarial work. Julia is growing rapidly in scientific computing and numerical mathematics. C++ is important for high-frequency trading and performance-critical applications. LaTeX is non-negotiable for communicating mathematics professionally. Start with Python and LaTeX; add others based on your career direction.",
  },
  {
    question: "When should I start preparing for actuarial exams?",
    answer:
      "As early as your freshman or sophomore year. Exam P (Probability) is typically taken after completing a solid probability course — many students sit it the summer after their sophomore year. Passing exams before your junior-year internship search can improve your competitiveness, and actuarial salary surveys consistently segment compensation by number of exams passed. The exams are hard but very passable with dedicated preparation using standard resources.",
    sourceLabel: "Actuarial Careers salary survey",
    sourceUrl: "https://www.actuarialcareers.com/2024-salary-survey-results/",
  },
  {
    question: "Which math courses are most important for a career in tech?",
    answer:
      "Linear algebra is the single most important course — it underlies machine learning, computer graphics, data compression, and virtually all of modern ML. Probability theory and statistics are essential for data science and ML. Discrete mathematics and combinatorics are important for algorithms and theoretical CS. Numerical methods are valuable for scientific computing. For purely software engineering roles, discrete math and graph theory are most applicable.",
  },
  {
    question: "What GPA do I need to get into a top math PhD program?",
    answer:
      "Top PhD programs are extremely selective and usually look for much more than GPA: strong letters from research faculty, advanced coursework, research experience through an REU or thesis, and evidence that you can do original mathematics. A very strong math GPA helps, but research preparation and faculty recommendations matter more than any single cutoff.",
  },
];

export function FAQAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div>
      {faqs.map((faq, i) => (
        <div key={i} className="border-b border-rule">
          <button
            onClick={() => setOpenIndex(openIndex === i ? null : i)}
            className="w-full flex items-start gap-4 py-5 text-left hover:bg-paper-2 transition-colors px-2 -mx-2"
          >
            <span className="font-mono text-xs text-ink-faint shrink-0 mt-0.5 tracking-wider">
              Q.{String(i + 1).padStart(2, "0")}
            </span>
            <span className="font-display text-base text-ink leading-snug flex-1">
              {faq.question}
            </span>
            <span className={`font-mono text-ink-faint text-xs shrink-0 mt-0.5 transition-transform duration-200 ${openIndex === i ? "rotate-45" : ""}`}>
              +
            </span>
          </button>

          {openIndex === i && (
            <div className="px-2 pb-5 ml-10">
              <div className="border-t border-rule mb-4" />
              <p className="text-ink-muted text-sm leading-relaxed">{faq.answer}</p>
              {faq.sourceUrl && (
                <a
                  href={faq.sourceUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block font-mono text-[11px] text-accent hover:text-ink transition-colors mt-3 tracking-wider"
                >
                  source: {faq.sourceLabel} ↗
                </a>
              )}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
