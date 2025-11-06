"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";


const navItems = [
  { name: "Beranda", path: "/" },
  { name: "Tentang", path: "/tentang" },
  { name: "Proyek", path: "/proyek" },
  { name: "Blog", path: "/blog" },
  { name: "Kontak", path: "/kontak" },
];

export default function Navbar() {
  const pathname = usePathname();

const isActive = (to: string) => {
  if (to === "/") {
    return pathname === "/";
  }
  return pathname.startsWith(to);
};
  return (
    <nav className="flex justify-between items-center px-8 py-4 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md shadow-md fixed w-full top-0 z-10 border-b border-slate-200 dark:border-slate-700">
      {/* Nama situs */}
<Link
  href="/"
  className="font-heading text-2xl font-bold text-slate-900 dark:text-slate-100 hover:text-primary transition"
>
  Sarwo Dinata
</Link>


      {/* Menu + Tombol Tema */}
      <div className="flex items-center gap-6">
        {navItems.map((item) => {
          const active = isActive(item.path);
          return (
           <Link
  key={item.path}
  href={item.path}
  aria-current={active ? "page" : undefined}
  className={`px-3 py-2 text-sm font-semibold border-b-2 transition-colors ${
    active
      ? "border-primary text-slate-900"
      : "border-transparent text-slate-700 hover:text-primary hover:border-primary/60"
  }`}
>
  {item.name}
</Link>

          );
        })}
        
      </div>
    </nav>
  );
}
