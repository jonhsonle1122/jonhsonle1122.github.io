"use client";

import { ReactNode, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";

export type Project = {
  name: string;
  tagline: string;
  description: string;
  tech: string[];
  role: string;
  links?: {
    demo?: string;
    github?: string;
  };
};

type ProjectModalProps = {
  project: Project | null;
  open: boolean;
  onClose: () => void;
};

export function ProjectModal({ project, open, onClose }: ProjectModalProps) {
  useEffect(() => {
    if (!open) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [open, onClose]);

  if (!project) return null;

  const content: ReactNode = (
    <>
      <div className="mb-3 flex items-start justify-between gap-3">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-emerald-400">
            Chi tiết dự án
          </p>
          <h3 className="mt-2 text-sm font-semibold text-slate-50">
            {project.name}
          </h3>
          <p className="mt-1 text-[11px] text-slate-400">{project.tagline}</p>
        </div>
        <button
          type="button"
          onClick={onClose}
          className="inline-flex h-7 w-7 items-center justify-center rounded-full border border-slate-700/80 bg-slate-900/80 text-xs text-slate-400 transition hover:border-slate-500 hover:text-slate-100"
        >
          ✕
        </button>
      </div>

      <p className="mt-2 text-[11px] leading-relaxed text-slate-200">
        {project.description}
      </p>

      {project.tech.length > 0 && (
        <div className="mt-4 flex flex-wrap gap-1.5">
          {project.tech.map((tag) => (
            <span
              key={tag}
              className="badge-pill border-emerald-500/40 bg-emerald-500/10 px-2 py-1 text-[10px] font-medium text-emerald-200"
            >
              {tag}
            </span>
          ))}
        </div>
      )}

      <div className="mt-5 flex flex-wrap items-center justify-between gap-3 text-[11px] text-slate-300">
        <span className="text-slate-400">
          Vai trò: <span className="font-medium text-slate-100">{project.role}</span>
        </span>
        <div className="flex flex-wrap gap-2">
          {project.links?.demo && (
            <a
              href={project.links.demo}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1 rounded-full bg-emerald-400 px-3 py-1.5 font-semibold text-slate-950 shadow-sm shadow-emerald-500/40 transition hover:bg-emerald-300"
            >
              Live
              <span aria-hidden="true">↗</span>
            </a>
          )}
          {project.links?.github && (
            <a
              href={project.links.github}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1 rounded-full border border-slate-700/80 bg-slate-900/80 px-3 py-1.5 font-medium text-slate-100 transition hover:border-emerald-400/80"
            >
              GitHub
            </a>
          )}
        </div>
      </div>
    </>
  );

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-40 flex items-center justify-center bg-slate-950/80 backdrop-blur-md"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, y: 24, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.97 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="glass-panel relative mx-4 max-h-[80vh] w-full max-w-md overflow-y-auto rounded-3xl px-5 py-4 text-sm text-slate-50"
            onClick={(e) => e.stopPropagation()}
          >
            {content}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

