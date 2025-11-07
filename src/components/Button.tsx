export default function Button({
  as: Comp = "button",
  variant = "primary",
  className = "",
  ...props
}) {
  const base =
    "inline-flex items-center justify-center rounded-xl px-4 py-2 text-sm font-semibold transition";
  const variants = {
    primary: "bg-brand-600 text-white hover:bg-brand-700 shadow-sm",
    ghost:
      "text-brand-600 hover:bg-brand-50 dark:text-white/90 dark:hover:bg-white/10",
  };

  return (
    <Comp className={`${base} ${variants[variant]} ${className}`} {...props} />
  );
}
