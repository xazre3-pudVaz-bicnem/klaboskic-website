import type { Metadata, Viewport } from "next";
import { EB_Garamond, Shippori_Mincho, Zen_Kaku_Gothic_New } from "next/font/google";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import MobileActionBar from "@/components/layout/MobileActionBar";
import JsonLd from "@/components/ui/JsonLd";
import { cafeJsonLd, websiteJsonLd } from "@/lib/jsonld";
import { siteConfig } from "@/data/siteConfig";
import "./globals.css";

const shippori = Shippori_Mincho({
  weight: ["500", "600"],
  subsets: ["latin"],
  variable: "--font-shippori",
  display: "swap",
  preload: false,
});

const zenKaku = Zen_Kaku_Gothic_New({
  weight: ["400", "500"],
  subsets: ["latin"],
  variable: "--font-zen-kaku",
  display: "swap",
  preload: false,
});

const garamond = EB_Garamond({
  weight: ["400", "500"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  variable: "--font-garamond",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: "K-labo｜筑紫野のカフェ・テイクアウト｜紫駅すぐ",
    template: "%s｜K-labo｜筑紫野のカフェ・テイクアウト",
  },
  description:
    "筑紫野市・紫駅東口から徒歩約0分のK-labo。バンコクで暮らした9年間を原点に、バインミーやガパオ、黒毛和牛ローストビーフ、西京焼き、彩りバターサンドなどを楽しめるカフェ＆テイクアウトショップです。",
  keywords: [
    "筑紫野 カフェ",
    "筑紫野 テイクアウト",
    "紫駅 カフェ",
    "筑紫野 バインミー",
    "筑紫野 ローストビーフ",
    "筑紫野 スイーツ",
    "紫駅 テイクアウト",
  ],
  openGraph: {
    title: "K-labo｜筑紫野のカフェ・テイクアウト｜紫駅すぐ",
    description:
      "アジアで出会ったおいしさを、日常の一皿へ。バインミー、ガパオ、黒毛和牛ローストビーフ、彩りバターサンドまで。筑紫野市・紫駅東口すぐのカフェ＆テイクアウト。",
    url: "/",
    siteName: "K-labo（ケイラボ）",
    locale: "ja_JP",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
  },
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
  },
  formatDetection: {
    telephone: false,
  },
};

export const viewport: Viewport = {
  themeColor: "#181515",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="ja"
      className={`${shippori.variable} ${zenKaku.variable} ${garamond.variable}`}
    >
      {/* JSが動く環境でだけ <html> に .js を付ける。スクロール表示の
          アニメーション（.reveal）はこのクラス配下でのみ要素を隠すため、
          JSが無効・失敗しても本文が見えなくなることがない。
          パース中に同期実行されるので、描画前にクラスが付く。 */}
      <script
        dangerouslySetInnerHTML={{
          __html: "document.documentElement.classList.add('js')",
        }}
      />
      <body className="bg-ivory font-gothic text-ink antialiased">
        <JsonLd data={websiteJsonLd()} />
        <JsonLd data={cafeJsonLd()} />
        {/* focus:absolute だと位置決めの基準が文書の先頭になり、
            スクロール中にフォーカスすると画面外へ出てしまう。fixed で固定する。 */}
        <a
          href="#main"
          className="sr-only [--focus-ring:var(--color-gold)] focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:bg-ink focus:px-5 focus:py-3 focus:text-sm focus:text-ivory"
        >
          本文へスキップ
        </a>
        <Header />
        <main id="main">{children}</main>
        <Footer />
        <MobileActionBar />
      </body>
    </html>
  );
}
