"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { DEMO_INTERVAL, KIOSK_STEPS } from "@/lib/kiosk-demo";

/**
 * Floor-standing self-service kiosk drawn in HTML/CSS (no WebGL) so the hero renders instantly.
 * The screen cycles through the real kiosk captures; motion stops for reduced-motion users.
 */
export default function KioskTotem({ className = "" }: { className?: string }) {
  const [active, setActive] = useState(0);
  const [visited, setVisited] = useState(() => new Set([0]));

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const timer = window.setInterval(() => {
      setActive((current) => {
        const next = (current + 1) % KIOSK_STEPS.length;
        setVisited((seen) => (seen.has(next) ? seen : new Set(seen).add(next)));
        return next;
      });
    }, DEMO_INTERVAL);
    return () => window.clearInterval(timer);
  }, []);

  return (
    <figure className={`kiosk-totem ${className}`} aria-label={`Kiosko de autoservicio Arepa Builder mostrando la pantalla «${KIOSK_STEPS[active].title}»`}>
      <div className="kiosk-totem-body">
        <div aria-hidden="true" className="kiosk-totem-top"><span className="kiosk-totem-camera" /><span className="kiosk-totem-sensor" /></div>
        <div className="kiosk-totem-screen">
          {KIOSK_STEPS.map((step, index) => visited.has(index) && (
            <Image
              key={step.id}
              src={step.image}
              alt=""
              width={1320}
              height={step.height}
              sizes="(min-width: 1024px) 250px, 58vw"
              preload={index === 0}
              className="kiosk-totem-capture"
              data-active={index === active}
            />
          ))}
          <span aria-hidden="true" className="kiosk-totem-glare" />
        </div>
        <div aria-hidden="true" className="kiosk-totem-module">
          <div className="kiosk-totem-brand"><Image src="/images/logo-horizontal.png" alt="" width={600} height={184} sizes="110px" /></div>
          <div className="kiosk-totem-printer"><span /></div>
          <div className="kiosk-totem-terminal">
            <span className="kiosk-totem-terminal-screen"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M8.5 8.5a5 5 0 0 1 0 7M12 6a8.5 8.5 0 0 1 0 12M15.5 3.5a12 12 0 0 1 0 17" /></svg></span>
            <span className="kiosk-totem-keys">{Array.from({ length: 12 }, (_, key) => <i key={key} />)}</span>
          </div>
        </div>
        <span aria-hidden="true" className="kiosk-totem-led" />
      </div>
      <div aria-hidden="true" className="kiosk-totem-pedestal" />
      <div aria-hidden="true" className="kiosk-totem-base" />
      <figcaption className="sr-only">Pantallas reales del kiosko: {KIOSK_STEPS.map((step) => step.title).join(", ")}.</figcaption>
    </figure>
  );
}
