import Image from "next/image";
import { siteConfig } from "@/data/siteConfig";
import { cn } from "@/lib/utils";

type LogoProps = {
  /** 表示サイズ（高さの目安） */
  size?: "sm" | "md" | "lg";
  /** 背景が暗い場合 true（アイボリー版ロゴを使う） */
  dark?: boolean;
  /** ゴールド版を使う */
  gold?: boolean;
  /** 「for your bliss...」のタグラインを併記するか */
  withTagline?: boolean;
  /** 最優先で読み込む（ヒーロー内のみ） */
  priority?: boolean;
  className?: string;
};

/** 画像に渡す固有サイズ（srcset生成用の基準） */
const INTRINSIC = { sm: 26, md: 34, lg: 84 } as const;

/** 実際の表示高さ。ビューポートに応じて可変させる */
const HEIGHT_CLASS = {
  sm: "h-[24px]",
  md: "h-[28px] sm:h-[34px]",
  lg: "h-[52px] sm:h-[72px] lg:h-[84px]",
} as const;

/**
 * K-labo ロゴ
 *
 * 公式ロゴ画像（/public/images/brand/k-labo-logo-original.jpg）から
 * 背景を透過処理した3色版を使い分ける。タグライン「for your bliss...」は
 * ロゴ画像に含まれているため、withTagline は英字補足の表示切り替えに使う。
 */
export default function Logo({
  size = "md",
  dark = false,
  gold = false,
  withTagline = false,
  priority = false,
  className,
}: LogoProps) {
  const height = INTRINSIC[size];
  const width = Math.round(height * siteConfig.logo.ratio);
  const src = gold
    ? siteConfig.logo.gold
    : dark
      ? siteConfig.logo.ivory
      : siteConfig.logo.ink;

  return (
    <span className={cn("inline-flex flex-col items-start", className)}>
      {/* sizes は指定しない。固定サイズ画像では Next.js が 1x/2x の
          srcset を自動生成し、必要以上に大きな画像を配信しない。
          表示高さはインラインstyleではなくクラスで指定し、可変にする。 */}
      <Image
        src={src}
        alt={`${siteConfig.name}（${siteConfig.nameJa}）— ${siteConfig.brandTagline}`}
        width={width}
        height={height}
        priority={priority}
        className={cn("w-auto", HEIGHT_CLASS[size])}
      />
      {withTagline && (
        <span
          className={cn(
            "mt-3 font-serif-en uppercase tracking-[0.34em]",
            size === "lg" ? "text-[0.66rem] sm:text-xs" : "text-[0.58rem]",
            dark ? "text-gold" : "text-olive-deep",
          )}
        >
          Sweets&nbsp;&amp;&nbsp;Delica
        </span>
      )}
    </span>
  );
}

/** 円形モノグラムのみ */
export function LogoMark({
  size = 32,
  dark = false,
  gold = false,
  className,
}: {
  size?: number;
  dark?: boolean;
  gold?: boolean;
  className?: string;
}) {
  const src = gold
    ? siteConfig.logo.markGold
    : dark
      ? siteConfig.logo.markIvory
      : siteConfig.logo.markInk;

  return (
    <Image
      src={src}
      alt=""
      aria-hidden="true"
      width={Math.round(size * siteConfig.logo.markRatio)}
      height={size}
      className={className}
      style={{ height: size, width: "auto" }}
    />
  );
}
