"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import ThemeToggle from "./ThemeToggle";
import ThemeToggle from "./ThemeToggle";


const navItems = [
  { name: "Beranda", path: "/" },
  { name: "Tentang", path: "/tentang" },
  { name: "Proyek", path: "/proyek" },
  { name: "Blog", path: "/blog" },
  { name: "Kontak", path: "/kontak" },
];

export default function Navbar() {
  const pathname = usePathname();

  const isActive = (to: string) =>
    to === "/"
      ? pathname === "/"
      : pathname === to || pathname.startsWith(`${to}/`);

  return (
    <nav className="flex justify-between items-center px-8 py-4 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md shadow-md fixed w-full top-0 z-10 border-b border-slate-200 dark:border-slate-700">

  {/* Nama situs */}
  <Link href="/" className="font-heading text-2xl font-bold text-primary hover:text-blue-800 transition">
    <span className="text-slate-800 dark:text-slate-100">Sarwo Dinata</span>
  </Link>

  {/* Menu + Tombol Tema */}
  <div className="flex items-center gap-6">
    {navItems.map((item) => {
      const active = isActive(item.path);
      return (
        <Link
          key={item.path}
          href={item.path}
          className={`relative font-semibold px-2 py-1 transition-all duration-200 ${
            active
              ? "text-primary after:content-[''] after:absolute after:left-0 after:bottom-1 after:w-full after:h-[2px] after:bg-primary"
              : "text-slate-700 hover:text-primary"
          }`}
        >
          {item.name}
        </Link>
      );
    })}
    <ThemeToggle />
  </div>
</nav>


    </nav>
  );
}
