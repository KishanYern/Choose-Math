"use client";

import { useTheme } from "next-themes";
import { useSyncExternalStore } from "react";

function noopSubscribe() {
  return () => {};
}

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const mounted = useSyncExternalStore(noopSubscribe, () => true, () => false);

  if (!mounted) {
    return <div className="w-16 h-5 rounded bg-paper-3 animate-pulse" />;
  }

  const isDark = theme === "dark";

  return (
    <button
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="font-mono text-[11px] tracking-wider text-ink-faint hover:text-ink-muted transition-colors leading-none"
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
    >
      {isDark ? "lights on" : "lights off"}
    </button>
  );
}
