export default function SectionHeader({ kicker, title, desc, center = false }) {
  return (
    <div className={center ? "text-center" : ""}>
      {kicker && (
        <div className="text-xs font-semibold uppercase tracking-widest text-brand-600">
          {kicker}
        </div>
      )}
      <h2 className="mt-2 text-2xl font-bold tracking-tight">{title}</h2>
      {desc && <p className="mt-2 text-[var(--muted)]">{desc}</p>}
    </div>
  );
}
