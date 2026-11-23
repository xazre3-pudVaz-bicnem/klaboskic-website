import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import Placeholder from "@/components/ui/Placeholder";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import LinkButton from "@/components/ui/LinkButton";
import QuickActions from "@/components/sections/shared/QuickActions";
import ItemShowcase from "@/components/sections/shared/ItemShowcase";
import FaqSection from "@/components/sections/shared/FaqSection";
import { getMenuItems } from "@/lib/menu";
import { formatPrice } from "@/data/menu";
import { siteConfig } from "@/data/siteConfig";

/**
 * バインミー・アジアンごはん（特集ページ）
 * 狙う検索：「筑紫野 バインミー」「二日市 バインミー」「太宰府 バインミー」「筑紫野 ガパオライス」
 *           「筑紫野 タイ料理」「紫駅 ランチ」など
 */

export const metadata: Metadata = {
  title: "バインミー・ガパオライス｜アジアンごはんとランチ",
  description:
    "筑紫野市・紫駅東口すぐのK-labo。バンコクで暮らした9年間を原点にしたバインミーやガパオライス、ヤムウンセン、グリーンカレー。デザートとドリンクが付くランチセットも。テイクアウト・Uber Eatsにも対応。",
  alternates: { canonical: "/asian" },
  openGraph: {
    title: "バインミー・ガパオライス｜K-labo｜筑紫野・紫駅すぐ",
    description:
      "バンコクで過ごした9年間から生まれた、バインミーやガパオライス。筑紫野市・紫駅東口すぐのK-laboのアジアンごはんとランチセット。",
    url: "/asian",
    images: [{ url: "/images/food/banh-mi-shrimp-avocado.jpg" }],
  },
};

const ASIAN_ITEM_IDS = [
  "banhmi-shrimp-avocado",
  "banhmi-chicken-avocado",
  "banhmi-tuna-avocado",
  "gapao-rice",
  "yam-woon-sen",
  "green-curry",
];

