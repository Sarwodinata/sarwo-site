"use client";

import { useTheme } from "next-themes";
import ThemeToggle from "../components/ThemeToggle";

export default function ThemeToggle() {
  const { theme, setTheme, systemTheme } = useTheme();
  const effective = theme === "system" ? systemTheme : theme;

  return (
    <button
      aria-label="Toggle Theme"
      onClick={() => setTheme(effective === "dark" ? "light" : "dark")}
      className="rounded-lg border border-slate-300 dark:border-slate-600 px-3 py-1 text-sm
                 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
    >
      {effective === "dark" ? "☀️ Terang" : "🌙 Gelap"}
    </button>
  );
}
