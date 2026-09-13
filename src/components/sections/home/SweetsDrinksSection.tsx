import Link from "next/link";
import Placeholder from "@/components/ui/Placeholder";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import LinkButton from "@/components/ui/LinkButton";
import { formatPrice, menuCategories, type MenuItem } from "@/data/menu";
import { getMenuItems } from "@/lib/menu";

const sweets = [
  {
    id: "butter-sandwich",
    image: "/images/sweets/butter-sandwich.jpg",
    alt: "4色の生地でクリームをはさんだK-laboの彩りバターサンド",
    note: "色とりどりの生地に、クリームをひとつずつ絞って。",
  },
  {
    id: "stroopwafel",
    image: "/images/sweets/stroopwafel-chocolate.jpg",
    alt: "チョコレートを重ねたK-laboのストロープワッフル",
    note: "ざくっと香ばしい、薄焼きのワッフル。",
  },
  {
    id: "butter-sandwich-gift",
    image: "/images/sweets/butter-sandwich-gift-box.jpg",
    alt: "個包装の彩りバターサンドを詰め合わせたギフトボックス",
    note: "手土産や贈りものに。",
  },
  {
    id: "wafer-cookies",
    image: "/images/sweets/wafer-sticks.jpg",
    alt: "ホワイトとビターのチョコレートをかけたK-laboのウエハースクッキー",
    note: "ひと口サイズの軽やかな食感。",
  },
];

const drinks = [
  { id: "purple-lemonade", image: "/images/drinks/butterfly-pea-soda.jpg" },
  { id: "citrus-lemonade", image: "/images/drinks/citrus-soda.jpg" },
  { id: "lemon-mint", image: "/images/drinks/lemon-soda.jpg" },
  { id: "coffee", image: "/images/drinks/iced-coffee.jpg" },
];

const comingSoon = menuCategories.find((category) => category.id === "sweets")?.comingSoon ?? [];

