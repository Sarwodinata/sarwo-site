export const metadata = {
  title: "Proyek • Sarwo Dinata",
  description:
    "Kumpulan proyek Sarwo Dinata: DSS TOPSIS, Smart Locker RFID, dan sistem manajemen workshop.",
};

type Project = {
  title: string;
  desc: string;
  tech: string[];
  repo?: string;
  demo?: string;
  year?: string;
};

const projects: Project[] = [
  {
    title: "DSS (TOPSIS) – Pemilihan Tablet",
    desc:
      "Aplikasi pembanding beberapa kandidat tablet menggunakan metode TOPSIS. Fokus pada bobot kriteria, normalisasi, dan perankingan.",
    tech: ["Next.js", "TypeScript", "Tailwind", "TOPSIS"],
    repo: "https://github.com/your-repo/topsis-or-example", // ganti bila ada
    demo: "/proyek", // bisa diarahkan ke halaman detail nanti
    year: "2024",
  },
  {
    title: "Smart Locker RFID (ESP32)",
    desc:
      "Prototipe loker pintar berbasis ESP32 + RFID. Fitur: tambah kartu baru, buzzer & LED indikator, dan verifikasi multi-ID.",
    tech: ["ESP32", "RFID", "C/C++ (Arduino)"],
    repo: "https://github.com/your-repo/smart-locker", // ganti bila ada
    year: "2024",
  },
  {
    title: "Sistem Manajemen Workshop",
    desc:
      "Aplikasi web untuk mengelola peralatan, ruangan, jadwal pemakaian, serta pencatatan pemeliharaan di bengkel/werkplaats.",
    tech: ["Next.js", "Node.js", "MySQL", "REST API"],
    repo: "https://github.com/your-repo/workshop-management", // ganti bila ada
    year: "2025",
  },
  {
    title: "Website Pribadi + Blog",
    desc:
      "Portofolio dan blog singkat untuk dokumentasi proyek, catatan kuliah, dan eksperimen frontend.",
    tech: ["Next.js 16", "App Router", "Tailwind"],
    repo: "https://github.com/Sarwodinata/sarwo-site",
    demo: "https://sarwo-dinata-site.vercel.app",
    year: "2025",
  },
];

function Pill({ children }: { children: React.ReactNode }) {
  return (
    <span className="rounded-full border bg-white px-3 py-1 text-xs font-semibold text-slate-700">
      {children}
    </span>
  );
}

function ProjectCard({ p }: { p: Project }) {
  return (
    <div className="group rounded-2xl border bg-white p-5 shadow-sm hover:shadow-md hover:border-primary/40 transition">
      <div className="flex items-center justify-between gap-3">
        <h3 className="font-heading text-lg text-slate-900 group-hover:text-primary transition">
          {p.title}
        </h3>
        {p.year && (
          <span className="text-xs font-semibold text-primary/80 bg-primary/10 px-2 py-1 rounded">
            {p.year}
          </span>
        )}
      </div>
      <p className="mt-2 text-slate-700">{p.desc}</p>

      <div className="mt-3 flex flex-wrap gap-2">
        {p.tech.map((t) => (
          <Pill key={t}>{t}</Pill>
        ))}
      </div>

      <div className="mt-4 flex flex-wrap gap-3">
        {p.repo && (
          <a
            href={p.repo}
            target="_blank"
            className="inline-flex items-center justify-center rounded-lg border border-slate-300 bg-white px-4 py-2 text-sm font-semibold text-slate-800 hover:border-primary hover:text-primary transition"
          >
            Lihat Repo
          </a>
        )}
        {p.demo && (
          <a
            href={p.demo}
            target="_blank"
            className="inline-flex items-center justify-center rounded-lg bg-primary px-4 py-2 text-sm font-semibold text-white hover:bg-blue-700 transition"
          >
            Lihat Demo
          </a>
        )}
      </div>
    </div>
  );
}

export default function ProyekPage() {
  return (
    <main className="max-w-5xl mx-auto">
      <header className="rounded-2xl border bg-white p-6 sm:p-8">
        <h1 className="text-3xl font-heading font-bold text-slate-900">Proyek</h1>
        <p className="mt-2 text-slate-700">
          Beberapa pekerjaan dan eksperimen yang saya bangun. List ini akan
          terus diupdate seiring proyek baru.
        </p>
      </header>

      <section className="mt-6 grid gap-5 sm:grid-cols-2">
        {projects.map((p) => (
          <ProjectCard key={p.title} p={p} />
        ))}
      </section>

      <section className="mt-8">
        <div className="rounded-2xl border bg-white p-6 sm:p-8 text-center">
          <h3 className="text-xl font-heading text-slate-900">
            Punya ide proyek? Ayo kolaborasi.
          </h3>
          <p className="mt-1 text-slate-700">
            Hubungi saya untuk tugas kuliah, riset mini, atau proyek freelance.
          </p>
          <div className="mt-4 flex items-center justify-center gap-3">
            <a
              href="https://wa.me/6282287303663"
              target="_blank"
              className="rounded-lg bg-primary px-5 py-2.5 font-semibold text-white hover:bg-blue-700 transition"
            >
              Chat WhatsApp
            </a>
            <a
              href="/kontak"
              className="rounded-lg border border-slate-300 bg-white px-5 py-2.5 font-semibold text-slate-800 hover:border-primary hover:text-primary transition"
            >
              Form Kontak
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
