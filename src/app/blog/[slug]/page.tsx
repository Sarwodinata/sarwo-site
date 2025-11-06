// src/app/blog/[slug]/page.tsx
import { getPost } from "@/data/posts";
import type { Metadata } from "next";

type Props = { params: { slug: string } };

export function generateMetadata({ params }: Props): Metadata {
  const p = getPost(params.slug);
  return {
    title: p ? `${p.title} • Sarwo Dinata` : "Blog • Sarwo Dinata",
    description: p?.excerpt,
  };
}

export default function BlogDetail({ params }: Props) {
  const post = getPost(params.slug);
  if (!post) {
    return (
      <main className="max-w-3xl mx-auto">
        <div className="rounded-2xl border bg-white p-6 sm:p-8">
          <h1 className="text-2xl font-heading font-bold text-slate-900">
            Artikel tidak ditemukan
          </h1>
          <p className="mt-2 text-slate-700">
            Cek kembali alamat atau kembali ke{" "}
            <a href="/blog" className="text-primary underline">
              halaman blog
            </a>
            .
          </p>
        </div>
      </main>
    );
  }

  const words = (post.content.join(" ").split(/\s+/).length || 0);
  const readMin = Math.max(1, Math.round(words / 200)); // ~200 kata/menit

  return (
    <main className="max-w-3xl mx-auto">
      <article className="rounded-2xl border bg-white p-6 sm:p-8">
        <div className="flex items-start justify-between gap-4">
          <h1 className="text-3xl font-heading font-bold text-slate-900">
            {post.title}
          </h1>
          <time className="text-xs text-slate-500">
            {new Date(post.date).toLocaleDateString("id-ID", {
              day: "2-digit",
              month: "short",
              year: "numeric",
            })}
          </time>
        </div>

        <div className="mt-2 flex flex-wrap items-center gap-2">
          {post.tags.map((t) => (
            <span
              key={t}
              className="rounded-full border bg-white px-2.5 py-1 text-[11px] font-semibold text-slate-700"
            >
              {t}
            </span>
          ))}
          <span className="text-[11px] text-slate-500">• {readMin} menit baca</span>
        </div>

        <div className="prose prose-slate max-w-none mt-6">
          {post.content.map((para, i) => (
            <p key={i}>{para}</p>
          ))}
        </div>

        <div className="mt-8 flex items-center justify-between">
          <a
            href="/blog"
            className="rounded-lg border border-slate-300 bg-white px-4 py-2 text-sm font-semibold text-slate-800 hover:border-primary hover:text-primary transition"
          >
            ← Kembali ke Blog
          </a>
          <a
            href="/kontak"
            className="rounded-lg bg-primary px-4 py-2 text-sm font-semibold text-white hover:bg-blue-700 transition"
          >
            Diskusi / Tanyakan
          </a>
        </div>
      </article>
    </main>
  );
}
