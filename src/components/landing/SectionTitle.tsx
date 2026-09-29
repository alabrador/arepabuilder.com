import BrushWord from "@/components/brand/BrushWord";

type Props = {
  title: string;
  brush: string;
  brushColor?: "red" | "gold";
  underline?: "navy" | "gold" | "red";
  rotate?: number;
  tone?: "navy" | "white";
  align?: "left" | "center";
};

/** Titular display en mayúsculas + palabra de brocha debajo. */
export default function SectionTitle({
  title,
  brush,
  brushColor = "red",
  underline = "gold",
  rotate = -3,
  tone = "navy",
  align = "left",
}: Props) {
  return (
    <h2
      className={`flex flex-col font-display text-[clamp(54px,8vw,92px)] font-black uppercase leading-[0.9] ${
        tone === "navy" ? "text-navy" : "text-white"
      } ${align === "center" ? "items-center text-center" : "items-start"}`}
    >
      <span>{title}</span>
      <BrushWord
        color={brushColor}
        underline={underline}
        rotate={rotate}
        className={`mt-1 text-[clamp(48px,7.3vw,84px)] ${align === "left" ? "ml-2" : ""}`}
      >
        {brush}
      </BrushWord>
    </h2>
  );
}
