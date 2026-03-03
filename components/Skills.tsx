"use client";

import { motion } from "framer-motion";
import { SectionWrapper } from "./SectionWrapper";

export type Skill = {
  name: string;
  level: number;
};

export type SkillCategory = {
  name: string;
  skills: Skill[];
};

export type SkillsData = {
  categories: SkillCategory[];
};

export function Skills({ skills }: { skills: SkillsData }) {
  return (
    <SectionWrapper
      id="skills"
      title="Kỹ năng"
      subtitle="Kỹ năng chính mà tôi sử dụng để xây dựng sản phẩm."
    >
      <div className="grid gap-4 md:grid-cols-2">
        {skills.categories.map((category) => (
          <div
            key={category.name}
            className="glass-panel-light dark:glass-panel px-5 py-5"
          >
            <div className="mb-4 flex items-center justify-between gap-2">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500 dark:text-slate-400">
                {category.name}
              </p>
            </div>
            <div className="space-y-3">
              {category.skills.map((skill) => (
                <SkillRow key={skill.name} skill={skill} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}

function SkillRow({ skill }: { skill: Skill }) {
  const clamped = Math.min(100, Math.max(0, skill.level));
  return (
    <div className="space-y-1.5">
      <div className="flex items-center justify-between text-xs">
        <span className="font-medium text-slate-700 dark:text-slate-100">
          {skill.name}
        </span>
        <span className="text-[11px] text-slate-500 dark:text-slate-400">
          {clamped}%
        </span>
      </div>
      <div className="h-1.5 overflow-hidden rounded-full bg-slate-100/80 dark:bg-slate-800/80">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${clamped}%` }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="h-full rounded-full bg-gradient-to-r from-emerald-400 via-sky-400 to-violet-500 shadow-[0_0_15px_rgba(56,189,248,0.45)]"
        />
      </div>
    </div>
  );
}

