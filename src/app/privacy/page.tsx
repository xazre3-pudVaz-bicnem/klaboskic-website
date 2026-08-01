import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import Reveal from "@/components/ui/Reveal";
import { siteConfig } from "@/data/siteConfig";

export const metadata: Metadata = {
  title: "プライバシーポリシー",
  description:
    "K-labo（福岡県筑紫野市）公式サイトのプライバシーポリシーです。当サイトにおける情報の取り扱いについてご案内します。",
  alternates: { canonical: "/privacy" },
  robots: { index: true, follow: true },
  openGraph: {
    title: "プライバシーポリシー｜K-labo",
    description: "K-labo公式サイトにおける情報の取り扱いについて。",
    url: "/privacy",
    images: [{ url: "/opengraph-image", width: 1200, height: 630 }],
  },
};

const sections = [
  {
    title: "基本方針",
    body: [
      "K-labo（以下「当店」）は、当店公式サイト（以下「当サイト」）をご利用いただく皆さまの個人情報を尊重し、適切に取り扱うことをお約束します。",
    ],
  },
  {
    title: "個人情報の取得について",
    body: [
      "当サイトには、現在お問い合わせフォーム等の個人情報を入力いただく仕組みはありません。当サイトの閲覧にあたって、氏名・住所・電話番号などの個人情報をご登録いただく必要はありません。",
    ],
  },
  {
    title: "アクセス解析・Cookieについて",
    body: [
      "当サイトは現在、アクセス解析ツールを使用していません。今後、サイト改善のためにアクセス解析ツール（Google Analytics等）を導入する場合は、本ポリシーを更新のうえ、その旨を本ページでお知らせします。",
    ],
  },
  {
    title: "外部サービス・外部リンクについて",
    body: [
      "当サイトには、Instagram、Googleマップ、Uber Eats等の外部サービスへのリンクおよび埋め込みコンテンツが含まれます。これらの外部サービスの利用により取得される情報の取り扱いについては、各サービス提供者のプライバシーポリシーをご確認ください。",
      "リンク先の外部サイトにおける情報の取り扱いについて、当店は責任を負いかねます。",
    ],
  },
  {
    title: "掲載情報について",
    body: [
      "当サイトの掲載内容には細心の注意を払っていますが、営業日・メニュー・価格等は変更となる場合があります。最新の情報は公式Instagramにてご確認ください。掲載情報により生じたいかなる損害についても、当店は責任を負いかねますのでご了承ください。",
    ],
  },
  {
    title: "本ポリシーの改定",
    body: [
      "本ポリシーの内容は、必要に応じて予告なく変更されることがあります。変更後の内容は、当ページに掲載した時点から効力を生じるものとします。",
    ],
  },
];

export default function PrivacyPage() {
  return (
    <>
      <PageHero
        label="Privacy Policy"
        title="プライバシーポリシー"
        lede={
          <>
            {siteConfig.name}
            公式サイトにおける情報の取り扱いについてご案内します。
          </>
        }
        breadcrumbs={[{ name: "プライバシーポリシー", path: "/privacy" }]}
      />

      <div className="mx-auto w-full max-w-3xl px-5 py-20 sm:px-8 sm:py-28">
        <div className="flex flex-col gap-14">
          {sections.map((section, index) => (
            <Reveal as="section" key={section.title} delay={index * 0.04}>
              <h2 className="flex items-baseline gap-4 font-mincho text-lg tracking-[0.1em] sm:text-xl">
                <span
                  aria-hidden="true"
                  className="font-serif-en text-sm italic text-gold-deep"
                >
                  0{index + 1}
                </span>
                {section.title}
              </h2>
              <div className="mt-5 flex flex-col gap-4 border-l border-ink/15 pl-6 text-[0.82rem] leading-[2.3] text-espresso">
                {section.body.map((paragraph) => (
                  <p key={paragraph.slice(0, 12)}>{paragraph}</p>
                ))}
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.1} className="mt-16 border-t border-ink/12 pt-8">
          <p className="text-[0.78rem] leading-[2.1] text-olive-deep">
            制定日：2026年8月1日
            <br />
            {siteConfig.name}（{siteConfig.address.full}）
          </p>
        </Reveal>
      </div>
    </>
  );
}
