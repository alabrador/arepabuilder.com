type Props = {
  children: string;
  color?: "red" | "gold";
  underline?: "navy" | "gold" | "red";
  /** Rotación en grados (−3 a −5). */
  rotate?: number;
  className?: string;
};

const TEXT = { red: "text-red", gold: "text-gold" } as const;
const STROKE = { navy: "bg-navy", gold: "bg-gold", red: "bg-red" } as const;

/** Palabra de brocha en Kaushan Script con un brochazo detrás. */
export default function BrushWord({
  children,
  color = "red",
  underline = "navy",
  rotate = -4,
  className = "",
}: Props) {
  return (
    <span
      className={`relative inline-block font-script leading-[1.15] normal-case ${className}`}
      style={{ transform: `rotate(${rotate}deg)` }}
    >
      <span className={`relative z-10 ${TEXT[color]}`}>{children}</span>
      <span
        aria-hidden="true"
        className={`absolute bottom-[0.09em] left-[0.12em] right-[-0.16em] h-[0.14em] min-h-2 -skew-x-[20deg] rounded-full ${STROKE[underline]}`}
      />
    </span>
  );
}
