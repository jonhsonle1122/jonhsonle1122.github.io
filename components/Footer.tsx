"use client";

export function Footer({ name }: { name: string }) {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-slate-900/5 bg-slate-50/70 py-4 text-[11px] text-slate-500 backdrop-blur dark:border-slate-50/5 dark:bg-slate-950/80 dark:text-slate-500">
      <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-2 px-4 sm:flex-row sm:px-6 lg:px-8">
        <p>
          © {year} {name}. Tất cả quyền được bảo lưu.
        </p>
        <p className="flex items-center gap-1 text-[10px] text-slate-400">
          <span className="h-1 w-1 rounded-full bg-emerald-400" />
          <span>Được xây dựng với Next.js · TailwindCSS · Framer Motion</span>
        </p>
      </div>
    </footer>
  );
}

