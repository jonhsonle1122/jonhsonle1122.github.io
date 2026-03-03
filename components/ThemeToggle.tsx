"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const STORAGE_KEY = "profilo-theme";

type Theme = "light" | "dark";

function getInitialTheme(): Theme {
  if (typeof window === "undefined") return "dark";
  const stored = window.localStorage.getItem(STORAGE_KEY) as Theme | null;
  if (stored === "light" || stored === "dark") return stored;
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  return prefersDark ? "dark" : "light";
}

export function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>(() => getInitialTheme());
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;
    const root = document.documentElement;
    const isDark = theme === "dark";
    root.classList.toggle("dark", isDark);
    root.classList.toggle("force-light", !isDark);
    root.style.colorScheme = theme;
    window.localStorage.setItem(STORAGE_KEY, theme);
  }, [theme, mounted]);

  if (!mounted) {
    return (
      <div className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-200/60 bg-white/60 text-xs text-slate-500 shadow-sm backdrop-blur dark:border-slate-700/60 dark:bg-slate-900/70 dark:text-slate-400">
        ·
      </div>
    );
  }

  const isDark = theme === "dark";

  return (
    <button
      type="button"
      aria-label="Toggle theme"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="relative inline-flex h-9 w-16 items-center rounded-full border border-slate-200/80 bg-slate-50/60 px-1 text-xs font-medium text-slate-700 shadow-sm backdrop-blur transition hover:border-emerald-400/80 hover:bg-white/90 dark:border-slate-700/80 dark:bg-slate-900/70 dark:text-slate-200 dark:hover:border-emerald-400/80"
    >
      <span className="flex-1 text-[11px] text-left pl-1.5">Light</span>
      <span className="flex-1 text-[11px] text-right pr-1.5">Dark</span>
      <AnimatePresence initial={false}>
        <motion.span
          key={theme}
          initial={{ x: isDark ? -22 : 22, opacity: 0 }}
          animate={{ x: isDark ? -2 : 2, opacity: 1 }}
          exit={{ x: isDark ? 22 : -22, opacity: 0 }}
          transition={{ type: "spring", stiffness: 260, damping: 22 }}
          className="absolute h-7 w-7 rounded-full bg-slate-900 text-[11px] font-semibold text-amber-300 shadow-lg shadow-slate-900/40 dark:bg-amber-300 dark:text-slate-950 dark:shadow-amber-500/40"
        >
          <span className="flex h-full w-full items-center justify-center">
            {isDark ? "☾" : "☼"}
          </span>
        </motion.span>
      </AnimatePresence>
    </button>
  );
}

