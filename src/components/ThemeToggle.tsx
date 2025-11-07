"use client";
import { useEffect, useState } from "react";

function setTheme(dark: boolean) {
  const root = document.documentElement;
  if (dark) root.classList.add("dark");
  else root.classList.remove("dark");
  localStorage.setItem("theme", dark ? "dark" : "light");
}

export default function ThemeToggle() {
  const [mounted, setMounted] = useState(false);
  const [dark, setDark] = useState(false);

  useEffect(() => {
    // sinkron dari DOM/head script agar sama dengan HTML awal
    const has = document.documentElement.classList.contains("dark");
    setDark(has);
    setMounted(true);
  }, []);

  if (!mounted) {
    // placeholder dengan ukuran yg sama supaya tidak ubah layout saat hydration
    return <div className="inline-block h-9 w-9 rounded-full border border-transparent" />;
  }

  return (
    <button
      aria-label="Toggle theme"
      onClick={() => { const next = !dark; setDark(next); setTheme(next); }}
      className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-black/10 dark:border-white/10 bg-white/70 dark:bg-white/10 hover:scale-105 transition"
      title={dark ? "Mode Terang" : "Mode Gelap"}
    >
      <span className="text-lg">{dark ? "☀️" : "🌙"}</span>
    </button>
  );
}
