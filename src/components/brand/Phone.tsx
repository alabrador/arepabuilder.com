import Image from "next/image";
import { SCREEN } from "@/lib/content";

type Props = {
  src: string;
  alt: string;
  /** Valor de `sizes` para next/image. */
  sizes: string;
  preload?: boolean;
  className?: string;
};

/**
 * Enmarca una captura de pantalla de la app en un móvil dibujado con CSS.
 * El ancho y el posicionamiento (`relative`/`absolute`) llegan por `className`.
 */
export default function Phone({ src, alt, sizes, preload = false, className = "" }: Props) {
  return (
    <div
      className={`rounded-[15%/7%] bg-[#0E1320] p-[3.4%] ring-1 ring-white/10 ${className}`}
    >
      <Image
        src={src}
        alt={alt}
        width={SCREEN.width}
        height={SCREEN.height}
        sizes={sizes}
        preload={preload}
        className="block h-auto w-full rounded-[12%/5.6%]"
      />
      <span
        aria-hidden="true"
        className="absolute left-1/2 top-[3.3%] h-[3.2%] w-[30%] -translate-x-1/2 rounded-full bg-[#0E1320]"
      />
    </div>
  );
}
