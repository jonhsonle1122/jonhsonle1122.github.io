"use client";

import { ReactNode } from "react";
import { motion } from "framer-motion";

type SectionWrapperProps = {
  id: string;
  title: string;
  subtitle?: string;
  children: ReactNode;
  className?: string;
};

export function SectionWrapper({
  id,
  title,
  subtitle,
  children,
  className = "",
}: SectionWrapperProps) {
  return (
    <section
      id={id}
      className={`scroll-mt-24 py-16 sm:py-20 lg:py-24 ${className}`}
    >
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <motion.header
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="mb-8 sm:mb-10"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-500">
            {id}
          </p>
          <h2 className="mt-3 text-2xl font-semibold tracking-tight text-slate-900 dark:text-slate-50 sm:text-3xl">
            {title}
          </h2>
          {subtitle && (
            <p className="mt-3 max-w-2xl text-sm text-slate-600 dark:text-slate-400">
              {subtitle}
            </p>
          )}
        </motion.header>
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          {children}
        </motion.div>
      </div>
    </section>
  );
}

