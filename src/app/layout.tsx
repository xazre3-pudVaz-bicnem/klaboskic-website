import type { Metadata, Viewport } from "next";
import { EB_Garamond, Shippori_Mincho, Zen_Kaku_Gothic_New } from "next/font/google";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
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
    "福岡県筑紫野市紫、紫駅すぐのK-labo。家族で過ごしたバンコクでの9年間を原点に、バインミーをはじめとした東南アジア料理、スイーツ、ドリンクを楽しめるテイクアウト＆カフェです。",
  keywords: [
    "筑紫野 カフェ",
    "筑紫野 テイクアウト",
    "紫駅 カフェ",
    "筑紫野 バインミー",
    "筑紫野 東南アジア料理",
  ],
  openGraph: {
    title: "K-labo｜筑紫野のカフェ・テイクアウト｜紫駅すぐ",
    description:
      "家族で過ごしたバンコクでの9年間を原点に、バインミーなどの東南アジア料理、スイーツ、ドリンクを楽しめる筑紫野市・紫駅すぐのテイクアウト＆カフェ。",
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
      <body className="bg-ivory font-gothic text-ink antialiased">
        <JsonLd data={websiteJsonLd()} />
        <JsonLd data={cafeJsonLd()} />
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:bg-ink focus:px-5 focus:py-3 focus:text-sm focus:text-ivory"
        >
          本文へスキップ
        </a>
        <Header />
        <main id="main">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
