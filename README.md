# ƒ ChooseMath

> A small field guide to careers in mathematics.

Explore career paths, top university programs, alumni stories, and take a personalized quiz to find your direction. Built for math students at every stage — high school through graduate school.

**Live site:** _Coming soon (deploy to Vercel)_  
**GitHub:** [KishanYern/Choose-Math](https://github.com/KishanYern/Choose-Math)

---

![Next.js](https://img.shields.io/badge/Next.js-16-black?logo=next.js&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-5-3178c6?logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4-38bdf8?logo=tailwind-css&logoColor=white)
![Static](https://img.shields.io/badge/rendering-static_SSG-22c55e)
![License](https://img.shields.io/badge/license-MIT-gray)

---

## Screenshots

<!-- Drop a screenshot here once deployed. Example:
![ChooseMath homepage — light mode](screenshots/home-light.png)
![ChooseMath homepage — dark mode](screenshots/home-dark.png)
-->

> _Screenshots coming once deployed. Run `npm run dev` locally to preview._

---

## Design

The site uses a **Mathematician's Notebook** aesthetic — cream paper in light mode, blackboard in dark mode, with editorial serif typography and monospace accents.

| Token | Light | Dark |
|---|---|---|
| Background | `#faf6ef` (cream paper) | `#16181a` (blackboard) |
| Text | `#1f1d1a` (warm near-black) | `#f1ece0` (chalk) |
| Accent | `#1d3557` (ink blue) | `#9bbedd` (chalk blue) |
| Marker | `#c1272d` (red pen) | `#e88a8a` (pastel red) |
| Rule | `#d6cdb8` (faint ink) | `#353a3d` (chalk dust) |

**Fonts:**
- [Newsreader](https://fonts.google.com/specimen/Newsreader) — display headings, italic pull-quotes
- [Inter](https://fonts.google.com/specimen/Inter) — body text
- [JetBrains Mono](https://fonts.google.com/specimen/JetBrains+Mono) — labels, nav links, equations

**Theme toggle:** `lights on / lights off` — persisted via `next-themes`, default dark.

---

## Tech Stack

| Tool | Version | Purpose |
|---|---|---|
| [Next.js](https://nextjs.org) | 16 (App Router) | Framework, SSG, routing |
| [TypeScript](https://www.typescriptlang.org) | 5 | Type safety |
| [Tailwind CSS](https://tailwindcss.com) | v4 | Styling |
| [next-themes](https://github.com/pacocoursey/next-themes) | 0.4 | Light/dark toggle |
| [Newsreader](https://fonts.google.com/specimen/Newsreader) + [Inter](https://fonts.google.com/specimen/Inter) + [JetBrains Mono](https://fonts.google.com/specimen/JetBrains+Mono) | — | Typography |

All 18 pages are pre-rendered as static HTML at build time — no server required.

---

## Pages

| Route | Description |
|---|---|
| `/` | Landing — hero, stats bar, featured careers, alumni snippets, FAQ |
| `/quiz` | 8-question career quiz → Pure Math / Applied Math / Data Science / Actuarial |
| `/careers` | Directory of all 8 career paths with salary ranges |
| `/careers/[slug]` | Career detail — day-in-the-life, required skills, employers, salary, growth outlook |
| `/roadmap` | Step-by-step path from high school to career with action items |
| `/programs` | Notable national math programs, filterable by Pure / Applied / Statistics |
| `/stories` | 7 alumni profiles with pull-quotes and career trajectories |
| `/resources` | 25+ curated resources — textbooks, courses, competitions, tools, communities |
| `/checklist` | Skills checklist with `localStorage` persistence and per-category progress |

---

## Project Structure

```
app/                       ← Next.js App Router pages
  globals.css              ← Notebook palette tokens, dot-grid, typography utilities
  layout.tsx               ← Root layout: Nav, Footer, ThemeProvider, fonts
  page.tsx                 ← Landing page
  quiz/page.tsx
  careers/page.tsx
  careers/[slug]/page.tsx
  roadmap/page.tsx
  programs/page.tsx
  stories/page.tsx
  resources/page.tsx
  checklist/page.tsx

components/                ← Shared UI components
  Nav.tsx                  ← Sticky nav with lowercase mono links + hamburger
  Footer.tsx               ← Signature footer with math symbol flourish
  ThemeProvider.tsx        ← next-themes wrapper (client)
  ThemeToggle.tsx          ← "lights on / lights off" text toggle (client)
  Ink.tsx                  ← Hand-drawn inline SVG primitives (InkUnderline,
                              InkCircle, InkArrow, InkCheck, InkRule)
  CareerCard.tsx           ← Paper-2 card with hover ink underline
  StoryCard.tsx            ← Pull-quote treatment with byline
  FAQAccordion.tsx         ← Q.01 style accordion (client)
  QuizEngine.tsx           ← Workbook-style quiz state machine (client)
  ProgramsFilter.tsx       ← Expandable directory rows with filter (client)
  ChecklistTracker.tsx     ← localStorage checklist with InkCheck boxes (client)

data/                      ← All static content as typed TypeScript arrays
  careers.ts               ← CareerTrack[] — 8 career paths
  programs.ts              ← Program[] — notable math departments
  quiz.ts                  ← QuizQuestion[] + scoring logic
  stories.ts               ← Story[] — 7 alumni profiles
  resources.ts             ← Resource[] — 25+ curated resources
  roadmap.ts               ← RoadmapStep[] — step-by-step career roadmap
  checklist.ts             ← ChecklistCategory[] — skill milestone categories
```

---

## Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

```bash
# Type-check
npx tsc --noEmit

# Production build
npm run build
```

---

## Roadmap

**Phase 1 (current):** Static content site — all data hardcoded in `data/` files.

**Phase 2 (planned):**
- Firebase Firestore for dynamic alumni stories
- Firebase Auth for contributor accounts
- Contributor submission portal (`/contribute`)
- Dynamic `/contributors/[id]` profile pages

---

## Deployment

Deploy to [Vercel](https://vercel.com) in one click — no configuration needed for a Next.js static site.

```bash
npx vercel
```

Or connect the GitHub repo at [vercel.com/new](https://vercel.com/new) for automatic deploys on every push to `main`.

---

MIT License · Built by [Kishan Yerneni](https://github.com/KishanYern)
