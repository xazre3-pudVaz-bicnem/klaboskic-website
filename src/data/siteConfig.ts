/**
 * K-labo サイト共通設定
 *
 * 店舗の基本情報はすべてこのファイルで一元管理する。
 * 「未確認」とコメントのある項目は、公式に確認が取れてから値を入れること。
 * 空欄（空文字 / null）の項目は、画面上では
 * 「最新情報は公式Instagramをご確認ください」等の表記に自動的に置き換わる。
 */

export const siteConfig = {
  /** 店名 */
  name: "K-labo",
  /** 店名（読み） */
  nameJa: "ケイラボ",
  /** 英字補足 */
  nameEn: "K-Labo Sweets & Delica",
  /** 公式ロゴに記されたブランドタグライン */
  brandTagline: "for your bliss...",

  /** ブランドメッセージ */
  tagline: "バンコクで出会ったおいしさを、筑紫野の日常へ。",
  /** サブコピー */
  subTagline:
    "家族で過ごした9年間の記憶から生まれた、東南アジア料理とスイーツのテイクアウト＆カフェ。",

  /**
   * 本番URL（独自ドメイン）
   *
   * canonical・OGP・sitemap.xml・robots.txt・構造化データがこの値を使う。
   * ここが実際の公開ドメインと違うと、検索エンジンに別URLを正規版として
   * 伝えてしまうため、ドメインを変更した場合は必ずこの値も更新すること。
   * 末尾のスラッシュは付けない（各所でパスを連結するため）。
   */
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.skic.jp",

  /** 所在地（確認済み） */
  address: {
    // 郵便番号は住所からのGoogleマップ検索結果。オーナー確認が取れ次第、
    // 正式な表記に置き換えること（現在は構造化データにのみ使用）。
    postalCode: "818-0061",
    region: "福岡県",
    locality: "筑紫野市",
    street: "紫2-1-5",
    full: "福岡県筑紫野市紫2-1-5",
  },

  /** アクセス（確認済み） */
  access: "西鉄天神大牟田線「紫駅」東口から徒歩約0分",
  accessShort: "紫駅東口から徒歩約0分",

  /** 電話番号（確認済み） */
  phone: "070-8959-5364",
  /** tel: リンク用（ハイフンなし） */
  phoneHref: "tel:07089595364",

  /**
   * 営業時間（確認済み）
   * dayOfWeek は schema.org の DayOfWeek 名に対応。
   */
  hours: [
    { label: "月曜日 – 金曜日", days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"], opens: "11:30", closes: "18:30" },
    { label: "土曜日・日曜日", days: ["Saturday", "Sunday"], opens: "11:30", closes: "17:00" },
  ],
  /** 営業時間の要約表記 */
  hoursSummary: "月〜金 11:30–18:30／土・日 11:30–17:00",

  /**
   * 定休日 — 未確認。
   * 上記は各曜日の営業時間であり、休業日については別途確認が必要。
   * 実際の営業日は公式Instagramの「営業日カレンダー」で告知されている。
   */
  closedDays: "",
  /** 営業日についての共通注記 */
  openDaysNote:
    "臨時休業などの最新の営業日は、公式Instagramの営業日カレンダーをご確認ください。",

  /** 公式Instagram（確認済み） */
  instagram: {
    url: "https://www.instagram.com/klaboskic/",
    handle: "@klaboskic",
  },

  /**
   * LINE公式アカウント
   * 店頭バナーに「Instagram・LINEで最新情報をCheck!」とQRコードの掲出あり。
   * URL/IDが未確認のため空欄。確認後に設定すると導線が表示される。
   */
  line: {
    url: "", // 未確認
  },

  /**
   * Uber Eats — 公式Instagramのハイライトに「Uber Eats」あり。
   * 店舗ページURLは未確認のため空欄。
   */
  uberEats: {
    available: true,
    url: "", // 未確認
  },

  /**
   * 店内利用
   * 店頭バナーに「テイクアウト専門ですが、カウンターも用意しているので、
   * お仕事帰りやお買い物ついでに是非お立ち寄りください」との記載があり、
   * 店内写真でもカウンター席を確認済み。
   */
  counterSeats: true,

  /** Googleマップ（住所検索リンク） */
  googleMapsUrl:
    "https://www.google.com/maps/search/?api=1&query=" +
    encodeURIComponent("K-labo 福岡県筑紫野市紫2-1-5"),

  /** Googleマップ埋め込み用URL */
  mapEmbedUrl:
    "https://www.google.com/maps?q=" +
    encodeURIComponent("福岡県筑紫野市紫2-1-5") +
    "&output=embed&z=17",

  /** ロゴ画像（公式ロゴから背景を透過処理したもの） */
  logo: {
    /** 明るい背景用 */
    ink: "/images/brand/k-labo-logo-ink.png",
    /** 暗い背景用 */
    ivory: "/images/brand/k-labo-logo-ivory.png",
    /** ゴールド（原色） */
    gold: "/images/brand/k-labo-logo-gold.png",
    /** 縦横比（幅 ÷ 高さ） */
    ratio: 1060 / 436,
    /** 円形モノグラム */
    markInk: "/images/brand/k-labo-mark-ink.png",
    markIvory: "/images/brand/k-labo-mark-ivory.png",
    markGold: "/images/brand/k-labo-mark-gold.png",
    markRatio: 403 / 406,
  },

  /** 構造化データ用: 提供ジャンル */
  servesCuisine: ["ベトナム料理", "タイ料理", "東南アジア料理", "カフェ"],

  /** 構造化データ用: 対応エリア（筑紫野市周辺） */
  areaServed: ["筑紫野市", "太宰府市", "大野城市", "小郡市", "那珂川市"],
};

/** ナビゲーション定義（ヘッダー・フッター共通） */
export const navigation = [
  { href: "/menu", label: "メニュー", labelEn: "Menu" },
  { href: "/story", label: "K-laboの軌跡", labelEn: "Story" },
  { href: "/takeout", label: "テイクアウト", labelEn: "Takeout" },
  { href: "/access", label: "店舗情報・アクセス", labelEn: "Access" },
  { href: "/news", label: "お知らせ", labelEn: "News" },
] as const;

/** 未確認情報の共通案内文 */
export const CONFIRM_ON_INSTAGRAM = "最新情報は公式Instagramをご確認ください。";
