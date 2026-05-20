export type ResultType = "pure-math" | "applied-math" | "data-science" | "actuarial";

export interface QuizOption {
  id: string;
  text: string;
  scores: Partial<Record<ResultType, number>>;
}

export interface QuizQuestion {
  id: number;
  question: string;
  options: QuizOption[];
}

export interface QuizResult {
  type: ResultType;
  title: string;
  emoji: string;
  description: string;
  careers: string[];
  nextSteps: string[];
  courses: string[];
}

export const questions: QuizQuestion[] = [
  {
    id: 1,
    question: "What aspect of mathematics excites you most?",
    options: [
      {
        id: "1a",
        text: "The beauty of abstract proofs and logical structures",
        scores: { "pure-math": 3 },
      },
      {
        id: "1b",
        text: "Using math to model and solve real-world problems",
        scores: { "applied-math": 3 },
      },
      {
        id: "1c",
        text: "Finding hidden patterns in large datasets",
        scores: { "data-science": 3 },
      },
      {
        id: "1d",
        text: "Quantifying uncertainty and managing risk precisely",
        scores: { actuarial: 3 },
      },
    ],
  },
  {
    id: 2,
    question: "How do you feel about programming?",
    options: [
      {
        id: "2a",
        text: "I prefer pen-and-paper mathematics — code is secondary",
        scores: { "pure-math": 2, actuarial: 1 },
      },
      {
        id: "2b",
        text: "I enjoy coding when it serves a mathematical purpose",
        scores: { "applied-math": 2, actuarial: 1 },
      },
      {
        id: "2c",
        text: "Code is my primary tool — I live in a terminal",
        scores: { "data-science": 3, "applied-math": 1 },
      },
      {
        id: "2d",
        text: "I use Excel/R for practical modeling, nothing too deep",
        scores: { actuarial: 3 },
      },
    ],
  },
  {
    id: 3,
    question: "Which work environment sounds most appealing?",
    options: [
      {
        id: "3a",
        text: "A university research office with total intellectual freedom",
        scores: { "pure-math": 3 },
      },
      {
        id: "3b",
        text: "A science or engineering lab solving technical challenges",
        scores: { "applied-math": 3 },
      },
      {
        id: "3c",
        text: "A fast-paced tech company building data-driven products",
        scores: { "data-science": 3 },
      },
      {
        id: "3d",
        text: "An insurance or financial services firm with clear career progression",
        scores: { actuarial: 3 },
      },
    ],
  },
  {
    id: 4,
    question: "When you solve a problem, what satisfies you most?",
    options: [
      {
        id: "4a",
        text: "Finding an elegant, general proof that settles the question forever",
        scores: { "pure-math": 3 },
      },
      {
        id: "4b",
        text: "Building a model that works reliably in practice",
        scores: { "applied-math": 3 },
      },
      {
        id: "4c",
        text: "Seeing a prediction confirmed by real-world data",
        scores: { "data-science": 3 },
      },
      {
        id: "4d",
        text: "Arriving at a precise numerical answer that drives a business decision",
        scores: { actuarial: 3 },
      },
    ],
  },
  {
    id: 5,
    question: "Which area of mathematics are you most drawn to?",
    options: [
      {
        id: "5a",
        text: "Number Theory, Topology, or Abstract Algebra",
        scores: { "pure-math": 3 },
      },
      {
        id: "5b",
        text: "Differential Equations, Fluid Dynamics, or Numerical Analysis",
        scores: { "applied-math": 3 },
      },
      {
        id: "5c",
        text: "Statistics, Machine Learning, and Bayesian Inference",
        scores: { "data-science": 3 },
      },
      {
        id: "5d",
        text: "Probability Theory and Financial/Insurance Mathematics",
        scores: { actuarial: 3 },
      },
    ],
  },
  {
    id: 6,
    question: "What kind of long-term impact do you want?",
    options: [
      {
        id: "6a",
        text: "Advance human knowledge — even if applications are decades away",
        scores: { "pure-math": 3 },
      },
      {
        id: "6b",
        text: "Engineer solutions to pressing scientific or industrial problems",
        scores: { "applied-math": 3 },
      },
      {
        id: "6c",
        text: "Drive business strategy and product decisions through data",
        scores: { "data-science": 3 },
      },
      {
        id: "6d",
        text: "Help organizations quantify and manage financial or operational risk",
        scores: { actuarial: 3 },
      },
    ],
  },
  {
    id: 7,
    question: "Which skill are you most eager to develop?",
    options: [
      {
        id: "7a",
        text: "Writing rigorous mathematical proofs from first principles",
        scores: { "pure-math": 3 },
      },
      {
        id: "7b",
        text: "Numerical methods, simulation, and scientific computation",
        scores: { "applied-math": 3, "data-science": 1 },
      },
      {
        id: "7c",
        text: "Machine learning pipelines and statistical modeling at scale",
        scores: { "data-science": 3, "applied-math": 1 },
      },
      {
        id: "7d",
        text: "Probability modeling and professional exam certifications",
        scores: { actuarial: 3 },
      },
    ],
  },
  {
    id: 8,
    question: "What does your ideal career trajectory look like?",
    options: [
      {
        id: "8a",
        text: "PhD → postdoc → tenure-track faculty or research institute",
        scores: { "pure-math": 3 },
      },
      {
        id: "8b",
        text: "Graduate degree → scientist, engineer, or quantitative researcher",
        scores: { "applied-math": 3, "pure-math": 1 },
      },
      {
        id: "8c",
        text: "BS/MS → data scientist or ML engineer at a top tech company",
        scores: { "data-science": 3, "applied-math": 1 },
      },
      {
        id: "8d",
        text: "Entry-level analyst → Fellow of the Society of Actuaries",
        scores: { actuarial: 3 },
      },
    ],
  },
];

