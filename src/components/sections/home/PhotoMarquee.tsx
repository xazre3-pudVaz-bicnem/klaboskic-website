"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

type Photo = {
  src: string;
  alt: string;
  /** メニューページの商品ID。指定するとタップで該当商品へ移動する */
  menuId?: string;
};

/**
 * 流れる写真の帯に並べる写真（左から順に流れる）
 * 料理・スイーツ・ドリンク・仕込み・店内を混ぜ、K-laboの幅が伝わる順に並べる。
 */
const photos: Photo[] = [
  { src: "/images/food/banh-mi-shrimp.jpg", alt: "海老とアボカドのバインミー", menuId: "banhmi-shrimp-avocado" },
  { src: "/images/sweets/butter-sandwich-stack.jpg", alt: "彩りバターサンド", menuId: "butter-sandwich" },
  { src: "/images/food/gapao-rice-set.jpg", alt: "ガパオライスとヤムウンセン、ローストチキン", menuId: "gapao-rice" },
  { src: "/images/drinks/butterfly-pea-soda.jpg", alt: "パープルレモネード", menuId: "purple-lemonade" },
  { src: "/images/food/roast-beef-salad.jpg", alt: "黒毛和牛ローストビーフ", menuId: "roast-beef" },
  { src: "/images/story/staff-piping-butter-sandwich.jpg", alt: "彩りバターサンドのクリームを絞るスタッフ" },
  { src: "/images/food/loco-moco-salad.jpg", alt: "ロコモコ", menuId: "loco-moco" },
  { src: "/images/sweets/stroopwafel-caramel.jpg", alt: "ストロープワッフル", menuId: "stroopwafel" },
  { src: "/images/food/kaisen-don.jpg", alt: "海鮮丼", menuId: "kaisen-don" },
  { src: "/images/drinks/citrus-soda-lemon.jpg", alt: "シトラスレモネード", menuId: "citrus-lemonade" },
  { src: "/images/food/green-curry.jpg", alt: "グリーンカレー", menuId: "green-curry" },
  { src: "/images/shop/interior-seating.jpg", alt: "K-labo店内のカウンター席" },
  { src: "/images/delica/party-platter.jpg", alt: "オードブル盛り合わせ", menuId: "party-platter" },
  { src: "/images/food/yam-woon-sen.jpg", alt: "ヤムウンセン", menuId: "yam-woon-sen" },
];

/** 1枚あたりの表示時間（秒）。数字を大きくするとゆっくり流れる */
const SECONDS_PER_PHOTO = 3.5;

function PhotoCard({ photo, hidden }: { photo: Photo; hidden: boolean }) {
  const image = (
    <Image
      src={photo.src}
      alt={hidden ? "" : `K-laboの${photo.alt}`}
      fill
      sizes="(min-width: 1024px) 22rem, (min-width: 640px) 18rem, 14rem"
      className="object-cover transition-transform duration-700 ease-quiet group-hover:scale-[1.04]"
    />
  );

  return (
    // 隙間は gap ではなく右パディングで作る（-50% の移動量と継ぎ目を一致させるため）
    <li className="shrink-0 pr-3 sm:pr-4">
      <div className="group relative aspect-[4/3] w-56 overflow-hidden bg-espresso sm:w-72 lg:w-[22rem]">
        {photo.menuId ? (
          <Link
            href={`/menu#${photo.menuId}`}
            tabIndex={hidden ? -1 : undefined}
            className="absolute inset-0 block"
          >
            {image}
            {!hidden && <span className="sr-only">（メニューを見る）</span>}
          </Link>
        ) : (
          image
        )}
      </div>
    </li>
  );
}

/**
 * 流れる写真の帯（無限ループ）
 *
 * 同じ写真の列を2つ並べ、列全体を -50% まで一定速度で動かし続けることで
 * 継ぎ目なくループさせる。アニメーションはCSSのみ（globals.css の .marquee）。
 * - マウスを乗せる／キーボードでフォーカスすると一時停止
 * - 一時停止ボタン付き（自動で動き続ける要素には停止手段が必要）
 * - 「視差効果を減らす」設定の端末では動かさず、指で横スクロールできる
 */
export default function PhotoMarquee() {
  const [paused, setPaused] = useState(false);

  return (
    <section aria-label="K-laboの料理とお店の写真" className="grain bg-ink pb-8 pt-10 sm:pb-10 sm:pt-14">
      <div
        className="marquee overflow-hidden motion-reduce:overflow-x-auto"
        data-paused={paused ? "true" : undefined}
        style={{ "--marquee-duration": `${photos.length * SECONDS_PER_PHOTO}s` } as React.CSSProperties}
      >
        <div className="marquee-track flex w-max">
          <ul className="flex">
            {photos.map((photo) => (
              <PhotoCard key={photo.src} photo={photo} hidden={false} />
            ))}
          </ul>
          {/* ループ用の複製（支援技術からは隠す） */}
          <ul className="flex motion-reduce:hidden" aria-hidden="true">
            {photos.map((photo) => (
              <PhotoCard key={`copy-${photo.src}`} photo={photo} hidden />
            ))}
          </ul>
        </div>
      </div>

      <div className="mx-auto mt-5 flex w-full max-w-6xl items-center justify-between gap-4 px-5 sm:px-8">
        <p className="font-serif-en text-[0.62rem] uppercase tracking-[0.3em] text-gold">
          Good Food, Good Days
        </p>
        <button
          type="button"
          onClick={() => setPaused((value) => !value)}
          className="inline-flex min-h-11 items-center gap-2 px-1 text-[0.7rem] tracking-[0.12em] text-ivory/70 transition-colors hover:text-ivory motion-reduce:hidden"
        >
          {paused ? (
            <svg viewBox="0 0 24 24" aria-hidden="true" className="h-3.5 w-3.5 fill-current">
              <path d="M7 5l12 7-12 7z" />
            </svg>
          ) : (
            <svg viewBox="0 0 24 24" aria-hidden="true" className="h-3.5 w-3.5 fill-current">
              <path d="M7 5h3.5v14H7zM13.5 5H17v14h-3.5z" />
            </svg>
          )}
          {paused ? "写真を動かす" : "一時停止"}
        </button>
      </div>
    </section>
  );
}
