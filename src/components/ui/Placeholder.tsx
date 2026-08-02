import Image from "next/image";
import { cn } from "@/lib/utils";

type PlaceholderProps = {
  /**
   * 実写真のパス。null の間はブランドカラーの抽象ビジュアルを表示する。
   * 写真を用意したら /public/images/ 配下に置き、呼び出し元でパスを渡すだけで
   * next/image による最適化表示に切り替わる。
   */
  src?: string | null;
  /** 実写真使用時の代替テキスト */
  alt?: string;
  /** プレースホルダーに小さく表示する英字（被写体名など） */
  label?: string;
  /** 抽象モチーフの種類 */
  motif?: "ring" | "arc" | "lines";
  /** 明暗トーン */
  tone?: "light" | "dark";
  /** アスペクト比クラス（例: "aspect-[4/5]"） */
  aspect?: string;
  /** next/image の sizes 属性 */
  sizes?: string;
  /** ヒーロー等、最優先で読み込む場合のみ true */
  priority?: boolean;
  className?: string;
};

/**
 * 写真枠コンポーネント
 *
 * 実店舗・料理写真が未提供のため、ロゴの線とブランドカラーによる
 * 抽象的な背景で写真枠を補う（架空の写真・AI生成風画像は使用しない）。
 * src を渡せばそのまま実写真に差し替わる構成。
 */
export default function Placeholder({
  src,
  alt = "",
  label,
  motif = "ring",
  tone = "light",
  aspect = "aspect-[4/3]",
  sizes = "(min-width: 768px) 50vw, 100vw",
  priority = false,
  className,
}: PlaceholderProps) {
  // 呼び出し側が <figure> + <figcaption> で包むことが多いため、
  // ここでは意味づけを持たない <div> を返す（figure の入れ子を避ける）。
  if (src) {
    return (
      <div className={cn("relative overflow-hidden", aspect, className)}>
        <Image
          src={src}
          alt={alt}
          fill
          sizes={sizes}
          priority={priority}
          className="object-cover"
        />
      </div>
    );
  }

  const dark = tone === "dark";

  return (
    <div
      aria-hidden="true"
      className={cn(
        "grain relative overflow-hidden",
        aspect,
        dark
          ? "bg-gradient-to-br from-espresso via-ink to-ink"
          : "bg-gradient-to-br from-ivory-soft via-[#e5e0cd] to-[#d8d2ba]",
        className,
      )}
    >
      {/* モチーフ */}
      {motif === "ring" && (
        <>
          <span
            className={cn(
              "absolute left-1/2 top-1/2 h-[58%] w-auto aspect-square -translate-x-1/2 -translate-y-1/2 rounded-full border",
              dark ? "border-gold/40" : "border-olive/50",
            )}
          />
          <span
            className={cn(
              "absolute left-1/2 top-1/2 h-[42%] w-auto aspect-square -translate-x-[62%] -translate-y-[38%] rounded-full border",
              dark ? "border-ivory/15" : "border-ink/10",
            )}
          />
          <span
            className={cn(
              "absolute left-1/2 top-1/2 h-1.5 w-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full",
              dark ? "bg-gold/70" : "bg-olive-deep/60",
            )}
          />
        </>
      )}
      {motif === "arc" && (
        <>
          <span
            className={cn(
              "absolute left-1/2 top-[24%] h-[72%] w-[56%] -translate-x-1/2 rounded-t-full border border-b-0",
              dark ? "border-gold/40" : "border-olive/50",
            )}
          />
          <span
            className={cn(
              "absolute left-1/2 top-[36%] h-[64%] w-[38%] -translate-x-1/2 rounded-t-full border border-b-0",
              dark ? "border-ivory/15" : "border-ink/10",
            )}
          />
        </>
      )}
      {motif === "lines" && (
        <>
          <span
            className={cn(
              "absolute left-[18%] top-0 h-full w-px",
              dark ? "bg-gold/30" : "bg-olive/40",
            )}
          />
          <span
            className={cn(
              "absolute left-[26%] top-0 h-full w-px",
              dark ? "bg-ivory/10" : "bg-ink/10",
            )}
          />
          <span
            className={cn(
              "absolute left-0 top-[68%] h-px w-full",
              dark ? "bg-gold/30" : "bg-olive/40",
            )}
          />
          <span
            className={cn(
              "absolute right-[14%] top-[42%] h-2 w-2 rounded-full",
              dark ? "bg-gold/50" : "bg-olive-deep/40",
            )}
          />
        </>
      )}

      {/* 内側の細い枠 */}
      <span
        className={cn(
          "absolute inset-3 border",
          dark ? "border-ivory/10" : "border-ink/8",
        )}
      />

      {/* 被写体ラベル */}
      {label && (
        <span
          className={cn(
            "absolute bottom-5 left-5 font-serif-en text-[0.65rem] uppercase tracking-[0.3em]",
            dark ? "text-ivory/50" : "text-olive-deep/70",
          )}
        >
          {label}
        </span>
      )}
    </div>
  );
}