/** 06. スイーツ＆ドリンク — 特定の1品ではなく、スイーツ全体のラインナップを見せる */
export default async function SweetsDrinksSection() {
  const items = await getMenuItems();
  const find = (id: string): MenuItem | undefined => items.find((item) => item.id === id);
  const nameOf = (id: string) => find(id)?.name ?? "";
  /** 価格が入力済みの商品だけ価格を返す */
  const priceOf = (id: string) => {
    const item = find(id);
    if (!item) return null;
    const price = formatPrice(item);
    return price.hasPrice ? price.text : null;
  };
  const [lead, ...others] = sweets;

  return (
    <section aria-labelledby="sweets-heading" className="border-y border-ink/10 bg-ivory-soft/60">
      <div className="mx-auto w-full max-w-6xl px-5 py-20 sm:px-8 sm:py-32">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <SectionHeading
            index="05"
            label="Sweets & Drinks"
            title={<span id="sweets-heading">甘いものと、一杯の楽しみ</span>}
          />
          <Reveal delay={0.1}>
            <p className="max-w-sm text-[0.84rem] leading-[2.1] text-espresso">
              店内で仕上げるオリジナルスイーツと、フードに合わせて楽しめるドリンク。おやつの時間にも、手土産にも。
            </p>
          </Reveal>
        </div>

        {/* スイーツ */}
        <div className="mt-12 grid gap-x-8 gap-y-10 sm:mt-16 lg:grid-cols-12">
          <Reveal className="lg:col-span-6">
            <Link href={`/menu#${lead.id}`} className="group block">
              <Placeholder
                src={lead.image}
                alt={lead.alt}
                aspect="aspect-[5/4]"
                sizes="(min-width: 1024px) 48vw, 100vw"
              />
              <p className="mt-5 font-serif-en text-[0.62rem] uppercase tracking-[0.3em] text-olive-deep">
                K-labo Original
              </p>
              <h3 className="mt-1.5 font-mincho text-2xl tracking-[0.08em] transition-colors group-hover:text-olive-deep">
                {nameOf(lead.id)}
              </h3>
              <p className="mt-2 text-[0.84rem] leading-[2] text-espresso">{lead.note}</p>
              {priceOf(lead.id) && (
                <p className="mt-1.5 font-mincho text-lg tracking-[0.04em]">{priceOf(lead.id)}</p>
              )}
            </Link>
          </Reveal>

          <ul className="grid grid-cols-2 gap-x-3 gap-y-8 sm:grid-cols-3 sm:gap-x-6 lg:col-span-6 lg:grid-cols-2">
            {others.map((item, index) => (
              <Reveal
                as="li"
                key={item.id}
                delay={0.08 + index * 0.08}
                className={index === 2 ? "col-span-2 sm:col-span-1 lg:col-span-2" : undefined}
              >
                <Link href={`/menu#${item.id}`} className="group block">
                  <Placeholder
                    src={item.image}
                    alt={item.alt}
                    aspect={index === 2 ? "aspect-[2/1] sm:aspect-square lg:aspect-[2/1]" : "aspect-square"}
                    sizes="(min-width: 1024px) 24vw, (min-width: 640px) 30vw, 50vw"
                  />
                  <h3 className="mt-3 font-mincho text-[0.95rem] leading-snug tracking-[0.06em] transition-colors group-hover:text-olive-deep sm:text-base">
                    {nameOf(item.id)}
                  </h3>
                  <p className="mt-1 text-[0.74rem] leading-[1.8] text-espresso">{item.note}</p>
                  {priceOf(item.id) && (
                    <p className="mt-1 text-[0.82rem] tracking-[0.04em] text-ink">{priceOf(item.id)}</p>
                  )}
                </Link>
              </Reveal>
            ))}
          </ul>
        </div>

        {comingSoon.length > 0 && (
          <Reveal delay={0.1} className="mt-12">
            <div className="flex flex-col gap-3 border border-gold-deep/50 bg-paper px-6 py-5 sm:flex-row sm:items-center sm:gap-8 sm:px-8">
              <p className="font-serif-en text-sm italic tracking-[0.12em] text-gold-text">
                Coming Soon
              </p>
              <p className="font-mincho text-base tracking-[0.08em] text-ink">
                {comingSoon.join("／")}
              </p>
              <p className="text-[0.74rem] text-olive-deep sm:ml-auto">
                近日登場予定。お知らせはInstagramで。
              </p>
            </div>
          </Reveal>
        )}

        {/* ドリンク */}
        <div className="mt-20 sm:mt-24">
          <Reveal className="flex items-baseline justify-between gap-6 border-b border-ink/12 pb-4">
            <h3 className="font-mincho text-xl tracking-[0.1em]">ドリンク</h3>
            <p className="font-serif-en text-[0.62rem] uppercase tracking-[0.3em] text-olive-deep">
              Lemonade &amp; Coffee
            </p>
          </Reveal>
          <ul className="mt-8 grid grid-cols-2 gap-x-3 gap-y-6 sm:grid-cols-4 sm:gap-x-5">
            {drinks.map((drink, index) => (
              <Reveal as="li" key={drink.id} delay={index * 0.08}>
                <Placeholder
                  src={drink.image}
                  alt={`K-laboの${nameOf(drink.id)}`}
                  aspect="aspect-[4/5]"
                  sizes="(min-width: 640px) 24vw, 50vw"
                />
                <p className="mt-3 text-[0.8rem] tracking-[0.06em] text-ink">{nameOf(drink.id)}</p>
                {priceOf(drink.id) && (
                  <p className="text-[0.76rem] tracking-[0.04em] text-espresso">{priceOf(drink.id)}</p>
                )}
              </Reveal>
            ))}
          </ul>
        </div>

        <Reveal delay={0.1} className="mt-12">
          <LinkButton href="/menu#category-sweets" variant="text">
            スイーツ・ドリンクのメニューを見る
          </LinkButton>
        </Reveal>
      </div>
    </section>
  );
}
