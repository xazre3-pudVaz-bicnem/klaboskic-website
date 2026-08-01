import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import Reveal from "@/components/ui/Reveal";
import LinkButton from "@/components/ui/LinkButton";
import { formatNewsDate, newsItems } from "@/data/news";
import { siteConfig } from "@/data/siteConfig";

export const metadata: Metadata = {
  title: "お知らせ",
  description:
    "筑紫野市・紫駅すぐのテイクアウト＆カフェ K-laboからのお知らせ一覧。日々の営業日・当日メニューなどの最新情報は公式Instagramでご案内しています。",
  alternates: { canonical: "/news" },
  openGraph: {
    title: "お知らせ｜K-labo｜筑紫野のカフェ・テイクアウト",
    description:
      "K-laboからのお知らせ一覧。日々の最新情報は公式Instagramでご案内しています。",
    url: "/news",
    images: [{ url: "/opengraph-image", width: 1200, height: 630 }],
  },
};

export default function NewsPage() {
  return (
    <>
      <PageHero
        label="News"
        title="お知らせ"
        titleEn="Information"
        lede={
          <>
            K-laboからのお知らせをご案内します。営業日や当日のメニューなど、日々の最新情報は公式Instagramをご覧ください。
          </>
        }
        breadcrumbs={[{ name: "お知らせ", path: "/news" }]}
      />

      <div className="mx-auto w-full max-w-4xl px-5 py-20 sm:px-8 sm:py-28">
        <ul className="flex flex-col gap-14">
          {newsItems.map((item, index) => (
            <Reveal as="li" key={item.date + item.title} delay={index * 0.08}>
              <article
                aria-labelledby={`news-${index}`}
                className="border-b border-ink/12 pb-14"
              >
                <div className="flex items-center gap-5">
                  <time
                    dateTime={item.date}
                    className="font-serif-en text-sm tracking-[0.16em] text-olive-deep"
                  >
                    {formatNewsDate(item.date)}
                  </time>
                  <span className="border border-olive-deep/40 px-3 py-0.5 text-[0.62rem] tracking-[0.16em] text-olive-deep">
                    {item.category}
                  </span>
                </div>
                <h2
                  id={`news-${index}`}
                  className="mt-5 font-mincho text-xl leading-[1.7] tracking-[0.08em] sm:text-2xl"
                >
                  {item.title}
                </h2>
                <div className="mt-6 flex flex-col gap-4 text-[0.85rem] leading-[2.3] text-espresso">
                  {item.body.map((paragraph) => (
                    <p key={paragraph.slice(0, 12)}>{paragraph}</p>
                  ))}
                </div>
              </article>
            </Reveal>
          ))}
        </ul>

        <Reveal delay={0.15} className="mt-16 flex flex-col items-center gap-6 text-center">
          <p className="text-[0.8rem] leading-[2.1] text-olive-deep">
            日々の営業情報・新商品のご案内は、公式Instagramでいちはやくお届けしています。
          </p>
          <LinkButton href={siteConfig.instagram.url} external>
            Instagramで最新情報を見る
          </LinkButton>
        </Reveal>
      </div>
    </>
  );
}
