// src/app/layout.tsx
import "./globals.css";
import type { Metadata } from "next";
import Navbar from "../components/Navbar";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Sarwo Dinata",
  description: "Personal site",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id">
      <head>
              </head>
<body className="min-h-screen bg-white text-slate-900 antialiased">
  <Navbar />
  <main className="pt-20">{children}</main>
</body>
    </html>
  );
}
