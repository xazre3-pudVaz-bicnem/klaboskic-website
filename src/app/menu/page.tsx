import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import Placeholder from "@/components/ui/Placeholder";
import Reveal from "@/components/ui/Reveal";
import LinkButton from "@/components/ui/LinkButton";
import JsonLd from "@/components/ui/JsonLd";
import { menuJsonLd } from "@/lib/jsonld";
import {
  getItemsByCategory,
  menuCategories,
  PRICE_UNCONFIRMED,
} from "@/data/menu";
import { siteConfig } from "@/data/siteConfig";

export const metadata: Metadata = {
  title: "メニュー｜バインミー・スイーツ・デリカ",
  description:
    "筑紫野市・紫駅すぐのK-laboのメニュー。バインミーなどの東南アジア料理から、和洋のフード、お肉お魚のお惣菜、手づくりスイーツ、ドリンクまで。当日のラインナップは店頭・公式Instagramでご案内しています。",
  alternates: { canonical: "/menu" },
  openGraph: {
    title: "メニュー｜K-labo｜筑紫野のカフェ・テイクアウト",
    description:
      "バインミー、東南アジアと和洋のフード、お惣菜、スイーツ、ドリンク。筑紫野・紫駅すぐのK-laboのメニューをご紹介します。",
    url: "/menu",
    images: [{ url: "/opengraph-image", width: 1200, height: 630 }],
  },
};

const motifByCategory = {
  banhmi: "ring",
  food: "arc",
  delica: "lines",
  sweets: "arc",
  drinks: "lines",
} as const;

