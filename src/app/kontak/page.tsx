import ContactForm from "./ContactForm";

export const metadata = {
  title: "Kontak • Sarwo Dinata",
  description:
    "Hubungi Sarwo Dinata untuk kolaborasi, tugas kuliah, atau proyek freelance.",
};

export default function KontakPage() {
  const WA_NUMBER = "6282287303663";
  const EMAIL_TO = "sarwo@example.com"; // ganti ke email asli

  return (
    <main className="max-w-4xl mx-auto">
      <section className="rounded-2xl border bg-white p-6 sm:p-8">
        <h1 className="text-3xl font-heading font-bold text-slate-900">
          Kontak
        </h1>
        <p className="mt-2 text-slate-700">
          Butuh bantuan tugas/koding, mau kolaborasi, atau sekadar tanya? Kirim
          pesan pakai WhatsApp (paling cepat) atau Email.
        </p>

        <div className="mt-5 grid gap-4 sm:grid-cols-3">
          <a
            href={`https://wa.me/${WA_NUMBER}`}
            target="_blank"
            className="rounded-xl border bg-white p-4 hover:border-primary/40 transition"
          >
            <h3 className="font-heading text-slate-900">WhatsApp</h3>
            <p className="text-slate-700 mt-1">+62 822-7791-4806</p>
          </a>
          <a
            href={`mailto:${EMAIL_TO}`}
            className="rounded-xl border bg-white p-4 hover:border-primary/40 transition"
          >
            <h3 className="font-heading text-slate-900">Email</h3>
            <p className="text-slate-700 mt-1">sarwodinata07@gmail.com</p>
          </a>
          <a
            href="https://github.com/Sarwodinata"
            target="_blank"
            className="rounded-xl border bg-white p-4 hover:border-primary/40 transition"
          >
            <h3 className="font-heading text-slate-900">GitHub</h3>
            <p className="text-slate-700 mt-1">Sarwodinata</p>
          </a>
        </div>
      </section>

      {/* form interaktif yang berjalan di client */}
      <ContactForm />
    </main>
  );
}
