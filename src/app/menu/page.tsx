import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import Placeholder from "@/components/ui/Placeholder";
import Reveal from "@/components/ui/Reveal";
import JsonLd from "@/components/ui/JsonLd";
import QuickActions from "@/components/sections/shared/QuickActions";
import ReserveBlock from "@/components/sections/shared/ReserveBlock";
import { menuJsonLd } from "@/lib/jsonld";
import { getMenuItems } from "@/lib/menu";
import { formatPrice, menuCategories } from "@/data/menu";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "メニュー・価格｜バインミー・ローストビーフ・スイーツ",
  description:
    "筑紫野市・紫駅すぐのK-laboのメニューと価格。バインミーやガパオなどのアジアンフード、黒毛和牛ローストビーフや西京焼き、お弁当、彩りバターサンドなどのスイーツ、ドリンクまで。",
  alternates: { canonical: "/menu" },
  openGraph: {
    title: "メニュー・価格｜K-labo｜筑紫野のカフェ・テイクアウト",
    description:
      "アジアンフード、お肉・お魚料理、デリカ、スイーツ、ドリンク。筑紫野・紫駅すぐのK-laboのメニューと価格をご紹介します。",
    url: "/menu",
    images: [{ url: "/opengraph-image", width: 1200, height: 630 }],
  },
};

const motifByCategory = {
  lunch: "arc",
  asian: "ring",
  meatfish: "arc",
  delica: "lines",
  sweets: "arc",
  drinks: "lines",
} as const;

