'use client';

import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import { ArrowLeft, ArrowRight, Maximize2, X } from 'lucide-react';
import type { ProductCapture } from '@/lib/platform-detail';

export default function PlatformGallery({ captures, wide = false }: { captures: ProductCapture[]; wide?: boolean }) {
  const [selected, setSelected] = useState<number | null>(null);
  const dialog = useRef<HTMLDialogElement>(null);
  const trigger = useRef<HTMLButtonElement | null>(null);
  const current = selected === null ? null : captures[selected];
  useEffect(() => {
    if (selected === null) return;
    if (!dialog.current?.open) dialog.current?.showModal();
    const previous = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => { document.body.style.overflow = previous; };
  }, [selected]);
  const close = () => { dialog.current?.close(); setSelected(null); trigger.current?.focus(); };
  return <>
    <div className={wide ? 'space-y-16 md:space-y-24' : 'grid gap-x-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'}>
      {captures.map((capture, index) => <figure key={capture.image} className={wide ? 'grid items-center gap-7 lg:grid-cols-[minmax(0,.65fr)_minmax(0,1.35fr)] lg:gap-14' : 'min-w-0'}>
        <button type="button" className={`group relative block w-full overflow-hidden rounded-2xl border border-navy/15 bg-white p-3 text-navy shadow-[0_14px_45px_#03265b0b] transition-shadow hover:shadow-[0_14px_45px_#03265b22] focus-visible:outline-4 focus-visible:outline-offset-4 focus-visible:outline-navy ${wide ? 'lg:col-start-2 lg:row-start-1' : ''}`} aria-label={`Ampliar: ${capture.title}`} onClick={event => { trigger.current = event.currentTarget; setSelected(index); }}>
          {wide && <span aria-hidden="true" className="mb-3 flex items-center gap-1.5 rounded-lg bg-navy px-3 py-2"><span className="size-2 rounded-full bg-red" /><span className="size-2 rounded-full bg-gold" /><span className="size-2 rounded-full bg-white/60" /><span className="ml-2 text-xs text-white">Arepa Builder · {capture.title}</span></span>}
          <Image src={capture.image} alt={capture.alt} width={capture.width} height={capture.height} sizes={wide ? '(min-width: 1024px) 750px, 90vw' : '(min-width: 1280px) 280px, (min-width: 640px) 40vw, 85vw'} className={wide ? 'h-auto w-full rounded-lg' : 'mx-auto h-auto max-h-[460px] w-auto max-w-full rounded-xl'} />
          <span className="absolute bottom-5 right-5 grid size-10 place-items-center rounded-full bg-navy text-white shadow-lg transition-transform group-hover:scale-110"><Maximize2 size={18} /></span>
        </button>
        <figcaption className={wide ? 'lg:col-start-1 lg:row-start-1' : 'mt-6'}>
          <span className="font-mono text-xs tracking-widest text-red">{String(index + 1).padStart(2, '0')} / {String(captures.length).padStart(2, '0')}</span>
          <h3 className={`mt-3 font-display font-extrabold uppercase text-navy ${wide ? 'text-4xl md:text-5xl' : 'text-3xl'}`}>{capture.title}</h3>
          <p className="mt-3 text-base leading-relaxed text-muted md:text-lg">{capture.description}</p>
        </figcaption>
      </figure>)}
    </div>
    <dialog ref={dialog} aria-label={current ? `Captura ampliada: ${current.title}` : 'Captura ampliada'} onCancel={close} onClose={() => { setSelected(null); trigger.current?.focus(); }} onClick={event => { if (event.target === dialog.current) close(); }} className="fixed inset-0 m-auto max-h-[94dvh] w-[min(1200px,94vw)] max-w-none overflow-auto rounded-2xl border-0 bg-bg p-0 text-navy shadow-2xl backdrop:bg-navy/90">
      {current && <>
        <div className="sticky top-0 z-10 flex items-center justify-between gap-3 border-b border-navy/10 bg-bg px-4 py-3">
          <p className="font-semibold">{current.title} <span className="text-sm text-muted">{(selected ?? 0) + 1}/{captures.length}</span></p>
          <div className="flex shrink-0 gap-1">
            <button type="button" aria-label="Captura anterior" disabled={selected === 0} onClick={() => setSelected(value => Math.max(0, (value ?? 0) - 1))} className="grid size-11 place-items-center rounded-full hover:bg-navy/10 disabled:opacity-30"><ArrowLeft size={20} /></button>
            <button type="button" aria-label="Captura siguiente" disabled={selected === captures.length - 1} onClick={() => setSelected(value => Math.min(captures.length - 1, (value ?? 0) + 1))} className="grid size-11 place-items-center rounded-full hover:bg-navy/10 disabled:opacity-30"><ArrowRight size={20} /></button>
            <button type="button" aria-label="Cerrar imagen" onClick={close} className="grid size-11 place-items-center rounded-full bg-navy text-white"><X size={20} /></button>
          </div>
        </div>
        <div className="p-4 md:p-8"><Image src={current.image} alt={current.alt} width={current.width} height={current.height} sizes={wide ? '90vw' : '500px'} className={wide ? 'mx-auto h-auto w-full' : 'mx-auto h-auto w-full max-w-[500px]'} /><p className="mx-auto mt-5 max-w-3xl text-base leading-relaxed text-muted">{current.description}</p></div>
      </>}
    </dialog>
  </>;
}
