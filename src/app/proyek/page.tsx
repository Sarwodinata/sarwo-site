export default function Proyek() {
  const proyekList = [
    { nama: "Sistem Manajemen Workshop", deskripsi: "Aplikasi berbasis web untuk pengelolaan alat dan ruang praktik di sekolah kejuruan." },
    { nama: "Decision Support System TOPSIS", deskripsi: "Sistem pendukung keputusan untuk pemilihan perangkat tablet menggunakan metode TOPSIS." },
  ];

  return (
    <section className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-heading text-primary mb-6 text-center">Proyek Saya</h1>
      <div className="grid gap-6 sm:grid-cols-2">
        {proyekList.map((p, i) => (
          <div key={i} className="p-4 border rounded-xl shadow-sm bg-green">
            <h2 className="font-heading text-xl text-primary mb-2">{p.nama}</h2>
            <p className="text-slate-700">{p.deskripsi}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
