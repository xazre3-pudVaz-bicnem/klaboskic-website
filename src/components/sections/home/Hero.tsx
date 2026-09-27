import Link from "next/link";
import { getImageProps } from "next/image";
import { ArrowRightIcon, TrainIcon } from "@/components/ui/icons";
import { getParkingInfo, siteConfig } from "@/data/siteConfig";

/**
 * ヒーロー写真
 *
 * PCとスマートフォンで別の写真を出し分けられる（アートディレクション）。
 * いまは同じ写真を使用。<picture> で出し分けるため、
 * ダウンロードされるのは画面に合う1枚だけ。
 *
 * PCでは写真枠を元写真と同じ16:9にして、写真全体が切れずに見えるようにしている
 * （周囲の余白はダークブラウンの地色）。スマートフォンでは 4:3 に切り抜く。
 *
 * 写真を差し替えるときは src・width・height（元画像のピクセル数）を書き換える。
 * スマートフォンでは左右がトリミングされるので、object-position で主役の位置を調整する。
 */
const HERO_IMAGES = {
  /** PC（1024px以上） */
  desktop: {
    src: "/images/hero/interior-coffee.jpg",
    width: 1672,
    height: 941,
  },
  /** スマートフォン・タブレット */
  mobile: {
    src: "/images/hero/interior-coffee.jpg",
    width: 1672,
    height: 941,
  },
  alt: "やわらかな光が差し込むK-laboの店内。木のカウンターにテイクアウトのコーヒーが置かれている",
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
    <section className="relative flex flex-col bg-ink text-ivory lg:grid lg:grid-cols-12 lg:items-center">
      {/* 写真 */}
      <div className="relative aspect-[16/11] min-h-56 overflow-hidden sm:aspect-[16/10] lg:order-2 lg:col-span-8 lg:aspect-[16/9] lg:h-auto">
        <picture>
          <source media="(min-width: 1024px)" srcSet={desktopSrcSet} sizes="60vw" />
          <source srcSet={mobileSrcSet} sizes="100vw" />
          {/* eslint-disable-next-line jsx-a11y/alt-text -- alt は imgProps に含まれる */}
          <img
            {...imgProps}
            loading="eager"
            fetchPriority="high"
            className="absolute inset-0 h-full w-full object-cover object-[32%_center] lg:object-center"
          />
        </picture>
        {/* ヘッダーの文字を読みやすくする上端の影と、本文へつなぐ下端のグラデーション */}
        <div
          aria-hidden="true"
          className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-ink/95 via-ink/40 to-transparent lg:hidden"
        />
        <div
          aria-hidden="true"
          className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-ink to-transparent lg:hidden"
        />
      </div>

      {/* コピー */}
      <div className="grain relative z-10 -mt-6 flex flex-col justify-center px-6 pb-14 sm:px-10 lg:order-1 lg:col-span-4 lg:mt-0 lg:px-8 lg:pb-6 lg:pt-14 xl:px-12 xl:pb-10 xl:pt-20 2xl:px-16">
        <p
          className="hero-fade flex items-center gap-4 font-serif-en text-[0.6rem] uppercase tracking-[0.3em] text-gold sm:text-[0.68rem] sm:tracking-[0.36em]"
          style={delay(0.1)}
        >
          <span aria-hidden="true" className="inline-block h-px w-8 shrink-0 bg-gold/60 sm:w-10" />
          Cafe &amp; Takeout — Chikushino
        </p>

        <h1
          className="hero-fade mt-5 font-mincho text-[1.75rem] leading-[1.7] tracking-[0.08em] sm:text-[2.2rem] lg:mt-5 lg:text-[1.7rem] lg:leading-[1.6] xl:text-[2.2rem] xl:leading-[1.65] 2xl:text-[2.5rem]"
          style={delay(0.45)}
        >
          アジアで出会った
          <br />
          おいしさを、
          <br />
          日常の一皿へ…
        </h1>

        <p
          className="hero-fade mt-5 max-w-md text-[0.8rem] leading-[2.05] text-ivory/80 sm:text-sm sm:leading-[2.1] lg:mt-4 lg:text-[0.78rem] lg:leading-[1.95] xl:text-sm xl:leading-[2.1]"
          style={delay(0.65)}
        >
          {siteConfig.subTagline}
        </p>

        <div
          className="hero-fade mt-8 grid grid-cols-2 gap-2.5 sm:flex sm:flex-wrap sm:gap-3 lg:mt-5 xl:mt-7"
          style={delay(0.85)}
        >
          <Link
            href="/menu"
            className="group inline-flex min-h-13 items-center justify-center gap-2.5 bg-ivory px-3 py-3.5 text-[0.8rem] tracking-[0.06em] text-ink transition-colors duration-300 hover:bg-gold sm:px-7 sm:text-sm sm:tracking-[0.1em] lg:px-4 lg:tracking-[0.04em] xl:px-6 xl:tracking-[0.08em]"
          >
            メニューを見る
            <ArrowRightIcon className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
          <Link
            href="/takeout"
            className="group inline-flex min-h-13 items-center justify-center gap-2.5 border border-ivory/40 px-3 py-3.5 text-[0.8rem] tracking-[0.06em] transition-colors duration-300 hover:border-ivory hover:bg-ivory hover:text-ink sm:px-7 sm:text-sm sm:tracking-[0.1em] lg:px-4 lg:tracking-[0.04em] xl:px-6 xl:tracking-[0.08em]"
          >
            テイクアウトについて
          </Link>
        </div>

        {/* 駅からの近さは大きな強みなので、ファーストビューで数字として見せる */}
        <Link
          href="#access"
          className="hero-fade group mt-9 flex w-fit items-center gap-4 border-t border-ivory/15 pt-4 lg:mt-5 xl:mt-7 xl:pt-5"
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
