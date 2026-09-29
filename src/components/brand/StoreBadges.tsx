import { STORE_LINKS } from "@/lib/content";
import { Play, Smartphone } from "./Icons";

// TODO: sustituir por los badges oficiales de Apple y Google cuando la app esté publicada.
const BADGES = [
  { store: "App Store", href: STORE_LINKS.appStore, Icon: Smartphone },
  { store: "Google Play", href: STORE_LINKS.googlePlay, Icon: Play },
];

export default function StoreBadges({ className = "" }: { className?: string }) {
  return (
    <div className={`flex flex-wrap gap-3 ${className}`}>
      {BADGES.map(({ store, href, Icon }) => (
        <a
          key={store}
          href={href}
          className="flex h-[54px] items-center gap-3 rounded-xl bg-deep px-[18px] text-white no-underline hover:text-white"
        >
          <Icon />
          <span className="flex flex-col leading-[1.1]">
            <span className="text-xs text-line">Disponible en</span>
            <span className="text-lg font-bold">{store}</span>
          </span>
        </a>
      ))}
    </div>
  );
}
