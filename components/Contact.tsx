"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { SectionWrapper } from "./SectionWrapper";

export type SocialLink = {
  label: string;
  url: string;
};

export type ContactData = {
  email: string;
  phone?: string;
  location: string;
  availability: string;
  social: SocialLink[];
};

export function Contact({ contact }: { contact: ContactData }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(contact.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch {
      setCopied(false);
    }
  };

  return (
    <SectionWrapper
      id="contact"
      title="Liên hệ"
      subtitle="Rất vui nếu được trao đổi thêm về cơ hội hợp tác."
    >
      <div className="grid gap-4 md:grid-cols-[minmax(0,1.3fr)_minmax(0,1fr)]">
        <div className="glass-panel-light dark:glass-panel flex flex-col px-5 py-5 text-xs text-slate-700 dark:text-slate-200">
          <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-emerald-500">
            Thông tin liên hệ
          </p>
          <p className="mt-2 text-[11px] text-slate-500 dark:text-slate-400">
            Tôi ưu tiên các vị trí Frontend / Fullstack tập trung vào trải nghiệm
            người dùng và chất lượng sản phẩm.
          </p>
          <dl className="mt-4 space-y-2">
            <div className="flex items-center justify-between gap-2">
              <dt className="text-[11px] text-slate-500 dark:text-slate-400">
                Email
              </dt>
              <dd className="flex items-center gap-2 text-[11px] font-medium text-slate-900 dark:text-slate-50">
                <a
                  href={`mailto:${contact.email}`}
                  className="underline decoration-dotted underline-offset-2"
                >
                  {contact.email}
                </a>
                <motion.button
                  type="button"
                  onClick={handleCopy}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center gap-1 rounded-full border border-slate-300/60 bg-slate-100/90 px-2.5 py-1 text-[10px] font-medium text-slate-700 shadow-sm hover:border-emerald-400/70 hover:bg-emerald-50 dark:border-slate-600/60 dark:bg-slate-800/80 dark:text-slate-200 dark:hover:border-emerald-400/50 dark:hover:bg-slate-700/80"
                >
                  {copied ? "Đã copy" : "Copy"}
                </motion.button>
              </dd>
            </div>
            {contact.phone && (
              <div className="flex items-center justify-between gap-2">
                <dt className="text-[11px] text-slate-500 dark:text-slate-400">
                  Số điện thoại
                </dt>
                <dd className="text-[11px] font-medium text-slate-900 dark:text-slate-50">
                  {contact.phone}
                </dd>
              </div>
            )}
            <div className="flex items-center justify-between gap-2">
              <dt className="text-[11px] text-slate-500 dark:text-slate-400">
                Địa điểm
              </dt>
              <dd className="text-[11px] font-medium text-slate-900 dark:text-slate-50">
                {contact.location}
              </dd>
            </div>
            <div className="flex items-center justify-between gap-2">
              <dt className="text-[11px] text-slate-500 dark:text-slate-400">
                Trạng thái
              </dt>
              <dd className="text-[11px] font-medium text-emerald-500">
                {contact.availability}
              </dd>
            </div>
          </dl>
        </div>

        {contact.social.length > 0 && (
          <div className="glass-panel-light dark:glass-panel flex flex-col px-5 py-5 text-xs text-slate-700 dark:text-slate-200">
            <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-emerald-500">
              Kết nối
            </p>
            <p className="mt-2 text-[11px] text-slate-500 dark:text-slate-400">
              Bạn có thể xem thêm về mã nguồn, ghi chú kỹ thuật hoặc bài viết cá nhân
              tại các kênh sau.
            </p>
            <ul className="mt-4 space-y-2">
              {contact.social.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.url}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center justify-between rounded-xl border border-slate-200/70 bg-slate-50/90 px-3 py-2.5 text-[11px] font-medium text-slate-700 shadow-sm transition hover:border-emerald-400/60 hover:bg-emerald-50/80 dark:border-slate-600/50 dark:bg-slate-800/60 dark:text-slate-200 dark:hover:border-emerald-400/40 dark:hover:bg-slate-700/70"
                  >
                    <span>{item.label}</span>
                    <span className="text-[10px] text-slate-400 dark:text-slate-500">
                      ↗
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </SectionWrapper>
  );
}

