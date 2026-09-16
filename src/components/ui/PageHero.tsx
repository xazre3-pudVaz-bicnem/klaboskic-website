import type { ReactNode } from "react";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import Reveal from "@/components/ui/Reveal";

type PageHeroProps = {
  /** 英字ラベル（"MENU" など） */
  label: string;
  /** ページ見出し（h1） */
  title: ReactNode;
  /** 補足の英字タイトル */
  titleEn?: ReactNode;
  /** リード文 */
  lede?: ReactNode;
  /** パンくず（ホーム以外） */
  breadcrumbs: Array<{ name: string; path: string }>;
};

/** 下層ページ共通のページヘッダー */
export default function PageHero({
  label,
  title,
  titleEn,
  lede,
  breadcrumbs,
}: PageHeroProps) {
  return (
    <div className="border-b border-ink/10 bg-ivory pb-14 pt-28 sm:pb-20 sm:pt-36">
      <div className="mx-auto w-full max-w-6xl px-5 sm:px-8">
        <Breadcrumbs items={breadcrumbs} />
        <Reveal className="mt-10 flex flex-col gap-6 sm:mt-14">
          <p className="flex items-center gap-4 font-serif-en text-[0.7rem] uppercase tracking-[0.32em] text-olive-deep">
            <span
              aria-hidden="true"
              className="reveal-line inline-block h-px w-10 bg-olive-deep/50"
            />
            {label}
          </p>
          <h1 className="font-mincho text-[1.7rem] leading-[1.55] tracking-[0.06em] text-ink sm:text-5xl sm:leading-[1.4] sm:tracking-[0.08em]">
            {title}
          </h1>
          {titleEn && (
            <p className="font-serif-en text-sm italic tracking-[0.14em] text-olive-deep">
              {titleEn}
            </p>
          )}
          {lede && (
            <p className="max-w-2xl text-sm leading-[2.1] text-espresso sm:text-[0.95rem]">
              {lede}
            </p>
          )}
        </Reveal>
      </div>
    </div>
  );
}
