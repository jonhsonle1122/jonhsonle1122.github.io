"use client";

import { motion } from "framer-motion";

export type HeroData = {
  name: string;
  title: string;
  subtitle: string;
  location: string;
  summary: string;
  availability: string;
  avatar: {
    initials: string;
    gradientFrom: string;
    gradientTo: string;
  };
};

export function Hero({ hero }: { hero: HeroData }) {
  return (
    <section
      id="hero"
      className="animated-gradient-bg relative overflow-hidden pt-10 pb-16 sm:pt-14 sm:pb-20 lg:pt-20 lg:pb-24"
    >
      <div className="mx-auto flex max-w-5xl flex-col gap-10 px-4 sm:px-6 lg:flex-row lg:items-center lg:gap-16 lg:px-8">
        <div className="flex-1">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="inline-flex items-center gap-2 rounded-full border border-emerald-400/60 bg-emerald-500/10 px-2.5 py-1 text-[11px] font-medium text-emerald-400 shadow-sm shadow-emerald-500/30 backdrop-blur"
          >
            <span className="inline-flex h-1.5 w-1.5 rounded-full bg-emerald-400" />
            <span>Sẵn sàng cho cơ hội mới</span>
            <span className="hidden text-emerald-200/80 sm:inline">
              {hero.availability}
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, ease: "easeOut", delay: 0.08 }}
            className="mt-6 text-balance text-3xl font-semibold tracking-tight text-slate-900 dark:text-slate-50 sm:text-4xl lg:text-5xl"
          >
            {hero.title}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, ease: "easeOut", delay: 0.16 }}
            className="mt-3 text-lg font-medium text-slate-700 dark:text-slate-200"
          >
            {hero.name}
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.22 }}
            className="mt-4 max-w-xl text-sm leading-relaxed text-slate-600 dark:text-slate-400"
          >
            {hero.summary}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.32 }}
            className="mt-7 flex flex-wrap items-center gap-3 text-xs text-slate-500 dark:text-slate-400"
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-slate-200/80 bg-white/70 px-3 py-1 shadow-sm backdrop-blur dark:border-slate-700/80 dark:bg-slate-950/70">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
              <span>{hero.location}</span>
            </div>
            <span className="hidden text-slate-400 sm:inline">•</span>
            <span className="text-slate-500 dark:text-slate-400">
              {hero.subtitle}
            </span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.4 }}
            className="mt-8 flex flex-wrap items-center gap-4"
          >
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-full bg-slate-900 px-5 py-2.5 text-sm font-semibold text-slate-50 shadow-lg shadow-slate-900/40 ring-1 ring-slate-900/80 transition hover:-translate-y-0.5 hover:bg-slate-800 dark:bg-emerald-400 dark:text-slate-950 dark:shadow-emerald-500/40 dark:ring-emerald-300/80 dark:hover:bg-emerald-300"
            >
              Xem dự án
              <span aria-hidden="true">↗</span>
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full border border-slate-200/80 bg-white/70 px-4 py-2.5 text-sm font-medium text-slate-700 shadow-sm backdrop-blur transition hover:-translate-y-0.5 hover:border-emerald-400/70 hover:text-slate-900 dark:border-slate-700/80 dark:bg-slate-950/70 dark:text-slate-200 dark:hover:border-emerald-400/70"
            >
              Liên hệ nhanh
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.92, y: 32 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.18 }}
          className="flex flex-1 items-center justify-center lg:justify-end"
        >
          <div className="relative h-44 w-44 rounded-[2.5rem] bg-gradient-to-br from-emerald-400 via-sky-400 to-violet-500 p-[2px] shadow-[0_25px_80px_rgba(56,189,248,0.6)] sm:h-52 sm:w-52 lg:h-60 lg:w-60">
            <div className="glass-panel-light dark:glass-panel relative flex h-full w-full flex-col items-center justify-center rounded-[2.35rem]">
              <div className="absolute inset-x-8 top-7 h-3 rounded-full bg-slate-200/60 dark:bg-slate-800/80" />
              <div className="absolute inset-x-10 top-7 flex items-center justify-between px-3 text-[9px] font-medium text-slate-500 dark:text-slate-400">
                <span>main.dart</span>
                <span>~/portfolio</span>
              </div>
              <div className="mt-9 flex h-20 w-20 items-center justify-center rounded-3xl bg-gradient-to-br from-emerald-400 via-sky-400 to-violet-500 text-3xl font-semibold text-slate-950 shadow-lg shadow-emerald-500/40 sm:h-24 sm:w-24 sm:text-4xl">
                {hero.avatar.initials}
              </div>
              <div className="mt-4 text-center">
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-emerald-400">
                  Developer
                </p>
                <p className="mt-1 text-sm font-medium text-slate-900 dark:text-slate-50">
                  {hero.name}
                </p>
                <p className="mt-1 text-[11px] text-slate-500 dark:text-slate-400">
                  {hero.title}
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

