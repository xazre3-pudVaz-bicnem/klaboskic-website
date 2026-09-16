import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import Placeholder from "@/components/ui/Placeholder";
import Reveal from "@/components/ui/Reveal";
import LinkButton from "@/components/ui/LinkButton";
import { siteConfig } from "@/data/siteConfig";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "K-laboの軌跡（Bangkok to Chikushino）",
  description:
    "家族で過ごしたバンコクでの9年間。そこで出会った東南アジアの味の記憶が、筑紫野市紫・紫駅前の小さなカフェ＆テイクアウトショップ「K-labo」になるまでの物語です。",
  alternates: { canonical: "/story" },
  openGraph: {
    title: "K-laboの軌跡（Bangkok to Chikushino）",
    description:
      "家族で過ごしたバンコクでの9年間から、筑紫野・紫駅前の小さな店ができるまで。K-laboのブランドストーリー。",
    url: "/story",
    images: [{ url: "/opengraph-image", width: 1200, height: 630 }],
  },
};

type Chapter = {
  number: string;
  titleEn: string;
  title: string;
  paragraphs: string[];
  image: string;
  imageAlt: string;
};

/**
 * 各章の本文は「家族でバンコクに9年間滞在した」という確認済みの事実と、
 * ブランドとしての考え方だけで構成する。
 * 具体的な出来事・修業歴・店名の由来・家族構成・開業日などを創作しないこと。
 */
const chapters: Chapter[] = [
  {
    number: "01",
    titleEn: "Nine Years in Bangkok",
    title: "家族で過ごした、バンコクでの9年間",
    paragraphs: [
      "はじまりは、家族で移り住んだバンコクでの暮らしでした。気がつけば、その街で過ごした時間は9年になっていました。",
      "暮らすほどに、あの街の空気と食卓は、私たちの日常そのものになっていきました。",
    ],
    image: "/images/story/bangkok-wat-arun.jpg",
    imageAlt: "夕暮れのチャオプラヤー川と、ライトアップされたバンコクの寺院ワット・アルン",
  },
  {
    number: "02",
    titleEn: "Everyday Flavors",
    title: "日常の中にあった、東南アジアの味",
    paragraphs: [
      "バンコクで出会ったのは、特別な日にだけ食べるごちそうではありません。街角に、市場に、食卓に、あたりまえのように溶け込んでいる料理たち。",
      "東南アジアの味は、いつも暮らしのすぐそばにありました。",
    ],
    image: "/images/hero/table-set.jpg",
    imageAlt: "木のテーブルに並んだK-laboのバインミー、ガパオライス、ロコモコ、ヤムウンセン、ローストチキン、レモネード",
  },
  {
    number: "03",
    titleEn: "Unforgettable",
    title: "忘れられない、あの香りと味",
    paragraphs: [
      "甘さ、辛さ、酸味、そして立ちのぼる香り。いくつもの要素がひと皿の中で重なり合う、東南アジアの料理。",
      "日本に戻ってからも、あの味の記憶は薄れるどころか、むしろ鮮やかになっていきました。",
    ],
    image: "/images/food/green-curry.jpg",
    imageAlt: "バジルを添えたK-laboのグリーンカレー",
  },
  {
    number: "04",
    titleEn: "Handcrafted with Care",
    title: "心を込めて、一つひとつ手作り",
    paragraphs: [
      "記憶に残る味を、今の暮らしにそっとなじむ形で、一つひとつ丁寧に仕上げています。より多くの方々に、気軽に楽しんでもらえるように。",
      "そんな思いが、少しずつかたちになっていきました。",
    ],
    image: "/images/story/staff-piping-butter-sandwich.jpg",
    imageAlt: "彩りバターサンドの生地にクリームを絞るK-laboのスタッフ",
  },
  {
    number: "05",
    titleEn: "Murasaki, Chikushino",
    title: "筑紫野市紫、駅前の小さな店",
    paragraphs: [
      "私たちがお店を構えたのは、福岡県筑紫野市紫。西鉄紫駅の東口を出てすぐの場所です。",
      "通勤や通学の途中に、買い物の帰りに。ふらりと立ち寄れる駅前の立地は、「日常の中で楽しんでほしい」というK-laboの思いと、自然に重なりました。",
    ],
    image: "/images/shop/interior-counter-long.jpg",
    imageAlt: "アートを飾った壁と木のカウンター席が並ぶK-laboの店内",
  },
  {
    number: "06",
    titleEn: "Rooted in Asia",
    title: "アジアを原点に、ジャンルにとらわれず",
    paragraphs: [
      "バインミーやガパオなどのアジアの料理、黒毛和牛のローストビーフや西京焼き、彩りバターサンドをはじめとしたオリジナルスイーツ。K-laboの品々には、バンコクで過ごした日々の記憶が息づいています。",
      "今日のごはんに、もう一品。がんばった日の、ちいさなごほうびに。アジアで出会ったおいしさを、日常の一皿へ。",
    ],
    image: "/images/shop/interior-entrance.jpg",
    imageAlt: "K-laboのロゴを染め抜いた暖簾がかかる店内の入口",
  },
];

