import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import Placeholder from "@/components/ui/Placeholder";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import LinkButton from "@/components/ui/LinkButton";
import ReserveBlock from "@/components/sections/shared/ReserveBlock";
import ItemShowcase from "@/components/sections/shared/ItemShowcase";
import FaqSection from "@/components/sections/shared/FaqSection";
import { getMenuItems } from "@/lib/menu";
import { formatPrice } from "@/data/menu";
import { siteConfig } from "@/data/siteConfig";

/**
 * 手土産・ギフト（特集ページ）
 * 狙う検索：「筑紫野 手土産」「二日市 手土産」「紫駅 手土産」「筑紫野 バターサンド」
 *           「福岡 バターサンド ギフト」など
 * 日持ち・配送・のしの可否は未確認のため書かない（電話・Instagramでの相談に誘導）。
 */

export const metadata: Metadata = {
  title: "手土産・ギフトに彩りバターサンド",
  description:
    "筑紫野市・紫駅東口すぐのK-laboの手土産。7つの素材の色と味にこだわった彩りバターサンドと、個包装を詰め合わせたギフトボックス。お取り置きはお電話・Instagramで。",
  alternates: { canonical: "/gift" },
  openGraph: {
    title: "手土産・ギフト｜彩りバターサンド｜K-labo｜筑紫野・紫駅すぐ",
    description:
      "手作りのバタークリームをひとつずつ絞った彩りバターサンド。個包装のギフトボックスは手土産やちょっとした贈りものに。筑紫野市・紫駅東口すぐのK-labo。",
    url: "/gift",
    images: [{ url: "/images/sweets/butter-sandwich-gift-box.jpg" }],
  },
};

const GIFT_ITEM_IDS = ["butter-sandwich-gift", "butter-sandwich", "stroopwafel"];

const points = [
  {
    title: "7つの素材の、色と味",
    text: "素材ごとの色と味にこだわった、彩り豊かなバターサンドクッキー。並べたときの華やかさも、贈りものにうれしいところです。",
  },
  {
    title: "ひとつずつ、手で絞る",
    text: "手作りのバタークリームを、ひとつずつ絞ってサンドしています。季節限定のフレーバーもご用意しています。",
  },
  {
    title: "個包装で、配りやすく",
    text: "ギフトボックスは個包装のバターサンドの詰め合わせ。職場へのお土産や、ちょっとしたお礼にも配りやすいかたちです。",
  },
];

