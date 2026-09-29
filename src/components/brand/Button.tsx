import { ArrowRight } from "./Icons";

type Props = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "outline";
  size?: "md" | "lg";
  arrow?: boolean;
  className?: string;
};

const BASE =
  "inline-flex items-center justify-center gap-3 font-display font-extrabold uppercase tracking-[0.5px] no-underline transition-transform duration-150 hover:-translate-y-0.5";

const VARIANTS = {
  primary: "bg-navy text-white shadow-[5px_6px_0_var(--color-red)] hover:text-white",
  outline: "border-[3px] border-navy text-navy hover:text-navy",
} as const;

const SIZES = {
  md: "h-14 sm:h-16 rounded-2xl px-6 sm:px-[30px] text-[21px] sm:text-[25px]",
  lg: "h-16 sm:h-[70px] rounded-[18px] px-7 sm:px-9 text-[23px] sm:text-[28px]",
} as const;

export default function Button({
  href,
  children,
  variant = "primary",
  size = "md",
  arrow = false,
  className = "",
}: Props) {
  return (
    <a href={href} className={`${BASE} ${VARIANTS[variant]} ${SIZES[size]} ${className}`}>
      {children}
      {arrow && <ArrowRight size={size === "lg" ? 24 : 22} />}
    </a>
  );
}
