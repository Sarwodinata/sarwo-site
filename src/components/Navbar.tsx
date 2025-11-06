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

  const isActive = (to: string) =>
    to === "/"
      ? pathname === "/"
      : pathname === to || pathname.startsWith(`${to}/`);

  return (
    <nav className="flex justify-between items-center px-8 py-4 bg-green/90 backdrop-blur-md shadow-md fixed w-full top-0 z-10 border-b border-slate-200">
      {/* Nama situs */}
      <Link href="/" className="font-heading text-2xl font-bold text-primary hover:text-blue-800 transition">
      <span className="text-slate-800">Sarwo Dinata</span>
      </Link>

      {/* Menu */}
      <div className="flex gap-6">
        {navItems.map((item) => {
          const active = isActive(item.path);
          return (
            <Link
              key={item.path}
              href={item.path}
              className={`relative font-semibold px-2 py-1 transition-all duration-200 ${
                active
                  ? "text-primary after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-full after:h-[2px] after:bg-primary"
                  : "text-slate-700 hover:text-primary"
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
