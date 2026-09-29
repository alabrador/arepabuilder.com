import Image from "next/image";
import { IMAGES } from "@/lib/content";

type Props = { className?: string; preload?: boolean; sizes?: string };

/** Logo horizontal (letras blancas: sobre fondos claros, añade un contorno con `className`). */
export default function Logo({ className = "", preload = false, sizes = "200px" }: Props) {
  return (
    <Image
      src={IMAGES.logo.src}
      width={IMAGES.logo.width}
      height={IMAGES.logo.height}
      alt="Arepa Builder"
      preload={preload}
      sizes={sizes}
      className={`block w-auto ${className}`}
    />
  );
}