export default async function GiftPage() {
  const all = await getMenuItems();
  const items = GIFT_ITEM_IDS.map((id) => all.find((item) => item.id === id)).filter(
    (item): item is NonNullable<typeof item> => Boolean(item),
  );
  const giftBox = items.find((item) => item.id === "butter-sandwich-gift");
  const single = items.find((item) => item.id === "butter-sandwich");
  const giftPrice = giftBox ? formatPrice(giftBox) : null;
  const singlePrice = single ? formatPrice(single) : null;

  const faqs = [
    {
      question: "ギフトボックスはいくらからですか？",
      answer: giftPrice?.hasPrice
        ? `彩りバターサンドのギフトボックスは${giftPrice.text}です。${singlePrice?.hasPrice ? `バラでのお買い求め（${singlePrice.text}）もできます。` : ""}`
        : "価格は店頭でご確認ください。",
    },
    {
      question: "取り置きや予約はできますか？",
      answer: `はい。お電話（${siteConfig.phone}）または公式Instagram（${siteConfig.instagram.handle}）のDMで承ります。受け取りたい日時と数量をお知らせください。`,
    },
    {
      question: "どんなフレーバーがありますか？",
      answer:
        "7つの素材の色と味にこだわったバターサンドをご用意しています。季節限定のフレーバーもあり、その時期のラインナップは店頭・公式Instagramでご案内しています。",
    },
    {
      question: "日持ちや、のし・配送には対応していますか？",
      answer: "贈る日や用途に合わせてご案内しますので、ご購入前にお電話またはInstagramのDMでお問い合わせください。",
    },
    {
      question: "お店はどこにありますか？",
      answer: `${siteConfig.address.full}。${siteConfig.access}、${siteConfig.accessJr}です。駐車場は${siteConfig.parking.location}に${siteConfig.parking.spaces}（${siteConfig.parking.fee}）ございます。`,
    },
  ];

  return (
    <>
      <PageHero
        label="Gift"
        title={
          <>
            手土産・ギフトに、
            <br />
            彩りバターサンド
          </>
        }
        titleEn="Butter Sandwich Gift Box"
        lede={
          <>
            手作りのバタークリームを、ひとつずつ絞って。
            <br />
            紫駅東口すぐのK-laboから、手土産やちょっとした贈りものを。
          </>
        }
        breadcrumbs={[{ name: "手土産・ギフト", path: "/gift" }]}
      />

      {/* 導入 */}
      <section aria-labelledby="gift-intro-heading" className="mx-auto w-full max-w-6xl px-5 py-20 sm:px-8 sm:py-28">
        <div className="grid gap-12 md:grid-cols-12 md:items-center">
          <Reveal className="md:col-span-6">
            <Placeholder
              src="/images/sweets/butter-sandwich-gift-box.jpg"
              alt="個包装の彩りバターサンドを詰め合わせたK-laboのギフトボックス"
              aspect="aspect-[4/3]"
              sizes="(min-width: 768px) 46vw, 100vw"
              priority
            />
          </Reveal>
          <div className="flex flex-col gap-6 md:col-span-5 md:col-start-8">
            <SectionHeading
              label="Butter Sandwich"
              title={<span id="gift-intro-heading">ひと箱に、7つの彩り。</span>}
            />
            <Reveal delay={0.1} className="flex flex-col gap-4 text-sm leading-[2.2] text-espresso">
              <p>
                K-laboの彩りバターサンドは、7つの素材の色と味にこだわったオリジナルのバターサンドクッキー。
                個包装を詰め合わせたギフトボックスは、手土産やちょっとした贈りものにお選びいただけます。
              </p>
              {giftPrice?.hasPrice && (
                <p className="border-l-2 border-gold pl-5 font-mincho text-base text-ink">
                  ギフトボックス　{giftPrice.text}
                  {singlePrice?.hasPrice && (
                    <>
                      <br />
                      バラ　{singlePrice.text}
                    </>
                  )}
                </p>
              )}
            </Reveal>
          </div>
        </div>
      </section>

      {/* こだわり */}
      <section aria-labelledby="gift-points-heading" className="border-y border-ink/10 bg-paper">
        <div className="mx-auto grid w-full max-w-6xl gap-12 px-5 py-20 sm:px-8 sm:py-28 md:grid-cols-12">
          <div className="md:col-span-7">
            <SectionHeading label="Handmade" title={<span id="gift-points-heading">贈りものにおすすめの理由</span>} />
            <ul className="mt-12 flex flex-col gap-10">
              {points.map((point, index) => (
                <Reveal as="li" key={point.title} delay={index * 0.1}>
                  <h3 className="font-mincho text-lg tracking-[0.08em]">{point.title}</h3>
                  <p className="mt-3 text-[0.82rem] leading-[2.1] text-espresso">{point.text}</p>
                </Reveal>
              ))}
            </ul>
          </div>
          <Reveal delay={0.15} className="md:col-span-4 md:col-start-9">
            <Placeholder
              src="/images/story/staff-piping-butter-sandwich.jpg"
              alt="バタークリームをひとつずつ絞ってバターサンドを仕上げる様子"
              aspect="aspect-[3/4]"
              sizes="(min-width: 768px) 30vw, 100vw"
            />
          </Reveal>
        </div>
      </section>

      <ItemShowcase
        id="gift-items-heading"
        label="Lineup"
        title="手土産にえらべるスイーツ"
        items={items}
        note="季節限定のフレーバーや当日の在庫は、店頭・公式Instagramでご案内しています。確実にお求めになりたい場合はお取り置きをご利用ください。"
      />

      <section aria-labelledby="gift-reserve-heading" className="border-t border-ink/10 bg-paper">
        <div className="mx-auto grid w-full max-w-6xl gap-10 px-5 py-20 sm:px-8 sm:py-24 md:grid-cols-12">
          <div className="md:col-span-5">
            <SectionHeading label="Reserve" title={<span id="gift-reserve-heading">お取り置き</span>} />
            <p className="mt-6 text-[0.82rem] leading-[2.1] text-espresso">
              数がまとまるときや、受け取る日が決まっているときは、お電話・InstagramのDMでのお取り置きが安心です。
            </p>
          </div>
          <Reveal delay={0.1} className="md:col-span-6 md:col-start-7">
            <ReserveBlock />
          </Reveal>
        </div>
      </section>

      <FaqSection
        id="gift-faq-heading"
        title="手土産・ギフトのよくあるご質問"
        faqs={faqs}
        footer={
          <>
            <LinkButton href="/menu#category-sweets">スイーツのメニューを見る</LinkButton>
            <LinkButton href="/access">店舗情報・アクセス</LinkButton>
          </>
        }
      />
    </>
  );
}
