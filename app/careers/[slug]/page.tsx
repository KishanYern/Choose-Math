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

export default async function CareerDetailPage({ params }: Props) {
  const { slug } = await params;
  const career = getCareerBySlug(slug);
  if (!career) notFound();

  const salaryK = (n: number) => `$${Math.round(n / 1000)}K`;

  return (
    <div>
      {/* Header */}
      <div className="border-b border-rule bg-paper-2">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-12">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 font-mono text-[11px] text-ink-faint mb-8 tracking-wider">
            <Link href="/" className="hover:text-ink-muted transition-colors">home</Link>
            <span>/</span>
            <Link href="/careers" className="hover:text-ink-muted transition-colors">careers</Link>
            <span>/</span>
            <span className="text-ink-muted">{career.title.toLowerCase()}</span>
          </div>

          <div className="flex items-start gap-5">
            <span className="font-mono text-3xl text-ink-faint font-light leading-none select-none shrink-0 mt-1">
              {career.icon}
            </span>
            <div>
              <h1 className="font-display text-3xl sm:text-4xl text-ink font-normal mb-3 leading-snug">
                {career.title}
              </h1>
              <p className="text-ink-muted text-base leading-relaxed max-w-2xl">
                {career.shortDescription}
              </p>
              <div className="flex flex-wrap items-center gap-3 mt-4">
                <span className="font-mono text-xs px-3 py-1 border border-accent text-accent">
                  {salaryK(career.salaryRange.min)}–{salaryK(career.salaryRange.max)} / yr
                </span>
                {career.tags.map((tag) => (
                  <span key={tag} className="font-mono text-[10px] px-2 py-0.5 border border-rule text-ink-faint tracking-wider">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* Main content */}
          <div className="lg:col-span-2 space-y-12">
            {/* Overview */}
            <section>
              <h2 className="font-display text-xl text-ink font-normal mb-1 pb-3 border-b border-rule">Overview</h2>
              <p className="text-ink-muted leading-relaxed mt-4 drop-cap">{career.description}</p>
            </section>

            {/* Day in the Life */}
            <section>
              <h2 className="font-display text-xl text-ink font-normal mb-1 pb-3 border-b border-rule">
                A Day in the Life
              </h2>
              <div className="mt-4 space-y-0">
                {career.dayInLife.map((entry, i) => (
                  <div key={i} className="flex gap-4 items-start py-3 border-b border-rule last:border-b-0">
                    <span className="font-mono text-[11px] text-ink-faint w-14 shrink-0 pt-0.5 tracking-wider">
                      {entry.time}
                    </span>
                    <div className="flex-1 flex items-start gap-3">
                      <span className="font-mono text-[10px] px-1.5 py-0.5 border border-rule text-ink-faint shrink-0 capitalize tracking-wider">
                        {entry.type}
                      </span>
                      <p className="text-ink-muted text-sm leading-relaxed">{entry.activity}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Growth Outlook */}
            <section>
              <h2 className="font-display text-xl text-ink font-normal mb-1 pb-3 border-b border-rule">
                Growth Outlook
              </h2>
              <p className="text-ink-muted text-sm leading-relaxed mt-4">{career.growthOutlook}</p>
              {career.outlookSource && (
                <a
                  href={career.outlookSource.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-mono text-[11px] text-accent hover:text-ink transition-colors mt-3 inline-block tracking-wider"
                >
                  source: {career.outlookSource.label} ↗
                </a>
              )}
            </section>

            {/* Recommended Courses */}
            <section>
              <h2 className="font-display text-xl text-ink font-normal mb-1 pb-3 border-b border-rule">
                Recommended Courses
              </h2>
              <div className="mt-4 grid grid-cols-2 sm:grid-cols-3 gap-px bg-rule">
                {career.recommendedCourses.map((course) => (
                  <div key={course} className="bg-paper-2 px-3 py-2.5 text-ink-muted text-sm">
                    {course}
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <div className="space-y-6 lg:border-l lg:border-rule lg:pl-10">
            {/* Salary */}
            <div>
              <p className="font-mono text-[11px] text-ink-faint tracking-widest mb-2 uppercase">salary range</p>
              <p className="font-display text-3xl text-ink font-normal">
                {salaryK(career.salaryRange.min)}–{salaryK(career.salaryRange.max)}
              </p>
              <div className="h-px w-8 bg-rule my-2" />
              <p className="font-mono text-[11px] text-ink-faint tracking-wider">per year, US market</p>
              <a
                href={career.salarySource.url}
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono text-[11px] text-accent hover:text-ink transition-colors mt-2 inline-block tracking-wider"
              >
                source: {career.salarySource.label} ↗
              </a>
            </div>

            <div className="border-t border-rule" />

            {/* Required Skills */}
            <div>
              <p className="font-mono text-[11px] text-ink-faint tracking-widest mb-3 uppercase">required skills</p>
              <div className="flex flex-wrap gap-1.5">
                {career.requiredSkills.map((skill) => (
                  <span
                    key={skill}
                    className="font-mono text-[10px] tracking-wider px-2 py-0.5 border border-rule text-ink-faint"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="border-t border-rule" />

            {/* Top Employers */}
            <div>
              <p className="font-mono text-[11px] text-ink-faint tracking-widest mb-3 uppercase">top employers</p>
              <ul className="space-y-2">
                {career.employers.map((employer) => (
                  <li key={employer} className="font-mono text-[11px] text-ink-muted flex items-center gap-2 tracking-wide">
                    <span className="text-ink-faint">·</span>
                    {employer}
                  </li>
                ))}
              </ul>
            </div>

            <div className="border-t border-rule" />

            {/* CTA */}
            <div className="space-y-2">
              <Link
                href="/quiz"
                className="block w-full font-mono text-xs tracking-wider px-4 py-2.5 bg-accent text-paper text-center hover:bg-ink transition-colors"
              >
                take the career quiz →
              </Link>
              <Link
                href="/roadmap"
                className="block w-full font-mono text-xs tracking-wider px-4 py-2.5 border border-rule text-ink-muted text-center hover:border-ink-faint hover:text-ink transition-colors"
              >
                view the roadmap
              </Link>
              <Link
                href="/careers"
                className="block w-full font-mono text-xs tracking-wider px-4 py-2.5 border border-rule text-ink-faint text-center hover:text-ink-muted transition-colors"
              >
                ← all career paths
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
