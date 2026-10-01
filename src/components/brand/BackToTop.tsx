"use client";

import { useEffect, useState } from "react";
import { ArrowRight } from "./Icons";

export default function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const update = () => setVisible(window.scrollY > 480);
    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, []);

  if (!visible) return null;

  return (
    <button
      type="button"
      aria-label="Volver arriba"
      title="Volver arriba"
      onClick={() => window.scrollTo({ top: 0, behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "instant" : "smooth" })}
      className="fixed right-4 bottom-[calc(1rem+env(safe-area-inset-bottom))] z-40 flex size-12 items-center justify-center rounded-full border-2 border-navy bg-gold text-navy shadow-[0_6px_20px_rgba(3,38,91,0.2)] transition-transform hover:-translate-y-1 motion-reduce:transition-none sm:right-6"
    >
      <ArrowRight size={22} className="-rotate-90" />
    </button>
  );
}
