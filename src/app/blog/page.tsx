// src/app/blog/page.tsx
import { posts } from "@/data/posts";

export const metadata = {
  title: "Blog • Sarwo Dinata",
  description: "Catatan singkat tentang coding, DSS, dan IoT.",
};

export default function BlogPage() {
  const list = [...posts].sort(
    (a, b) => +new Date(b.date) - +new Date(a.date)
  );

  return (
    <main className="max-w-5xl mx-auto">
      <header className="rounded-2xl border bg-white p-6 sm:p-8">
        <h1 className="text-3xl font-heading font-bold text-slate-900">Blog</h1>
        <p className="mt-2 text-slate-700">
          Catatan singkat—ringkas, jelas, dan langsung bisa dipakai.
        </p>
      </header>

      <section className="mt-6 space-y-4">
        {list.map((p) => (
          <a
            key={p.slug}
            href={`/blog/${p.slug}`}
            className="block rounded-2xl border bg-white p-5 hover:border-primary/40 hover:shadow-md transition"
          >
            <div className="flex items-center justify-between gap-4">
              <h3 className="font-heading text-lg text-slate-900">{p.title}</h3>
              <time className="text-xs text-slate-500">
                {new Date(p.date).toLocaleDateString("id-ID", {
                  day: "2-digit",
                  month: "short",
                  year: "numeric",
                })}
              </time>
            </div>
            <p className="mt-1 text-slate-700">{p.excerpt}</p>
            <div className="mt-2 flex flex-wrap gap-2">
              {p.tags.map((t) => (
                <span
                  key={t}
                  className="rounded-full border bg-white px-2.5 py-1 text-[11px] font-semibold text-slate-700"
                >
                  {t}
                </span>
              ))}
            </div>
            <span className="mt-3 inline-block text-sm font-semibold text-primary">
              Baca selengkapnya →
            </span>
          </a>
        ))}
      </section>
    </main>
  );
}
