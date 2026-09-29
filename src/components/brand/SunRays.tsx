type Props = {
  /** Distancia del centro al rayo (px). */
  radius: number;
  rayWidth?: number;
  rayHeight?: number;
  disc?: "none" | "cream" | "grilled";
  discSize?: number;
  className?: string;
};

const ANGLES = [-90, -67.5, -45, -22.5, 0, 22.5, 45, 67.5, 90];

/**
 * El sol del logo: 9 cápsulas repartidas en abanico desde un centro común.
 * El componente es un punto de 0×0; colócalo con `className` (left/top).
 */
export default function SunRays({
  radius,
  rayWidth = 48,
  rayHeight = 144,
  disc = "none",
  discSize = 0,
  className = "",
}: Props) {
  return (
    <div aria-hidden="true" className={`absolute h-0 w-0 ${className}`}>
      {disc === "cream" && (
        <div
          className="absolute rounded-full bg-cream"
          style={{ left: -discSize / 2, top: -discSize / 2, width: discSize, height: discSize }}
        />
      )}
      {ANGLES.map((angle) => (
        <div
          key={angle}
          className="absolute box-border rounded-full border-[5px] border-navy bg-cream"
          style={{
            left: -rayWidth / 2,
            top: -rayHeight / 2,
            width: rayWidth,
            height: rayHeight,
            transform: `rotate(${angle}deg) translateY(-${radius}px)`,
          }}
        />
      ))}
      {disc === "grilled" && (
        <div
          className="absolute box-border rounded-full border-[6px] border-navy"
          style={{
            left: -discSize / 2,
            top: -discSize / 2,
            width: discSize,
            height: discSize,
            background:
              "repeating-linear-gradient(-32deg, var(--color-queso) 0 42px, var(--color-toasted) 42px 56px)",
          }}
        />
      )}
    </div>
  );
}
