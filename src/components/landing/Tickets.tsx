import Logo from "@/components/brand/Logo";
import type { TicketRow } from "@/lib/content";
import { TICKET_OURS, TICKET_PLATFORM } from "@/lib/content";
import SectionTitle from "./SectionTitle";

/** El dt crece y dibuja los puntos guía hasta el importe. */
const LEADER =
  "flex grow items-baseline gap-2 after:grow after:border-b-2 after:border-dotted after:border-line after:content-['']";

function Rows({ rows }: { rows: TicketRow[] }) {
  return (
    <>
      {rows.map((row) => (
        <div key={row.label} className="flex items-baseline gap-2">
          <dt className={LEADER}>{row.label}</dt>
          <dd className={row.strong ? "font-bold" : ""}>{row.value}</dd>
        </div>
      ))}
    </>
  );
}

function Divider() {
  return <div aria-hidden="true" className="border-t-2 border-dashed border-line" />;
}

/** "Haz la cuenta tú mismo": ticket de plataforma vs. ticket de tu app. */
export default function Tickets() {
  return (
    <section
      id="cuenta"
      className="mx-auto flex max-w-[1440px] flex-col items-center gap-14 px-4 py-24 sm:px-8 lg:py-[140px] xl:flex-row xl:gap-10 xl:px-24"
    >
      <div className="flex w-full max-w-[720px] flex-col xl:w-[540px] xl:shrink-0">
        <SectionTitle title="Haz la cuenta" brush="tú mismo" rotate={-4} />
        <p className="mt-[26px] text-lg leading-[1.55] text-muted md:text-xl">
          Cada pedido que entra por una plataforma de delivery paga su comisión y deja al cliente en manos de otro. En
          tu propia app, el pedido, el cliente y el margen son tuyos.
        </p>
      </div>

      <div className="relative flex w-full flex-col items-center gap-10 font-mono text-base md:block md:h-[500px] md:w-[670px] xl:h-[560px] xl:w-auto xl:grow">
        {/* Ticket de plataforma */}
        <article
          aria-label="Ticket de una plataforma de delivery"
          className="relative flex w-full max-w-[340px] -rotate-2 flex-col gap-3.5 bg-white px-7 py-[34px] text-faded shadow-[0_20px_40px_rgba(23,35,58,0.12)] md:absolute md:left-5 md:top-10 md:-rotate-5"
        >
          <div aria-hidden="true" className="ticket-edge-top" />
          <div aria-hidden="true" className="ticket-edge-bottom" />
          <p className="text-center font-bold tracking-[1px]">PLATAFORMA DE DELIVERY</p>
          <p className="text-center text-[13px]">-- ticket nº 000001 --</p>
          <Divider />
          <dl className="flex flex-col gap-3.5">
            <Rows rows={TICKET_PLATFORM} />
          </dl>
          <Divider />
          <dl className="flex items-baseline gap-2 text-[19px] font-bold">
            <dt className="grow">TE QUEDAS</dt>
            <dd>MENOS</dd>
          </dl>
        </article>

        {/* Ticket de tu app */}
        <article
          aria-label="Ticket de tu app con Arepa Builder"
          className="relative flex w-full max-w-[360px] rotate-2 flex-col bg-white pb-[34px] text-ink shadow-[0_30px_50px_rgba(23,35,58,0.22)] md:absolute md:left-[290px] md:top-[70px] md:rotate-3"
        >
          <div className="flex h-[88px] items-center justify-center border-b-[3px] border-navy bg-gold">
            <Logo className="h-[58px] [filter:drop-shadow(1.5px_1.5px_0_var(--color-navy))]" sizes="140px" />
          </div>
          <div className="flex flex-col gap-3.5 px-7 pt-6">
            <p className="text-center text-[13px] text-muted">-- tu app · ticket nº 000001 --</p>
            <Divider />
            <dl className="flex flex-col gap-3.5">
              <Rows rows={TICKET_OURS} />
            </dl>
            <Divider />
            <dl className="flex items-baseline gap-2 text-[21px] font-bold text-navy">
              <dt className="grow">TE QUEDAS</dt>
              <dd>TODO</dd>
            </dl>
          </div>
          <div aria-hidden="true" className="ticket-edge-bottom" />

          {/* Sello */}
          <div
            aria-hidden="true"
            className="absolute -bottom-24 -right-4 flex size-[124px] -rotate-[18deg] items-center justify-center rounded-full border-4 border-red bg-bg/60 sm:-right-14"
          >
            <div className="flex size-[104px] flex-col items-center justify-center rounded-full border-2 border-red font-display leading-[0.95] text-red">
              <span className="text-[15px] font-extrabold tracking-[1px]">SIN</span>
              <span className="text-[26px] font-black">COMISIÓN</span>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}
