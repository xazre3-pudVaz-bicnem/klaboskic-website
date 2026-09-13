/**
 * メニューデータ
 *
 * ────────────────────────────────────────────────
 *  価格の変更方法（どちらか一方）
 * ────────────────────────────────────────────────
 *  A. このファイルの price を書き換える
 *     例）price: null  →  price: 650
 *     保存（GitHub上で編集した場合はコミット）すると、自動で再公開されます。
 *
 *  B. Googleスプレッドシートで管理する（おすすめ）
 *     環境変数 MENU_SHEET_CSV_URL にスプレッドシートの公開CSVのURLを設定すると、
 *     スプレッドシートの「価格」「提供状況」がこのファイルより優先されます。
 *     詳しい手順は README.md の「メニュー価格の更新」を参照。
 * ────────────────────────────────────────────────
 *
 * - kind: "regular"（定番）… 価格を掲載する商品。price 未入力の間は
 *   「価格は店頭でご確認ください」と表示。
 * - kind: "variable"（日替わり・仕入れで変動）… 価格の代わりに
 *   「Instagramでご確認ください」と表示。
 * - 価格はすべて税込・円。
 * - 掲載するのは、K-labo提供の写真や店頭掲出物で確認できた商品のみ。
 *   存在が確認できていない商品を推測で追加しないこと。
 */

export type MenuCategoryId =
  | "lunch"
  | "asian"
  | "meatfish"
  | "delica"
  | "sweets"
  | "drinks";

export type MenuItem = {
  /** 識別子（半角英数字とハイフン）。スプレッドシートの id 列と一致させる */
  id: string;
  /** 商品名 */
  name: string;
  /** 英字表記 */
  nameEn: string;
  /** 短い説明 */
  description: string;
  /** 定番 or 日替わり・仕入れで変動 */
  kind: "regular" | "variable";
  /** 価格（税込・円）。未入力の場合は null */
  price: number | null;
  /** 価格の補足（例: "〜"、"（2個入り）"） */
  priceNote?: string;
  /** カテゴリ */
  category: MenuCategoryId;
  /** 商品写真のパス。実写真がない場合は null（プレースホルダー表示） */
  image: string | null;
  /** テイクアウト可否 */
  isTakeout: boolean;
  /** 現在提供中かどうか（売り切れ・休止中は false） */
  isAvailable: boolean;
  /** 季節限定などの注記 */
  seasonalNote?: string;
  /** アレルギー等の注意事項。不明の場合は null */
  allergenNote: string | null;
};

export type MenuCategory = {
  id: MenuCategoryId;
  name: string;
  nameEn: string;
  description: string;
  /** ラインナップが日替わり・変動する場合の案内文 */
  lineupNote?: string;
  /** 近日登場予定の商品名（「Coming Soon」として表示） */
  comingSoon?: string[];
};

export const menuCategories: MenuCategory[] = [
  {
    id: "lunch",
    name: "ランチセット",
    nameEn: "Lunch Set",
    description:
      "メインの一皿に、デザートとドリンクが付いたランチセット。お食事からひと息つく時間まで、K-laboの味をまとめて楽しめます。",
    lineupNote:
      "セットのメイン・デザート・ドリンクの内容は、店頭・公式Instagramでご案内しています。",
  },
  {
    id: "asian",
    name: "アジアンフード",
    nameEn: "Asian",
    description:
      "バンコクでの暮らしを原点にした、K-laboのはじまりの味。バインミーやガパオライスなど、香りと彩りを楽しめる料理です。",
    lineupNote:
      "バインミーの具材は仕入れにより変わることがあります。当日の種類は店頭・公式Instagramでご案内しています。",
  },
  {
    id: "meatfish",
    name: "お肉・お魚料理",
    nameEn: "Meat & Fish",
    description:
      "黒毛和牛のローストビーフや、店内で漬け込む西京焼き。素材と向き合いながら、ひと皿ずつ仕上げています。",
    lineupNote:
      "お魚は仕入れにより内容が変わります。当日のラインナップは店頭・公式Instagramでご確認ください。",
  },
  {
    id: "delica",
    name: "デリカ・お弁当",
    nameEn: "Delica",
    description:
      "お肉やお魚のおかずを詰め合わせたお弁当と、集まりの席に映えるオードブル。今日の食卓に、そのまま並べられます。",
    lineupNote:
      "お弁当の内容は日替わりです。オードブルのご注文・ご相談は、お電話または公式InstagramのDMへどうぞ。",
  },
  {
    id: "sweets",
    name: "スイーツ",
    nameEn: "Sweets",
    description:
      "彩りバターサンドやストロープワッフルなど、店内で仕上げるオリジナルスイーツ。おやつの時間にも、手土産にも。",
    lineupNote:
      "季節限定のフレーバーもご用意しています。最新のスイーツは公式Instagramでご紹介しています。",
    comingSoon: ["生プリン", "バスクチーズケーキ"],
  },
  {
    id: "drinks",
    name: "ドリンク",
    nameEn: "Drinks",
    description:
      "レモネードを中心に、フードやスイーツと合わせて楽しめるドリンクをご用意しています。",
    lineupNote: "フレーバーは季節により変わります。",
  },
];

