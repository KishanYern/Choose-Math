"use client";

import { useState } from "react";

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: "Is a mathematics degree worth it in 2026?",
    answer:
      "Absolutely. Mathematics is one of the most versatile quantitative degrees available. It opens doors to finance (quant roles at hedge funds and banks), technology (ML engineering, data science, software), government (NSA, Census, DOD), and academia. Mathematically rigorous candidates command salary premiums of 20–40% over general STEM graduates in competitive quantitative roles. The analytical problem-solving skills a math degree develops are valuable in virtually every industry.",
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
      "As early as your freshman or sophomore year. Exam P (Probability) is typically taken after completing a solid probability course — many students sit it the summer after their sophomore year. Passing even one exam before your junior year internship search dramatically improves your competitiveness. Each exam you pass adds roughly $5,000–$10,000 to your annual starting salary. The exams are hard but very passable with dedicated preparation using standard resources (ACTEX, ASM manuals).",
  },
  {
    question: "Which math courses are most important for a career in tech?",
    answer:
      "Linear algebra is the single most important course — it underlies machine learning, computer graphics, data compression, and virtually all of modern ML. Probability theory and statistics are essential for data science and ML. Discrete mathematics and combinatorics are important for algorithms and theoretical CS. Numerical methods are valuable for scientific computing. For purely software engineering roles, discrete math and graph theory are most applicable.",
  },
  {
    question: "What GPA do I need to get into a top math PhD program?",
    answer:
      "Top PhD programs (MIT, Princeton, Chicago, Harvard) are extremely selective and typically want applicants with 3.8+ GPA in mathematics courses, strong letters of recommendation from research faculty, research experience (REU or thesis), and a demonstrated ability to do original mathematics. The Math GRE Subject Test, while some programs have made it optional, remains a differentiating factor for strong applicants. Getting into your school's honors program and seeking research opportunities early matters more than GPA alone.",
  },
];

export function FAQAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="space-y-2">
      {faqs.map((faq, i) => (
        <div
          key={i}
          className="border border-slate-200 dark:border-slate-800 rounded-xl overflow-hidden"
        >
          <button
            onClick={() => setOpenIndex(openIndex === i ? null : i)}
            className="w-full flex items-center justify-between gap-4 px-5 py-4 text-left bg-slate-50 dark:bg-slate-900/50 hover:bg-slate-100 dark:hover:bg-slate-800/60 transition-colors"
          >
            <span className="font-medium text-slate-800 dark:text-slate-100 text-sm sm:text-base">{faq.question}</span>
            <svg
              className={`w-4 h-4 flex-shrink-0 text-indigo-400 transition-transform duration-200 ${
                openIndex === i ? "rotate-180" : ""
              }`}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          {openIndex === i && (
            <div className="px-5 py-4 bg-white dark:bg-slate-900/20 border-t border-slate-200 dark:border-slate-800">
              <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">{faq.answer}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
