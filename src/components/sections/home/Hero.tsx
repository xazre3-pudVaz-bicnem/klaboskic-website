import Link from "next/link";
import { getImageProps } from "next/image";
import { ArrowRightIcon, TrainIcon } from "@/components/ui/icons";
import { getParkingInfo, siteConfig } from "@/data/siteConfig";

/**
 * ヒーロー写真
 *
 * PCとスマートフォンで別の写真を出し分ける（アートディレクション）。
 * PCでは写真枠を元写真と同じ4:3にして、集合写真の料理がほぼ切れずに見えるようにしている。
 * 横長の集合写真を縦長の画面に無理にトリミングすると料理が切れるため、
 * スマートフォンでは縦に切り抜いても料理がきれいに見える単品写真に切り替える。
 * <picture> で出し分けるので、ダウンロードされるのは画面に合う1枚だけ。
 *
 * 写真を差し替えるときは src・width・height（元画像のピクセル数）を書き換える。
 */
const HERO_IMAGES = {
  /** PC（1024px以上）— 料理が並んだ集合写真 */
  desktop: {
    src: "/images/hero/table-set.jpg",
    width: 1448,
    height: 1086,
  },
  /** スマートフォン・タブレット — 単品写真 */
  mobile: {
    src: "/images/food/banh-mi-shrimp-avocado.jpg",
    width: 1448,
    height: 1086,
  },
  alt: "木のテーブルに並んだK-laboのバインミー、ガパオライス、ロコモコ、ヤムウンセン、ローストチキン、レモネード",
};

const delay = (seconds: number) =>
  ({ "--hero-delay": `${seconds}s` }) as React.CSSProperties;

export default function Hero() {
  const parking = getParkingInfo();
  const common = { alt: HERO_IMAGES.alt, quality: 82 };
  const {
    props: { srcSet: desktopSrcSet },
  } = getImageProps({ ...common, ...HERO_IMAGES.desktop, sizes: "60vw" });
  const {
    props: { srcSet: mobileSrcSet, ...imgProps },
  } = getImageProps({ ...common, ...HERO_IMAGES.mobile, sizes: "100vw" });

  return (
    <section className="relative flex flex-col bg-ink text-ivory lg:grid lg:grid-cols-12">
      {/* 写真 */}
      <div className="relative h-[54svh] min-h-80 overflow-hidden sm:h-[62svh] lg:order-2 lg:col-span-7 lg:h-auto lg:min-h-[43.75vw]">
        <picture>
          <source media="(min-width: 1024px)" srcSet={desktopSrcSet} sizes="60vw" />
          <source srcSet={mobileSrcSet} sizes="100vw" />
          {/* eslint-disable-next-line jsx-a11y/alt-text -- alt は imgProps に含まれる */}
          <img
            {...imgProps}
            loading="eager"
            fetchPriority="high"
            className="absolute inset-0 h-full w-full object-cover object-[50%_58%] lg:object-center"
          />
        </picture>
        {/* ヘッダーの文字を読みやすくする上端の影と、本文へつなぐ下端のグラデーション */}
        <div
          aria-hidden="true"
          className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-ink/95 via-ink/55 to-transparent lg:h-28 lg:from-ink/70 lg:via-transparent"
        />
        <div
          aria-hidden="true"
          className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-ink to-transparent lg:hidden"
        />
        <div
          aria-hidden="true"
          className="absolute inset-y-0 left-0 hidden w-24 bg-gradient-to-r from-ink/60 to-transparent lg:block"
        />
      </div>

      {/* コピー */}
      <div className="grain relative z-10 -mt-6 flex flex-col justify-center px-6 pb-14 sm:px-10 lg:order-1 lg:col-span-5 lg:mt-0 lg:px-12 lg:pb-12 lg:pt-24 xl:px-14 2xl:px-20">
        <p
          className="hero-fade flex items-center gap-4 font-serif-en text-[0.6rem] uppercase tracking-[0.3em] text-gold sm:text-[0.68rem] sm:tracking-[0.36em]"
          style={delay(0.1)}
        >
          <span aria-hidden="true" className="inline-block h-px w-8 shrink-0 bg-gold/60 sm:w-10" />
          Cafe &amp; Takeout — Chikushino
        </p>

        <h1
          className="hero-fade mt-5 font-mincho text-[1.75rem] leading-[1.7] tracking-[0.08em] sm:text-[2.2rem] lg:mt-8 lg:text-[2.1rem] lg:leading-[1.7] xl:text-[2.5rem] 2xl:text-[2.8rem]"
          style={delay(0.45)}
        >
          アジアで出会った
          <br />
          おいしさを、
          <br />
          日常の一皿へ…
        </h1>

        <p
          className="hero-fade mt-5 max-w-md text-[0.8rem] leading-[2.05] text-ivory/80 sm:text-sm sm:leading-[2.1] lg:mt-6"
          style={delay(0.65)}
        >
          {siteConfig.subTagline}
        </p>

        <div
          className="hero-fade mt-8 grid grid-cols-2 gap-2.5 sm:flex sm:flex-wrap sm:gap-3 lg:mt-8"
          style={delay(0.85)}
        >
          <Link
            href="/menu"
            className="group inline-flex min-h-13 items-center justify-center gap-2.5 bg-ivory px-3 py-3.5 text-[0.8rem] tracking-[0.06em] text-ink transition-colors duration-300 hover:bg-gold sm:px-7 sm:text-sm sm:tracking-[0.1em] lg:px-6 xl:px-8"
          >
            メニューを見る
            <ArrowRightIcon className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
          <Link
            href="/takeout"
            className="group inline-flex min-h-13 items-center justify-center gap-2.5 border border-ivory/40 px-3 py-3.5 text-[0.8rem] tracking-[0.06em] transition-colors duration-300 hover:border-ivory hover:bg-ivory hover:text-ink sm:px-7 sm:text-sm sm:tracking-[0.1em] lg:px-6 xl:px-8"
          >
            テイクアウトについて
          </Link>
        </div>

        {/* 駅からの近さは大きな強みなので、ファーストビューで数字として見せる */}
        <Link
          href="#access"
          className="hero-fade group mt-9 flex w-fit items-center gap-4 border-t border-ivory/15 pt-6 lg:mt-9"
          style={delay(1.05)}
        >
          <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-gold/50 text-gold">
            <TrainIcon className="h-5 w-5" />
          </span>
          <span className="flex flex-col">
            <span className="text-[0.7rem] tracking-[0.12em] text-ivory/65">
              西鉄天神大牟田線「紫駅」東口から
            </span>
            <span className="font-mincho text-lg tracking-[0.12em]">
              徒歩約
              <span className="mx-1 font-serif-en text-[2rem] leading-none text-gold">0</span>
              分
            </span>
            <span className="mt-1 text-[0.72rem] tracking-[0.1em] text-ivory/80">
              {siteConfig.accessJrShort}
            </span>
            {parking.confirmed && (
              <span className="mt-0.5 text-[0.7rem] tracking-[0.1em] text-ivory/65">
                {siteConfig.parking.location}に駐車場{siteConfig.parking.spaces}（{siteConfig.parking.fee}）
              </span>
            )}
          </span>
        </Link>
      </div>
    </section>
  );
}
