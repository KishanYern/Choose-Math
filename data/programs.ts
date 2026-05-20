export type ProgramFocus = "pure-math" | "applied-math" | "statistics";

export interface Program {
  id: string;
  school: string;
  shortName: string;
  location: string;
  focus: ProgramFocus[];
  description: string;
  highlights: string[];
  notableAreas: string[];
  url: string;
  ranking?: number;
}

export const programs: Program[] = [
  {
    id: "1",
    school: "Massachusetts Institute of Technology",
    shortName: "MIT",
    location: "Cambridge, MA",
    focus: ["pure-math", "applied-math"],
    description:
      "MIT Mathematics is renowned for its research output across pure and applied mathematics. The department produces Nobel and Fields Medal winners and maintains deep ties to MIT's engineering and physics programs.",
    highlights: [
      "Home to 5 Fields Medalists among alumni and faculty",
      "Strong pure math research in algebra, number theory, and geometry",
      "Applied math program tightly integrated with engineering and physics",
      "Joint programs with EECS and Economics",
    ],
    notableAreas: ["Number Theory", "Algebraic Geometry", "PDEs", "Mathematical Physics"],
    url: "https://math.mit.edu",
    ranking: 1,
  },
  {
    id: "2",
    school: "Princeton University",
    shortName: "Princeton",
    location: "Princeton, NJ",
    focus: ["pure-math"],
    description:
      "Princeton's math department is one of the most storied in the world — home to John Nash, Andrew Wiles (who proved Fermat's Last Theorem here), and a culture of deep, unhurried mathematical thought.",
    highlights: [
      "Andrew Wiles proved Fermat's Last Theorem at Princeton",
      "Close proximity to the Institute for Advanced Study",
      "Small, intimate department with exceptional faculty access",
      "Major strength in number theory and topology",
    ],
    notableAreas: ["Number Theory", "Topology", "Algebraic Geometry", "Mathematical Logic"],
    url: "https://math.princeton.edu",
    ranking: 2,
  },
  {
    id: "3",
    school: "University of Chicago",
    shortName: "UChicago",
    location: "Chicago, IL",
    focus: ["pure-math"],
    description:
      "UChicago has one of the most rigorous and demanding mathematics programs in the country. The department is particularly strong in analysis, algebra, and geometry, with a distinctive Socratic seminar culture.",
    highlights: [
      "The famous Leland Ryerson Hall math culture",
      "Unparalleled depth in algebraic geometry and analysis",
      "Strong preparation for competitive PhD programs",
      "Masters program in Financial Mathematics",
    ],
    notableAreas: ["Algebraic Geometry", "Analysis", "Combinatorics", "Mathematical Finance"],
    url: "https://math.uchicago.edu",
    ranking: 3,
  },
  {
    id: "4",
    school: "Stanford University",
    shortName: "Stanford",
    location: "Stanford, CA",
    focus: ["applied-math", "statistics"],
    description:
      "Stanford's mathematics department is exceptional, but it's particularly distinguished by its applied mathematics and statistics programs, which feed directly into Silicon Valley's technology ecosystem.",
    highlights: [
      "World-class Statistics department — a separate powerhouse",
      "Strong applied math in optimization and scientific computing",
      "Deep ties to industry via proximity to Silicon Valley",
      "Strong MS programs in Computational & Mathematical Engineering",
    ],
    notableAreas: ["Optimization", "Mathematical Finance", "Probability", "Statistics & ML"],
    url: "https://mathematics.stanford.edu",
    ranking: 4,
  },
  {
    id: "5",
    school: "Harvard University",
    shortName: "Harvard",
    location: "Cambridge, MA",
    focus: ["pure-math", "applied-math"],
    description:
      "Harvard Mathematics is one of the oldest and most prestigious departments in the country. The undergraduate program is demanding and produces a disproportionate number of PhD students at top programs.",
    highlights: [
      "Historic department with graduates across every mathematics discipline",
      "Strong in representation theory, geometry, and mathematical physics",
      "Joint programs with Harvard-MIT mathematics",
      "Access to the Center of Mathematical Sciences and Applications",
    ],
    notableAreas: ["Representation Theory", "Geometry", "Number Theory", "Mathematical Physics"],
    url: "https://math.harvard.edu",
    ranking: 5,
  },
  {
    id: "6",
    school: "UC Berkeley",
    shortName: "Berkeley",
    location: "Berkeley, CA",
    focus: ["pure-math", "applied-math", "statistics"],
    description:
      "Berkeley's mathematics and statistics departments are consistently ranked among the world's best. The department has produced more PhDs than almost any other institution and has exceptional breadth.",
    highlights: [
      "Separate, world-class Statistics department",
      "Exceptional faculty breadth across all subfields",
      "Strong computational mathematics and scientific computing",
      "Berkeley Research Data Analysis fellowship programs",
    ],
    notableAreas: ["Algebra", "Analysis", "Probability", "Statistics", "Mathematical Physics"],
    url: "https://math.berkeley.edu",
    ranking: 6,
  },
  {
    id: "7",
    school: "New York University — Courant Institute",
    shortName: "NYU Courant",
    location: "New York, NY",
    focus: ["applied-math"],
    description:
      "The Courant Institute is one of the world's premier applied mathematics institutions. Founded by Richard Courant, it is renowned for PDEs, fluid dynamics, and mathematical physics — and its proximity to Wall Street makes it a pipeline to quantitative finance.",
    highlights: [
      "Founded by Richard Courant, legendary in applied math",
      "World-leading research in PDEs and fluid dynamics",
      "Master's in Mathematics in Finance — top quant pipeline",
      "Proximity to New York financial industry",
    ],
    notableAreas: ["PDEs", "Fluid Dynamics", "Mathematical Finance", "Numerical Analysis"],
    url: "https://math.nyu.edu",
    ranking: 7,
  },
  {
    id: "8",
    school: "University of Michigan",
    shortName: "Michigan",
    location: "Ann Arbor, MI",
    focus: ["pure-math", "applied-math", "statistics"],
    description:
      "Michigan has an exceptionally strong and well-rounded mathematics program with particular depth in algebra, number theory, and applied mathematics. Its undergraduate program is consistently ranked among the top five in the country.",
    highlights: [
      "Exceptionally strong algebraic geometry and number theory groups",
      "Combined BS/MS program options",
      "Strong actuarial and financial mathematics programs",
      "Michigan Math and Science Scholars summer program",
    ],
    notableAreas: ["Number Theory", "Algebraic Geometry", "Applied Math", "Statistics"],
    url: "https://lsa.umich.edu/math",
    ranking: 8,
  },
  {
    id: "9",
    school: "UCLA",
    shortName: "UCLA",
    location: "Los Angeles, CA",
    focus: ["pure-math", "applied-math", "statistics"],
    description:
      "UCLA Mathematics is a large, research-intensive department with exceptional strength in analysis, combinatorics, and applied mathematics. Terence Tao — widely considered one of the greatest living mathematicians — is a faculty member.",
    highlights: [
      "Terence Tao (Fields Medalist) is a faculty member",
      "World-class research in analysis and combinatorics",
      "Strong applied math ties to engineering and data science",
      "Institute for Pure and Applied Mathematics (IPAM) on campus",
    ],
    notableAreas: ["Analysis", "Combinatorics", "PDEs", "Applied & Computational Math"],
    url: "https://ww3.math.ucla.edu",
    ranking: 9,
  },
  {
    id: "10",
    school: "Carnegie Mellon University",
    shortName: "Carnegie Mellon",
    location: "Pittsburgh, PA",
    focus: ["applied-math", "statistics"],
    description:
      "CMU's Mathematical Sciences department is uniquely positioned at the intersection of mathematics and computer science. The department has world-class programs in combinatorics, logic, and statistics, with direct pipelines to CMU's top-ranked CS and ML programs.",
    highlights: [
      "World-class combinatorics and discrete mathematics program",
      "Direct integration with top-ranked CS and ML programs",
      "Statistics & Data Science major offered jointly with CS",
      "Strong Mathematical Finance and Computational Finance programs",
    ],
    notableAreas: ["Combinatorics", "Logic", "Statistics", "Computational Math"],
    url: "https://math.cmu.edu",
    ranking: 10,
  },
];

export function filterPrograms(focus?: ProgramFocus): Program[] {
  if (!focus) return programs;
  return programs.filter((p) => p.focus.includes(focus));
}
