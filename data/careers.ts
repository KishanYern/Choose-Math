export interface DayEntry {
  time: string;
  activity: string;
  type: "work" | "meeting" | "analysis" | "study";
}

export interface Source {
  label: string;
  url: string;
}

export interface CareerTrack {
  id: string;
  slug: string;
  title: string;
  icon: string;
  shortDescription: string;
  description: string;
  salaryRange: { min: number; max: number };
  requiredSkills: string[];
  recommendedCourses: string[];
  employers: string[];
  dayInLife: DayEntry[];
  growthOutlook: string;
  salarySource: Source;
  outlookSource?: Source;
  tags: string[];
  featured?: boolean;
}

export const careers: CareerTrack[] = [
  {
    id: "1",
    slug: "quantitative-finance",
    title: "Quantitative Finance",
    icon: "∂",
    shortDescription:
      "Build mathematical models to price derivatives, manage risk, and drive trading strategies at hedge funds and investment banks.",
    description:
      "Quantitative finance sits at the intersection of advanced mathematics, statistics, and financial markets. Quants build and deploy models for derivative pricing, algorithmic trading, portfolio optimization, and risk management. The field demands mastery of stochastic calculus, probability theory, and numerical methods — along with strong programming skills in Python and C++.",
    salaryRange: { min: 130000, max: 300000 },
    salarySource: {
      label: "Glassdoor quantitative analyst compensation estimates",
      url: "https://www.glassdoor.com/Salaries/quantitative-analyst-salary-SRCH_KO0,20.htm",
    },
    requiredSkills: [
      "Stochastic Calculus",
      "Probability Theory",
      "Linear Algebra",
      "C++ / Python",
      "Monte Carlo Simulation",
      "Time Series Analysis",
    ],
    recommendedCourses: [
      "Real Analysis",
      "Stochastic Processes",
      "Partial Differential Equations",
      "Numerical Methods",
      "Financial Mathematics",
      "Measure Theory",
    ],
    employers: [
      "Citadel",
      "Two Sigma",
      "D.E. Shaw",
      "Goldman Sachs",
      "Jane Street",
      "Renaissance Technologies",
    ],
    dayInLife: [
      { time: "8:00 AM", activity: "Review overnight P&L and risk reports", type: "analysis" },
      { time: "9:30 AM", activity: "Morning standup with trading desk", type: "meeting" },
      { time: "10:00 AM", activity: "Calibrate volatility surface model using new market data", type: "work" },
      { time: "1:00 PM", activity: "Code review for pricing library updates in C++", type: "work" },
      { time: "3:00 PM", activity: "Backtest new alpha signal on 10 years of tick data", type: "analysis" },
      { time: "5:00 PM", activity: "Write research note on factor model improvements", type: "work" },
    ],
    growthOutlook: "Strong and stable — compensation varies widely by firm and bonus structure, with public salary estimates showing especially high total compensation in quantitative analyst roles.",
    tags: ["Finance", "High Salary", "Research", "Programming"],
    featured: true,
  },
  {
    id: "2",
    slug: "machine-learning-ai",
    title: "Machine Learning / AI",
    icon: "∇",
    shortDescription:
      "Design and train models that power recommendation systems, language models, and autonomous systems at top tech companies.",
    description:
      "Machine learning engineers and AI researchers apply linear algebra, probability, optimization, and calculus to build systems that learn from data. The mathematical foundations are central — understanding gradient descent, eigendecompositions, kernel methods, and information theory separates strong practitioners from average ones. Math majors are highly sought after for research roles at AI labs and ML-heavy tech companies.",
    salaryRange: { min: 120000, max: 250000 },
    salarySource: {
      label: "BLS computer and information research scientists",
      url: "https://www.bls.gov/ooh/computer-and-information-technology/computer-and-information-research-scientists.htm",
    },
    outlookSource: {
      label: "BLS 2024-34 projection",
      url: "https://www.bls.gov/ooh/computer-and-information-technology/computer-and-information-research-scientists.htm",
    },
    requiredSkills: [
      "Linear Algebra",
      "Multivariable Calculus",
      "Probability & Statistics",
      "Python",
      "Optimization Theory",
      "Information Theory",
    ],
    recommendedCourses: [
      "Linear Algebra",
      "Real Analysis",
      "Probability Theory",
      "Numerical Optimization",
      "Functional Analysis",
      "Statistics",
    ],
    employers: ["Google DeepMind", "OpenAI", "Meta AI", "Apple", "NVIDIA", "Anthropic"],
    dayInLife: [
      { time: "9:00 AM", activity: "Review training runs from overnight experiments", type: "analysis" },
      { time: "10:00 AM", activity: "Research meeting on attention mechanism improvements", type: "meeting" },
      { time: "11:00 AM", activity: "Derive gradient update rules for custom loss function", type: "study" },
      { time: "1:30 PM", activity: "Implement and test new architecture in PyTorch", type: "work" },
      { time: "3:30 PM", activity: "Evaluate model performance against benchmarks", type: "analysis" },
      { time: "5:00 PM", activity: "Write internal research report on findings", type: "work" },
    ],
    growthOutlook: "Very strong — BLS projects computer and information research scientist employment to grow 20% from 2024 to 2034, much faster than average.",
    tags: ["Tech", "Research", "High Growth", "Programming"],
    featured: true,
  },
  {
    id: "3",
    slug: "actuarial-science",
    title: "Actuarial Science",
    icon: "Σ",
    shortDescription:
      "Use probability and statistics to quantify risk for insurance companies, pension funds, and financial institutions.",
    description:
      "Actuaries are the mathematical backbone of the insurance and risk management industry. They build models to quantify uncertainty — from the likelihood of natural disasters to life expectancy tables — and translate those models into pricing strategies, reserves, and capital requirements. The career path involves passing a rigorous series of professional exams alongside on-the-job training.",
    salaryRange: { min: 80000, max: 200000 },
    salarySource: {
      label: "BLS actuaries",
      url: "https://www.bls.gov/ooh/math/actuaries.htm",
    },
    outlookSource: {
      label: "BLS 2024-34 projection",
      url: "https://www.bls.gov/ooh/math/actuaries.htm",
    },
    requiredSkills: [
      "Probability Theory",
      "Statistics",
      "Financial Mathematics",
      "Excel / VBA",
      "R or Python",
      "Regulatory Knowledge",
    ],
    recommendedCourses: [
      "Probability Theory",
      "Mathematical Statistics",
      "Financial Mathematics",
      "Regression Analysis",
      "Time Series",
      "Risk Theory",
    ],
    employers: [
      "Milliman",
      "Aon",
      "Mercer",
      "MetLife",
      "Allstate",
      "Social Security Administration",
    ],
    dayInLife: [
      { time: "8:30 AM", activity: "Review mortality table updates and regulatory changes", type: "study" },
      { time: "9:30 AM", activity: "Build reserve calculation model in Excel/R", type: "work" },
      { time: "11:00 AM", activity: "Client meeting on pension liability projections", type: "meeting" },
      { time: "1:00 PM", activity: "Study for upcoming Exam MFE after lunch", type: "study" },
      { time: "2:30 PM", activity: "Peer review of pricing assumptions for new product line", type: "meeting" },
      { time: "4:00 PM", activity: "Draft report on experience study results", type: "work" },
    ],
    growthOutlook: "BLS projects actuary employment to grow 22% from 2024 to 2034, much faster than average, with demand in insurance, enterprise risk, and climate risk modeling.",
    tags: ["Insurance", "Stable", "Exams", "Finance"],
    featured: true,
  },
  {
    id: "4",
    slug: "cryptography",
    title: "Cryptography",
    icon: "ℤ",
    shortDescription:
      "Design the mathematical systems that secure digital communication, blockchain protocols, and national security infrastructure.",
    description:
      "Cryptographers apply number theory, abstract algebra, and computational complexity to design and analyze the systems that keep information secure. From RSA encryption to elliptic curve cryptography and post-quantum algorithms, modern cryptography is deeply mathematical. Opportunities span government agencies (NSA, CISA), tech companies (Apple, Google), blockchain startups, and academic research.",
    salaryRange: { min: 120000, max: 250000 },
    salarySource: {
      label: "BLS information security analysts",
      url: "https://www.bls.gov/ooh/computer-and-information-technology/information-security-analysts.htm",
    },
    outlookSource: {
      label: "BLS 2024-34 projection",
      url: "https://www.bls.gov/ooh/computer-and-information-technology/information-security-analysts.htm",
    },
    requiredSkills: [
      "Number Theory",
      "Abstract Algebra",
      "Discrete Mathematics",
      "Computational Complexity",
      "C / Python",
      "Probability Theory",
    ],
    recommendedCourses: [
      "Abstract Algebra",
      "Number Theory",
      "Discrete Mathematics",
      "Theory of Computation",
      "Algebraic Geometry",
      "Elliptic Curves",
    ],
    employers: ["NSA / CISA", "Apple", "Google", "Cloudflare", "Coinbase", "IBM Research"],
    dayInLife: [
      { time: "9:00 AM", activity: "Review cryptanalysis literature on lattice-based schemes", type: "study" },
      { time: "10:30 AM", activity: "Implement post-quantum key exchange protocol in Rust", type: "work" },
      { time: "12:30 PM", activity: "Security review of new API authentication design", type: "meeting" },
      { time: "2:00 PM", activity: "Work through algebraic proof for protocol security reduction", type: "study" },
      { time: "4:00 PM", activity: "Write formal security proof for new signature scheme", type: "work" },
    ],
    growthOutlook: "Growing rapidly — BLS projects information security analyst employment to grow 29% from 2024 to 2034, while post-quantum cryptography and cybersecurity needs continue to expand.",
    tags: ["Security", "Research", "Government", "Blockchain"],
  },
  {
    id: "5",
    slug: "operations-research",
    title: "Operations Research",
    icon: "λ",
    shortDescription:
      "Solve complex logistics, scheduling, and supply chain problems using optimization, simulation, and decision theory.",
    description:
      "Operations research (OR) applies mathematical optimization and statistical modeling to make better decisions in complex systems. OR professionals work on problems like airline scheduling, supply chain optimization, hospital staffing, and logistics routing. The field draws on linear programming, combinatorics, graph theory, simulation, and game theory.",
    salaryRange: { min: 90000, max: 180000 },
    salarySource: {
      label: "BLS operations research analysts",
      url: "https://www.bls.gov/ooh/math/operations-research-analysts.htm",
    },
    outlookSource: {
      label: "BLS 2024-34 projection",
      url: "https://www.bls.gov/ooh/math/operations-research-analysts.htm",
    },
    requiredSkills: [
      "Linear Programming",
      "Integer Optimization",
      "Graph Theory",
      "Simulation",
      "Python / Julia",
      "Statistics",
    ],
    recommendedCourses: [
      "Linear Programming",
      "Combinatorics",
      "Graph Theory",
      "Game Theory",
      "Stochastic Processes",
      "Numerical Methods",
    ],
    employers: ["Amazon", "UPS", "Delta Airlines", "McKinsey", "RAND Corporation", "US Military"],
    dayInLife: [
      { time: "9:00 AM", activity: "Model new warehouse routing constraints in Python", type: "work" },
      { time: "10:30 AM", activity: "Team sync on last-mile delivery optimization project", type: "meeting" },
      { time: "11:30 AM", activity: "Run sensitivity analysis on linear program solver output", type: "analysis" },
      { time: "1:30 PM", activity: "Build discrete event simulation for supply chain scenario", type: "work" },
      { time: "3:30 PM", activity: "Present optimization findings to operations leadership", type: "meeting" },
      { time: "4:30 PM", activity: "Review journal paper on vehicle routing problem algorithms", type: "study" },
    ],
    growthOutlook: "Strong — BLS projects operations research analyst employment to grow 21% from 2024 to 2034 as organizations use optimization and analytics to improve decisions.",
    tags: ["Logistics", "Consulting", "Industry", "Optimization"],
  },
  {
    id: "6",
    slug: "academia",
    title: "Academia & Research",
    icon: "∀",
    shortDescription:
      "Advance human knowledge by discovering new mathematics, mentoring the next generation, and publishing groundbreaking research.",
    description:
      "Academic mathematicians pursue original research at the frontier of human knowledge — proving theorems, discovering new structures, and building the theoretical foundations that other fields rely on decades later. The path typically runs through a PhD and postdoctoral work before a tenure-track faculty position. The rewards are intellectual freedom, deep mastery, and genuine discovery.",
    salaryRange: { min: 70000, max: 160000 },
    salarySource: {
      label: "BLS postsecondary mathematical science teachers",
      url: "https://www.bls.gov/oes/current/oes251022.htm",
    },
    outlookSource: {
      label: "BLS employment projections",
      url: "https://data.bls.gov/projections/nationalMatrix?ioType=o&queryParams=25-1022",
    },
    requiredSkills: [
      "Proof Writing",
      "Abstract Reasoning",
      "LaTeX",
      "Deep Specialization",
      "Technical Writing",
      "Teaching",
    ],
    recommendedCourses: [
      "Real & Complex Analysis",
      "Abstract Algebra",
      "Topology",
      "Number Theory",
      "Differential Geometry",
      "Algebraic Topology",
    ],
    employers: [
      "MIT",
      "Princeton",
      "University of Chicago",
      "IAS",
      "NSF-funded Research",
      "National Labs",
    ],
    dayInLife: [
      { time: "8:00 AM", activity: "Morning tea and work through proof attempt from last night", type: "study" },
      { time: "10:00 AM", activity: "Teach undergraduate Analysis lecture", type: "work" },
      { time: "11:30 AM", activity: "Grad student office hours and thesis advising", type: "meeting" },
      { time: "1:00 PM", activity: "Research seminar — visiting speaker on p-adic geometry", type: "study" },
      { time: "3:00 PM", activity: "Collaboration call with co-author at Oxford", type: "meeting" },
      { time: "4:00 PM", activity: "Deep work: revise paper proof for Annals submission", type: "work" },
    ],
    growthOutlook: "Competitive — tenure-track openings are limited, and BLS projections for postsecondary mathematical science teachers show modest growth compared with industry math roles.",
    tags: ["Research", "Teaching", "PhD Required", "Flexible"],
  },
  {
    id: "7",
    slug: "data-science",
    title: "Data Science",
    icon: "μ",
    shortDescription:
      "Extract actionable insights from massive datasets using statistical modeling, machine learning, and data visualization.",
    description:
      "Data scientists bridge mathematics, statistics, and software engineering to answer business and scientific questions from data. Math majors excel here because they deeply understand the statistical foundations that many practitioners treat as black boxes. Strong mathematical training enables building better models, catching subtle errors, and pushing beyond off-the-shelf tools.",
    salaryRange: { min: 100000, max: 200000 },
    salarySource: {
      label: "BLS data scientists",
      url: "https://www.bls.gov/ooh/math/data-scientists.htm",
    },
    outlookSource: {
      label: "BLS 2024-34 projection",
      url: "https://www.bls.gov/ooh/math/data-scientists.htm",
    },
    requiredSkills: [
      "Statistics",
      "Linear Algebra",
      "Probability",
      "Python / R",
      "SQL",
      "Data Visualization",
    ],
    recommendedCourses: [
      "Mathematical Statistics",
      "Linear Algebra",
      "Probability Theory",
      "Regression Analysis",
      "Bayesian Statistics",
      "Graph Theory",
    ],
    employers: ["Netflix", "Spotify", "Airbnb", "Uber", "CDC / NIH", "Census Bureau"],
    dayInLife: [
      { time: "9:00 AM", activity: "Pull and clean dataset for A/B test analysis", type: "work" },
      { time: "10:00 AM", activity: "Sprint planning with product and engineering teams", type: "meeting" },
      { time: "11:00 AM", activity: "Build regression model for user churn prediction", type: "analysis" },
      { time: "1:00 PM", activity: "Create dashboard visualizations in Python/Tableau", type: "work" },
      { time: "3:00 PM", activity: "Present statistical findings to non-technical stakeholders", type: "meeting" },
      { time: "4:30 PM", activity: "Review causal inference paper for journal club", type: "study" },
    ],
    growthOutlook: "Excellent — BLS projects data scientist employment to grow 34% from 2024 to 2034, much faster than average, as data-driven work expands across industries.",
    tags: ["Tech", "Versatile", "High Demand", "Industry"],
  },
];

export function getCareerBySlug(slug: string): CareerTrack | undefined {
  return careers.find((c) => c.slug === slug);
}

export function getFeaturedCareers(): CareerTrack[] {
  return careers.filter((c) => c.featured);
}
