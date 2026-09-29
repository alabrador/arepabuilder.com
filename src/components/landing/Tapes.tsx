import { Fragment } from "react";
import { TAPE_BACK, TAPE_FRONT } from "@/lib/content";

type TapeProps = {
  items: string[];
  separator: "text" | "dot";
  className: string;
  reverse?: boolean;
};

function TapeRow({ items, separator }: Pick<TapeProps, "items" | "separator">) {
  return (
    <>
      {items.map((item) => (
        <Fragment key={item}>
          <span>{item}</span>
          {separator === "dot" ? (
            <span className="size-2.5 shrink-0 rounded-full bg-gold md:size-3.5" />
          ) : (
            <span>·</span>
          )}
        </Fragment>
      ))}
    </>
  );
}

function Tape({ items, separator, className, reverse = false }: TapeProps) {
  return (
    <div className={`absolute -left-[60px] flex w-[calc(100%+120px)] items-center overflow-hidden ${className}`}>
      <p className="sr-only">{items.join(" · ")}</p>
      <div
        aria-hidden="true"
        className={`flex w-max shrink-0 animate-marquee items-center font-display font-extrabold italic uppercase tracking-[1px] whitespace-nowrap ${reverse ? "[animation-direction:reverse]" : ""}`}
      >
        {[0, 1, 2, 3].map((copy) => (
          <div key={copy} className="flex shrink-0 items-center gap-[30px] pr-[30px]">
            <TapeRow items={items} separator={separator} />
          </div>
        ))}
      </div>
    </div>
  );
}

/** Dos cintas cruzadas con los puntos fuertes del producto. */
export default function Tapes() {
  return (
    <section aria-label="Lo que incluye Arepa Builder" className="relative h-[130px] overflow-hidden bg-bg md:h-[200px]">
      <Tape
        items={TAPE_BACK}
        separator="text"
        reverse
        className="top-[34px] h-[50px] rotate-[2.2deg] bg-navy text-[22px] text-gold md:top-[58px] md:h-[76px] md:text-[30px]"
      />
      <Tape
        items={TAPE_FRONT}
        separator="dot"
        className="top-[38px] h-[56px] -rotate-[2.4deg] bg-red text-[26px] text-white shadow-[0_10px_0_rgba(3,38,91,0.15)] md:top-[62px] md:h-[84px] md:text-[38px]"
      />
    </section>
  );
}