export default function MenuPage() {
  return (
    <>
      <JsonLd data={menuJsonLd()} />
      <PageHero
        label="Menu"
        title="メニュー"
        titleEn="Banh Mi / Food / Delica / Sweets / Drinks"
        lede={
          <>
            バインミーをはじめとした東南アジアの料理から、和洋のフード、お惣菜、スイーツ、ドリンクまで。日替わり・季節替わりの品も多いため、当日のラインナップと価格は店頭および公式Instagramでご案内しています。
          </>
        }
        breadcrumbs={[{ name: "メニュー", path: "/menu" }]}
      />

      <div className="mx-auto w-full max-w-6xl px-5 sm:px-8">
        {menuCategories.map((category, categoryIndex) => {
          const items = getItemsByCategory(category.id);
          const even = categoryIndex % 2 === 0;

          return (
            <section
              key={category.id}
              aria-labelledby={`category-${category.id}`}
              className="border-b border-ink/10 py-16 last:border-b-0 sm:py-24"
            >
              <div className="grid gap-10 md:grid-cols-12">
                {/* カテゴリ見出し */}
                <Reveal
                  className={
                    even
                      ? "md:col-span-4"
                      : "md:col-span-4 md:col-start-9 md:row-start-1"
                  }
                >
                  <div className="flex flex-col gap-4 md:sticky md:top-28">
                    <p className="font-serif-en text-[0.65rem] uppercase tracking-[0.32em] text-olive-deep">
                      {category.nameEn} — 0{categoryIndex + 1}
                    </p>
                    <h2
                      id={`category-${category.id}`}
                      className="font-mincho text-2xl tracking-[0.1em] sm:text-3xl"
                    >
                      {category.name}
                    </h2>
                    <p className="max-w-sm text-[0.82rem] leading-[2.2] text-espresso">
                      {category.description}
                    </p>
                  </div>
                </Reveal>

                {/* 商品リスト */}
                <div
                  className={
                    even
                      ? "md:col-span-7 md:col-start-6"
                      : "md:col-span-7 md:col-start-1 md:row-start-1"
                  }
                >
                  {items.length > 0 ? (
                    <ul className="flex flex-col gap-12">
                      {items.map((item) => (
                        <Reveal as="li" key={item.name} delay={0.1}>
                          <article className="grid gap-6 sm:grid-cols-5 sm:items-start">
                            <Placeholder
                              src={item.image}
                              alt={`${item.name}（${item.nameEn}）`}
                              motif={motifByCategory[item.category]}
                              aspect="aspect-[4/3]"
                              label={item.nameEn}
                              sizes="(min-width: 640px) 24vw, 100vw"
                              className="sm:col-span-2"
                            />
                            <div className="flex flex-col gap-2.5 sm:col-span-3">
                              <h3 className="flex flex-wrap items-baseline gap-x-4 gap-y-1">
                                <span className="font-mincho text-xl tracking-[0.08em]">
                                  {item.name}
                                </span>
                                <span className="font-serif-en text-[0.65rem] uppercase tracking-[0.24em] text-olive-deep">
                                  {item.nameEn}
                                </span>
                              </h3>
                              <p className="text-[0.82rem] leading-[2.1] text-espresso">
                                {item.description}
                              </p>
                              <p className="mt-1 text-[0.78rem] tracking-[0.06em] text-ink">
                                {item.price !== null ? (
                                  <>￥{item.price.toLocaleString()}（税込）</>
                                ) : (
                                  <span className="text-olive-deep">
                                    {PRICE_UNCONFIRMED}
                                  </span>
                                )}
                              </p>
                              <div className="mt-1 flex flex-wrap gap-2 text-[0.66rem] tracking-[0.12em]">
                                {item.isTakeout && (
                                  <span className="border border-olive-deep/40 px-3 py-1 text-olive-deep">
                                    テイクアウト可
                                  </span>
                                )}
                                {!item.isAvailable && (
                                  <span className="border border-espresso/40 px-3 py-1 text-espresso">
                                    ただいま休止中
                                  </span>
                                )}
                                {item.seasonalNote && (
                                  <span className="border border-gold-deep/50 px-3 py-1 text-olive-deep">
                                    {item.seasonalNote}
                                  </span>
                                )}
                              </div>
                              {item.allergenNote && (
                                <p className="text-[0.7rem] leading-[1.8] text-olive-deep">
                                  {item.allergenNote}
                                </p>
                              )}
                            </div>
                          </article>
                        </Reveal>
                      ))}
                      {category.lineupNote && (
                        <Reveal as="li" delay={0.15}>
                          <p className="border-l-2 border-gold pl-5 text-[0.78rem] leading-[2] text-olive-deep">
                            {category.lineupNote}
                          </p>
                        </Reveal>
                      )}
                    </ul>
                  ) : (
                    <Reveal delay={0.1}>
                      <div className="flex flex-col gap-6">
                        <Placeholder
                          motif={motifByCategory[category.id]}
                          tone={categoryIndex % 2 === 0 ? "light" : "dark"}
                          aspect="aspect-[16/8]"
                          label={category.nameEn}
                          sizes="(min-width: 768px) 55vw, 100vw"
                        />
                        <p className="border-l-2 border-gold pl-5 text-[0.82rem] leading-[2.1] text-espresso">
                          {category.lineupNote ??
                            "当日のラインナップは店頭・公式Instagramでご確認ください。"}
                        </p>
                      </div>
                    </Reveal>
                  )}
                </div>
              </div>
            </section>
          );
        })}
      </div>

      <div className="mx-auto w-full max-w-6xl px-5 pb-28 pt-16 sm:px-8">
        <Reveal className="grain flex flex-col items-center gap-7 bg-ink px-6 py-14 text-center text-ivory sm:px-10">
          <p className="max-w-xl text-[0.82rem] leading-[2.2] text-ivory/80">
            メニューは仕入れや季節により変わります。売り切れの際はご容赦ください。
            <br />
            当日のラインナップ・価格・アレルギーに関するご質問は、店頭または公式Instagramにてご確認ください。
          </p>
          <LinkButton href={siteConfig.instagram.url} external dark>
            Instagramで最新メニューを見る
          </LinkButton>
        </Reveal>
      </div>
    </>
  );
}
