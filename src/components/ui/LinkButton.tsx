import Link from "next/link";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { ArrowRightIcon, ExternalIcon } from "@/components/ui/icons";

type LinkButtonProps = {
  href: string;
  children: ReactNode;
  /** outline: 枠線ボタン / text: 下線リンク */
  variant?: "outline" | "text";
  /** 背景が暗い場合 true */
  dark?: boolean;
  /** 外部リンクの場合 true（新しいタブで開く） */
  external?: boolean;
  className?: string;
  ariaLabel?: string;
};

/**
 * 上品なボタン・リンク
 * 塗りつぶしを避け、細い枠線と下線で構成する。
 * タップ領域は44px以上を確保。
 */
export default function LinkButton({
  href,
  children,
  variant = "outline",
  dark = false,
  external = false,
  className,
  ariaLabel,
}: LinkButtonProps) {
  const externalProps = external
    ? { target: "_blank", rel: "noopener noreferrer" }
    : {};

  // 外部リンクは、別タブで開くことを支援技術にも伝える。
  const accessibleName =
    ariaLabel ??
    (external && typeof children === "string"
      ? `${children}（新しいタブで開きます）`
      : undefined);

  if (variant === "text") {
    const textClass = cn(
      "group inline-flex min-h-11 items-center gap-3 text-sm tracking-[0.12em] transition-colors duration-300",
      dark ? "text-ivory hover:text-gold" : "text-ink hover:text-olive-deep",
      className,
    );
    const inner = (
      <>
        <span className="border-b border-current pb-1">{children}</span>
        {external ? (
          <ExternalIcon className="transition-transform duration-300 group-hover:translate-x-0.5" />
        ) : (
          <ArrowRightIcon className="transition-transform duration-300 group-hover:translate-x-1" />
        )}
      </>
    );
    return external ? (
      <a href={href} className={textClass} aria-label={accessibleName} {...externalProps}>
        {inner}
      </a>
    ) : (
      <Link href={href} className={textClass} aria-label={accessibleName}>
        {inner}
      </Link>
    );
  }

  const outlineClass = cn(
    "group inline-flex min-h-12 items-center justify-center gap-3 border px-9 py-3 text-sm tracking-[0.14em] transition-colors duration-500",
    dark
      ? "border-ivory/40 text-ivory hover:border-ivory hover:bg-ivory hover:text-ink"
      : "border-ink/35 text-ink hover:border-ink hover:bg-ink hover:text-ivory",
    className,
  );
  const inner = (
    <>
      {children}
      {external ? (
        <ExternalIcon />
      ) : (
        <ArrowRightIcon className="transition-transform duration-300 group-hover:translate-x-1" />
      )}
    </>
  );

  return external ? (
    <a href={href} className={outlineClass} aria-label={accessibleName} {...externalProps}>
      {inner}
    </a>
  ) : (
    <Link href={href} className={outlineClass} aria-label={accessibleName}>
      {inner}
    </Link>
  );
}
