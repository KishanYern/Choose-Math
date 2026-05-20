export type ResourceCategory =
  | "textbooks"
  | "online-courses"
  | "competitions"
  | "tools"
  | "communities";

export type DifficultyLevel = "beginner" | "intermediate" | "advanced";

export interface Resource {
  id: string;
  title: string;
  author?: string;
  category: ResourceCategory;
  difficulty: DifficultyLevel;
  description: string;
  url: string;
  free: boolean;
  tags: string[];
}

export const resources: Resource[] = [
  // Textbooks
  {
    id: "t1",
    title: "Introduction to Real Analysis",
    author: "Walter Rudin",
    category: "textbooks",
    difficulty: "intermediate",
    description:
      "\"Baby Rudin\" is the standard gateway to real analysis. Dense, demanding, and rewarding — the book that separates serious math students from the rest. Work through every problem.",
    url: "https://www.mheducation.com/highered/product/principles-mathematical-analysis-rudin/M9780070542358.html",
    free: false,
    tags: ["Analysis", "Core Curriculum"],
  },
  {
    id: "t2",
    title: "Abstract Algebra",
    author: "Dummit & Foote",
    category: "textbooks",
    difficulty: "intermediate",
    description:
      "The definitive undergraduate reference for abstract algebra. Covers groups, rings, fields, and Galois theory with exceptional clarity and breadth.",
    url: "https://www.wiley.com/en-us/Abstract+Algebra%2C+3rd+Edition-p-9780471433347",
    free: false,
    tags: ["Algebra", "Core Curriculum"],
  },
  {
    id: "t3",
    title: "Linear Algebra Done Right",
    author: "Sheldon Axler",
    category: "textbooks",
    difficulty: "intermediate",
    description:
      "A conceptual approach to linear algebra that avoids determinants until the end, building deep intuition for vector spaces and linear maps. The best second linear algebra book.",
    url: "https://linear.axler.net",
    free: true,
    tags: ["Linear Algebra", "Core Curriculum"],
  },
  {
    id: "t4",
    title: "Introduction to Probability",
    author: "Blitzstein & Hwang",
    category: "textbooks",
    difficulty: "beginner",
    description:
      "The best introductory probability textbook — rigorous but accessible, with excellent examples from statistics and real-world applications. Free PDF from Harvard.",
    url: "https://projects.iq.harvard.edu/stat110/home",
    free: true,
    tags: ["Probability", "Statistics"],
  },
  {
    id: "t5",
    title: "Topology",
    author: "James Munkres",
    category: "textbooks",
    difficulty: "advanced",
    description:
      "The standard reference for point-set and algebraic topology. Clearly written with excellent exercises. Essential for anyone pursuing pure mathematics or theoretical physics.",
    url: "https://www.pearson.com/en-us/subject-catalog/p/topology/P200000006299",
    free: false,
    tags: ["Topology", "Pure Math"],
  },
  {
    id: "t6",
    title: "An Introduction to the Theory of Numbers",
    author: "Hardy & Wright",
    category: "textbooks",
    difficulty: "advanced",
    description:
      "A classic text covering elementary number theory through analytic and algebraic methods. Essential reading for anyone interested in cryptography or pure mathematics.",
    url: "https://global.oup.com/academic/product/an-introduction-to-the-theory-of-numbers-9780199219858",
    free: false,
    tags: ["Number Theory", "Pure Math"],
  },
  // Online Courses
  {
    id: "c1",
    title: "Mathematics for Machine Learning",
    author: "Imperial College London (Coursera)",
    category: "online-courses",
    difficulty: "intermediate",
    description:
      "A three-course specialization covering linear algebra, multivariate calculus, and PCA — the exact mathematical foundations needed to deeply understand ML algorithms.",
    url: "https://www.coursera.org/specializations/mathematics-machine-learning",
    free: false,
    tags: ["Linear Algebra", "Calculus", "Machine Learning"],
  },
  {
    id: "c2",
    title: "Stat 110: Probability",
    author: "Joe Blitzstein, Harvard (YouTube)",
    category: "online-courses",
    difficulty: "intermediate",
    description:
      "The full Harvard undergraduate probability course, available for free on YouTube. One of the best-taught mathematics courses available online. Do all the problem sets.",
    url: "https://www.youtube.com/playlist?list=PL2SOU6wwxB0uwwH80KTQ6ht66KWxbzTIo",
    free: true,
    tags: ["Probability", "Statistics"],
  },
  {
    id: "c3",
    title: "MIT OpenCourseWare: Linear Algebra (18.06)",
    author: "Gilbert Strang, MIT",
    category: "online-courses",
    difficulty: "beginner",
    description:
      "Gilbert Strang's legendary linear algebra course, freely available through MIT OCW. The best introduction to the subject — builds incredible geometric intuition.",
    url: "https://ocw.mit.edu/courses/18-06-linear-algebra-spring-2010/",
    free: true,
    tags: ["Linear Algebra", "Core Curriculum"],
  },
  {
    id: "c4",
    title: "Real Analysis (MIT OCW 18.100B)",
    author: "MIT OpenCourseWare",
    category: "online-courses",
    difficulty: "advanced",
    description:
      "MIT's undergraduate real analysis course materials, including lecture notes, problem sets, and exams. Essential for students transitioning to proof-based mathematics.",
    url: "https://ocw.mit.edu/courses/18-100b-analysis-i-fall-2010/",
    free: true,
    tags: ["Analysis", "Pure Math"],
  },
  {
    id: "c5",
    title: "3Blue1Brown: Essence of Linear Algebra",
    author: "3Blue1Brown (YouTube)",
    category: "online-courses",
    difficulty: "beginner",
    description:
      "Visually stunning YouTube series that builds deep geometric intuition for linear algebra. Perfect complement to a formal course — watch before or during.",
    url: "https://www.youtube.com/playlist?list=PLZHQObOWTQDPD3MizzM2xVFitgF8hE_ab",
    free: true,
    tags: ["Linear Algebra", "Visual Learning"],
  },
  // Competitions
  {
    id: "comp1",
    title: "Putnam Mathematical Competition",
    category: "competitions",
    difficulty: "advanced",
    description:
      "The most prestigious undergraduate mathematics competition in North America. Held annually in December. Top performers (Putnam Fellows) are guaranteed PhD admissions at elite programs.",
    url: "https://maa.org/math-competitions/putnam-competition",
    free: true,
    tags: ["Competition", "Proof Skills", "Prestige"],
  },
  {
    id: "comp2",
    title: "AMC / AIME / USAMO",
    category: "competitions",
    difficulty: "intermediate",
    description:
      "The American Mathematics Competitions series, leading up to the USA Mathematical Olympiad. Strong AMC/AIME performance in high school demonstrates mathematical talent to college admissions.",
    url: "https://maa.org/math-competitions",
    free: true,
    tags: ["Competition", "High School", "Proof Skills"],
  },
  {
    id: "comp3",
    title: "COMAP Mathematical Contest in Modeling (MCM)",
    category: "competitions",
    difficulty: "intermediate",
    description:
      "A team competition where students choose an open-ended real-world problem and build a mathematical model to solve it over 4 days. Outstanding preparation for applied math careers.",
    url: "https://www.comap.com/contests/mcm-icm",
    free: true,
    tags: ["Applied Math", "Competition", "Teamwork"],
  },
  {
    id: "comp4",
    title: "Project Euler",
    category: "competitions",
    difficulty: "beginner",
    description:
      "A series of 800+ mathematical/computational problems that require both mathematical insight and programming to solve. Perfect for building the combination of skills modern math careers demand.",
    url: "https://projecteuler.net",
    free: true,
    tags: ["Programming", "Number Theory", "Problem Solving"],
  },
  // Tools
  {
    id: "tool1",
    title: "Overleaf (LaTeX Editor)",
    category: "tools",
    difficulty: "beginner",
    description:
      "The standard online LaTeX editor for mathematics. Every serious math student needs to learn LaTeX for writing proofs, papers, and problem sets. Overleaf makes it easy to start.",
    url: "https://overleaf.com",
    free: true,
    tags: ["LaTeX", "Writing", "Essential"],
  },
  {
    id: "tool2",
    title: "Wolfram Alpha",
    category: "tools",
    difficulty: "beginner",
    description:
      "Computational knowledge engine that can solve integrals, factor polynomials, plot functions, and verify computations. Use it to check work and explore, not to replace understanding.",
    url: "https://wolframalpha.com",
    free: true,
    tags: ["Computation", "Exploration", "Essential"],
  },
  {
    id: "tool3",
    title: "Desmos Graphing Calculator",
    category: "tools",
    difficulty: "beginner",
    description:
      "A beautiful, free online graphing calculator. Essential for developing geometric intuition in calculus, linear algebra, and differential equations.",
    url: "https://desmos.com/calculator",
    free: true,
    tags: ["Visualization", "Calculus", "Essential"],
  },
  {
    id: "tool4",
    title: "Anki Flashcards",
    category: "tools",
    difficulty: "beginner",
    description:
      "Spaced repetition flashcard system. Indispensable for memorizing definitions, theorems, and proofs in any math course. Build your own decks from lecture notes.",
    url: "https://apps.ankiweb.net",
    free: true,
    tags: ["Study", "Memorization", "Essential"],
  },
  {
    id: "tool5",
    title: "SageMath / Jupyter",
    category: "tools",
    difficulty: "intermediate",
    description:
      "SageMath is a free open-source computer algebra system built on Python. Run it in Jupyter notebooks for symbolic computation, number theory experiments, and algebraic geometry.",
    url: "https://www.sagemath.org",
    free: true,
    tags: ["Programming", "Symbolic Computation", "Research"],
  },
  // Communities
  {
    id: "com1",
    title: "Math Stack Exchange",
    category: "communities",
    difficulty: "beginner",
    description:
      "The premier Q&A site for mathematics. Post questions on any topic — from introductory calculus to research-level problems. Excellent for getting unstuck on homework and building intuition.",
    url: "https://math.stackexchange.com",
    free: true,
    tags: ["Q&A", "Community", "All Levels"],
  },
  {
    id: "com2",
    title: "Art of Problem Solving (AoPS)",
    category: "communities",
    difficulty: "intermediate",
    description:
      "The most active community for competition mathematics. Includes forums, free textbooks, and online courses. Where future Putnam Fellows and Olympiad students congregate.",
    url: "https://artofproblemsolving.com",
    free: true,
    tags: ["Competition", "Community", "High School"],
  },
  {
    id: "com3",
    title: "r/math and r/learnmath",
    category: "communities",
    difficulty: "beginner",
    description:
      "Active Reddit communities for math discussion. r/math is for deeper mathematical discussions; r/learnmath is for questions at any level. Welcoming communities for students at all stages.",
    url: "https://reddit.com/r/math",
    free: true,
    tags: ["Community", "Discussion", "All Levels"],
  },
  {
    id: "com4",
    title: "NSF REU Programs",
    category: "communities",
    difficulty: "intermediate",
    description:
      "National Science Foundation's Research Experiences for Undergraduates. Paid summer research positions at universities across the country. Essential for students considering a math PhD.",
    url: "https://www.nsf.gov/crssprgm/reu/",
    free: true,
    tags: ["Research", "Undergraduate", "Career"],
  },
];

export const categoryLabels: Record<ResourceCategory, string> = {
  textbooks: "Textbooks",
  "online-courses": "Online Courses",
  competitions: "Competitions",
  tools: "Tools",
  communities: "Communities",
};

export function getResourcesByCategory(category: ResourceCategory): Resource[] {
  return resources.filter((r) => r.category === category);
}
