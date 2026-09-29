type IconProps = { size?: number; strokeWidth?: number; className?: string };

function Svg({
  size = 22,
  strokeWidth = 2.6,
  className,
  children,
}: IconProps & { children: React.ReactNode }) {
  return (
    <svg
      aria-hidden="true"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      {children}
    </svg>
  );
}

export function ArrowRight(props: IconProps) {
  return (
    <Svg {...props}>
      <line x1="5" y1="12" x2="19" y2="12" />
      <polyline points="12 5 19 12 12 19" />
    </Svg>
  );
}

export function Check(props: IconProps) {
  return (
    <Svg strokeWidth={3} {...props}>
      <polyline points="20 6 9 17 4 12" />
    </Svg>
  );
}

export function Smartphone(props: IconProps) {
  return (
    <Svg strokeWidth={1.8} {...props}>
      <rect x="6" y="2" width="12" height="20" rx="3" />
      <line x1="11" y1="18" x2="13" y2="18" />
    </Svg>
  );
}

export function Play(props: IconProps) {
  return (
    <Svg strokeWidth={1.8} {...props}>
      <polygon points="6 3 20 12 6 21 6 3" />
    </Svg>
  );
}

export function Menu(props: IconProps) {
  return (
    <Svg strokeWidth={2.4} {...props}>
      <line x1="4" y1="7" x2="20" y2="7" />
      <line x1="4" y1="12" x2="20" y2="12" />
      <line x1="4" y1="17" x2="20" y2="17" />
    </Svg>
  );
}
