import Link from "next/link";

const footerLinks = [
  { href: "/quiz", label: "Quiz" },
  { href: "/careers", label: "Careers" },
  { href: "/roadmap", label: "Roadmap" },
  { href: "/programs", label: "Programs" },
  { href: "/stories", label: "Stories" },
  { href: "/resources", label: "Resources" },
  { href: "/checklist", label: "Checklist" },
];

export function Footer() {
  return (
    <footer className="border-t border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row justify-between gap-8">
          {/* Brand */}
          <div className="flex flex-col gap-3 max-w-xs">
            <Link href="/" className="flex items-center gap-2 group">
              <span className="text-indigo-400 text-2xl math-symbol font-light">∑</span>
              <span className="font-semibold text-slate-900 dark:text-white text-base tracking-tight">
                Choose<span className="text-indigo-600 dark:text-indigo-400">Math</span>
              </span>
            </Link>
            <p className="text-slate-500 text-sm leading-relaxed">
              Your guide to mathematics careers, programs, and the path from student to professional.
            </p>
          </div>

          {/* Links */}
          <div className="flex flex-wrap gap-x-8 gap-y-2">
            {footerLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-slate-500 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 text-sm transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-slate-200 dark:border-slate-800 flex flex-col sm:flex-row justify-between items-center gap-3">
          <p className="text-slate-500 dark:text-slate-600 text-xs">
            © {new Date().getFullYear()} ChooseMath — Built for math students everywhere
          </p>
          <p className="text-slate-400 dark:text-slate-700 text-xs math-symbol">
            ∑ ∫ ∂ ∇ λ ∞
          </p>
        </div>
      </div>
    </footer>
  );
}
