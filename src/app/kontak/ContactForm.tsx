"use client";
import { useState } from "react";
import Button from "@/components/Button"; // atau "../../components/Button"

export default function ContactForm() {
  const [loading, setLoading] = useState(false);
  const [ok, setOk] = useState(null);

  async function onSubmit(e) {
    e.preventDefault();
    setLoading(true); setOk(null);

    const fd = new FormData(e.currentTarget);
    const name = String(fd.get("name") || "");
    const email = String(fd.get("email") || "");
    const message = String(fd.get("message") || "");

    if (!name || !email || !message) {
      setOk(false); setLoading(false); return;
    }

    // DEMO: simulasi submit 600ms
    await new Promise((r) => setTimeout(r, 600));
    setOk(true); setLoading(false);
    e.currentTarget.reset();
  }

  return (
    <form onSubmit={onSubmit} className="space-y-4">
      <div>
        <label className="text-sm font-medium">Nama</label>
        <input name="name" placeholder="Nama lengkap"
          className="mt-1 w-full rounded-xl border border-black/10 dark:border-white/10 bg-white/80 dark:bg-white/5 px-3 py-2 outline-none focus:ring-2 focus:ring-brand-600" />
      </div>
      <div>
        <label className="text-sm font-medium">Email</label>
        <input name="email" type="email" placeholder="nama@email.com"
          className="mt-1 w-full rounded-xl border border-black/10 dark:border-white/10 bg-white/80 dark:bg-white/5 px-3 py-2 outline-none focus:ring-2 focus:ring-brand-600" />
      </div>
      <div>
        <label className="text-sm font-medium">Pesan</label>
        <textarea name="message" rows={5} placeholder="Tulis pesan singkat, jelas, dan spesifik…"
          className="mt-1 w-full rounded-xl border border-black/10 dark:border-white/10 bg-white/80 dark:bg-white/5 px-3 py-2 outline-none focus:ring-2 focus:ring-brand-600" />
      </div>

      <div className="flex items-center gap-3">
        <Button type="submit" className="min-w-32">
          {loading ? "Mengirim…" : "Kirim"}
        </Button>
        {ok === true && <span className="text-sm text-emerald-600">Terkirim (demo) ✅</span>}
        {ok === false && <span className="text-sm text-red-600">Lengkapi semua field.</span>}
      </div>
    </form>
  );
}
