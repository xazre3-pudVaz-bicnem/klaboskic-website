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

  /**
   * ブランドメッセージ（トップページのメインコピー）
   * 「アジア料理専門店」に限定せず、アジアを原点に日々のおいしいものを
   * つくる店であることを伝える。改行位置は Hero.tsx 側で調整している。
   */
  tagline: "アジアで出会ったおいしさを、日常の一皿へ…",
  /** サブコピー（トップページ・フッター・構造化データの説明文に使用） */
  subTagline:
    "K-laboの原点は、家族で暮らしたバンコクでの9年間の記憶。東南アジア料理や、お肉・お魚の料理、オリジナルスイーツを楽しめるカフェ＆テイクアウトショップです。",
  /** 業態の短い説明（フッター等） */
  shopType: "アジアを原点にした、カフェ＆テイクアウトショップ",

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
   * デリバリー（確認済み）
   * url にアプリの店舗ページURLを入れると「〇〇で注文」ボタンがリンクになる。
   * 空欄にすると「アプリで『K-labo』と検索」という案内に切り替わる。
   */
  uberEats: {
    name: "Uber Eats",
    available: true,
    url: "https://www.ubereats.com/store-browse-uuid/6672ae13-41d7-4fd0-ad91-4ee5125bd2f6?diningMode=DELIVERY",
  },
  rocketNow: {
    name: "ロケットナウ",
    available: true,
    url: "https://customer-web.rocketnow.co.jp/share?storeId=104572&dishId&key=473b2a06-b1f1-4d45-a8f4-6fcdd70b309a",
  },

  /** 予約・取り置き（お電話・Instagramで受付） */
  reservation: {
    available: true,
    message: "お電話・Instagramから、ご予約・お取り置きも承ります。",
  },

  /**
   * 駐車場（確認済み）
   * spaces / location を空欄にすると「お電話でお問い合わせください」と表示する。
   */
  parking: {
    /** 台数 */
    spaces: "3台",
    /** 場所 */
    location: "店舗前",
    /** 料金 */
    fee: "無料",
    /** 補足（例: "満車の際は近隣のコインパーキングをご利用ください"） */
    note: "",
    /** 駐車場の写真（/public 基準。任意） */
    image: null as string | null,
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

  /** Instagram のDM画面を直接開くURL */
  instagramDmUrl: "https://ig.me/m/klaboskic",

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
  servesCuisine: [
    "アジア料理",
    "タイ料理",
    "ベトナム料理",
    "ローストビーフ",
    "西京焼き",
    "スイーツ",
    "カフェ",
  ],

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

/**
 * 駐車場の案内文
 * siteConfig.parking に場所・台数が入っていればそれを、
 * 未入力の間は問い合わせを促す文言を返す。
 */
export function getParkingInfo(): { summary: string; detail: string | null; confirmed: boolean } {
  const { spaces, location, fee, note } = siteConfig.parking;
  if (!spaces && !location) {
    return {
      summary: "駐車場のご案内は準備中です",
      detail: "お車でお越しの際は、お電話でお問い合わせください。",
      confirmed: false,
    };
  }
  return {
    // 例: 「店舗前に3台（無料）」
    summary: `${location ? `${location}に` : ""}${spaces}${fee ? `（${fee}）` : ""}`,
    detail: note || null,
    confirmed: true,
  };
}
