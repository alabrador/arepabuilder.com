"use client";

import Image from "next/image";
import { ArrowLeft, ArrowRight, Check, Maximize2, Pause, Play, RotateCcw, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import KioskDevice from "@/components/brand/KioskDevice";
import BrushWord from "@/components/brand/BrushWord";
import { DEMO_INTERVAL, KIOSK_STEPS } from "@/lib/kiosk-demo";

export default function KioskShowcase() {
  const [step, setStep] = useState(0);
  const [playing, setPlaying] = useState(false);
  const [visible, setVisible] = useState(false);
  const [imageReady, setImageReady] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(false);
  const [expanded, setExpanded] = useState(false);
  const section = useRef<HTMLElement>(null);
  const dialog = useRef<HTMLDialogElement>(null);
  const expandButton = useRef<HTMLButtonElement>(null);
  const current = KIOSK_STEPS[step];

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => setVisible(entry.isIntersecting), { threshold: 0.15 });
    if (section.current) observer.observe(section.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!playing || !visible || !imageReady) return;
    const advance = () => {
      if (document.hidden) return;
      if (step === KIOSK_STEPS.length - 1) { setPlaying(false); return; }
      setImageReady(false);
      setStep((value) => value + 1);
    };
    const timer = window.setTimeout(advance, DEMO_INTERVAL);
    const pauseOnHidden = () => { if (document.hidden) setPlaying(false); };
    document.addEventListener("visibilitychange", pauseOnHidden);
    return () => { window.clearTimeout(timer); document.removeEventListener("visibilitychange", pauseOnHidden); };
  }, [step, playing, visible, imageReady]);

  useEffect(() => {
    if (expanded) dialog.current?.showModal();
    else if (dialog.current?.open) dialog.current.close();
  }, [expanded]);

  useEffect(() => {
    if (!expanded) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = previous; };
  }, [expanded]);

  const goTo = (index: number) => {
    setPlaying(false);
    setSelectedProduct(false);
    if (index !== step) setImageReady(false);
    setStep(index);
  };
  const advance = () => goTo((step + 1) % KIOSK_STEPS.length);
  const closeExpanded = () => { setExpanded(false); expandButton.current?.focus(); };
  const screenContent = (large = false) => (
    <div className={`kiosk-screen-content ${large ? "kiosk-screen-large" : ""}`}>
      <div key={current.id} className="kiosk-capture" style={{ aspectRatio: `1320 / ${current.height}` }}>
        <Image src={current.image} alt={`Kiosko Arepa Builder: ${current.title}`} width={1320} height={current.height} sizes={large ? "430px" : "(min-width: 768px) 240px, 190px"} loading="eager" className="kiosk-capture-image" onLoad={() => setImageReady(true)} />
        <button
          className="kiosk-hotspot"
          title={current.action}
          aria-label={current.action}
          style={{ left: `${current.hotspot[0]}%`, top: `${current.hotspot[1]}%`, width: `${current.hotspot[2]}%`, height: `${current.hotspot[3]}%` }}
          onClick={() => {
            if (step === 4) { setPlaying(false); setSelectedProduct(true); }
            else advance();
          }}
        />
        {step === 1 && [["English", 52, 56], ["Français", 3, 71], ["Português", 52, 71]].map(([language, left, top]) => (
          <button key={language} className="kiosk-hotspot" style={{ left: `${left}%`, top: `${top}%`, width: "46%", height: "14%" }} aria-label={`Seleccionar ${language}`} title={String(language)} onClick={advance} />
        ))}
        {step === 2 && <button className="kiosk-hotspot" style={{ left: "51%", top: "37%", width: "46%", height: "38%" }} aria-label="Elegir comer aquí" title="Comer aquí" onClick={advance} />}
        {step === 3 && <button className="kiosk-hotspot" style={{ left: "3%", top: "17%", width: "94%", height: "9%" }} aria-label="Ver empanadas" title="Empanadas" onClick={advance} />}
        {step === 4 && <button className="kiosk-hotspot" style={{ left: "51%", top: "35%", width: "46%", height: "6%" }} aria-label="Añadir bebida al pedido" title="Añadir bebida" onClick={() => { setPlaying(false); setSelectedProduct(true); }} />}
        {step >= 3 && step <= 5 && <button className="kiosk-hotspot" style={{ left: "51%", top: "92%", width: "24%", height: "8%" }} aria-label="Ver carrito" title="Ver carrito" onClick={() => goTo(5)} />}
        {step > 0 && step < 6 && <button className="kiosk-hotspot" style={{ left: "2%", top: "1%", width: "12%", height: "6%" }} aria-label="Volver a la pantalla anterior" title="Atrás" onClick={() => goTo(step - 1)} />}
      </div>
      {selectedProduct && <button className="kiosk-added" onClick={() => goTo(5)}><Check size={14} /> Pedido añadido <ArrowRight size={14} /></button>}
    </div>
  );

  return (
    <section ref={section} id="kiosko" className="kiosk-showcase" aria-labelledby="kiosk-title">
      <div className="kiosk-heading">
        <p className="kiosk-eyebrow">Un nuevo punto de venta. La misma cocina.</p>
        <h2 id="kiosk-title">Tu kiosko.<br /><BrushWord color="red" underline="gold" className="kiosk-brush">A lo grande.</BrushWord></h2>
        <p className="kiosk-intro">Toda la experiencia Arepa Builder, en una pantalla que invita a pedir. Del primer toque al pedido listo, conectado a tu panel de gestión.</p>
      </div>

      <div className="kiosk-stage">
        <KioskDevice>{screenContent()}</KioskDevice>
        <div className="kiosk-story">
          <span className="kiosk-story-number" aria-hidden="true">0{step + 1}</span>
          <div className="kiosk-story-copy" aria-live="polite" aria-atomic="true">
            <p className="kiosk-eyebrow">{current.title}</p>
            <h3>{current.caption}</h3>
          </div>
          <div className="kiosk-controls">
            <button aria-label={playing ? "Pausar recorrido" : "Reproducir recorrido"} title={playing ? "Pausar" : "Reproducir"} className="kiosk-play" onClick={() => { if (step === 7) { setStep(0); setImageReady(false); } setPlaying((value) => !value); }}>
              {playing ? <Pause size={21} fill="currentColor" /> : <Play size={21} fill="currentColor" />}
            </button>
            <button aria-label="Paso anterior" title="Paso anterior" disabled={step === 0} onClick={() => goTo(step - 1)}><ArrowLeft size={21} /></button>
            <button aria-label={step === 7 ? "Reiniciar recorrido" : "Paso siguiente"} title={step === 7 ? "Reiniciar" : "Paso siguiente"} onClick={advance}>{step === 7 ? <RotateCcw size={21} /> : <ArrowRight size={21} />}</button>
            <button ref={expandButton} aria-label="Ampliar pantalla" title="Ampliar pantalla" onClick={() => { setPlaying(false); setExpanded(true); }}><Maximize2 size={20} /></button>
          </div>
          <p className="kiosk-demo-label">Demostración · Sin pedidos ni cobros reales</p>
        </div>

        <nav className="kiosk-flow" aria-label="Recorrido del kiosko">
          <ol>{KIOSK_STEPS.map((item, index) => (
            <li key={item.id}>
              <button aria-current={step === index ? "step" : undefined} aria-label={`Paso ${index + 1}: ${item.title}`} onClick={() => goTo(index)}>
                <span className="kiosk-flow-dot">{step > index ? <Check size={13} /> : index + 1}</span>
                <span>{item.title}</span>
                {step === index && <ArrowRight size={17} className="kiosk-flow-arrow" />}
              </button>
            </li>
          ))}</ol>
          <span className="kiosk-flow-count">0{step + 1} <span>/ 08</span></span>
        </nav>
      </div>

      <div className="kiosk-bottom">
        <span>La app. El kiosko. Tu cocina.</span>
        <a href="#gestion">Todo en el mismo panel <ArrowRight size={19} /></a>
      </div>

      <dialog ref={dialog} className="kiosk-dialog" aria-label="Pantalla del kiosko ampliada" onCancel={closeExpanded} onClose={() => setExpanded(false)} onClick={(event) => { if (event.target === dialog.current) closeExpanded(); }}>
        <div className="kiosk-dialog-inner">
          <div className="kiosk-dialog-toolbar">
            <button aria-label="Paso anterior ampliado" title="Atrás" disabled={step === 0} onClick={() => goTo(step - 1)}><ArrowLeft size={22} /></button>
            <span>{current.title} · {step + 1}/8</span>
            <button aria-label="Cerrar pantalla ampliada" title="Cerrar" onClick={closeExpanded}><X size={24} /></button>
          </div>
          <div className="kiosk-dialog-screen">{expanded && screenContent(true)}</div>
          <button className="kiosk-dialog-next" onClick={advance}>{step === 7 ? "Hacer otro pedido" : "Continuar"}<ArrowRight size={20} /></button>
        </div>
      </dialog>
    </section>
  );
}
