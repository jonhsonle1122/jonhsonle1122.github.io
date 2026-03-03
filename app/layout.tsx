import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ScrollProgress } from "../components/ScrollProgress";
import { LoadingScreen } from "../components/LoadingScreen";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "NGUYEN CONG THANH · Mobile Developer",
  description:
    "Portfolio cá nhân của NGUYEN CONG THANH - Mobile Developer (Flutter / React Native).",
  metadataBase: new URL("https://example.com"),
  openGraph: {
    title: "NGUYEN CONG THANH · Mobile Developer",
    description:
      "Mobile Developer (Flutter / React Native) · Cross-platform · Clean Architecture.",
    url: "https://example.com",
    siteName: "Portfolio · NGUYEN CONG THANH",
    locale: "vi_VN",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen bg-background text-foreground`}
      >
        <ScrollProgress />
        <LoadingScreen />
        {children}
      </body>
    </html>
  );
}
