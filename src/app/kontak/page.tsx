export default function Kontak() {
  return (
    <section className="max-w-3xl mx-auto text-center">
      <h1 className="text-3xl font-heading text-primary mb-4">Kontak Saya</h1>
      <p className="mb-6">
        Kamu bisa menghubungi saya lewat WhatsApp atau email untuk diskusi, kolaborasi, atau proyek bersama.
      </p>
      <div className="flex flex-col items-center gap-3">
        <a
          href="https://wa.me/6282287303663"
          target="_blank"
          className="bg-primary text-white px-5 py-2 rounded-lg hover:bg-blue-700"
        >
          WhatsApp
        </a>
        <a
          href="mailto:sarwodinata@example.com"
          className="text-primary hover:underline"
        >
          sarwodinata@example.com
        </a>
      </div>
    </section>
  );
}