export const results: Record<ResultType, QuizResult> = {
  "pure-math": {
    type: "pure-math",
    title: "Pure Mathematician",
    emoji: "∞",
    description:
      "You're drawn to mathematics for its own sake — the elegance of a well-constructed proof, the thrill of abstract discovery. Your natural path leads toward research, whether in academia or at the frontier of theoretical computer science and cryptography. Consider a PhD if you want to work at the cutting edge.",
    careers: ["Academic Researcher", "Cryptographer", "Theoretical Computer Scientist", "Mathematical Physicist"],
    nextSteps: [
      "Take Real Analysis as early as possible — it's the gateway to serious math",
      "Seek out undergraduate research opportunities (REUs)",
      "Study for the Putnam Competition to sharpen proof skills",
      "Apply to PhD programs with strong research mentors in your area",
    ],
    courses: ["Real Analysis", "Abstract Algebra", "Topology", "Number Theory", "Complex Analysis"],
  },
  "applied-math": {
    type: "applied-math",
    title: "Applied Mathematician",
    emoji: "∇",
    description:
      "You love mathematics that does something — models that predict, equations that describe the physical world, algorithms that solve hard problems. Applied mathematics is one of the most versatile quantitative degrees, opening doors to finance, engineering, scientific research, and technology.",
    careers: ["Quantitative Analyst", "Operations Researcher", "Scientific Computing Engineer", "Aerospace Engineer"],
    nextSteps: [
      "Master differential equations and numerical methods early",
      "Learn Python and MATLAB for scientific computing",
      "Look for research in computational physics, fluid dynamics, or optimization",
      "Consider graduate programs in Applied Math, Computational Science, or Engineering",
    ],
    courses: [
      "Differential Equations",
      "Numerical Analysis",
      "Linear Algebra",
      "Partial Differential Equations",
      "Stochastic Processes",
    ],
  },
  "data-science": {
    type: "data-science",
    title: "Data Scientist / ML Engineer",
    emoji: "μ",
    description:
      "You see mathematics as the language of data. You're energized by prediction, pattern recognition, and building systems that learn. A math degree gives you the rigorous statistical and linear algebraic foundations that separate excellent data scientists from average ones — go exploit that edge.",
    careers: ["Machine Learning Engineer", "Data Scientist", "AI Researcher", "Quantitative Analyst"],
    nextSteps: [
      "Build strong Python skills (NumPy, pandas, PyTorch)",
      "Take probability theory and mathematical statistics seriously",
      "Work on Kaggle competitions or personal ML projects",
      "Consider an MS in Statistics, Data Science, or CS/ML",
    ],
    courses: [
      "Probability Theory",
      "Mathematical Statistics",
      "Linear Algebra",
      "Optimization",
      "Bayesian Statistics",
    ],
  },
  actuarial: {
    type: "actuarial",
    title: "Actuary",
    emoji: "Σ",
    description:
      "You want rigorous, structured mathematical work with a clear professional path and excellent compensation. Actuarial science is one of the few careers where a math degree leads directly to a high-paying, high-security profession with a well-defined ladder. Start the exam process early — it sets you apart.",
    careers: ["Property & Casualty Actuary", "Life Actuary", "Pension Actuary", "Risk Analyst"],
    nextSteps: [
      "Pass Exam P (Probability) and Exam FM (Financial Mathematics) as soon as possible",
      "Get an internship at an insurance or consulting firm after your first exam",
      "Join your school's Actuarial Club for exam prep resources",
      "Target a BS in Mathematics or Actuarial Science with all VEE requirements",
    ],
    courses: [
      "Probability Theory",
      "Financial Mathematics",
      "Mathematical Statistics",
      "Loss Models",
      "Time Series Analysis",
    ],
  },
};

export function scoreQuiz(answers: Record<number, string>): QuizResult {
  const totals: Record<ResultType, number> = {
    "pure-math": 0,
    "applied-math": 0,
    "data-science": 0,
    actuarial: 0,
  };

  for (const [questionId, optionId] of Object.entries(answers)) {
    const question = questions.find((q) => q.id === Number(questionId));
    if (!question) continue;
    const option = question.options.find((o) => o.id === optionId);
    if (!option) continue;
    for (const [type, score] of Object.entries(option.scores)) {
      totals[type as ResultType] += score;
    }
  }

  const winner = (Object.entries(totals) as [ResultType, number][]).reduce(
    (best, current) => (current[1] > best[1] ? current : best),
    ["pure-math" as ResultType, 0]
  );

  return results[winner[0]];
}
