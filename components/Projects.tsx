"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { SectionWrapper } from "./SectionWrapper";
import { Project, ProjectModal } from "./ProjectModal";

export type ProjectsData = Project[];

export function Projects({ projects }: { projects: ProjectsData }) {
  const [selected, setSelected] = useState<Project | null>(null);
  const [open, setOpen] = useState(false);

  const handleOpen = (project: Project) => {
    setSelected(project);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setTimeout(() => setSelected(null), 200);
  };

  return (
    <>
      <SectionWrapper
        id="projects"
        title="Dự án nổi bật"
        subtitle="Một vài dự án tiêu biểu thể hiện cách tôi tiếp cận sản phẩm."
      >
        <div className="grid gap-4 md:grid-cols-2">
          {projects.map((project) => (
            <motion.button
              key={project.name}
              type="button"
              onClick={() => handleOpen(project)}
              whileHover={{ y: -6, scale: 1.02 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className="glass-panel-light dark:glass-panel flex h-full flex-col px-5 py-5 text-left text-xs text-slate-700 outline-none ring-0 transition hover:shadow-xl hover:shadow-emerald-500/10 dark:text-slate-200"
            >
              <div className="flex items-start justify-between gap-3">
                <div>
                  <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-emerald-500">
                    Dự án
                  </p>
                  <h3 className="mt-1 text-sm font-semibold text-slate-900 dark:text-slate-50">
                    {project.name}
                  </h3>
                  <p className="mt-1 text-[11px] text-slate-500 dark:text-slate-400">
                    {project.tagline}
                  </p>
                </div>
              </div>

              <p className="mt-3 line-clamp-3 text-[11px] leading-relaxed text-slate-600 dark:text-slate-300">
                {project.description}
              </p>

              <div className="mt-3 flex flex-wrap gap-1.5">
                {project.tech.slice(0, 4).map((tag) => (
                  <span
                    key={tag}
                    className="badge-pill border-slate-200/80 bg-slate-50/80 px-2 py-1 text-[10px] font-medium text-slate-600 dark:border-slate-700/80 dark:bg-slate-900/80 dark:text-slate-200"
                  >
                    {tag}
                  </span>
                ))}
                {project.tech.length > 4 && (
                  <span className="badge-pill border-transparent bg-slate-100/80 px-2 py-1 text-[10px] text-slate-500 dark:bg-slate-900/60 dark:text-slate-400">
                    +{project.tech.length - 4}
                  </span>
                )}
              </div>

              <div className="mt-4 flex items-center justify-between text-[11px] text-slate-500 dark:text-slate-400">
                <span>Vai trò: {project.role}</span>
                <span className="inline-flex items-center gap-1 text-emerald-500">
                  Xem chi tiết
                  <span aria-hidden="true">↗</span>
                </span>
              </div>
            </motion.button>
          ))}
        </div>
      </SectionWrapper>

      <ProjectModal project={selected} open={open} onClose={handleClose} />
    </>
  );
}

