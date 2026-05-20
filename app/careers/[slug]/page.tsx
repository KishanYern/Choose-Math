import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { careers, getCareerBySlug } from "@/data/careers";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return careers.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const career = getCareerBySlug(slug);
  if (!career) return { title: "Career Not Found" };
  return {
    title: `${career.title} — Mathematics Career Path`,
    description: career.shortDescription,
  };
}

const typeColors: Record<string, string> = {
  work: "bg-indigo-500/15 text-indigo-600 dark:text-indigo-400 border-indigo-500/25",
  meeting: "bg-violet-500/15 text-violet-600 dark:text-violet-400 border-violet-500/25",
  analysis: "bg-cyan-500/15 text-cyan-600 dark:text-cyan-400 border-cyan-500/25",
  study: "bg-amber-500/15 text-amber-600 dark:text-amber-400 border-amber-500/25",
};

export default async function CareerDetailPage({ params }: Props) {
  const { slug } = await params;
  const career = getCareerBySlug(slug);
  if (!career) notFound();

  const salaryK = (n: number) => `$${Math.round(n / 1000)}K`;

  return (
    <div className="min-h-screen bg-white dark:bg-slate-950">
      {/* Breadcrumb + Header */}
      <div className="border-b border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/40">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-12">
          <div className="flex items-center gap-2 text-xs text-slate-500 mb-8">
            <Link href="/" className="hover:text-slate-700 dark:hover:text-slate-300 transition-colors">Home</Link>
            <span>/</span>
            <Link href="/careers" className="hover:text-slate-700 dark:hover:text-slate-300 transition-colors">Careers</Link>
            <span>/</span>
            <span className="text-slate-600 dark:text-slate-400">{career.title}</span>
          </div>

          <div className="flex items-start gap-5">
            <div className="text-5xl math-symbol text-indigo-500 dark:text-indigo-400 font-light leading-none select-none shrink-0 mt-1">
              {career.icon}
            </div>
            <div>
              <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-slate-100 mb-3">
                {career.title}
              </h1>
              <p className="text-slate-600 dark:text-slate-400 text-lg leading-relaxed max-w-2xl">
                {career.shortDescription}
              </p>
              <div className="flex flex-wrap items-center gap-3 mt-4">
                <span className="px-3 py-1 rounded-full bg-indigo-500/15 text-indigo-600 dark:text-indigo-400 border border-indigo-500/25 text-sm font-medium">
                  {salaryK(career.salaryRange.min)}–{salaryK(career.salaryRange.max)} / yr
                </span>
                {career.tags.map((tag) => (
                  <span key={tag} className="text-xs px-2.5 py-1 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main content */}
          <div className="lg:col-span-2 space-y-10">
            {/* Overview */}
            <section>
              <h2 className="text-xl font-semibold text-slate-900 dark:text-slate-100 mb-4">Overview</h2>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed">{career.description}</p>
            </section>

            {/* Day in the Life */}
            <section>
              <h2 className="text-xl font-semibold text-slate-900 dark:text-slate-100 mb-5">A Day in the Life</h2>
              <div className="space-y-3">
                {career.dayInLife.map((entry, i) => (
                  <div key={i} className="flex gap-4 items-start">
                    <span className="text-xs text-slate-500 w-16 shrink-0 pt-0.5 font-mono">
                      {entry.time}
                    </span>
                    <div className="flex-1 flex items-start gap-3">
                      <span
                        className={`text-xs px-2 py-0.5 rounded-md border shrink-0 capitalize ${typeColors[entry.type]}`}
                      >
                        {entry.type}
                      </span>
                      <p className="text-slate-700 dark:text-slate-300 text-sm leading-relaxed">{entry.activity}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Growth Outlook */}
            <section className="p-5 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/50">
              <h2 className="text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2 flex items-center gap-2">
                <span className="text-indigo-500 dark:text-indigo-400 math-symbol">∞</span> Growth Outlook
              </h2>
              <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">{career.growthOutlook}</p>
              {career.outlookSource && (
                <a
                  href={career.outlookSource.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block text-xs text-indigo-600 dark:text-indigo-400/80 hover:text-indigo-500 dark:hover:text-indigo-300 mt-3"
                >
                  Source: {career.outlookSource.label}
                </a>
              )}
            </section>

            {/* Recommended Courses */}
            <section>
              <h2 className="text-xl font-semibold text-slate-900 dark:text-slate-100 mb-4">Recommended Courses</h2>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {career.recommendedCourses.map((course) => (
                  <div
                    key={course}
                    className="px-3 py-2.5 rounded-lg border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/50 text-slate-700 dark:text-slate-300 text-sm"
                  >
                    {course}
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Required Skills */}
            <div className="p-5 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/50">
              <h3 className="text-sm font-semibold text-slate-700 dark:text-slate-300 mb-3">Required Skills</h3>
              <div className="flex flex-wrap gap-2">
                {career.requiredSkills.map((skill) => (
                  <span
                    key={skill}
                    className="text-xs px-2 py-1 rounded-md bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-slate-700"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Top Employers */}
            <div className="p-5 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/50">
              <h3 className="text-sm font-semibold text-slate-700 dark:text-slate-300 mb-3">Top Employers</h3>
              <ul className="space-y-2">
                {career.employers.map((employer) => (
                  <li key={employer} className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400">
                    <span className="w-1.5 h-1.5 rounded-full bg-indigo-500/60 shrink-0" />
                    {employer}
                  </li>
                ))}
              </ul>
            </div>

            {/* Salary */}
            <div className="p-5 rounded-xl border border-indigo-300/50 dark:border-indigo-500/20 bg-indigo-50 dark:bg-indigo-500/5">
              <h3 className="text-sm font-semibold text-slate-700 dark:text-slate-300 mb-1">Salary Range</h3>
              <p className="text-2xl font-bold text-indigo-600 dark:text-indigo-400">
                {salaryK(career.salaryRange.min)}–{salaryK(career.salaryRange.max)}
              </p>
              <p className="text-slate-500 text-xs mt-1">per year, US market</p>
              <a
                href={career.salarySource.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block text-xs text-indigo-600 dark:text-indigo-400/80 hover:text-indigo-500 dark:hover:text-indigo-300 mt-3"
              >
                Source: {career.salarySource.label}
              </a>
            </div>

            {/* CTA */}
            <div className="space-y-2.5">
              <Link
                href="/quiz"
                className="block w-full px-4 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-sm font-medium text-center transition-colors"
              >
                Take the career quiz
              </Link>
              <Link
                href="/roadmap"
                className="block w-full px-4 py-3 rounded-xl border border-slate-300 dark:border-slate-700 hover:border-slate-400 dark:hover:border-slate-500 text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white text-sm font-medium text-center transition-colors"
              >
                View the roadmap
              </Link>
              <Link
                href="/careers"
                className="block w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-600 text-slate-500 hover:text-slate-700 dark:hover:text-slate-300 text-sm font-medium text-center transition-colors"
              >
                ← All career paths
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
