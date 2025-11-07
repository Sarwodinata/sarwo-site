import Container from "@/components/Container";
import SectionHeader from "@/components/SectionHeader";
import Card from "@/components/Card";
import Button from "@/components/Button";

// kalau belum pakai alias, ubah jadi:
// import Container from "../../components/Container";
// import SectionHeader from "../../components/SectionHeader";
// import Card from "../../components/Card";
// import Button from "../../components/Button";

const projects = [
  { title: "Workshop Manager", tag: "Web App",
    desc: "Sistem manajemen peralatan & ruangan—tracking, peminjaman, jadwal." },
  { title: "DSS TOPSIS", tag: "Decision Support",
    desc: "Perbandingan perangkat (tablet/TWS) dengan kriteria & bobot jelas." },
  { title: "Personal Site", tag: "Portfolio",
    desc: "Website portofolio cepat, UX-first, dark mode ready." },
];

export default function ProyekPage() {
  return (
    <main className="py-12 sm:py-16">
      <Container>
        <SectionHeader
          kicker="Proyek"
          title="Beberapa karya pilihan"
          desc="Dipilih berdasarkan dampak, keterbacaan, dan kerapian kodenya."
          center
        />
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p) => (
            <Card key={p.title} title={p.title} desc={p.desc}>
              {p.tag && (
                <span className="mt-3 inline-block rounded-full border border-black/10 dark:border-white/10 px-2 py-0.5 text-xs text-[var(--muted)]">
                  {p.tag}
                </span>
              )}
              <div className="mt-4">
                <Button as="a" href="#" className="min-w-28">Lihat Detail</Button>
              </div>
            </Card>
          ))}
        </div>
      </Container>
    </main>
  );
}
