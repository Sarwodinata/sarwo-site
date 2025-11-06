export const metadata = {
  title: "Tentang • Sarwo Dinata",
  description:
    "Profil singkat Sarwo Dinata: mahasiswa TI yang suka membangun aplikasi, menulis blog, dan berbagi pengetahuan.",
};

export default function Tentang() {
  const skills = [
    { area: "Frontend", items: ["Next.js", "React", "Tailwind CSS"] },
    { area: "Backend", items: ["Node.js", "Express", "REST API"] },
    { area: "Database", items: ["MySQL", "MongoDB", "Firebase"] },
    { area: "Tools", items: ["Git/GitHub", "VS Code", "Postman"] },
    { area: "Data & DSS", items: ["TOPSIS", "Spreadsheet", "Visualisasi"] },
    { area: "IoT/Robotics", items: ["ESP32", "RFID", "Servo/LED/Buzzer"] },
  ];

  const timeline = [
    {
      year: "2025",
      title: "Website Portofolio + Blog",
      desc: "Membangun situs pribadi untuk dokumentasi proyek dan catatan singkat.",
    },
    {
      year: "2024",
      title: "DSS TOPSIS",
      desc: "Aplikasi perbandingan tablet (tugas kuliah) dengan metode TOPSIS.",
    },
    {
      year: "2024",
      title: "Smart Locker RFID (ESP32)",
      desc: "Prototipe loker pintar: baca kartu, buzzer, dan LED indikator.",
    },
    {
      year: "2023",
      title: "Belajar Web Dev Serius",
      desc: "Mulai fokus Next.js, UI rapi, dan manajemen proyek kecil.",
    },
  ];

  return (
    <main className="max-w-5xl mx-auto">
      {/* Intro */}
      <section className="rounded-2xl border bg-white p-6 sm:p-8">
        <h1 className="text-3xl font-heading font-bold text-slate-900">
          Tentang Saya
        </h1>
        <p className="mt-3 text-slate-700 leading-relaxed">
          Halo! Saya <b>Sarwo Dinata</b>, mahasiswa Teknik Informatika. Saya
          suka membangun aplikasi yang sederhana namun bermanfaat, menulis blog
          singkat, dan berbagi hal yang benar-benar dipakai. Fokus utama saya
          saat ini: <b>Next.js (frontend)</b>, <b>API sederhana</b>, dan{" "}
          <b>DSS/TOPSIS</b>. Saya juga senang otak-atik <b>ESP32 + RFID</b> untuk
          proyek IoT kecil.
        </p>

        <div className="mt-5 grid gap-4 sm:grid-cols-3">
          <div className="rounded-xl border p-4">
            <h3 className="font-heading text-slate-900">Status</h3>
            <p className="text-slate-700 mt-1">Mahasiswa TI • Aktif</p>
          </div>
          <div className="rounded-xl border p-4">
            <h3 className="font-heading text-slate-900">Fokus</h3>
            <p className="text-slate-700 mt-1">
              Next.js • API • DSS • IoT (ESP32)
            </p>
          </div>
          <div className="rounded-xl border p-4">
            <h3 className="font-heading text-slate-900">Moto</h3>
            <p className="text-slate-700 mt-1">
              “Belajar, membangun, dan berbagi.”
            </p>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section className="mt-8">
        <h2 className="text-2xl font-heading text-slate-900">Keahlian</h2>
        <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {skills.map((s, i) => (
            <div key={i} className="rounded-xl border bg-white p-4">
              <h3 className="font-heading text-primary">{s.area}</h3>
              <ul className="mt-2 text-slate-700 space-y-1">
                {s.items.map((it) => (
                  <li key={it} className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-primary inline-block" />
                    {it}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Timeline ringkas */}
      <section className="mt-8">
        <h2 className="text-2xl font-heading text-slate-900">
          Perjalanan Singkat
        </h2>
        <ol className="mt-4 space-y-3">
          {timeline.map((t, i) => (
            <li key={i} className="rounded-xl border bg-white p-4">
              <div className="flex items-start gap-4">
                <div className="shrink-0 rounded-lg bg-primary/10 px-3 py-1 font-semibold text-primary">
                  {t.year}
                </div>
                <div>
                  <h3 className="font-heading text-slate-900">{t.title}</h3>
                  <p className="text-slate-700">{t.desc}</p>
                </div>
              </div>
            </li>
          ))}
        </ol>
      </section>

      {/* CTA */}
      <section className="mt-8">
        <div className="rounded-2xl border bg-white p-6 sm:p-8 text-center">
          <h3 className="text-xl font-heading text-slate-900">
            Tertarik kolaborasi atau ada proyek kecil?
          </h3>
          <p className="mt-1 text-slate-700">
            Saya senang membantu yang jelas kebutuhannya dan to the point.
          </p>
          <div className="mt-4 flex items-center justify-center gap-3">
            <a
              href="/proyek"
              className="rounded-lg bg-primary px-5 py-2.5 font-semibold text-white hover:bg-blue-700 transition"
            >
              Lihat Proyek
            </a>
            <a
              href="/kontak"
              className="rounded-lg border border-slate-300 bg-white px-5 py-2.5 font-semibold text-slate-800 hover:border-primary hover:text-primary transition"
            >
              Hubungi Saya
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