export default async function MenuPage() {
  const items = await getMenuItems();

  return (
    <>
      <JsonLd data={menuJsonLd(items)} />
      <PageHero
        label="Menu"
        title="メニュー"
        titleEn={
          <>
            Lunch / Asian / Meat <span className="not-italic">&amp;</span> Fish / Bento{" "}
            <span className="not-italic">&amp;</span> Party Platter / Sweets / Drinks
          </>
        }
        lede={
          <>
            アジアを原点にした料理から、肉・魚料理、お弁当、オリジナルスイーツ、ドリンクまで。
            <br />
            定番メニューは価格を掲載しています。
            <br />
            日替わりや仕入れによって変わる品は、店頭・公式Instagramでご案内しています。
          </>
        }
        breadcrumbs={[{ name: "メニュー", path: "/menu" }]}
      />

      {/* カテゴリへのジャンプ */}
      <nav
        aria-label="メニューのカテゴリ"
        className="sticky top-16 z-20 border-b border-ink/10 bg-ivory/95 backdrop-blur-md sm:top-20"
      >
        <ul className="mx-auto flex w-full max-w-6xl gap-2 overflow-x-auto px-5 py-3 [scrollbar-width:none] sm:px-8">
          {menuCategories.map((category) => (
            <li key={category.id} className="shrink-0">
              <a
                href={`#category-${category.id}`}
                className="inline-flex min-h-10 items-center border border-ink/20 px-4 text-[0.78rem] tracking-[0.08em] transition-colors hover:border-ink hover:bg-ink hover:text-ivory"
              >
                {category.name}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <div className="mx-auto w-full max-w-6xl px-5 sm:px-8">
        {menuCategories.map((category, categoryIndex) => {
          const categoryItems = items.filter((item) => item.category === category.id);
          const even = categoryIndex % 2 === 0;

          return (
            <section
              key={category.id}
              id={`category-${category.id}`}
              aria-labelledby={`category-${category.id}-heading`}
              className="scroll-mt-32 border-b border-ink/10 py-16 last:border-b-0 sm:scroll-mt-36 sm:py-24"
            >
              <div className="grid gap-10 md:grid-cols-12">
                {/* カテゴリ見出し */}
                <Reveal
                  className={
                    even ? "md:col-span-4" : "md:col-span-4 md:col-start-9 md:row-start-1"
                  }
                >
                  <div className="flex flex-col gap-4 md:sticky md:top-40">
                    <p className="font-serif-en text-[0.65rem] uppercase tracking-[0.32em] text-olive-deep">
                      {category.nameEn} — 0{categoryIndex + 1}
                    </p>
                    <h2
                      id={`category-${category.id}-heading`}
                      className="whitespace-nowrap font-mincho text-2xl tracking-[0.08em] md:text-[1.6rem] lg:text-3xl"
                    >
                      {category.name}
                    </h2>
                    <p className="max-w-sm text-[0.82rem] leading-[2.2] text-espresso">
                      {category.description}
                    </p>
                    {category.comingSoon && category.comingSoon.length > 0 && (
                      <p className="mt-2 flex flex-col gap-1 border border-gold-deep/50 bg-paper px-4 py-3">
                        <span className="font-serif-en text-[0.72rem] italic tracking-[0.12em] text-gold-text">
                          Coming Soon
                        </span>
                        <span className="font-mincho text-[0.95rem] tracking-[0.06em]">
                          {category.comingSoon.map((name, index, list) => (
                            <span key={name} className="block">
                              {name}
                              {index < list.length - 1 && "／"}
                            </span>
                          ))}
                        </span>
                        <span className="text-[0.7rem] text-olive-deep">近日登場予定です。</span>
                      </p>
                    )}
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
                  <ul className="flex flex-col gap-10 sm:gap-12">
                    {categoryItems.map((item) => {
                      const price = formatPrice(item);
                      return (
                        <Reveal as="li" key={item.id} delay={0.1}>
                          <article
                            id={item.id}
                            className="grid scroll-mt-36 grid-cols-5 gap-4 sm:scroll-mt-40 sm:items-start sm:gap-6"
                          >
                            <Placeholder
                              src={item.image}
                              alt={item.name}
                              motif={motifByCategory[item.category]}
                              aspect="aspect-square sm:aspect-[4/3]"
                              label={item.nameEn}
                              sizes="(min-width: 640px) 24vw, 38vw"
                              className="col-span-2"
                            />
                            <div className="col-span-3 flex flex-col gap-1.5 sm:gap-2.5">
                              <h3 className="flex flex-col gap-0.5 sm:flex-row sm:flex-wrap sm:items-baseline sm:gap-x-4">
                                <span className="font-mincho text-[1.05rem] leading-snug tracking-[0.06em] sm:text-xl">
                                  {item.name}
                                </span>
                                <span className="font-serif-en text-[0.6rem] uppercase tracking-[0.2em] text-olive-deep sm:text-[0.65rem]">
                                  {item.nameEn}
                                </span>
                              </h3>
                              <p
                                className={cn(
                                  "tracking-[0.04em]",
                                  price.hasPrice
                                    ? "font-mincho text-lg text-ink"
                                    : "text-[0.72rem] leading-[1.7] text-olive-deep",
                                )}
                              >
                                {price.text}
                              </p>
                              <p className="hidden text-[0.82rem] leading-[2.1] text-espresso sm:block">
                                {item.description}
                              </p>
                              <div className="flex flex-wrap gap-1.5 text-[0.62rem] tracking-[0.1em] sm:mt-1 sm:gap-2 sm:text-[0.66rem]">
                                {item.kind === "regular" && (
                                  <span className="border border-ink/25 px-2.5 py-0.5 text-ink">定番</span>
                                )}
                                {item.isTakeout && (
                                  <span className="border border-olive-deep/40 px-2.5 py-0.5 text-olive-deep">
                                    テイクアウト可
                                  </span>
                                )}
                                {!item.isAvailable && (
                                  <span className="border border-espresso/40 bg-espresso px-2.5 py-0.5 text-ivory">
                                    ただいま休止中
                                  </span>
                                )}
                                {item.seasonalNote && (
                                  <span className="border border-gold-deep/50 px-2.5 py-0.5 text-olive-deep">
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
                            <p className="col-span-5 text-[0.8rem] leading-[2] text-espresso sm:hidden">
                              {item.description}
                            </p>
                          </article>
                        </Reveal>
                      );
                    })}
                    {category.lineupNote && (
                      <Reveal as="li" delay={0.15}>
                        <p className="border-l-2 border-gold pl-5 text-[0.78rem] leading-[2] text-olive-deep">
                          {category.lineupNote}
                        </p>
                      </Reveal>
                    )}
                  </ul>
                </div>
              </div>
            </section>
          );
        })}
      </div>

      <section aria-labelledby="menu-order-heading" className="border-t border-ink/10 bg-paper">
        <div className="mx-auto grid w-full max-w-6xl gap-12 px-5 py-20 sm:px-8 sm:py-28 md:grid-cols-12 md:gap-10">
          <Reveal className="flex flex-col gap-5 md:col-span-5">
            <p className="font-serif-en text-[0.7rem] uppercase tracking-[0.32em] text-olive-deep">
              Order
            </p>
            <h2 id="menu-order-heading" className="font-mincho text-[1.6rem] leading-[1.6] tracking-[0.08em] sm:text-3xl">
              店頭で、デリバリーで、
              <br />
              ご予約で。
            </h2>
            <p className="text-[0.82rem] leading-[2.1] text-espresso">
              表示価格はすべて税込です。メニューは仕入れや季節により変わり、売り切れの際はご容赦ください。アレルギーについては店頭でお気軽にお尋ねください。
            </p>
          </Reveal>
          <div className="flex flex-col gap-12 md:col-span-7 md:col-start-6 lg:col-span-6 lg:col-start-7">
            <Reveal delay={0.1}>
              <QuickActions actions={["takeout", "uberEats", "rocketNow", "instagram"]} />
            </Reveal>
            <Reveal delay={0.2}>
              <ReserveBlock />
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
