import type { Metadata } from "next";
import { Unbounded } from "next/font/google";
import "./globals.css";

const unbounded = Unbounded({
  subsets: ["latin", "cyrillic"],
  weight: ["400", "600"],
  variable: "--font-unbounded",
  display: "swap",
});

export const metadata: Metadata = {
  title: "bapplebar — Apple, Samsung, Dyson в Улан-Удэ и Иркутске",
  description: "Оригинальная техника из Кореи, Японии и США. iPhone, MacBook, Apple Watch, Dyson. Гарантия, рассрочка 0%, Trade-In.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru" className={unbounded.variable}>
      <body style={{ fontFamily: "var(--font-unbounded), sans-serif" }}>{children}</body>
    </html>
  );
}
