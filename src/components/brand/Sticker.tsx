type Props = { big: string; small: string; className?: string };

/** Pegatina roja circular con anillo discontinuo y sombra dura. */
export default function Sticker({ big, small, className = "" }: Props) {
  return (
    <div
      className={`flex size-[156px] -rotate-12 items-center justify-center rounded-full border-[5px] border-navy bg-red shadow-[6px_8px_0_var(--color-deep)] ${className}`}
    >
      <div className="flex size-[124px] flex-col items-center justify-center rounded-full border-2 border-dashed border-white font-display leading-[0.9] text-white">
        <span className="text-[58px] font-black">{big}</span>
        <span className="text-[19px] font-extrabold tracking-[1.5px]">{small}</span>
      </div>
    </div>
  );
}
