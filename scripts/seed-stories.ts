/**
 * One-time migration: seeds the 6 original stories into Firestore.
 * Run with: npx tsx scripts/seed-stories.ts
 * Requires NEXT_PUBLIC_FIREBASE_* env vars in .env.local
 */

import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc } from "firebase/firestore";
import { config } from "dotenv";
import { resolve } from "path";

config({ path: resolve(process.cwd(), ".env.local") });

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const stories = [
  {
    name: "Priya Nair",
    title: "Quantitative Researcher",
    company: "Two Sigma",
    degree: "BS Mathematics",
    gradYear: 2019,
    school: "University of Michigan",
    quote: "Real Analysis felt painfully abstract at the time. Three years later, I use measure theory every single day to build trading models.",
    fullStory: "I came into Michigan thinking I wanted to be a physics professor, but a stochastic processes course in my junior year completely changed my trajectory. The beauty of how probability theory and calculus intertwined to model markets was unlike anything I'd seen. I pivoted hard into financial mathematics and landed a summer internship at a Chicago trading firm after my junior year. Two Sigma hired me straight out of undergrad and I've been building systematic equity models ever since. My pure math background — especially real analysis and measure theory — gives me a depth that most of my colleagues with engineering backgrounds don't have.",
    tags: ["Quantitative Finance", "Pure Math", "Industry"],
    imageInitials: "PN",
    accentColor: "indigo",
  },
  {
    name: "Marcus Webb",
    title: "Research Scientist, AI",
    company: "Google DeepMind",
    degree: "BS/MS Mathematics",
    gradYear: 2021,
    school: "MIT",
    quote: "A math PhD teaches you how to think through hard problems — that's the actual skill, not the theorems.",
    fullStory: "I started my PhD in pure mathematics focusing on algebraic topology, but the explosion of deep learning during my second year pulled me sideways. I realized that my proof-based mathematical training gave me an enormous advantage in understanding why neural networks work, not just that they work. I transferred my thesis focus to the theoretical foundations of deep learning — generalization bounds, loss landscape geometry, and the implicit bias of gradient descent. DeepMind recruited me before I finished and I now work on foundational ML research. My advice: take your pure math seriously and then pick up programming. The combination is unstoppable.",
    tags: ["Machine Learning", "Research", "PhD"],
    imageInitials: "MW",
    accentColor: "violet",
  },
  {
    name: "Sofia Delgado",
    title: "Fellow of the Society of Actuaries",
    company: "Milliman",
    degree: "BS Mathematics",
    gradYear: 2017,
    school: "University of Chicago",
    quote: "I passed three actuarial exams before graduating. By the time my classmates were job hunting, I already had two competing offers.",
    fullStory: "I chose math at UChicago because I wanted rigor and a clear career path. Actuarial science delivered exactly that. The exam process is demanding but incredibly fair — if you put in the work, you move up. I passed Exams P and FM as a sophomore, got my first internship at Milliman that summer, and never looked back. I'm now an FSA specializing in health insurance product pricing. The math I use daily — survival models, credibility theory, loss distributions — maps almost exactly to what I studied in probability theory and statistics courses. It's one of the most direct translations from classroom to career that exists.",
    tags: ["Actuarial", "Insurance", "Exams"],
    imageInitials: "SD",
    accentColor: "cyan",
  },
  {
    name: "Elijah Okonkwo",
    title: "Tenure-Track Assistant Professor",
    company: "Northwestern University",
    degree: "PhD Mathematics",
    gradYear: 2023,
    school: "Princeton University",
    quote: "The day I find a connection between two seemingly unrelated areas of mathematics is the best day of my week, every week.",
    fullStory: "My research is in arithmetic geometry — the intersection of algebraic geometry and number theory. It sounds impractical, but the story of mathematics is full of 'impractical' pure math becoming essential science decades later. RSA encryption was built on number theory that mathematicians studied for centuries with no applications in mind. I did my undergrad at Howard, where I had incredible mentors who encouraged me to apply to Princeton despite my imposter syndrome. Five years of graduate work, a postdoc at the IAS, and now I'm a professor at Northwestern. The journey is long but the intellectual rewards are unlike anything else.",
    tags: ["Academia", "Pure Math", "PhD", "Number Theory"],
    imageInitials: "EO",
    accentColor: "amber",
  },
  {
    name: "Aisha Thompson",
    title: "Senior Data Scientist",
    company: "Spotify",
    degree: "BS Applied Mathematics",
    gradYear: 2020,
    school: "UCLA",
    quote: "Most data scientists use tools they don't fully understand. My math background means I know exactly what's happening under the hood.",
    fullStory: "I was a Terence Tao-era math major at UCLA who discovered a passion for statistics and signal processing. The music industry wasn't my first thought, but after a Spotify internship I fell in love with the recommendation problem — it's fundamentally a beautiful mathematical challenge. Collaborative filtering, matrix factorization, embedding spaces — these are linear algebra concepts from sophomore year. My day-to-day involves A/B testing frameworks, causal inference models, and building production ML systems for playlist personalization. The math foundation lets me go deeper than my peers who came from pure CS or data science bootcamps.",
    tags: ["Data Science", "Applied Math", "Tech"],
    imageInitials: "AT",
    accentColor: "emerald",
  },
  {
    name: "James Chen",
    title: "Cryptography Engineer",
    company: "Cloudflare",
    degree: "BS Mathematics, BS Computer Science",
    gradYear: 2022,
    school: "Carnegie Mellon",
    quote: "Post-quantum cryptography is the most exciting mathematical problem being worked on right now, and I get to work on it every day.",
    fullStory: "I double-majored in math and CS at CMU and found my niche in the overlap — cryptography. It's an area where the abstract algebra and number theory that most people dismiss as 'useless' is literally the foundation of all digital security. I work on implementing and standardizing post-quantum cryptographic algorithms at Cloudflare, helping migrate the internet's security infrastructure before quantum computers break RSA. My number theory courses — particularly the sections on elliptic curves and lattices — are directly applicable to my work. If you love algebra and want to do something that matters, cryptography is waiting for you.",
    tags: ["Cryptography", "Security", "Industry"],
    imageInitials: "JC",
    accentColor: "rose",
  },
];

async function seed() {
  console.log("Seeding stories into Firestore…");
  for (let i = 0; i < stories.length; i++) {
    const doc = await addDoc(collection(db, "stories"), {
      ...stories[i],
      status: "approved",
      seedOrder: i,
      submittedAt: new Date(),
    });
    console.log(`  ✓ ${stories[i].name} → ${doc.id}`);
  }
  console.log("Done.");
  process.exit(0);
}

seed().catch((err) => {
  console.error(err);
  process.exit(1);
});
