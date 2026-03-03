"use client";

import { SectionWrapper } from "./SectionWrapper";

export type EducationItem = {
  school: string;
  degree: string;
  field: string;
  location: string;
  start: string;
  end: string;
  highlights: string[];
};

export type EducationData = EducationItem[];

export function Education({ education }: { education: EducationData }) {
  return (
    <SectionWrapper
      id="education"
      title="Học vấn"
      subtitle="Nền tảng học thuật hỗ trợ cho công việc hiện tại."
    >
      <div className="grid gap-4 md:grid-cols-2">
        {education.map((item) => (
          <div
            key={`${item.school}-${item.degree}-${item.start}`}
            className="glass-panel-light dark:glass-panel flex flex-col px-5 py-5 text-xs"
          >
            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <div>
                <p className="text-xs font-semibold text-slate-900 dark:text-slate-50">
                  {item.school}
                </p>
                <p className="mt-0.5 text-[11px] text-slate-500 dark:text-slate-400">
                  {item.degree} · {item.field}
                </p>
              </div>
              {(item.start || item.end) && (
                <p className="text-[11px] font-medium text-slate-500 dark:text-slate-400">
                  {item.start} {item.start && item.end ? "—" : ""} {item.end}
                </p>
              )}
            </div>
            <p className="mt-1 text-[11px] text-slate-500 dark:text-slate-400">
              {item.location}
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
        ))}
      </div>
    </SectionWrapper>
  );
}

