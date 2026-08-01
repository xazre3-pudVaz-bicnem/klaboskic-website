import Image from "next/image";
import Logo from "@/components/ui/Logo";

/**
 * フルスクリーンヒーロー
 *
 * 背景写真は木のテーブルに並んだバインミーのセット。料理と店の空気感が
 * 同時に伝わる一枚を使い、ダークブラウンのオーバーレイを重ねて文字を載せる。
 * object-position はスマートフォンで料理の主役が切れないよう調整している。
 */
export default function Hero() {
  return (
    <section className="relative flex min-h-svh flex-col overflow-hidden bg-ink text-ivory">
      {/* 背景写真 */}
      <Image
        src="/images/hero/banh-mi-shrimp-set.jpg"
        alt="木のテーブルに並んだK-laboの海老のバインミーと手羽先、春雨サラダ"
        fill
        priority
        sizes="100vw"
        quality={82}
        className="object-cover object-[38%_center] sm:object-center"
      />

      {/* オーバーレイ — 上下を濃く、中央を透かして料理を見せる */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-b from-ink/82 via-ink/44 to-ink/86 sm:from-ink/80 sm:via-ink/46 sm:to-ink/86"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-r from-ink/55 via-ink/20 to-transparent sm:from-ink/80 sm:via-ink/30"
      />
      <div aria-hidden="true" className="grain absolute inset-0" />

      {/* 内側の細い枠線 */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-4 border border-ivory/15 sm:inset-6"
      />

      {/* 縦書きの所在地（タブレット以上） */}
      <p
        aria-hidden="true"
        className="writing-vertical absolute right-10 top-1/2 hidden -translate-y-1/2 text-[0.7rem] tracking-[0.42em] text-ivory/70 md:block lg:right-14"
      >
        福岡県筑紫野市紫 — 紫駅東口 徒歩約0分
      </p>

      {/* メインコンテンツ */}
      <div className="relative z-10 mx-auto flex w-full max-w-6xl flex-1 flex-col justify-center px-6 pb-28 pt-28 sm:px-10">
        <p
          className="hero-fade flex items-center gap-4 font-serif-en text-[0.6rem] uppercase tracking-[0.32em] text-gold drop-shadow-[0_1px_8px_rgba(24,21,21,0.7)] sm:text-xs sm:tracking-[0.4em]"
          style={{ "--hero-delay": "0.1s" } as React.CSSProperties}
        >
          <span
            aria-hidden="true"
            className="inline-block h-px w-8 shrink-0 bg-gold/60 sm:w-12"
          />
          Takeout &amp; Cafe — Chikushino
        </p>

        <div
          className="hero-fade mt-8 sm:mt-9"
          style={{ "--hero-delay": "0.35s" } as React.CSSProperties}
        >
          <Logo size="lg" dark priority />
        </div>

        <h1
          className="hero-fade mt-9 font-mincho text-[1.45rem] leading-[1.85] tracking-[0.08em] drop-shadow-[0_1px_14px_rgba(24,21,21,0.65)] sm:mt-11 sm:text-4xl sm:leading-[1.8] sm:tracking-[0.1em]"
          style={{ "--hero-delay": "0.6s" } as React.CSSProperties}
        >
          バンコクで出会った
          <br className="sm:hidden" />
          おいしさを、
          <br />
          筑紫野の日常へ。
        </h1>

        <p
          className="hero-fade mt-6 max-w-xl text-[0.8rem] leading-[2.1] text-ivory/90 drop-shadow-[0_1px_10px_rgba(24,21,21,0.7)] sm:mt-7 sm:text-sm sm:leading-[2.2]"
          style={{ "--hero-delay": "0.85s" } as React.CSSProperties}
        >
          家族で過ごした9年間の記憶から生まれた、
          <br className="sm:hidden" />
          東南アジア料理とスイーツの
          <br className="sm:hidden" />
          テイクアウト＆カフェ。
        </p>

        <p
          className="hero-fade mt-8 font-serif-en text-[0.58rem] uppercase leading-[2] tracking-[0.24em] text-ivory/65 drop-shadow-[0_1px_8px_rgba(24,21,21,0.7)] sm:mt-10 sm:text-[0.68rem] sm:tracking-[0.3em]"
          style={{ "--hero-delay": "1.1s" } as React.CSSProperties}
        >
          Murasaki Sta. — Chikushino, Fukuoka
        </p>
      </div>

      {/* スクロールキュー */}
      <div
        className="hero-fade absolute bottom-0 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-3 pb-2"
        style={{ "--hero-delay": "1.4s" } as React.CSSProperties}
      >
        <span className="font-serif-en text-[0.6rem] uppercase tracking-[0.34em] text-ivory/60">
          Scroll
        </span>
        <span className="relative block h-14 w-px overflow-hidden">
          <span className="scroll-cue-bar absolute inset-0 bg-gradient-to-b from-gold/80 to-gold/20" />
        </span>
      </div>
    </section>
  );
}
