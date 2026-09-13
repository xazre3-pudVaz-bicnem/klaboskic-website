import { cn } from "@/lib/utils";

type IconProps = {
  className?: string;
};

export function InstagramIcon({ className }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      aria-hidden="true"
      className={cn("h-5 w-5", className)}
    >
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.3" cy="6.7" r="1.1" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function PhoneIcon({ className }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.4"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={cn("h-5 w-5", className)}
    >
      <path d="M6.5 3h3l1.5 4-2 1.4a12 12 0 0 0 5.6 5.6l1.4-2 4 1.5v3a2 2 0 0 1-2.2 2A16.5 16.5 0 0 1 4.5 5.2 2 2 0 0 1 6.5 3z" />
    </svg>
  );
}

export function ClockIcon({ className }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.4"
      strokeLinecap="round"
      aria-hidden="true"
      className={cn("h-5 w-5", className)}
    >
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5.2l3.2 2" />
    </svg>
  );
}

export function ArrowRightIcon({ className }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.2"
      aria-hidden="true"
      className={cn("h-4 w-4", className)}
    >
      <path d="M3 12h17" />
      <path d="M14 6l6 6-6 6" />
    </svg>
  );
}

export function ExternalIcon({ className }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.4"
      aria-hidden="true"
      className={cn("h-3.5 w-3.5", className)}
    >
      <path d="M14 4h6v6" />
      <path d="M20 4L11 13" />
      <path d="M19 14v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h5" />
    </svg>
  );
}

/** 線画アイコンの共通ラッパー */
function LineIcon({
  className,
  children,
}: IconProps & { children: React.ReactNode }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.4"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={cn("h-5 w-5", className)}
    >
      {children}
    </svg>
  );
}

export function MenuBookIcon({ className }: IconProps) {
  return (
    <LineIcon className={className}>
      <path d="M4 5.5C6.5 4.5 9.5 4.5 12 6c2.5-1.5 5.5-1.5 8-.5V19c-2.5-1-5.5-1-8 .5-2.5-1.5-5.5-1.5-8-.5z" />
      <path d="M12 6v13.5" />
    </LineIcon>
  );
}

export function BagIcon({ className }: IconProps) {
  return (
    <LineIcon className={className}>
      <path d="M5 8h14l-1 12H6z" />
      <path d="M9 10V7a3 3 0 0 1 6 0v3" />
    </LineIcon>
  );
}

export function DeliveryIcon({ className }: IconProps) {
  return (
    <LineIcon className={className}>
      <path d="M3 7h9v8H3z" />
      <path d="M12 10h4l3 3v2h-7" />
      <circle cx="7" cy="17.5" r="1.6" />
      <circle cx="16.5" cy="17.5" r="1.6" />
    </LineIcon>
  );
}

export function MapPinIcon({ className }: IconProps) {
  return (
    <LineIcon className={className}>
      <path d="M12 21s-6.5-6.2-6.5-11.2a6.5 6.5 0 0 1 13 0C18.5 14.8 12 21 12 21z" />
      <circle cx="12" cy="9.8" r="2.3" />
    </LineIcon>
  );
}

export function TrainIcon({ className }: IconProps) {
  return (
    <LineIcon className={className}>
      <rect x="6" y="3.5" width="12" height="13" rx="3" />
      <path d="M6 11h12" />
      <circle cx="9.5" cy="14" r=".6" fill="currentColor" />
      <circle cx="14.5" cy="14" r=".6" fill="currentColor" />
      <path d="M9 16.5L7 20.5M15 16.5l2 4" />
    </LineIcon>
  );
}

export function CarIcon({ className }: IconProps) {
  return (
    <LineIcon className={className}>
      <path d="M4 16v-3.5L6 8h12l2 4.5V16z" />
      <path d="M4 12.5h16" />
      <circle cx="8" cy="16.5" r="1.5" />
      <circle cx="16" cy="16.5" r="1.5" />
    </LineIcon>
  );
}

export function MessageIcon({ className }: IconProps) {
  return (
    <LineIcon className={className}>
      <path d="M4.5 5.5h15v10h-9l-4 3.5v-3.5h-2z" />
    </LineIcon>
  );
}
