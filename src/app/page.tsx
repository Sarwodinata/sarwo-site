export default function Home() {
  const fitur = [
    {
      title: "Proyek Nyata",
      desc: "Dari DSS TOPSIS sampai website manajemen workshop—ringkas tapi kena.",
    },
    {
      title: "Artikel Singkat",
      desc: "Catatan padat soal coding, tools, dan pengalaman kuliah TI.",
    },
    {
      title: "Kolaborasi",
      desc: "Terbuka untuk kerja sama, riset kecil, atau proyek freelance.",
    },
  ];

  const highlight = [
    {
      name: "DSS (TOPSIS) – Pemilihan Tablet",
      desc: "Sistem pendukung keputusan untuk menilai dan membandingkan kandidat tablet.",
      link: "/proyek",
    },
    {
      name: "Smart Locker RFID (ESP32)",
      desc: "Prototipe loker pintar berbasis RFID untuk akses cepat & aman.",
      link: "/proyek",
    },
    {
      name: "Sistem Manajemen Workshop",
      desc: "Aplikasi web untuk mengelola peralatan dan ruang praktik.",
      link: "/proyek",
    },
  ];

  return (
    <main className="min-h-[78vh]">
      {/* HERO */}
      <section className="relative overflow-hidden rounded-2xl border bg-gradient-to-b from-white to-slate-50 p-8 sm:p-12">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8 items-center">
          <div>
            <span className="inline-block text-xs font-semibold tracking-wider uppercase text-primary/80 bg-primary/10 px-3 py-1 rounded-full">
              Portofolio & Blog
            </span>
            <h1 className="mt-3 text-4xl sm:text-5xl font-heading font-bold text-slate-900">
              Sarwo <span className="text-primary">Dinata</span>
            </h1>
            <p className="mt-3 text-slate-700 leading-relaxed">
              Mahasiswa Teknik Informatika. Suka membangun aplikasi, menulis
              singkat, dan berbagi praktik yang benar-benar dipakai.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href="/proyek"
                className="inline-flex items-center justify-center rounded-lg bg-primary px-5 py-2.5 font-semibold text-white hover:bg-blue-700 transition"
              >
                Lihat Proyek
              </a>
              <a
                href="/kontak"
                className="inline-flex items-center justify-center rounded-lg border border-slate-300 bg-white px-5 py-2.5 font-semibold text-slate-800 hover:border-primary hover:text-primary transition"
              >
                Kontak Saya
              </a>
            </div>

            <p className="mt-4 text-sm text-slate-500">
              “Belajar, membangun, dan berbagi.”
            </p>
          </div>

          {/* Kartu ringkas di kanan */}
          <div className="grid gap-4">
            {fitur.map((f, i) => (
              <div
                key={i}
                className="rounded-xl border bg-white p-4 shadow-sm hover:shadow-md transition"
              >
                <h3 className="font-heading text-lg text-primary">{f.title}</h3>
                <p className="text-slate-700 mt-1">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* dekorasi halus */}
        <div className="pointer-events-none absolute -top-10 -right-10 h-40 w-40 rounded-full bg-primary/10 blur-2xl" />
      </section>

      {/* HIGHLIGHT PROYEK */}
      <section className="max-w-5xl mx-auto mt-10">
        <div className="flex items-end justify-between">
          <h2 className="text-2xl font-heading text-slate-900">
            Proyek Unggulan
          </h2>
          <a
            className="text-sm font-semibold text-primary hover:underline"
            href="/proyek"
          >
            Lihat semua →
          </a>
        </div>

        <div className="mt-5 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {highlight.map((p, i) => (
            <a
              key={i}
              href={p.link}
              className="group rounded-xl border bg-white p-5 shadow-sm hover:shadow-md hover:border-primary/40 transition"
            >
              <div className="h-10 w-10 rounded-lg bg-primary/10 grid place-items-center text-primary font-bold">
                {i + 1}
              </div>
              <h3 className="mt-3 font-heading text-lg text-slate-900 group-hover:text-primary transition">
                {p.name}
              </h3>
              <p className="mt-1 text-slate-700">{p.desc}</p>
              <span className="mt-3 inline-block text-sm font-semibold text-primary group-hover:underline">
                Detail →
              </span>
            </a>
          ))}
        </div>
      </section>

      {/* CALL TO ACTION BAWAH */}
      <section className="max-w-5xl mx-auto mt-12">
        <div className="rounded-2xl border bg-white p-6 sm:p-8 text-center shadow-sm">
          <h3 className="text-xl font-heading text-slate-900">
            Siap kolaborasi atau butuh bantuan tugas/koding?
          </h3>
          <p className="mt-1 text-slate-700">
            Hubungi saya—respon cepat dan to the point.
          </p>
          <div className="mt-5 flex flex-wrap items-center justify-center gap-3">
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
