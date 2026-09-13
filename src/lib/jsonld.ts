import { siteConfig } from "@/data/siteConfig";
import { menuCategories, menuItems, type MenuItem } from "@/data/menu";

/**
 * 構造化データ（JSON-LD）ビルダー
 *
 * 注意: 未確認情報（電話番号・営業時間・価格帯・評価など）は絶対に含めない。
 * telephone / openingHours / priceRange / aggregateRating / review は
 * 正確な情報が確認でき次第、siteConfig 経由で追加すること。
 */

const BASE = siteConfig.url;

function postalAddress() {
  return {
    "@type": "PostalAddress",
    streetAddress: siteConfig.address.street,
    addressLocality: siteConfig.address.locality,
    addressRegion: siteConfig.address.region,
    addressCountry: "JP",
    ...(siteConfig.address.postalCode
      ? { postalCode: siteConfig.address.postalCode }
      : {}),
  };
}

/** WebSite */
export function websiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: `${siteConfig.name}（${siteConfig.nameJa}）`,
    alternateName: siteConfig.nameEn,
    url: BASE,
    inLanguage: "ja",
  };
}

/** CafeOrCoffeeShop（店舗情報） */
export function cafeJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "CafeOrCoffeeShop",
    "@id": `${BASE}/#shop`,
    name: siteConfig.name,
    alternateName: [siteConfig.nameJa, siteConfig.nameEn],
    slogan: siteConfig.brandTagline,
    description:
      "福岡県筑紫野市紫・紫駅東口から徒歩約0分のカフェ＆テイクアウトショップ。家族で暮らしたバンコクでの9年間を原点に、バインミーやガパオライスなどのアジア料理、黒毛和牛ローストビーフや西京焼きなどのお肉・お魚料理、彩りバターサンドなどのオリジナルスイーツを提供しています。",
    url: BASE,
    image: `${BASE}/images/hero/table-set.jpg`,
    logo: `${BASE}/images/brand/k-labo-logo-original.jpg`,
    address: postalAddress(),
    servesCuisine: siteConfig.servesCuisine,
    areaServed: siteConfig.areaServed.map((name) => ({
      "@type": "City",
      name,
    })),
    hasMenu: `${BASE}/menu`,
    ...(siteConfig.parking.spaces
      ? {
          amenityFeature: [
            {
              "@type": "LocationFeatureSpecification",
              name: `駐車場（${siteConfig.parking.location}・${siteConfig.parking.spaces}・${siteConfig.parking.fee}）`,
              value: true,
            },
          ],
        }
      : {}),
    sameAs: [siteConfig.instagram.url],
    ...(siteConfig.phone ? { telephone: siteConfig.phone } : {}),
    ...(siteConfig.hours.length
      ? {
          openingHoursSpecification: siteConfig.hours.map((block) => ({
            "@type": "OpeningHoursSpecification",
            dayOfWeek: block.days,
            opens: block.opens,
            closes: block.closes,
          })),
        }
      : {}),
  };
}

/** パンくずリスト */
export function breadcrumbJsonLd(
  items: Array<{ name: string; path: string }>,
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${BASE}${item.path}`,
    })),
  };
}

/** メニュー（確認済みの内容のみ。価格は入力済みの商品にだけ付与する） */
export function menuJsonLd(items: MenuItem[] = menuItems) {
  return {
    "@context": "https://schema.org",
    "@type": "Menu",
    "@id": `${BASE}/menu#menu`,
    name: "K-labo メニュー",
    inLanguage: "ja",
    hasMenuSection: menuCategories.map((category) => ({
      "@type": "MenuSection",
      name: category.name,
      description: category.description,
      hasMenuItem: items
        .filter((item) => item.category === category.id && item.isAvailable)
        .map((item) => ({
          "@type": "MenuItem",
          name: item.name,
          description: item.description,
          ...(item.image ? { image: `${BASE}${item.image}` } : {}),
          ...(item.price !== null && !item.priceNote
            ? {
                offers: {
                  "@type": "Offer",
                  price: item.price,
                  priceCurrency: "JPY",
                },
              }
            : {}),
        })),
    })),
  };
}

/** FAQ（画面に表示しているFAQと同一内容のみ渡すこと） */
export function faqJsonLd(faqs: Array<{ question: string; answer: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}
