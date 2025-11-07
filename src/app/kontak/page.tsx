import Container from "@/components/Container";
import SectionHeader from "@/components/SectionHeader";
import Card from "@/components/Card";
import ContactForm from "./ContactForm";

// tanpa alias:
// import Container from "../../components/Container";
// import SectionHeader from "../../components/SectionHeader";
// import Card from "../../components/Card";

export default function KontakPage() {
  return (
    <main className="py-12 sm:py-16">
      <Container>
        <SectionHeader
          kicker="Kontak"
          title="Butuh bantuan atau kolaborasi?"
          desc="Kirim pesan singkat. Balasan bakal to the point."
          center
        />
        <div className="mt-8 max-w-3xl mx-auto">
          <Card>
            <ContactForm />
            <p className="mt-4 text-xs text-[var(--muted)]">
              *Untuk produksi, arahkan ke endpoint (Formspree/API) lalu validasi di server.
            </p>
          </Card>
        </div>
      </Container>
    </main>
  );
}
