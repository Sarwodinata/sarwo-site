export default function Card({ title, desc, children }) {
  return (
    <div className="rounded-2xl border border-black/5 dark:border-white/10 bg-white dark:bg-white/5 backdrop-blur-sm p-5 shadow-[0_1px_0_#0001,0_10px_20px_-10px_#0003]">
      {title && <h3 className="text-lg font-bold tracking-tight">{title}</h3>}
      {desc && <p className="mt-1 text-sm text-[var(--muted)]">{desc}</p>}
      {children}
    </div>
  );
}
