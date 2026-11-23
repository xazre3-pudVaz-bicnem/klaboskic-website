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
 * オードブル・お弁当のご予約（特集ページ）
 * 狙う検索：「筑紫野 オードブル」「二日市 オードブル」「クリスマス オードブル 筑紫野」
 *           「筑紫野 弁当 注文」「スポーツ弁当 筑紫野」など
 * 予約の締切・人数別の内容は未確認のため書かない（電話・Instagramでの相談に誘導）。
 */

export const metadata: Metadata = {
  title: "オードブル・お弁当のご予約",
  description:
    "筑紫野市・紫駅東口すぐのK-laboのオードブルとお弁当。ローストビーフやハンバーグ、サラダを盛り込んだオードブルは、ご予算のご相談も承ります。クリスマスや年末年始、歓送迎会などの集まりに。スポーツ弁当など団体のご注文も、お電話・Instagramでご相談ください。",
  alternates: { canonical: "/order" },
  openGraph: {
    title: "オードブル・お弁当のご予約｜K-labo｜筑紫野・紫駅すぐ",
    description:
      "ローストビーフやハンバーグを盛り込んだオードブル、K-labo特製弁当、スポーツ弁当。集まりやお祝いの席に。筑紫野市・紫駅東口すぐのK-labo。",
    url: "/order",
    images: [{ url: "/images/delica/party-platter.jpg" }],
  },
};

const ORDER_ITEM_IDS = ["party-platter", "bento", "sports-bento"];

const scenes = [
  {
    title: "クリスマス・年末年始の集まりに",
    text: "家族や親戚が集まる日に、テーブルの真ん中に置ける一皿を。ローストビーフやハンバーグ、サラダを盛り込んだオードブルです。",
  },
  {
    title: "歓送迎会・お花見・職場の集まりに",
    text: "紫駅の目の前で受け取れるので、電車での持ち帰りにも便利です。ご予算のご相談もお気軽にどうぞ。",
  },
  {
    title: "試合・大会・遠征の日に",
    text: "食べやすさとボリュームを考えたスポーツ弁当。チームや団体でのまとまったご注文も承ります。",
  },
];

const steps = [
  {
    number: "01",
    title: "お電話・Instagramでご相談",
    text: "受け取りたい日時・品物・数量、ご予算をお知らせください。内容はご相談しながら決めていきます。",
  },
  {
    number: "02",
    title: "内容と受け取り日時を確定",
    text: "オードブルの内容や数量、お受け取りの時間を確認してご予約完了です。",
  },
  {
    number: "03",
    title: "紫駅東口すぐの店舗で受け取り",
    text: `${siteConfig.access}。${siteConfig.accessJrShort}。駐車場もございます。`,
  },
];