export const menuItems: MenuItem[] = [
  // ---------------- ランチセット ----------------
  {
    id: "lunch-set",
    name: "ランチセット（デザート＆ドリンク付き）",
    nameEn: "Lunch Set with Dessert & Drink",
    description:
      "メインの一皿に、デザートとドリンクを添えて。お昼のひとときを、ゆっくり楽しみたい日にどうぞ。",
    kind: "regular",
    price: 1500,
    priceNote: "〜",
    category: "lunch",
    image: "/images/food/banh-mi-shrimp-plate.jpg",
    isTakeout: false,
    isAvailable: true,
    allergenNote: null,
  },

  // ---------------- アジアンフード ----------------
  {
    id: "banhmi-shrimp-avocado",
    name: "バインミー 海老とアボカド",
    nameEn: "Banh Mi — Shrimp & Avocado",
    description:
      "ぷりっとした海老とアボカド、パクチーを重ねた一本。軽い食感のパンと、みずみずしい具材の相性を楽しめます。",
    kind: "regular",
    price: 720,
    priceNote: "〜",
    category: "asian",
    image: "/images/food/banh-mi-shrimp-avocado.jpg",
    isTakeout: true,
    isAvailable: true,
    allergenNote: null,
  },
  {
    id: "banhmi-chicken-avocado",
    name: "バインミー チキンとアボカド",
    nameEn: "Banh Mi — Chicken & Avocado",
    description:
      "しっとりとしたチキンに、アボカドとたっぷりの香草を合わせて。片手で食べられる、食べごたえのある一本です。",
    kind: "regular",
    price: 720,
    priceNote: "〜",
    category: "asian",
    image: "/images/food/banh-mi-chicken-avocado.jpg",
    isTakeout: true,
    isAvailable: true,
    allergenNote: null,
  },
  {
    id: "banhmi-creamy",
    name: "バインミー クリーミーフィリング",
    nameEn: "Banh Mi — Creamy",
    description:
      "まろやかなフィリングをたっぷりと。やさしい味わいで、アジアの料理がはじめての方にもおすすめです。",
    kind: "regular",
    price: 720,
    priceNote: "〜",
    category: "asian",
    image: "/images/food/banh-mi-creamy.jpg",
    isTakeout: true,
    isAvailable: true,
    allergenNote: null,
  },
  {
    id: "gapao-rice",
    name: "ガパオライス",
    nameEn: "Gapao Rice",
    description:
      "香りとスパイスが重なるタイの一皿。とろりとした目玉焼きをくずしながらお召し上がりください。",
    kind: "regular",
    price: 780,
    category: "asian",
    image: "/images/food/gapao-rice.jpg",
    isTakeout: true,
    isAvailable: true,
    allergenNote: null,
  },
  {
    id: "green-curry",
    name: "グリーンカレー",
    nameEn: "Green Curry",
    description:
      "ココナッツミルクのまろやかさに、ハーブの香りと心地よい辛さ。バジルを添えた、タイの定番カレーです。",
    kind: "regular",
    price: null,
    category: "asian",
    image: "/images/food/green-curry.jpg",
    isTakeout: true,
    isAvailable: true,
    allergenNote: null,
  },
  {
    id: "yam-woon-sen",
    name: "ヤムウンセン",
    nameEn: "Yum Woon Sen",
    description:
      "海老と香草、紫玉ねぎを合わせたタイ風の春雨サラダ。酸味と辛みが心地よく、フードのお供にもぴったりです。",
    kind: "regular",
    price: 780,
    category: "asian",
    image: "/images/food/yam-woon-sen.jpg",
    isTakeout: true,
    isAvailable: true,
    allergenNote: null,
  },

  // ---------------- お肉・お魚料理 ----------------
  {
    id: "roast-beef",
    name: "黒毛和牛ローストビーフ",
    nameEn: "Wagyu Roast Beef",
    description:
      "黒毛和牛の塊肉に焼き色をつけ、しっとりと火を入れて。ご自宅の食卓の主役にも、おもてなしにも。",
    kind: "regular",
    price: null,
    category: "meatfish",
    image: "/images/delica/roast-beef-slices.jpg",
    isTakeout: true,
    isAvailable: true,
    allergenNote: null,
  },
  {
    id: "roast-beef-don",
    name: "ローストビーフ丼",
    nameEn: "Roast Beef Don",
    description:
      "しっとりと仕上げたローストビーフを、ごはんの上にたっぷりと。満足感のある一杯です。",
    kind: "regular",
    price: null,
    category: "meatfish",
    image: "/images/food/roast-beef-don.jpg",
    isTakeout: true,
    isAvailable: true,
    allergenNote: null,
  },
  {
    id: "saikyo-yaki",
    name: "西京焼き",
    nameEn: "Saikyo-yaki",
    description:
      "店内で西京味噌に漬け込んだ魚を、ふっくらと焼き上げて。ごはんにもお酒にも寄り添う一品です。",
    kind: "variable",
    price: null,
    category: "meatfish",
    image: "/images/food/saikyo-yaki.jpg",
    isTakeout: true,
    isAvailable: true,
    allergenNote: null,
  },
  {
    id: "loco-moco",
    name: "ロコモコ",
    nameEn: "Loco Moco",
    description:
      "ハンバーグに半熟卵とソースをたっぷりと。彩り野菜と一緒に楽しむ、満足感のあるワンプレートです。",
    kind: "regular",
    price: 850,
    category: "meatfish",
    image: "/images/food/loco-moco.jpg",
    isTakeout: true,
    isAvailable: true,
    allergenNote: null,
  },
  {
    id: "kaisen-don",
    name: "海鮮丼",
    nameEn: "Kaisen Don",
    description:
      "魚屋さんから届く新鮮な魚を使った一杯。彩りよく盛り付けた、贅沢な海の丼です。",
    kind: "variable",
    price: null,
    category: "meatfish",
    image: "/images/food/kaisen-don.jpg",
    isTakeout: true,
    isAvailable: true,
    allergenNote: null,
  },
  {
    id: "chicken-wings",
    name: "鶏手羽先",
    nameEn: "Chicken Wings",
    description:
      "香ばしく焼き上げた手羽先。もう一品欲しいときや、おつまみにも。",
    kind: "regular",
    price: null,
    category: "meatfish",
    image: "/images/food/chicken-wings-plain.jpg",
    isTakeout: true,
    isAvailable: true,
    allergenNote: null,
  },

  // ---------------- デリカ・お弁当 ----------------
  {
    id: "bento",
    name: "日替わり弁当",
    nameEn: "Daily Bento",
    description:
      "焼き魚やハンバーグ、ローストビーフなどを彩りよく詰め合わせて。ひと箱で満たされるお弁当です。",
    kind: "variable",
    price: null,
    category: "delica",
    image: "/images/delica/bento-mixed.jpg",
    isTakeout: true,
    isAvailable: true,
    allergenNote: null,
  },
  {
    id: "unagi-bento",
    name: "うなぎ弁当",
    nameEn: "Unagi Bento",
    description:
      "ふっくらとしたうなぎに、ローストビーフと卵焼きを添えて。特別な日のお昼にもどうぞ。",
    kind: "variable",
    price: null,
    category: "delica",
    image: "/images/delica/bento-unagi.jpg",
    isTakeout: true,
    isAvailable: true,
    allergenNote: null,
  },
  {
    id: "party-platter",
    name: "オードブル盛り合わせ",
    nameEn: "Party Platter",
    description:
      "ローストビーフやハンバーグ、サラダなどを一皿に。集まりの席やお祝いごとに。",
    kind: "variable",
    price: null,
    category: "delica",
    image: "/images/delica/party-platter.jpg",
    isTakeout: true,
    isAvailable: true,
    allergenNote: null,
  },

  // ---------------- スイーツ ----------------
  {
    id: "butter-sandwich",
    name: "彩りバターサンド",
    nameEn: "Colorful Butter Sandwich",
    description:
      "色とりどりの生地に、なめらかなバタークリームをひとつずつ絞ってサンド。並んだ姿も楽しい、K-labo自慢のスイーツです。",
    kind: "regular",
    price: 350,
    category: "sweets",
    image: "/images/sweets/butter-sandwich.jpg",
    isTakeout: true,
    isAvailable: true,
    allergenNote: null,
  },
  {
    id: "butter-sandwich-gift",
    name: "彩りバターサンド ギフトボックス",
    nameEn: "Butter Sandwich Gift Box",
    description:
      "個包装の彩りバターサンドを詰め合わせて。手土産やちょっとした贈りものにお選びいただけます。",
    kind: "regular",
    price: 2500,
    priceNote: "〜",
    category: "sweets",
    image: "/images/sweets/butter-sandwich-gift-box.jpg",
    isTakeout: true,
    isAvailable: true,
    allergenNote: null,
  },
  {
    id: "stroopwafel",
    name: "ストロープワッフル",
    nameEn: "Stroopwafel",
    description:
      "薄く焼いたワッフル生地に、チョコレートやナッツを重ねて。ざくっとした食感が楽しいスイーツです。",
    kind: "regular",
    price: 450,
    priceNote: "〜",
    category: "sweets",
    image: "/images/sweets/stroopwafel-nuts.jpg",
    isTakeout: true,
    isAvailable: true,
    allergenNote: null,
  },
  {
    id: "wafer-cookies",
    name: "ウエハースクッキー",
    nameEn: "Wafer Cookies",
    description:
      "軽やかなウエハースに、ホワイトとビターのチョコレートをまとわせて。ひと口サイズの贈りものにも。",
    kind: "regular",
    price: null,
    category: "sweets",
    image: "/images/sweets/wafer-sticks.jpg",
    isTakeout: true,
    isAvailable: true,
    allergenNote: null,
  },

  // ---------------- ドリンク ----------------
  {
    id: "purple-lemonade",
    name: "パープルレモネード",
    nameEn: "Purple Lemonade",
    description:
      "澄んだ紫色が目を引く一杯。ミントを添えて、見た目にも涼やかに仕上げました。",
    kind: "regular",
    price: 480,
    priceNote: "〜",
    category: "drinks",
    image: "/images/drinks/butterfly-pea-soda.jpg",
    isTakeout: true,
    isAvailable: true,
    allergenNote: null,
  },
  {
    id: "citrus-lemonade",
    name: "シトラスレモネード",
    nameEn: "Citrus Lemonade",
    description:
      "柑橘のほろ苦さと甘酸っぱさが広がる、鮮やかなオレンジ色のレモネードです。",
    kind: "regular",
    price: 480,
    priceNote: "〜",
    category: "drinks",
    image: "/images/drinks/citrus-soda.jpg",
    isTakeout: true,
    isAvailable: true,
    allergenNote: null,
  },
  {
    id: "lemon-mint",
    name: "レモン & ミント",
    nameEn: "Lemon & Mint",
    description:
      "レモンの酸味にミントの香りを添えて。フードの後味をすっきりと整えてくれる一杯。",
    kind: "regular",
    price: 480,
    priceNote: "〜",
    category: "drinks",
    image: "/images/drinks/lemon-soda.jpg",
    isTakeout: true,
    isAvailable: true,
    allergenNote: null,
  },
  {
    id: "coffee",
    name: "挽き立てコーヒー",
    nameEn: "Freshly Ground Coffee",
    description:
      "一杯ずつ挽き立ての豆で。バインミーやスイーツのお供に、テイクアウトでも楽しめます。",
    kind: "regular",
    price: 420,
    priceNote: "〜",
    category: "drinks",
    image: "/images/drinks/iced-coffee.jpg",
    isTakeout: true,
    isAvailable: true,
    allergenNote: null,
  },
];

/** トップページ「代表商品」に並べる商品（id の順に表示） */
export const signatureItemIds = [
  "banhmi-shrimp-avocado",
  "gapao-rice",
  "roast-beef",
  "stroopwafel",
  "butter-sandwich",
] as const;

/** 価格が未入力の定番商品に表示する文言 */
export const PRICE_UNSET = "価格は店頭でご確認ください";
/** 日替わり・仕入れで変動する商品に表示する文言 */
export const PRICE_VARIABLE = "日替わり・仕入れにより変動します。Instagramでご確認ください";

/** 価格表示用の文字列を返す */
export function formatPrice(item: Pick<MenuItem, "kind" | "price" | "priceNote">): {
  text: string;
  hasPrice: boolean;
} {
  if (item.price !== null) {
    return {
      text: `¥${item.price.toLocaleString("ja-JP")}${item.priceNote ?? ""}（税込）`,
      hasPrice: true,
    };
  }
  return {
    text: item.kind === "variable" ? PRICE_VARIABLE : PRICE_UNSET,
    hasPrice: false,
  };
}
