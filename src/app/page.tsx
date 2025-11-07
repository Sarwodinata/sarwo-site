import Container from "@/components/Container";
import Button from "@/components/Button";
import Card from "@/components/Card";
import SectionHeader from "@/components/SectionHeader";

export default function HomePage() {
  return (
    <main>
      {/* HERO — headline kuat & to the point */}
      <section className="text-center">
        <Container className="pt-14 sm:pt-16 pb-10 flex flex-col items-center">
          <p className="text-sm font-medium text-brand-700/90 dark:text-white/80">
            Informatics • Web & App
          </p>

          <h1 className="mt-3 max-w-4xl text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight">
            Website yang <span className="text-brand-600">tegas</span>, <span className="text-brand-600">cepat</span>, dan <span className="text-brand-600">mudah dibaca</span>.
          </h1>

          <p className="mt-4 max-w-2xl text-lg text-[var(--muted)]">
            Fokus ke UX, tipografi, dan struktur konten. Biar pesan sampai duluan — efek belakangan.
          </p>

          <div className="mt-7 flex flex-wrap justify-center gap-3">
            <Button as="a" href="/kontak">Diskusi Gratis 15 Menit</Button>
            <a
              href="/proyek"
              className="inline-flex items-center justify-center rounded-xl px-4 py-2 text-sm font-semibold text-brand-600 hover:bg-brand-50 dark:text-white/90 dark:hover:bg-white/10"
            >
              Lihat Proyek
            </a>
          </div>

          {/* trust bar ringkas */}

        </Container>
      </section>

      {/* JANJI KERJA */}
      <section className="py-12 sm:py-16 text-center">
        <Container>
          <SectionHeader
            kicker="Janji Kerja"
            title="Tiga hal yang selalu gue jaga"
            desc="Supaya produk gampang dipakai, gampang dirawat, dan performanya stabil."
            center
          />
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 justify-items-center">
            <Card title="Kejelasan di atas segalanya" desc="Kontras, hierarki, dan ritme line-height yang bikin mata betah." />
            <Card title="Kecepatan sebagai fitur" desc="Asset minimal, komponen ringan, caching strategis, CDN by default." />
            <Card title="Koding rapi & reusable" desc="Komponen kecil-kecil, mudah diukur, mudah diuji, mudah di-repurpose." />
          </div>
        </Container>
      </section>

      {/* LAYANAN */}
      <section className="py-12 sm:py-16 text-center">
        <Container>
          <SectionHeader
            kicker="Layanan"
            title="Pilih yang kamu butuh"
            desc="Bisa satuan, bisa paket. Kita mulai dari kebutuhan yang paling berdampak."
            center
          />
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 justify-items-center">
            <Card title="Landing Page Fokus Konversi" desc="Hero kuat, copy jelas, CTA tegas. Termasuk integrasi formulir." />
            <Card title="Company / Personal Site" desc="Multi-halaman, dark mode, performa tinggi, mudah dikembangkan." />
            <Card title="Audit & Redesign UX" desc="Analisis konten, struktur ulang navigasi, dan perbaikan tipografi." />
          </div>
        </Container>
      </section>

      {/* CUPlIKAN PROYEK */}
      <section className="py-12 sm:py-16 text-center">
        <Container>
          <SectionHeader
            kicker="Cuplikan Proyek"
            title="Rapi dilihat, ringan dijalankan"
            desc="Beberapa contoh kerjaan yang sejalan dengan prinsip di atas."
            center
          />
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 justify-items-center">
            <Card title="Workshop Manager" desc="Manajemen alat & ruangan. Tracking, booking, dan laporan cepat.">
              <a href="/proyek" className="mt-3 inline-block text-sm font-semibold text-brand-600 hover:underline">Detail →</a>
            </Card>
            <Card title="DSS TOPSIS" desc="Pemilihan perangkat dengan kriteria berbobot. UI ringkas & jelas.">
              <a href="/proyek" className="mt-3 inline-block text-sm font-semibold text-brand-600 hover:underline">Detail →</a>
            </Card>
            <Card title="Personal Site" desc="Portofolio dengan tipografi kuat, dark mode, dan performa ngebut.">
              <a href="/proyek" className="mt-3 inline-block text-sm font-semibold text-brand-600 hover:underline">Detail →</a>
            </Card>
          </div>
        </Container>
      </section>

      {/* CTA BAWAH */}
      <section className="py-12 sm:py-16 text-center">
        <Container>
          <div className="rounded-2xl border border-black/10 dark:border-white/10 bg-white/70 dark:bg-white/5 p-6 sm:p-8">
            <h3 className="text-2xl font-semibold">Siap bikin tampilan yang bikin orang betah?</h3>
            <p className="mt-2 text-sm text-[var(--muted)]">
              Kirim kebutuhanmu. Gue rangkum jadi rencana singkat + estimasi waktu/biaya.
            </p>
            <div className="mt-6 flex flex-wrap justify-center gap-3">
              <Button as="a" href="/kontak">Mulai dari Brief</Button>
              <a href="/tentang" className="inline-flex items-center justify-center rounded-xl px-4 py-2 text-sm font-semibold text-brand-600 hover:bg-brand-50 dark:text-white/90 dark:hover:bg-white/10">
                Baca Filosofi
              </a>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}
