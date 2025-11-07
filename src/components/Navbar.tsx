"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import ThemeToggle from "@/components/ThemeToggle";

const links = [
  { href: "/", label: "Home" },
  { href: "/tentang", label: "Tentang" },
  { href: "/proyek", label: "Proyek" },
  { href: "/kontak", label: "Kontak" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-black/5 dark:border-white/10 bg-[var(--bg)]/80 backdrop-blur">
      {/* Bar utama */}
      <div className="relative mx-auto max-w-6xl h-14 flex items-center px-4 sm:px-6 lg:px-8">
        {/* Logo kiri */}
        <Link
          href="/"
          className="absolute left-4 sm:left-6 font-bold tracking-tight text-brand-600 text-lg"
        >
          Sarwo<span className="text-ink dark:text-white">Site</span>
        </Link>

        {/* Menu CENTER */}
        <nav className="absolute left-1/2 -translate-x-1/2 flex items-center gap-6 text-sm font-medium">
          {links.map((n) => {
            const active = pathname === n.href;
            return (
              <Link
                key={n.href}
                href={n.href}
                className={active ? "text-brand-600 underline underline-offset-4" : "hover:text-brand-600"}
                prefetch
              >
                {n.label}
              </Link>
            );
          })}
        </nav>

        {/* Kanan: Theme + Hamburger (HP) */}
        <div className="absolute right-4 sm:right-6 flex items-center gap-2">
          <ThemeToggle />
          <button
            className="sm:hidden inline-flex h-9 w-9 items-center justify-center rounded-md border border-black/10 dark:border-white/10"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            ☰
          </button>
        </div>
      </div>

      {/* Menu mobile */}
      {open && (
        <div className="sm:hidden border-top border-black/5 dark:border-white/10 bg-[var(--bg)]">
          <nav className="mx-auto max-w-6xl px-4 py-3 flex flex-col items-center gap-2 text-sm font-medium">
            {links.map((n) => {
              const active = pathname === n.href;
              return (
                <Link
                  key={n.href}
                  href={n.href}
                  className={`py-1 ${active ? "text-brand-600 underline underline-offset-4" : "hover:text-brand-600"}`}
                  onClick={() => setOpen(false)}
                  prefetch
                >
                  {n.label}
                </Link>
              );
            })}
          </nav>
        </div>
      )}
    </header>
  );
}
