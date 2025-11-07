import Container from "@/components/Container";
import SectionHeader from "@/components/SectionHeader";
import Card from "@/components/Card";

export default function TentangPage() {
  return (
    <main className="py-12 sm:py-16">
      <Container>
        <SectionHeader
          kicker="Tentang"
          title="Tentang Sarwo Site"
          desc="Fokus pada pengembangan aplikasi & web yang tegas, cepat, dan nyaman dibaca."
          center
        />

        <div className="mt-8 grid gap-4 lg:grid-cols-3">
          <Card title="Filosofi">
            <ul className="mt-3 list-disc pl-5 text-sm text-[var(--muted)] space-y-1">
              <li>Konten dulu, efek belakangan.</li>
              <li>Kontras jelas & hierarki tipografi.</li>
              <li>Komponen reusable + dark mode.</li>
            </ul>
          </Card>

          <Card title="Stack Utama" desc="Tooling yang dipakai untuk performa & DX.">
            <ul className="mt-3 list-disc pl-5 text-sm text-[var(--muted)] space-y-1">
              <li>Next.js (App Router) + TypeScript</li>
              <li>Tailwind CSS</li>
              <li>Deployment mudah (Vercel)</li>
            </ul>
          </Card>

          <Card title="Nilai">
            <p className="mt-3 text-sm text-[var(--muted)]">
              Rapi, ringkas, scalable—mudah dipelihara & dikembangkan untuk kebutuhan kampus, projek freelance,
              maupun portofolio profesional.
            </p>
          </Card>
        </div>
      </Container>
    </main>
  );
}
