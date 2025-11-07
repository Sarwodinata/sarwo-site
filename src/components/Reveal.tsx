"use client";
import { useEffect, useRef } from "react";

type Props = {
  children: React.ReactNode;
  as?: keyof JSX.IntrinsicElements;     // div, section, etc.
  variant?: "fade" | "slide-up" | "slide-right" | "slide-left";
  delay?: 0 | 100 | 200 | 300 | 400;
  className?: string;
};

export default function Reveal({
  children,
  as = "div",
  variant = "fade",
  delay = 0,
  className = "",
}: Props) {
  const Tag = as as any;
  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const el = ref.current!;
    if (!el) return;

    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            el.classList.add("is-visible");
            obs.unobserve(el);
          }
        });
      },
      { threshold: 0.15 }
    );

    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <Tag
      ref={ref as any}
      className={`reveal ${variant} delay-${delay} ${className}`}
    >
      {children}
    </Tag>
  );
}

