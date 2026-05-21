/* Inline SVG primitives for the Notebook aesthetic */

export function InkUnderline({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 120 8"
      className={`w-full h-2 ${className}`}
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      <path
        d="M2 5 Q 15 2, 30 5 Q 45 8, 60 5 Q 75 2, 90 5 Q 105 8, 118 5"
        stroke="currentColor"
        strokeWidth="1.5"
        fill="none"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function InkCircle({ size = 40, className = "" }: { size?: number; className?: string }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 40 40"
      className={className}
      aria-hidden="true"
    >
      <ellipse
        cx="20"
        cy="20"
        rx="17"
        ry="16"
        stroke="currentColor"
        strokeWidth="1.5"
        fill="none"
        strokeDasharray="2 1"
        strokeLinecap="round"
        transform="rotate(-5 20 20)"
      />
    </svg>
  );
}

export function InkArrow({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 48 32"
      className={`inline-block ${className}`}
      aria-hidden="true"
    >
      <path
        d="M4 20 Q 20 4, 38 16"
        stroke="currentColor"
        strokeWidth="1.5"
        fill="none"
        strokeLinecap="round"
      />
      <path
        d="M32 10 L 38 16 L 30 18"
        stroke="currentColor"
        strokeWidth="1.5"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function InkCheck({ size = 18, className = "" }: { size?: number; className?: string }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M4 13 Q 9 18, 11 20 Q 15 12, 21 5"
        stroke="currentColor"
        strokeWidth="2"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function InkRule({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 200 4"
      className={`w-full h-1 ${className}`}
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      <path
        d="M0 2 Q 50 1, 100 2 Q 150 3, 200 2"
        stroke="currentColor"
        strokeWidth="1"
        fill="none"
        strokeLinecap="round"
      />
    </svg>
  );
}

/* ── New primitives ─────────────────────────────────────────────────────── */

export function InkHighlighter({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 100 14"
      className={`absolute inset-x-0 bottom-0 w-full h-3.5 pointer-events-none ${className}`}
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      <path
        d="M1 10 Q 10 7, 25 9 Q 45 12, 60 9 Q 78 6, 95 9 Q 98 10, 99 10"
        stroke="currentColor"
        strokeWidth="7"
        strokeOpacity="0.45"
        fill="none"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function InkScribbleCircle({ size = 56, className = "" }: { size?: number; className?: string }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 56 56"
      className={className}
      aria-hidden="true"
    >
      <ellipse
        cx="28"
        cy="28"
        rx="23"
        ry="21"
        stroke="currentColor"
        strokeWidth="1.5"
        fill="none"
        strokeLinecap="round"
        transform="rotate(-8 28 28)"
      />
      <ellipse
        cx="29"
        cy="27"
        rx="21"
        ry="20"
        stroke="currentColor"
        strokeWidth="1"
        fill="none"
        strokeLinecap="round"
        strokeDasharray="3 2"
        transform="rotate(4 29 27)"
      />
    </svg>
  );
}

export function InkStar({ size = 20, className = "" }: { size?: number; className?: string }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      className={className}
      aria-hidden="true"
    >
      {/* 5 hand-drawn spokes */}
      <path d="M12 2 L 13 9" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" />
      <path d="M12 22 L 11 15" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" />
      <path d="M2 9 L 8.5 12" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" />
      <path d="M22 9 L 15.5 12" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" />
      <path d="M4.5 20 L 9.5 15" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" />
      <path d="M19.5 20 L 14.5 15" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" />
    </svg>
  );
}

export function InkAsterisk({ size = 20, className = "" }: { size?: number; className?: string }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      className={className}
      aria-hidden="true"
    >
      <path d="M12 3 L 12 21" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" />
      <path d="M3 12 L 21 12" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" />
      <path d="M5.4 5.4 L 18.6 18.6" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" />
      <path d="M18.6 5.4 L 5.4 18.6" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" />
      {/* Slightly off-center wobble dots */}
      <circle cx="12" cy="12" r="1.2" fill="currentColor" />
    </svg>
  );
}

export function InkDoodleDivider({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 120 20"
      className={`h-5 ${className}`}
      aria-hidden="true"
    >
      {/* Left rule */}
      <path d="M2 10 Q 20 9, 42 10" stroke="currentColor" strokeWidth="1" fill="none" strokeLinecap="round" />
      {/* Central flourish — a small cursive loop */}
      <path
        d="M46 13 Q 50 6, 55 10 Q 58 13, 60 10 Q 63 6, 68 10 Q 72 13, 74 10"
        stroke="currentColor"
        strokeWidth="1.2"
        fill="none"
        strokeLinecap="round"
      />
      {/* Right rule */}
      <path d="M78 10 Q 100 9, 118 10" stroke="currentColor" strokeWidth="1" fill="none" strokeLinecap="round" />
    </svg>
  );
}

export function InkPaperclip({ size = 24, className = "" }: { size?: number; className?: string }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 32"
      className={className}
      aria-hidden="true"
    >
      {/* Outer curve */}
      <path
        d="M6 28 Q 2 28, 2 22 L 2 8 Q 2 2, 8 2 Q 14 2, 14 8 L 14 22 Q 14 26, 10 26 Q 6 26, 6 22 L 6 10"
        stroke="currentColor"
        strokeWidth="1.5"
        fill="none"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function InkArrowHand({
  className = "",
  rotate = 0,
}: {
  className?: string;
  rotate?: number;
}) {
  return (
    <svg
      viewBox="0 0 60 40"
      className={`inline-block ${className}`}
      style={rotate ? { transform: `rotate(${rotate}deg)` } : undefined}
      aria-hidden="true"
    >
      {/* Curvy shaft */}
      <path
        d="M4 30 Q 10 10, 28 14 Q 44 18, 52 10"
        stroke="currentColor"
        strokeWidth="1.5"
        fill="none"
        strokeLinecap="round"
      />
      {/* Arrow head */}
      <path
        d="M46 6 L 52 10 L 48 16"
        stroke="currentColor"
        strokeWidth="1.5"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
