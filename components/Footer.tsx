import Link from "next/link";

const footerLinks = [
  { href: "/quiz", label: "quiz" },
  { href: "/careers", label: "careers" },
  { href: "/roadmap", label: "roadmap" },
  { href: "/programs", label: "programs" },
  { href: "/stories", label: "stories" },
  { href: "/resources", label: "resources" },
  { href: "/checklist", label: "checklist" },
];

export function Footer() {
  return (
    <footer className="border-t border-rule bg-paper-2 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        {/* Nav links row */}
        <div className="flex flex-wrap gap-x-6 gap-y-2 mb-8">
          {footerLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="font-mono text-xs tracking-wider text-ink-faint hover:text-ink-muted transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Bottom row */}
        <div className="border-t border-rule pt-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          <Link href="/" className="flex items-center gap-1.5 group">
            <span className="font-mono text-marker text-sm font-light">ƒ</span>
            <span className="font-display italic text-ink-muted text-sm group-hover:text-ink transition-colors">
              ChooseMath
            </span>
          </Link>
          <p className="font-mono text-[11px] text-ink-faint tracking-wider">
            a small field guide · {new Date().getFullYear()}
          </p>
          <p className="font-mono text-sm text-ink-faint font-light tracking-widest select-none" aria-hidden>
            ∑ ∫ ∂ ∇ λ ∞
          </p>
        </div>
      </div>
    </footer>
  );
}
