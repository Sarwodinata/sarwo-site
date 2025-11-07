export default function Footer() {
  return (
    <footer className="border-t border-black/5 dark:border-white/10 mt-10">
      <div className="mx-auto max-w-6xl px-6 py-8 text-sm text-[var(--muted)] text-center">
        © {new Date().getFullYear()} Sarwo Site • Dibuat dengan fokus pada aksesibilitas & performa.
      </div>
    </footer>
  );
}
