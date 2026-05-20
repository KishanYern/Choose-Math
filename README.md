# ∑ ChooseMath

> Is Mathematics the right career for you? Explore career paths, top programs, alumni stories, and take a personalized quiz to find your direction.

A static informational website for mathematics students — modeled after [WhyPharmacy](https://whypharmacy.org/) but built for math. Dark-mode-first, fast, and fully pre-rendered.

**Live site:** _Coming soon (deploy to Vercel)_
**GitHub:** [KishanYern/Choose-Math](https://github.com/KishanYern/Choose-Math)

---

## Tech Stack

| Tool | Version | Purpose |
|---|---|---|
| [Next.js](https://nextjs.org) | 16 (App Router) | Framework, SSG, routing |
| [TypeScript](https://www.typescriptlang.org) | 5 | Type safety |
| [Tailwind CSS](https://tailwindcss.com) | v4 | Styling |
| [next-themes](https://github.com/pacocoursey/next-themes) | 0.4 | Light/dark toggle |
| [Inter](https://fonts.google.com/specimen/Inter) + [JetBrains Mono](https://fonts.google.com/specimen/JetBrains+Mono) | — | Typography |

All 18 pages are pre-rendered as static HTML at build time — no server required.

---

## Pages

| Route | Description |
|---|---|
| `/` | Landing — hero, stats bar, persona router, featured careers, alumni snippets, FAQ |
| `/quiz` | 8-question career quiz → Pure Math / Applied Math / Data Science / Actuarial |
| `/careers` | Grid of all 7 career paths with salary ranges |
| `/careers/[slug]` | Career detail — day-in-the-life, required skills, employers, salary |
| `/roadmap` | 6-step path from high school to career with action items and pro tips |
| `/programs` | 10 top national math programs, filterable by Pure / Applied / Statistics |
| `/stories` | 6 static alumni profiles with quotes and career trajectories |
| `/resources` | 20+ resources — textbooks, courses, competitions, tools, communities |
| `/checklist` | Skills checklist with `localStorage` persistence and per-category progress bars |

---

## Project Structure

```
app/                    ← Next.js App Router pages
  layout.tsx            ← Root layout: Nav, Footer, ThemeProvider
  page.tsx              ← Landing page
  quiz/page.tsx
  careers/page.tsx
  careers/[slug]/page.tsx
  roadmap/page.tsx
  programs/page.tsx
  stories/page.tsx
  resources/page.tsx
  checklist/page.tsx

components/             ← Shared UI components
  Nav.tsx               ← Sticky nav + dark/light toggle
  Footer.tsx
  ThemeProvider.tsx     ← next-themes wrapper (client)
  ThemeToggle.tsx       ← Sun/moon toggle button (client)
  CareerCard.tsx
  StoryCard.tsx
  FAQAccordion.tsx      ← Client component
  QuizEngine.tsx        ← Quiz state machine (client)
  ProgramsFilter.tsx    ← Focus-area filter (client)
  ChecklistTracker.tsx  ← localStorage checklist (client)

data/                   ← All static content as typed TypeScript arrays
  careers.ts            ← CareerTrack[] — 7 career paths
  programs.ts           ← Program[] — 10 top programs
  quiz.ts               ← QuizQuestion[] + scoring logic
  stories.ts            ← Story[] — 6 alumni profiles
  resources.ts          ← Resource[] — 20+ curated resources
  roadmap.ts            ← RoadmapStep[] — 6-step roadmap
  checklist.ts          ← ChecklistCategory[] — 7 skill categories
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

## Design System

- **Dark mode (default):** `#0f172a` slate base, indigo/violet accent (`#818cf8`)
- **Light mode:** white/slate-50 base, indigo accent (`#6366f1`)
- **Toggle:** persisted via `next-themes` with `defaultTheme="dark"`
- **Fonts:** Inter (UI) + JetBrains Mono (math symbols, code)
- **Math symbols** (∑ ∫ ∂ ∇ λ ∞) used as decorative elements throughout

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
