import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import Reveal from "@/components/ui/Reveal";

type SectionHeadingProps = {
  /** 通し番号（"01" など） */
  index?: string;
  /** 英字ラベル（"CONCEPT" など） */
  label: string;
  /** 見出し本体 */
  title: ReactNode;
  /** 背景が暗い場合 true */
  dark?: boolean;
  align?: "left" | "center";
  className?: string;
};

/**
 * セクション見出し
 * 細い罫線 + 英字ラベル + 明朝の見出しで構成する。
 */
export default function SectionHeading({
  index,
  label,
  title,
  dark = false,
  align = "left",
  className,
}: SectionHeadingProps) {
  return (
    <Reveal
      className={cn(
        "flex flex-col gap-5",
        align === "center" && "items-center text-center",
        className,
      )}
    >
      <p
        className={cn(
          "flex items-center gap-4 font-serif-en text-[0.7rem] uppercase tracking-[0.32em]",
          dark ? "text-gold" : "text-olive-deep",
        )}
      >
        <span
          aria-hidden="true"
          className={cn(
            "reveal-line inline-block h-px w-10",
            dark ? "bg-gold/70" : "bg-olive-deep/50",
          )}
        />
        {label}
        {index && <span className="tracking-[0.2em]">— {index}</span>}
      </p>
      <h2
        className={cn(
          "font-mincho text-[1.7rem] leading-[1.6] tracking-[0.08em] sm:text-4xl sm:leading-[1.55]",
          dark ? "text-ivory" : "text-ink",
        )}
      >
        {title}
      </h2>
    </Reveal>
  );
}
