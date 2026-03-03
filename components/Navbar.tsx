"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ThemeToggle } from "./ThemeToggle";

const NAV_ITEMS = [
  { id: "hero", label: "Trang chủ" },
  { id: "about", label: "Giới thiệu" },
  { id: "skills", label: "Kỹ năng" },
  { id: "experience", label: "Kinh nghiệm" },
  { id: "projects", label: "Dự án" },
  { id: "education", label: "Học vấn" },
  { id: "contact", label: "Liên hệ" },
];

function scrollToSection(id: string) {
  const el = document.getElementById(id);
  if (!el) return;
  const y = el.getBoundingClientRect().top + window.scrollY - 96;
  window.scrollTo({ top: y, behavior: "smooth" });
}

export function Navbar({ title }: { title: string }) {
  const [active, setActive] = useState<string>("hero");

  useEffect(() => {
    const handler = () => {
      const offsets = NAV_ITEMS.map((item) => {
        const el = document.getElementById(item.id);
        if (!el) return { id: item.id, offset: Number.POSITIVE_INFINITY };
        const rect = el.getBoundingClientRect();
        return { id: item.id, offset: Math.abs(rect.top - 120) };
      });
      offsets.sort((a, b) => a.offset - b.offset);
      if (offsets[0]) setActive(offsets[0].id);
    };

    handler();
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <header className="sticky top-0 z-30 border-b border-slate-900/5 bg-slate-50/70 backdrop-blur-xl dark:border-slate-50/5 dark:bg-slate-950/75">
      <div className="mx-auto flex max-w-5xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">
        <div
          className="flex items-center gap-3"
          onClick={() => scrollToSection("hero")}
        >
          <div className="relative flex h-8 w-8 items-center justify-center overflow-hidden rounded-2xl bg-gradient-to-br from-emerald-400 via-sky-400 to-violet-500 text-xs font-semibold text-slate-950 shadow-md shadow-emerald-500/40">
            <span>CV</span>
          </div>
          <div className="hidden flex-col sm:flex">
            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-emerald-500">
              Portfolio
            </span>
            <span className="text-sm font-medium text-slate-900 dark:text-slate-50">
              {title}
            </span>
          </div>
        </div>

        <nav className="hidden items-center gap-1 rounded-full border border-slate-200/80 bg-white/60 px-1.5 py-1 text-[11px] font-medium text-slate-600 shadow-sm backdrop-blur dark:border-slate-800/80 dark:bg-slate-900/60 dark:text-slate-300 md:flex">
          {NAV_ITEMS.map((item) => {
            const isActive = active === item.id;
            return (
              <button
                key={item.id}
                type="button"
                onClick={() => scrollToSection(item.id)}
                className={`relative rounded-full px-2.5 py-1 transition ${
                  isActive
                    ? "text-slate-50"
                    : "text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-100"
                }`}
              >
                {isActive && (
                  <motion.span
                    layoutId="nav-pill"
                    className="absolute inset-0 rounded-full bg-gradient-to-r from-emerald-400 via-sky-400 to-violet-500"
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{item.label}</span>
              </button>
            );
          })}
        </nav>

        <div className="flex items-center gap-2">
          <div className="hidden md:block">
            <ThemeToggle />
          </div>
          <button
            type="button"
            onClick={() => scrollToSection("contact")}
            className="hidden rounded-full bg-slate-900 px-3 py-1.5 text-xs font-semibold text-slate-50 shadow-sm shadow-slate-900/40 transition hover:-translate-y-0.5 hover:bg-slate-800 dark:bg-emerald-400 dark:text-slate-900 dark:shadow-emerald-500/40 dark:hover:bg-emerald-300 sm:inline-flex"
          >
            Liên hệ
          </button>
          <div className="block md:hidden">
            <ThemeToggle />
          </div>
        </div>
      </div>

      <nav className="flex border-t border-slate-100/70 bg-slate-50/80 px-2 py-1 text-[10px] text-slate-500 shadow-sm backdrop-blur dark:border-slate-800/80 dark:bg-slate-950/85 md:hidden">
        <div className="mx-auto flex max-w-5xl flex-1 items-center justify-between gap-1">
          {NAV_ITEMS.map((item) => {
            const isActive = active === item.id;
            return (
              <button
                key={item.id}
                type="button"
                onClick={() => scrollToSection(item.id)}
                className={`flex flex-1 flex-col items-center rounded-full px-1.5 py-1 ${
                  isActive
                    ? "text-emerald-500"
                    : "text-slate-500 hover:text-slate-800 dark:text-slate-400 dark:hover:text-slate-100"
                }`}
              >
                <span className="truncate">{item.label}</span>
                {isActive && (
                  <span className="mt-0.5 h-[2px] w-6 rounded-full bg-gradient-to-r from-emerald-400 via-sky-400 to-violet-500" />
                )}
              </button>
            );
          })}
        </div>
      </nav>
    </header>
  );
}

