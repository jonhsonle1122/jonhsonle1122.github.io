"use client";

import { SectionWrapper } from "./SectionWrapper";

export type AboutData = {
  headline: string;
  content: string;
  highlights: string[];
};

export function About({ about }: { about: AboutData }) {
  return (
    <SectionWrapper
      id="about"
      title="Giới thiệu"
      subtitle="Tóm tắt nhanh về tôi và cách tôi làm việc."
    >
      <div className="section-grid">
        <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-300">
          {about.content}
        </p>
        <div className="grid gap-3 sm:grid-cols-2">
          {about.highlights.map((item) => (
            <div
              key={item}
              className="glass-panel-light dark:glass-panel flex items-start gap-3 px-5 py-4 text-xs text-slate-600 dark:text-slate-200"
            >
              <span className="mt-1 inline-flex h-1.5 w-1.5 flex-none rounded-full bg-emerald-400" />
              <p>{item}</p>
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}

