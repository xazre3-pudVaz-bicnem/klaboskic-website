import Link from "next/link";
import type { ReactNode } from "react";
import {
  BagIcon,
  DeliveryIcon,
  ExternalIcon,
  InstagramIcon,
  MapPinIcon,
  MenuBookIcon,
} from "@/components/ui/icons";
import { siteConfig } from "@/data/siteConfig";
import { cn } from "@/lib/utils";

export type QuickActionKey =
  | "menu"
  | "takeout"
  | "uberEats"
  | "rocketNow"
  | "instagram"
  | "map";

type Action = {
  label: string;
  sub: string;
  icon: ReactNode;
  /** 内部リンク or 外部リンク。null の場合はリンクにせず案内のみ表示 */
  href: string | null;
  external?: boolean;
};

function getAction(key: QuickActionKey): Action {
  const iconClass = "h-5 w-5 shrink-0";
  switch (key) {
    case "menu":
      return {
        label: "メニューを見る",
        sub: "定番メニューと価格",
        icon: <MenuBookIcon className={iconClass} />,
        href: "/menu",
      };
    case "takeout":
      return {
        label: "テイクアウトについて",
        sub: "ご注文・受け取りの流れ",
        icon: <BagIcon className={iconClass} />,
        href: "/takeout",
      };
    case "uberEats":
    case "rocketNow": {
      const service = siteConfig[key];
      return {
        label: `${service.name}で注文`,
        sub: service.url ? "デリバリー" : `アプリで「K-labo」と検索`,
        icon: <DeliveryIcon className={iconClass} />,
        href: service.url || null,
        external: true,
      };
    }
    case "instagram":
      return {
        label: "Instagramを見る",
        sub: `${siteConfig.instagram.handle}・営業日カレンダー`,
        icon: <InstagramIcon className={iconClass} />,
        href: siteConfig.instagram.url,
        external: true,
      };
    case "map":
      return {
        label: "Google Mapで見る",
        sub: siteConfig.accessShort,
        icon: <MapPinIcon className={iconClass} />,
        href: siteConfig.googleMapsUrl,
        external: true,
      };
  }
}

type QuickActionsProps = {
  actions?: QuickActionKey[];
  dark?: boolean;
  /** 列数のクラス（例: "grid-cols-2 md:grid-cols-3"） */
  cols?: string;
  className?: string;
};

const DEFAULT_ACTIONS: QuickActionKey[] = [
  "menu",
  "takeout",
  "uberEats",
  "rocketNow",
  "instagram",
  "map",
];

/**
 * 行動導線のタイル
 * スマートフォンでも親指で押しやすい大きさ（高さ64px以上）で、
 * 「何ができるか」をアイコン＋短いラベルで一目で伝える。
 */
export default function QuickActions({
  actions = DEFAULT_ACTIONS,
  dark = false,
  cols = "grid-cols-2",
  className,
}: QuickActionsProps) {
  return (
    <ul className={cn("grid gap-2.5 sm:gap-3", cols, className)}>
      {actions.map((key) => {
        const action = getAction(key);
        const tileClass = cn(
          "group flex h-full min-h-16 flex-col items-start gap-2 border px-3.5 py-3.5 transition-colors duration-300 sm:flex-row sm:items-center sm:gap-4 sm:px-5 sm:py-4",
          dark
            ? "border-ivory/25 text-ivory"
            : "border-ink/15 bg-ivory text-ink",
        );
        const linkedClass = dark
          ? "hover:border-ivory hover:bg-ivory hover:text-ink"
          : "hover:border-ink hover:bg-ink hover:text-ivory";

        const inner = (
          <>
            <span className={cn(dark ? "text-gold" : "text-olive-deep", action.href && "group-hover:text-current")}>
              {action.icon}
            </span>
            <span className="flex min-w-0 flex-col">
              <span className="flex items-center gap-1.5 text-[0.8rem] leading-snug tracking-[0.02em] sm:text-sm sm:tracking-[0.06em]">
                {action.label}
                {action.href && action.external && (
                  <>
                    <ExternalIcon className="h-3 w-3 shrink-0 opacity-60" />
                    <span className="sr-only">（新しいタブで開きます）</span>
                  </>
                )}
              </span>
              <span
                className={cn(
                  "mt-0.5 text-[0.64rem] leading-snug tracking-[0.04em] sm:text-[0.7rem]",
                  dark ? "text-ivory/60" : "text-olive-deep",
                  action.href && "group-hover:text-current group-hover:opacity-70",
                )}
              >
                {action.sub}
              </span>
            </span>
          </>
        );

        return (
          <li key={key}>
            {action.href === null ? (
              <div className={tileClass}>{inner}</div>
            ) : action.external ? (
              <a
                href={action.href}
                target="_blank"
                rel="noopener noreferrer"
                className={cn(tileClass, linkedClass)}
              >
                {inner}
              </a>
            ) : (
              <Link href={action.href} className={cn(tileClass, linkedClass)}>
                {inner}
              </Link>
            )}
          </li>
        );
      })}
    </ul>
  );
}
