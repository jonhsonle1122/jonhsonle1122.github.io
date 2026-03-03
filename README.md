## Portfolio · Nguyễn Văn A

Portfolio cá nhân được xây dựng với **Next.js (App Router) + TypeScript + TailwindCSS + Framer Motion**, tối ưu cho static export (GitHub Pages) và trải nghiệm mượt mà.

### Công nghệ chính

- Next.js App Router
- TypeScript
- TailwindCSS (v4)
- Framer Motion

### Cấu trúc chính

- `app/layout.tsx` · Layout gốc, SEO metadata, thanh progress khi cuộn, loading animation.
- `app/page.tsx` · Trang portfolio chính, render các section từ dữ liệu JSON.
- `components/*` · Các section như `Hero`, `About`, `Skills`, `Experience`, `Projects`, `Education`, `Contact`, `Navbar`, `Footer`, `ThemeToggle`, `ScrollProgress`, `ProjectModal`, `LoadingScreen`, `SectionWrapper`.
- `data/cv.json` · Nguồn dữ liệu duy nhất cho toàn bộ nội dung CV/portfolio.
- `styles/globals.css` · Một số class global cho gradient, glassmorphism, animation.

### Chạy ở môi trường local

```bash
npm install
npm run dev
```

Mở `http://localhost:3000` để xem giao diện.

### Build & export static (GitHub Pages)

```bash
npm run build
npm run export
```

Kết quả static sẽ được xuất ra thư mục `out/`. Có thể deploy thư mục này lên GitHub Pages hoặc bất kỳ static hosting nào.

> Lưu ý: Cấu hình `next.config.js` đã được thiết lập `output: "export"` và `images.unoptimized: true` để tương thích với static export.

### Tuỳ chỉnh nội dung

Tất cả nội dung (thông tin cá nhân, kỹ năng, kinh nghiệm, dự án, học vấn, liên hệ) đều được đọc từ file:

- `data/cv.json`

Bạn chỉ cần chỉnh sửa file JSON này để cập nhật toàn bộ nội dung portfolio mà không phải sửa code.

