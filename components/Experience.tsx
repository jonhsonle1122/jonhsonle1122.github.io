"use client";

import { SectionWrapper } from "./SectionWrapper";

export type ExperienceItem = {
  company: string;
  role: string;
  location: string;
  start: string;
  end: string;
  summary: string;
  highlights: string[];
};

export type ExperienceData = ExperienceItem[];

export function Experience({ experience }: { experience: ExperienceData }) {
  return (
    <SectionWrapper
      id="experience"
      title="Kinh nghiệm"
      subtitle="Những nơi tôi đã đóng góp và học hỏi."
    >
      <ol className="relative border-l border-slate-200/70 pl-4 text-xs dark:border-slate-700/70 sm:pl-6">
        {experience.map((item, index) => (
          <li key={`${item.company}-${item.role}-${index}`} className="mb-7">
            <div className="absolute -left-[7px] mt-1.5 h-3.5 w-3.5 rounded-full border border-emerald-400/80 bg-slate-50 shadow-[0_0_0_4px_rgba(16,185,129,0.25)] dark:bg-slate-950" />
            <div className="glass-panel-light dark:glass-panel px-5 py-4">
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <div>
                  <p className="text-xs font-semibold text-slate-900 dark:text-slate-50">
                    {item.role}
                  </p>
                  <p className="mt-0.5 text-[11px] text-slate-500 dark:text-slate-400">
                    {item.company} · {item.location}
                  </p>
                </div>
                <p className="text-[11px] font-medium text-slate-500 dark:text-slate-400">
                  {item.start} — {item.end}
                </p>
              </div>
              <p className="mt-2 text-[11px] leading-relaxed text-slate-600 dark:text-slate-300">
                {item.summary}
              </p>
              {item.highlights.length > 0 && (
                <ul className="mt-2 space-y-1.5 text-[11px] text-slate-600 dark:text-slate-300">
                  {item.highlights.map((point) => (
                    <li key={point} className="flex gap-2">
                      <span className="mt-[6px] h-[3px] w-[3px] rounded-full bg-slate-400 dark:bg-slate-500" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </li>
        ))}
      </ol>
    </SectionWrapper>
  );
}

