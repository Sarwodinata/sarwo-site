export default function Footer() {
  return (
    <footer className="text-center py-6 mt-20 border-t bg-green text-sm text-slate-600">
      <p>
        © {new Date().getFullYear()} Sarwo Dinata ·{" "}
        <span className="text-primary font-semibold">
          Belajar, membangun dan berbagi
        </span>
      </p>
    </footer>
  );
}
