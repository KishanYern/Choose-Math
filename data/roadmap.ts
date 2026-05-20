export interface RoadmapAction {
  text: string;
}

export interface RoadmapStep {
  id: number;
  phase: string;
  duration: string;
  title: string;
  description: string;
  actions: RoadmapAction[];
  tip: string;
  icon: string;
}

export const roadmapSteps: RoadmapStep[] = [
  {
    id: 1,
    phase: "High School",
    duration: "4 Years",
    title: "Build the Foundation",
    description:
      "Strong high school mathematics is the single best predictor of success in a math degree. Push beyond what's required — take every advanced course available and seek out competitions.",
    actions: [
      { text: "Complete Precalculus, Calculus AB/BC, and Statistics" },
      { text: "Take AP Calculus BC and target a 5 — college credit saves time" },
      { text: "Compete in AMC 10/12 and AIME — competitions build proof instincts" },
      { text: "Self-study linear algebra basics (Khan Academy, 3Blue1Brown)" },
      { text: "Read popular math books — start with 'What Is Mathematics?' by Courant" },
    ],
    tip: "Taking AP Calculus BC and scoring a 5 often lets you skip Calc I and II in college, putting you ahead from day one.",
    icon: "📐",
  },
  {
    id: 2,
    phase: "Early Undergrad",
    duration: "Years 1–2",
    title: "Enter Proof-Based Mathematics",
    description:
      "The first two years of a math degree involve the critical transition from computation to proof. This is where most students either fall in love with mathematics or realize it's not for them — and that's okay. Push through the discomfort.",
    actions: [
      { text: "Complete Calculus III (Multivariable) and Linear Algebra" },
      { text: "Take a 'Proofs' or 'Introduction to Higher Mathematics' course" },
      { text: "Start Real Analysis or Abstract Algebra as early as possible" },
      { text: "Attend your department's math club and faculty talks" },
      { text: "Begin studying for actuarial Exam P if that's your path" },
    ],
    tip: "The proof transition is hard for everyone. Office hours and study groups are not signs of weakness — they're the strategy of students who succeed.",
    icon: "∑",
  },
  {
    id: 3,
    phase: "Mid Undergrad",
    duration: "Years 2–3",
    title: "Discover Your Direction",
    description:
      "By year three you should be sampling advanced courses across pure and applied mathematics to find what you love. Internship season also begins — your mathematical training is already valuable.",
    actions: [
      { text: "Take 2–3 upper-division courses: Analysis, Algebra, PDEs, Number Theory, Stats" },
      { text: "Apply for NSF REU programs (applications typically due in February)" },
      { text: "Seek a research project with a faculty member" },
      { text: "If interested in industry: apply for data science, quant, or actuarial internships" },
      { text: "Take the Putnam Competition — the process of preparing is valuable regardless of score" },
    ],
    tip: "REU (Research Experiences for Undergraduates) programs are fully funded summer research positions — apply broadly. A strong REU experience is one of the best things on a PhD application.",
    icon: "∫",
  },
  {
    id: 4,
    phase: "Late Undergrad",
    duration: "Year 4",
    title: "Specialize and Launch",
    description:
      "Your senior year is about going deep in your chosen area and executing your post-graduation plan — whether that's graduate school applications, job applications, or your first actuarial exams.",
    actions: [
      { text: "Complete a senior thesis or capstone project if available" },
      { text: "For PhD track: take the Math GRE Subject Test and apply to 8–12 programs" },
      { text: "For industry track: complete a strong internship and convert to full-time" },
      { text: "For actuarial track: pass at least 2–3 exams (P, FM, MFE) and get internship credit" },
      { text: "Build your GitHub portfolio with mathematical computing projects" },
    ],
    tip: "PhD programs typically cover tuition and provide a stipend ($20K–$35K/year) in exchange for teaching or research work. A math PhD is not a financial sacrifice — apply broadly.",
    icon: "λ",
  },
  {
    id: 5,
    phase: "Graduate / Early Career",
    duration: "2–6 Years",
    title: "Become an Expert",
    description:
      "Whether you pursue a master's, PhD, or jump into industry, the early career years are about rapid skill development and professional identity formation. The mathematical foundation you've built is now your competitive advantage.",
    actions: [
      { text: "PhD students: find your advisor and dissertation topic by year 2" },
      { text: "Industry hires: invest heavily in domain-specific skills (finance, ML, actuarial)" },
      { text: "Build a professional network through conferences, meetups, and LinkedIn" },
      { text: "Actuaries: continue exam progress toward FSA or FCAS designation" },
      { text: "Consider a master's in a specialized field (Financial Math, Statistics, CS) for industry pivots" },
    ],
    tip: "The average math PhD graduate entering industry earns 20–40% more than candidates from other quantitative disciplines at the same experience level. The rigor pays off.",
    icon: "∂",
  },
  {
    id: 6,
    phase: "Career",
    duration: "Ongoing",
    title: "Lead and Contribute",
    description:
      "A mathematics career is a lifelong journey. Senior mathematicians mentor the next generation, lead research programs, or build the quantitative systems that organizations depend on. The field rewards those who never stop learning.",
    actions: [
      { text: "Publish research, give talks, or contribute to open-source mathematical software" },
      { text: "Mentor junior mathematicians and undergraduates" },
      { text: "Stay current with developments in your field through journals and conferences" },
      { text: "Consider leadership in professional societies (AMS, SIAM, SOA, CAS)" },
      { text: "Give back to the pipeline — speak at your alma mater" },
    ],
    tip: "Mathematics is one of the few fields where a passionate amateur can still make genuine contributions. Stay curious and keep doing mathematics outside of work — you'll be better at work for it.",
    icon: "∞",
  },
];
