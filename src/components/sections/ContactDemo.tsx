"use client";

import { useState } from "react";

export default function ContactDemo() {
  const [form, setForm] = useState({
    nombre: "",
    restaurante: "",
    telefono: "",
    mensaje: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = encodeURIComponent(
      `Hola, me interesa una demo de Arepa Builder.\n\n` +
        `Nombre: ${form.nombre}\n` +
        `Restaurante: ${form.restaurante}\n` +
        `Teléfono: ${form.telefono}\n` +
        (form.mensaje ? `Mensaje: ${form.mensaje}` : "")
    );
    window.open(`https://wa.me/34678361168?text=${text}`, "_blank");
  };

  const inputClass =
    "w-full bg-white border border-[#DEC070]/40 focus:border-[#C05010] focus:ring-2 focus:ring-[#C05010]/20 rounded-xl px-4 py-3 text-sm text-[#2E1600] placeholder:text-[#9A6B20]/50 outline-none transition-all duration-200";

  return (
    <section
      id="contacto"
      className="py-16 md:py-24 bg-[#FEFAF3]"
      aria-labelledby="contact-heading"
    >
      <div className="max-w-6xl mx-auto px-5 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-start">

          {/* Left — pitch */}
          <div>
            <span className="inline-block text-xs font-bold uppercase tracking-[0.2em] text-[#C05010] mb-4">
              Solicitar demo
            </span>
            <h2
              id="contact-heading"
              className="text-3xl sm:text-4xl md:text-5xl font-[var(--font-playfair)] font-bold text-[#2E1600] mb-4 sm:mb-5 leading-tight"
            >
              Hablemos y lo ponemos{" "}
              <span className="text-gradient-warm">en marcha hoy.</span>
            </h2>
            <p className="text-[#9A6B20] leading-relaxed mb-10 max-w-md">
              Cuéntanos cómo es tu restaurante y te mostramos el sistema en
              funcionamiento. Sin compromisos, sin letra pequeña. En menos de 24h
              puedes estar recibiendo pedidos digitales.
            </p>

            {/* Phone CTA */}
            <a
              href="tel:+34678361168"
              className="group flex items-center gap-4 mb-4"
            >
              <div className="w-14 h-14 rounded-2xl bg-[#C05010] flex items-center justify-center flex-shrink-0 shadow-[0_8px_24px_rgba(192,80,16,0.35)] group-hover:shadow-[0_8px_32px_rgba(192,80,16,0.55)] group-hover:-translate-y-0.5 transition-all duration-200">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <div>
                <p className="text-xs text-[#9A6B20] font-medium uppercase tracking-wider mb-0.5">Llámanos directamente</p>
                <p className="text-2xl font-black text-[#2E1600] tracking-tight group-hover:text-[#C05010] transition-colors duration-200">
                  +34 678 361 168
                </p>
              </div>
            </a>

            {/* WhatsApp CTA */}
            <a
              href="https://wa.me/34678361168?text=Hola%2C%20me%20interesa%20una%20demo%20de%20Arepa%20Builder"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-[#25D366] hover:bg-[#1ebe5d] text-white font-bold px-6 py-3.5 rounded-2xl transition-all duration-200 hover:-translate-y-0.5 shadow-[0_4px_20px_rgba(37,211,102,0.35)] hover:shadow-[0_4px_28px_rgba(37,211,102,0.5)] mb-10"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Escribir por WhatsApp
            </a>

            {/* Trust bullets */}
            <ul className="flex flex-col gap-3">
              {[
                "Demo en vivo sin compromiso",
                "Implementación en menos de 24h",
                "Soporte incluido desde el primer día",
              ].map((t) => (
                <li key={t} className="flex items-center gap-3 text-sm text-[#9A6B20]">
                  <span className="w-5 h-5 rounded-full bg-[#4DB374]/15 flex items-center justify-center flex-shrink-0">
                    <svg className="w-3 h-3 text-[#4DB374]" fill="none" stroke="currentColor" strokeWidth={3} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  {t}
                </li>
              ))}
            </ul>
          </div>

          {/* Right — form */}
          <div className="bg-white rounded-3xl border border-[#DEC070]/30 shadow-[0_8px_40px_rgba(46,22,0,0.06)] p-8 md:p-10">
            <h3 className="text-xl font-bold text-[#2E1600] mb-1">Solicita tu demo gratis</h3>
            <p className="text-sm text-[#9A6B20] mb-8">Te respondemos en menos de 1 hora.</p>

            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
              <div>
                <label className="block text-xs font-semibold text-[#2E1600] uppercase tracking-wider mb-1.5">
                  Tu nombre
                </label>
                <input
                  type="text"
                  name="nombre"
                  required
                  placeholder="Ej: Carlos García"
                  value={form.nombre}
                  onChange={handleChange}
                  className={inputClass}
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#2E1600] uppercase tracking-wider mb-1.5">
                  Nombre del restaurante
                </label>
                <input
                  type="text"
                  name="restaurante"
                  required
                  placeholder="Ej: La Arepa de Oro"
                  value={form.restaurante}
                  onChange={handleChange}
                  className={inputClass}
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#2E1600] uppercase tracking-wider mb-1.5">
                  Tu teléfono o WhatsApp
                </label>
                <input
                  type="tel"
                  name="telefono"
                  required
                  placeholder="Ej: +34 600 000 000"
                  value={form.telefono}
                  onChange={handleChange}
                  className={inputClass}
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#2E1600] uppercase tracking-wider mb-1.5">
                  ¿Algo que quieras contarnos? <span className="text-[#9A6B20]/50 normal-case font-normal">(opcional)</span>
                </label>
                <textarea
                  name="mensaje"
                  rows={3}
                  placeholder="Tipo de restaurante, número de mesas, ciudad..."
                  value={form.mensaje}
                  onChange={handleChange}
                  className={`${inputClass} resize-none`}
                />
              </div>

              <button
                type="submit"
                className="w-full flex items-center justify-center gap-3 bg-[#C05010] hover:bg-[#983C08] text-white font-bold py-4 rounded-2xl transition-all duration-200 shadow-[0_4px_20px_rgba(192,80,16,0.4)] hover:shadow-[0_4px_28px_rgba(192,80,16,0.6)] hover:-translate-y-0.5 mt-1"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                Enviar por WhatsApp
              </button>

              <p className="text-center text-xs text-[#9A6B20]/60">
                Al enviar abrirás WhatsApp con tus datos. Sin spam, sin registros.
              </p>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
}