export default async function OrderPage() {
  const all = await getMenuItems();
  const items = ORDER_ITEM_IDS.map((id) => all.find((item) => item.id === id)).filter(
    (item): item is NonNullable<typeof item> => Boolean(item),
  );
  const platter = items.find((item) => item.id === "party-platter");
  const platterPrice = platter ? formatPrice(platter) : null;

  const faqs = [
    {
      question: "オードブルはいくらからですか？",
      answer: platterPrice?.hasPrice
        ? `オードブル盛り合わせは${platterPrice.text}です。ご予算に合わせたご相談も承りますので、お電話または公式InstagramのDMでお気軽にお問い合わせください。`
        : "ご予算に合わせてご相談を承ります。お電話または公式InstagramのDMでお問い合わせください。",
    },
    {
      question: "オードブルやお弁当はどうやって予約しますか？",
      answer: `お電話（${siteConfig.phone}）または公式Instagram（${siteConfig.instagram.handle}）のDMで承ります。受け取りたい日時・品物・数量をお知らせください。`,
    },
    {
      question: "いつまでに予約すればいいですか？",
      answer:
        "ご注文の内容や数量によって準備にかかる時間が変わります。受け取りの日が決まったら、できるだけお早めにご相談ください。",
    },
    {
      question: "クリスマスや年末年始にも頼めますか？",
      answer:
        "オードブルはクリスマスパーティーなどの集まりにもご利用いただけます。年末年始の営業日は、公式Instagramの営業日カレンダーでご確認のうえ、お早めにご相談ください。",
    },
    {
      question: "スポーツ弁当は団体で注文できますか？",
      answer: "はい。チームや団体でのご注文も承ります。お電話またはInstagramのDMでご相談ください。",
    },
    {
      question: "受け取り場所と駐車場は？",
      answer: `${siteConfig.address.full}の店舗でお渡しします。${siteConfig.access}、${siteConfig.accessJr}です。駐車場は${siteConfig.parking.location}に${siteConfig.parking.spaces}（${siteConfig.parking.fee}）ございます。`,
    },
  ];

  return (
    <>
      <PageHero
        label="Party Platter & Bento"
        title={
          <>
            オードブル・お弁当の
            <br />
            ご予約
          </>
        }
        titleEn="Party Platter / Bento / Sports Bento"
        lede={
          <>
            集まりの席に映えるオードブルと、K-labo特製のお弁当。
            <br />
            筑紫野市・紫駅東口すぐの店舗でお受け取りいただけます。
            <br />
            ご予算や数量のご相談もお気軽にどうぞ。
          </>
        }
        breadcrumbs={[{ name: "オードブル・お弁当のご予約", path: "/order" }]}
      />

      {/* 導入 */}
      <section aria-labelledby="order-intro-heading" className="mx-auto w-full max-w-6xl px-5 py-20 sm:px-8 sm:py-28">
        <div className="grid gap-12 md:grid-cols-12 md:items-center">
          <Reveal className="md:col-span-6">
            <Placeholder
              src="/images/delica/party-platter.jpg"
              alt="ローストビーフやハンバーグ、サラダを盛り込んだK-laboのオードブル"
              aspect="aspect-[4/3]"
              sizes="(min-width: 768px) 46vw, 100vw"
              priority
            />
          </Reveal>
          <div className="flex flex-col gap-6 md:col-span-5 md:col-start-8">
            <SectionHeading
              label="Party Platter"
              title={<span id="order-intro-heading">集まりの日の、真ん中に。</span>}
            />
            <Reveal delay={0.1} className="flex flex-col gap-4 text-sm leading-[2.2] text-espresso">
              <p>
                ローストビーフやハンバーグ、サラダなどを一皿に盛り込んだK-laboのオードブル。
                ふだんの一皿と同じように、ひとつひとつ手をかけて仕上げています。
              </p>
              {platterPrice?.hasPrice && (
                <p className="border-l-2 border-gold pl-5 font-mincho text-base text-ink">
                  オードブル盛り合わせ　{platterPrice.text}
                </p>
              )}
            </Reveal>
          </div>
        </div>
      </section>

      {/* 利用シーン */}
      <section aria-labelledby="order-scenes-heading" className="border-y border-ink/10 bg-paper">
        <div className="mx-auto w-full max-w-6xl px-5 py-20 sm:px-8 sm:py-28">
          <SectionHeading label="Scenes" title={<span id="order-scenes-heading">こんな日に</span>} />
          <ul className="mt-12 grid gap-10 md:grid-cols-3 md:gap-8">
            {scenes.map((scene, index) => (
              <Reveal as="li" key={scene.title} delay={index * 0.1}>
                <h3 className="font-mincho text-lg tracking-[0.08em]">{scene.title}</h3>
                <p className="mt-3 text-[0.82rem] leading-[2.1] text-espresso">{scene.text}</p>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      <ItemShowcase
        id="order-items-heading"
        label="Lineup"
        title="オードブル・お弁当のラインナップ"
        items={items}
        note="お弁当の内容と価格は、日替わり・仕入れにより変わります。当日の内容は店頭・公式Instagramでご案内しています。"
      />

      {/* ご予約の流れ */}
      <section aria-labelledby="order-flow-heading" className="border-y border-ink/10 bg-paper">
        <div className="mx-auto grid w-full max-w-6xl gap-14 px-5 py-20 sm:px-8 sm:py-28 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <SectionHeading label="How To Order" title={<span id="order-flow-heading">ご予約の流れ</span>} />
            <ol className="mt-12 flex flex-col gap-10">
              {steps.map((step, index) => (
                <Reveal as="li" key={step.number} delay={index * 0.1} className="flex gap-6">
                  <span className="font-serif-en text-3xl italic tracking-[0.06em] text-gold-text">{step.number}</span>
                  <div className="flex flex-col gap-2">
                    <h3 className="font-mincho text-lg tracking-[0.08em]">{step.title}</h3>
                    <p className="text-[0.82rem] leading-[2.1] text-espresso">{step.text}</p>
                  </div>
                </Reveal>
              ))}
            </ol>
          </div>
          <Reveal delay={0.15} className="lg:col-span-5 lg:pt-20">
            <ReserveBlock />
          </Reveal>
        </div>
      </section>

      <FaqSection
        id="order-faq-heading"
        title="オードブル・お弁当のよくあるご質問"
        faqs={faqs}
        footer={
          <>
            <LinkButton href="/menu#category-delica">メニューで見る</LinkButton>
            <LinkButton href="/access">店舗情報・アクセス</LinkButton>
          </>
        }
      />
    </>
  );
}
