export interface ChecklistItem {
  id: string;
  text: string;
}

export interface ChecklistCategory {
  id: string;
  title: string;
  icon: string;
  description: string;
  items: ChecklistItem[];
}

export const checklistCategories: ChecklistCategory[] = [
  {
    id: "foundations",
    title: "Mathematical Foundations",
    icon: "∑",
    description: "Core mathematical skills every math student needs before advanced coursework.",
    items: [
      { id: "f1", text: "Comfortable with proof by induction, contradiction, and contrapositive" },
      { id: "f2", text: "Understand sets, functions, and relations" },
      { id: "f3", text: "Know basic logic and quantifiers (∀, ∃)" },
      { id: "f4", text: "Can write a rigorous mathematical proof from scratch" },
      { id: "f5", text: "Understand equivalence relations and partitions" },
    ],
  },
  {
    id: "calculus",
    title: "Calculus & Analysis",
    icon: "∫",
    description: "Single and multivariable calculus, and the foundations of real analysis.",
    items: [
      { id: "c1", text: "Limits, continuity, and differentiation (Calculus I)" },
      { id: "c2", text: "Integration, Fundamental Theorem of Calculus (Calculus II)" },
      { id: "c3", text: "Sequences and series, convergence tests" },
      { id: "c4", text: "Multivariable calculus: partial derivatives, gradients, Jacobians" },
      { id: "c5", text: "Line integrals, surface integrals, Stokes' and Divergence Theorems" },
      { id: "c6", text: "Real Analysis: epsilon-delta proofs, metric spaces, uniform continuity" },
      { id: "c7", text: "Sequences and series of functions, uniform convergence" },
    ],
  },
  {
    id: "linear-algebra",
    title: "Linear Algebra",
    icon: "⊕",
    description: "The mathematical backbone of machine learning, physics, and applied mathematics.",
    items: [
      { id: "l1", text: "Vector spaces, subspaces, basis, and dimension" },
      { id: "l2", text: "Linear transformations and matrix representations" },
      { id: "l3", text: "Eigenvalues, eigenvectors, and diagonalization" },
      { id: "l4", text: "Inner product spaces, orthogonality, Gram-Schmidt" },
      { id: "l5", text: "Singular Value Decomposition (SVD)" },
      { id: "l6", text: "Spectral Theorem for symmetric/normal matrices" },
      { id: "l7", text: "Read 'Linear Algebra Done Right' by Axler" },
    ],
  },
  {
    id: "probability",
    title: "Probability & Statistics",
    icon: "σ",
    description: "Essential for actuarial science, data science, machine learning, and quantitative finance.",
    items: [
      { id: "p1", text: "Discrete probability: combinatorics, conditional probability, Bayes' theorem" },
      { id: "p2", text: "Random variables, expectation, variance, and moment generating functions" },
      { id: "p3", text: "Common distributions: Binomial, Poisson, Normal, Exponential, Gamma" },
      { id: "p4", text: "Central Limit Theorem and Law of Large Numbers" },
      { id: "p5", text: "Joint distributions, covariance, and correlation" },
      { id: "p6", text: "Statistical inference: MLE, hypothesis testing, confidence intervals" },
      { id: "p7", text: "Completed Exam P (actuarial track)" },
    ],
  },
  {
    id: "algebra",
    title: "Abstract Algebra",
    icon: "⊗",
    description: "Groups, rings, and fields — the structural language of pure mathematics and cryptography.",
    items: [
      { id: "a1", text: "Groups: definition, homomorphisms, Lagrange's Theorem" },
      { id: "a2", text: "Normal subgroups, quotient groups, first isomorphism theorem" },
      { id: "a3", text: "Rings, ideals, quotient rings, and ring homomorphisms" },
      { id: "a4", text: "Fields, field extensions, and introduction to Galois theory" },
      { id: "a5", text: "Polynomial rings and factorization" },
      { id: "a6", text: "Completed Dummit & Foote chapters 1–10" },
    ],
  },
  {
    id: "programming",
    title: "Mathematical Programming",
    icon: "⌨",
    description: "Computational tools are essential for modern mathematical careers in every sector.",
    items: [
      { id: "pr1", text: "Python basics: NumPy, SciPy, Matplotlib" },
      { id: "pr2", text: "LaTeX: can typeset proofs, matrices, and complex equations" },
      { id: "pr3", text: "R or Python for statistics and data analysis" },
      { id: "pr4", text: "Basic MATLAB or Julia for numerical computing" },
      { id: "pr5", text: "Solved 25+ Project Euler problems" },
      { id: "pr6", text: "Version control: comfortable with Git and GitHub" },
    ],
  },
  {
    id: "career",
    title: "Career Preparation",
    icon: "→",
    description: "Steps to convert mathematical training into career opportunities.",
    items: [
      { id: "ca1", text: "Joined math club or undergraduate math society" },
      { id: "ca2", text: "Attended at least one mathematics research talk" },
      { id: "ca3", text: "Completed a summer internship or REU" },
      { id: "ca4", text: "Built a resume highlighting mathematical skills and projects" },
      { id: "ca5", text: "Applied to (or appeared in) the Putnam Competition" },
      { id: "ca6", text: "Identified 2–3 faculty mentors in your area of interest" },
      { id: "ca7", text: "Know your post-graduation plan: industry / graduate school / actuarial" },
    ],
  },
];