export default async function AsianPage() {
  const all = await getMenuItems();
  const items = ASIAN_ITEM_IDS.map((id) => all.find((item) => item.id === id)).filter(
    (item): item is NonNullable<typeof item> => Boolean(item),
  );
  const banhmi = all.find((item) => item.id === "banhmi-shrimp-avocado");
  const gapao = all.find((item) => item.id === "gapao-rice");
  const lunch = all.find((item) => item.id === "lunch-set");
  const banhmiPrice = banhmi ? formatPrice(banhmi) : null;
  const gapaoPrice = gapao ? formatPrice(gapao) : null;
  const lunchPrice = lunch ? formatPrice(lunch) : null;

  const faqs = [
    {
      question: "バインミーはいくらですか？",
      answer: banhmiPrice?.hasPrice
        ? `バインミーは${banhmiPrice.text}です。海老アボカド・ローストチキンとアボカド・ツナアボカドなどをご用意しています。具材は仕入れにより変わることがあり、当日の種類は店頭・公式Instagramでご案内しています。`
        : "価格は店頭でご確認ください。具材は仕入れにより変わることがあり、当日の種類は店頭・公式Instagramでご案内しています。",
    },
    {
      question: "ランチセットはありますか？",
      answer: lunchPrice?.hasPrice
        ? `はい。メインの一皿にサラダ、デザートとドリンクを添えたランチセットを${lunchPrice.text}でご用意しています。メインの内容は店頭・公式Instagramでご案内しています。`
        : "はい。メインの一皿にサラダ、デザートとドリンクを添えたランチセットをご用意しています。",
    },
    {
      question: "テイクアウトやデリバリーはできますか？",
      answer: `はい。メニューはすべてテイクアウトいただけます。${siteConfig.uberEats.name}・${siteConfig.rocketNow.name}のデリバリーにも対応しています。`,
    },
    {
      question: "辛さはどのくらいですか？",
      answer:
        "ガパオライスやヤムウンセン、グリーンカレーは、香りと心地よい辛さが特徴のタイの料理です。辛さが気になる方は、ご注文の際にスタッフへお尋ねください。",
    },
    {
      question: "店内で食べられますか？",
      answer: `カウンター席をご用意しています。営業時間は${siteConfig.hoursSummary}です。臨時休業などは公式Instagramの営業日カレンダーをご確認ください。`,
    },
  ];

  return (
    <>
      <PageHero
        label="Asian Food"
        title={
          <>
            バインミーと、
            <br />
            ガパオライス
          </>
        }
        titleEn="Banh Mi / Gapao Rice / Yam Woon Sen / Green Curry"
        lede={
          <>
            家族で過ごしたバンコクでの9年間。
            <br />
            その日常の中にあった東南アジアの味を、紫駅東口すぐのK-laboで。
          </>
        }
        breadcrumbs={[{ name: "バインミー・アジアンごはん", path: "/asian" }]}
      />

      {/* 導入 */}
      <section aria-labelledby="asian-intro-heading" className="mx-auto w-full max-w-6xl px-5 py-20 sm:px-8 sm:py-28">
        <div className="grid gap-12 md:grid-cols-12 md:items-center">
          <Reveal className="md:col-span-6">
            <Placeholder
              src="/images/food/banh-mi-shrimp-plate.jpg"
              alt="海老とアボカドをはさんだK-laboのバインミー"
              aspect="aspect-[4/3]"
              sizes="(min-width: 768px) 46vw, 100vw"
              priority
            />
          </Reveal>
          <div className="flex flex-col gap-6 md:col-span-5 md:col-start-8">
            <SectionHeading
              label="Rooted in Bangkok"
              title={<span id="asian-intro-heading">K-laboの、はじまりの味。</span>}
            />
            <Reveal delay={0.1} className="flex flex-col gap-4 text-sm leading-[2.2] text-espresso">
              <p>
                甘さ、辛さ、酸味、そして立ちのぼる香り。バンコクの街角や市場、食卓であたりまえに出会っていた料理を、今の暮らしになじむ形で一つひとつ仕上げています。
              </p>
              <p>
                ベトナムのサンドイッチ「バインミー」は、海老やローストチキン、ツナにアボカドを合わせて。
                タイの定番「ガパオライス」は、とろりとした目玉焼きをくずしながらどうぞ。
              </p>
              {(banhmiPrice?.hasPrice || gapaoPrice?.hasPrice) && (
                <p className="border-l-2 border-gold pl-5 font-mincho text-base text-ink">
                  {banhmiPrice?.hasPrice && <>バインミー　{banhmiPrice.text}</>}
                  {banhmiPrice?.hasPrice && gapaoPrice?.hasPrice && <br />}
                  {gapaoPrice?.hasPrice && <>ガパオライス　{gapaoPrice.text}</>}
                </p>
              )}
            </Reveal>
            <Reveal delay={0.15}>
              <LinkButton href="/story" variant="text">
                K-laboの軌跡を読む
              </LinkButton>
            </Reveal>
          </div>
        </div>
      </section>

      <ItemShowcase
        id="asian-items-heading"
        label="Menu"
        title="アジアンフードのメニュー"
        items={items}
        note="バインミーの具材は仕入れにより変わることがあります。当日の種類は店頭・公式Instagramでご案内しています。"
      />

      {/* ランチ・テイクアウト */}
      <section aria-labelledby="asian-lunch-heading" className="border-y border-ink/10 bg-paper">
        <div className="mx-auto grid w-full max-w-6xl gap-12 px-5 py-20 sm:px-8 sm:py-28 md:grid-cols-12 md:items-center">
          <Reveal className="md:col-span-5">
            <Placeholder
              src="/images/food/lunch-set-gapao.jpg"
              alt="ガパオライスにサラダ、デザート、ドリンクを添えたK-laboのランチセット"
              aspect="aspect-[4/3]"
              sizes="(min-width: 768px) 40vw, 100vw"
            />
          </Reveal>
          <div className="flex flex-col gap-6 md:col-span-6 md:col-start-7">
            <SectionHeading
              label="Lunch & Takeout"
              title={<span id="asian-lunch-heading">ランチにも、持ち帰りにも</span>}
            />
            <p className="text-sm leading-[2.2] text-espresso">
              メインの一皿にサラダ、デザートとドリンクが付くランチセット
              {lunchPrice?.hasPrice ? `（${lunchPrice.text}）` : ""}
              は、カウンター席でゆっくりと。お仕事の合間や電車に乗る前には、テイクアウトやデリバリーもご利用いただけます。
            </p>
            <QuickActions actions={["uberEats", "rocketNow"]} cols="grid-cols-1 sm:grid-cols-2" />
          </div>
        </div>
      </section>

      <FaqSection
        id="asian-faq-heading"
        title="バインミー・アジアンごはんのよくあるご質問"
        faqs={faqs}
        footer={
          <>
            <LinkButton href="/menu">メニューと価格を見る</LinkButton>
            <LinkButton href="/takeout">テイクアウトのご案内</LinkButton>
          </>
        }
      />
    </>
  );
}