export default function StoryPage() {
  return (
    <>
      <PageHero
        label="Our Story"
        title={
          <>
            バンコクで過ごした
            <br className="sm:hidden" />
            9年と、
            <br />
            K-laboができるまで
          </>
        }
        titleEn="Bangkok to Chikushino"
        lede={
          <>
            福岡県筑紫野市、西鉄紫駅のすぐそば。小さなカフェ＆テイクアウトショップ「K-labo」が生まれるまでには、家族でバンコクに暮らした9年間の物語があります。
          </>
        }
        breadcrumbs={[{ name: "K-laboの軌跡", path: "/story" }]}
      />

      <div className="overflow-hidden">
        {chapters.map((chapter, index) => {
          const even = index % 2 === 0;
          return (
            <article
              key={chapter.number}
              aria-labelledby={`chapter-${chapter.number}`}
              className={cn(
                "relative",
                index === chapters.length - 1 && "grain bg-ink text-ivory",
              )}
            >
              <div className="mx-auto grid w-full max-w-6xl items-center gap-12 px-5 py-20 sm:px-8 sm:py-28 md:grid-cols-12 md:gap-8">
                {/* 章番号とテキスト */}
                <div
                  className={cn(
                    "flex flex-col gap-7",
                    even
                      ? "md:col-span-6 lg:col-span-5"
                      : "md:col-span-6 md:col-start-7 lg:col-span-5 lg:col-start-8 md:row-start-1",
                  )}
                >
                  <Reveal className="flex items-center gap-5">
                    <span
                      className={cn(
                        "font-serif-en text-4xl italic tracking-[0.08em] sm:text-5xl",
                        index === chapters.length - 1
                          ? "text-gold"
                          : "text-gold-text",
                      )}
                    >
                      {chapter.number}
                    </span>
                    <span className="flex flex-col gap-1">
                      <span
                        aria-hidden="true"
                        className={cn(
                          "reveal-line block h-px w-16",
                          index === chapters.length - 1
                            ? "bg-gold/60"
                            : "bg-olive-deep/40",
                        )}
                      />
                      <span
                        className={cn(
                          "font-serif-en text-[0.62rem] uppercase tracking-[0.3em]",
                          index === chapters.length - 1
                            ? "text-gold"
                            : "text-olive-deep",
                        )}
                      >
                        {chapter.titleEn}
                      </span>
                    </span>
                  </Reveal>

                  <Reveal delay={0.1}>
                    <h2
                      id={`chapter-${chapter.number}`}
                      className={cn(
                        "font-mincho text-[1.45rem] leading-[1.8] tracking-[0.09em] sm:text-3xl sm:leading-[1.7]",
                        index === chapters.length - 1
                          ? "text-ivory"
                          : "text-ink",
                      )}
                    >
                      {chapter.title}
                    </h2>
                  </Reveal>

                  <Reveal
                    delay={0.2}
                    className={cn(
                      "flex flex-col gap-5 text-sm leading-[2.4]",
                      index === chapters.length - 1
                        ? "text-ivory/80"
                        : "text-espresso",
                    )}
                  >
                    {chapter.paragraphs.map((paragraph, i) => (
                      <p key={i}>{paragraph}</p>
                    ))}
                  </Reveal>
                </div>

                {/* ビジュアル */}
                <Reveal
                  delay={0.15}
                  className={cn(
                    even
                      ? "md:col-span-5 md:col-start-8"
                      : "md:col-span-5 md:col-start-1 md:row-start-1",
                  )}
                >
                  <Placeholder
                    src={chapter.image}
                    alt={chapter.imageAlt}
                    aspect={even ? "aspect-[4/5]" : "aspect-square"}
                    sizes="(min-width: 768px) 40vw, 100vw"
                  />
                </Reveal>
              </div>

              {/* 章間の縦線 */}
              {index < chapters.length - 1 && (
                <div
                  aria-hidden="true"
                  className="flex justify-center pb-4"
                >
                  <span className="block h-16 w-px bg-gradient-to-b from-olive/50 to-olive/0 sm:h-20" />
                </div>
              )}
            </article>
          );
        })}
      </div>

      {/* 結び */}
      <div className="grain bg-ink pb-28 text-ivory">
        <div className="mx-auto flex w-full max-w-3xl flex-col items-center gap-9 px-5 text-center sm:px-8">
          <span
            aria-hidden="true"
            className="block h-16 w-px bg-gradient-to-b from-gold/0 via-gold/60 to-gold/0"
          />
          <Reveal>
            <p className="font-mincho text-xl leading-[2] tracking-[0.12em] sm:text-2xl">
              紫駅の改札を出たら、
              <br />
              すこしだけ旅の匂いがする。
            </p>
          </Reveal>
          <Reveal delay={0.15} className="flex flex-col items-center gap-4 sm:flex-row">
            <LinkButton href="/menu" dark>
              メニューを見る
            </LinkButton>
            <LinkButton href="/access" variant="text" dark>
              お店へのアクセス
            </LinkButton>
          </Reveal>
          <Reveal delay={0.25}>
            <p className="text-[0.72rem] leading-[2] text-ivory/55">
              {siteConfig.address.full}｜{siteConfig.accessShort}
            </p>
          </Reveal>
        </div>
      </div>
    </>
  );
}
