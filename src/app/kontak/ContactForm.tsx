"use client";

import { useState } from "react";

type Form = {
  nama: string;
  email: string;
  subjek: string;
  pesan: string;
};

export default function ContactForm() {
  const [form, setForm] = useState<Form>({
    nama: "",
    email: "",
    subjek: "",
    pesan: "",
  });

  const WA_NUMBER = "6282287303663"; // ganti bila perlu
  const EMAIL_TO = "sarwo@example.com"; // ganti ke email kamu

  const isValidEmail = (v: string) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.trim());

  function onChange<K extends keyof Form>(key: K, val: string) {
    setForm((s) => ({ ...s, [key]: val }));
  }

  function buildMessage() {
    const lines = [
      `Halo, saya ${form.nama}.`,
      form.subjek && `Subjek: ${form.subjek}`,
      "",
      form.pesan,
      "",
      form.email && `Balas ke: ${form.email}`,
    ]
      .filter(Boolean)
      .join("\n");
    return lines;
  }

  function sendWhatsApp() {
    if (!form.nama || !form.pesan) {
      alert("Isi minimal Nama dan Pesan ya, cuy.");
      return;
    }
    const url = `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(
      buildMessage()
    )}`;
    window.open(url, "_blank");
  }

  function sendEmail() {
    if (!form.nama || !form.pesan || !isValidEmail(form.email)) {
      alert("Nama, Email yang valid, dan Pesan wajib diisi.");
      return;
    }
    const subject = form.subjek || "Kontak dari Website";
    const body = buildMessage();
    const url = `mailto:${EMAIL_TO}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
    window.location.href = url;
  }

  return (
    <section className="mt-6 rounded-2xl border bg-white p-6 sm:p-8">
      <h2 className="text-xl font-heading text-slate-900">Kirim Pesan Cepat</h2>

      <div className="mt-4 grid gap-4 sm:grid-cols-2">
        <div>
          <label className="text-sm font-semibold text-slate-700">Nama *</label>
          <input
            type="text"
            value={form.nama}
            onChange={(e) => onChange("nama", e.target.value)}
            className="mt-1 w-full rounded-lg border p-2 outline-none focus:border-primary"
            placeholder="Nama lengkap"
            required
          />
        </div>
        <div>
          <label className="text-sm font-semibold text-slate-700">Email *</label>
          <input
            type="email"
            value={form.email}
            onChange={(e) => onChange("email", e.target.value)}
            className="mt-1 w-full rounded-lg border p-2 outline-none focus:border-primary"
            placeholder="email@domain.com"
            required
          />
          {form.email && !isValidEmail(form.email) && (
            <p className="text-xs text-red-600 mt-1">Email tidak valid</p>
          )}
        </div>
      </div>

      <div className="mt-4">
        <label className="text-sm font-semibold text-slate-700">Subjek</label>
        <input
          type="text"
          value={form.subjek}
          onChange={(e) => onChange("subjek", e.target.value)}
          className="mt-1 w-full rounded-lg border p-2 outline-none focus:border-primary"
          placeholder="Mis: Kolaborasi proyek DSS"
        />
      </div>

      <div className="mt-4">
        <label className="text-sm font-semibold text-slate-700">Pesan *</label>
        <textarea
          value={form.pesan}
          onChange={(e) => onChange("pesan", e.target.value)}
          className="mt-1 w-full min-h-[140px] rounded-lg border p-2 outline-none focus:border-primary"
          placeholder="Tulis kebutuhan/pertanyaanmu di sini…"
          required
        />
      </div>

      <div className="mt-5 flex flex-wrap gap-3">
        <button
          onClick={sendWhatsApp}
          className="rounded-lg bg-primary px-5 py-2.5 font-semibold text-white hover:bg-blue-700 transition"
        >
          Kirim via WhatsApp
        </button>
        <button
          onClick={sendEmail}
          className="rounded-lg border border-slate-300 bg-white px-5 py-2.5 font-semibold text-slate-800 hover:border-primary hover:text-primary transition"
        >
          Kirim via Email
        </button>
      </div>
    </section>
  );
}
