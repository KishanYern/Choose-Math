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
