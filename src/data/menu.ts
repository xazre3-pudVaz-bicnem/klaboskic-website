/**
 * メニューデータ
 *
 * 掲載しているのは、K-labo提供の商品写真および店頭掲出物・公式Instagramで
 * 確認できた内容のみ。ページ上では「これまでにご提供した商品の一例」として
 * 案内し、当日の提供有無・正式な商品名・価格は店頭／Instagramへ誘導する。
 *
 * price が null の商品は「価格は店頭・Instagramでご確認ください」と表示される。
 * 存在が確認できていない商品を推測で追加しないこと。
 */

export type MenuCategoryId =
  | "banhmi"
  | "food"
  | "delica"
  | "sweets"
  | "drinks";

export type MenuItem = {
  /** 商品名 */
  name: string;
  /** 英字表記 */
  nameEn: string;
  /** 短い説明 */
  description: string;
  /** 価格（税込・円）。未確認の場合は null */
  price: number | null;
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
  /** ラインナップが日替わり・未確認の場合の案内文 */
  lineupNote?: string;
};

export const menuCategories: MenuCategory[] = [
  {
    id: "banhmi",
    name: "バインミー",
    nameEn: "Banh Mi",
    description:
      "ベトナム生まれのサンドイッチ。軽い食感のパンに具材を合わせた、K-laboの看板メニューです。",
    lineupNote:
      "具材は仕入れにより変わります。当日の種類は店頭・公式Instagramでご確認ください。",
  },
  {
    id: "food",
    name: "フード",
    nameEn: "Food",
    description:
      "バンコクでの暮らしを原点にしたオリエンタルメニューと、魚屋さんから届く新鮮な魚や低温調理のローストビーフを使った和洋メニュー。",
    lineupNote:
      "日替わり・週替わりの品もあります。当日のラインナップは店頭・公式Instagramでご案内しています。",
  },
  {
    id: "delica",
    name: "デリカ・お惣菜",
    nameEn: "Delica",
    description:
      "お肉やお魚を使ったお惣菜とお弁当。今日の食卓にもう一品、そのまま並べられるおかずです。",
    lineupNote:
      "内容は日によって変わります。オードブルなどのご相談は店頭・公式Instagramへどうぞ。",
  },
  {
    id: "sweets",
    name: "スイーツ",
    nameEn: "Sweets",
    description:
      "看板のストロープワッフルをはじめ、見た目もかわいらしい手づくりのスイーツ。おやつの時間や、ちょっとした手土産にも。",
    lineupNote:
      "季節限定のフレーバーもご用意しています。最新のスイーツは公式Instagramでご紹介しています。",
  },
  {
    id: "drinks",
    name: "ドリンク",
    nameEn: "Drinks",
    description:
      "レモネードを中心に、フードやスイーツと合わせて楽しめるドリンクをご用意しています。",
    lineupNote:
      "フレーバーは季節により変わります。おすすめドリンクは公式Instagramのハイライトでご紹介しています。",
  },
];

export const menuItems: MenuItem[] = [
  // ---------------- バインミー ----------------
  {
    name: "バインミー 海老とアボカド",
    nameEn: "Banh Mi — Shrimp & Avocado",
    description:
      "ぷりっとした海老とアボカド、パクチーを重ねた一本。軽い食感のパンと、みずみずしい具材の相性を楽しめます。",
    price: null,
    category: "banhmi",
    image: "/images/food/banh-mi-shrimp-avocado.jpg",
    isTakeout: true,
    isAvailable: true,
    allergenNote: null,
  },
  {
    name: "バインミー チキンとアボカド",
    nameEn: "Banh Mi — Chicken & Avocado",
    description:
      "しっとりとしたチキンに、アボカドとたっぷりの香草を合わせて。片手で食べられる、食べごたえのある一本です。",
    price: null,
    category: "banhmi",
    image: "/images/food/banh-mi-chicken-avocado.jpg",
    isTakeout: true,
    isAvailable: true,
    allergenNote: null,
  },
  {
    name: "バインミー クリーミーフィリング",
    nameEn: "Banh Mi — Creamy",
    description:
      "まろやかなフィリングをたっぷりと。やさしい味わいで、東南アジアの料理がはじめての方にもおすすめです。",
    price: null,
    category: "banhmi",
    image: "/images/food/banh-mi-creamy.jpg",
    isTakeout: true,
    isAvailable: true,
    allergenNote: null,
  },

  // ---------------- フード ----------------
  {
    name: "ガパオライス",
    nameEn: "Gapao Rice",
    description:
      "香りとスパイスが重なるオリエンタルな一皿。とろりとした目玉焼きをくずしながらお召し上がりください。",
    price: null,
    category: "food",
    image: "/images/food/gapao-rice-set.jpg",
    isTakeout: true,
    isAvailable: true,
    allergenNote: null,
  },
  {
    name: "春雨サラダ",
    nameEn: "Glass Noodle Salad",
    description:
      "海老と香草、紫玉ねぎを合わせた、酸味と辛みが心地よいサラダ。フードのお供にもぴったりです。",
    price: null,
    category: "food",
    image: "/images/food/yam-woon-sen.jpg",
    isTakeout: true,
    isAvailable: true,
    allergenNote: null,
  },
  {
    name: "海鮮丼",
    nameEn: "Kaisen Don",
    description:
      "魚屋さんから届く新鮮な魚を使った一杯。彩りよく盛り付けた、贅沢な海の丼です。",
    price: null,
    category: "food",
    image: "/images/food/salmon-poke-bowl.jpg",
    isTakeout: true,
    isAvailable: true,
    allergenNote: null,
  },
  {
    name: "西京焼き",
    nameEn: "Saikyo-yaki",
    description:
      "西京味噌に漬け込んだ魚を、ふっくらと焼き上げて。ごはんにもお酒にも寄り添う一品です。",
    price: null,
    category: "food",
    image: "/images/food/saikyo-yaki.jpg",
    isTakeout: true,
    isAvailable: true,
    allergenNote: null,
  },
  {
    name: "ローストビーフ丼",
    nameEn: "Roast Beef Don",
    description:
      "低温調理でしっとりと仕上げたローストビーフを、たっぷりと盛って。彩り野菜と一緒にどうぞ。",
    price: null,
    category: "food",
    image: "/images/food/roast-beef-don.jpg",
    isTakeout: true,
    isAvailable: true,
    allergenNote: null,
  },
  {
    name: "ロコモコ",
    nameEn: "Loco Moco",
    description:
      "肉汁あふれるハンバーグに、半熟卵とソースをたっぷりと。満足感のあるワンプレートです。",
    price: null,
    category: "food",
    image: "/images/food/loco-moco.jpg",
    isTakeout: true,
    isAvailable: true,
    allergenNote: null,
  },
  {
    name: "鶏手羽先",
    nameEn: "Chicken Wings",
    description:
      "香ばしく焼き上げた手羽先。もう一品欲しいときや、おやつがわりのつまみにも。",
    price: null,
    category: "food",
    image: "/images/food/chicken-wings.jpg",
    isTakeout: true,
    isAvailable: true,
    allergenNote: null,
  },

  // ---------------- デリカ・お惣菜 ----------------
  {
    name: "彩り弁当",
    nameEn: "Bento",
    description:
      "焼き魚やローストビーフ、卵焼きなどを彩りよく詰め合わせて。ひと箱で満たされるお弁当です。",
    price: null,
    category: "delica",
    image: "/images/delica/bento-mixed.jpg",
    isTakeout: true,
    isAvailable: true,
    allergenNote: null,
  },
  {
    name: "うなぎ弁当",
    nameEn: "Unagi Bento",
    description:
      "ふっくらとしたうなぎに、ローストビーフと卵焼きを添えて。特別な日のお昼にもどうぞ。",
    price: null,
    category: "delica",
    image: "/images/delica/bento-unagi.jpg",
    isTakeout: true,
    isAvailable: true,
    allergenNote: null,
  },
  {
    name: "ローストビーフ",
    nameEn: "Roast Beef",
    description:
      "低温調理でじっくり火を入れた、しっとり柔らかなローストビーフ。ご自宅の食卓の主役に。",
    price: null,
    category: "delica",
    image: "/images/delica/roast-beef-slices.jpg",
    isTakeout: true,
    isAvailable: true,
    allergenNote: null,
  },
  {
    name: "オードブル盛り合わせ",
    nameEn: "Party Platter",
    description:
      "ローストビーフやハンバーグ、サラダなどを一皿に。集まりの席やお祝いごとに。",
    price: null,
    category: "delica",
    image: "/images/delica/party-platter.jpg",
    isTakeout: true,
    isAvailable: true,
    allergenNote: null,
  },

  // ---------------- スイーツ ----------------
  {
    name: "ストロープワッフル",
    nameEn: "Stroopwafel",
    description:
      "薄く焼いたワッフル生地に、チョコレートやナッツを重ねて。ざくっとした食感が楽しい看板スイーツです。",
    price: null,
    category: "sweets",
    image: "/images/sweets/stroopwafel-chocolate.jpg",
    isTakeout: true,
    isAvailable: true,
    allergenNote: null,
  },
  {
    name: "サンドクッキー",
    nameEn: "Sandwich Cookies",
    description:
      "やさしい色合いのクッキーで、なめらかなクリームをサンドして。並んだ姿もかわいらしい一品です。",
    price: null,
    category: "sweets",
    image: "/images/sweets/sandwich-cookies-stack.jpg",
    isTakeout: true,
    isAvailable: true,
    allergenNote: null,
  },
  {
    name: "ウエハースクッキー",
    nameEn: "Wafer Cookies",
    description:
      "軽やかなウエハースに、ホワイトとビターのチョコレートをまとわせて。ひと口サイズの贈りものにも。",
    price: null,
    category: "sweets",
    image: "/images/sweets/wafer-sticks.jpg",
    isTakeout: true,
    isAvailable: true,
    allergenNote: null,
  },
  {
    name: "クッキーギフトボックス",
    nameEn: "Cookie Gift Box",
    description:
      "個包装のクッキーを詰め合わせて。手土産やちょっとした贈りものにお選びいただけます。",
    price: null,
    category: "sweets",
    image: "/images/sweets/cookie-gift-box.jpg",
    isTakeout: true,
    isAvailable: true,
    allergenNote: null,
  },

  // ---------------- ドリンク ----------------
  {
    name: "パープルレモネード",
    nameEn: "Purple Lemonade",
    description:
      "澄んだ紫色が目を引く一杯。ミントを添えて、見た目にも涼やかに仕上げました。",
    price: null,
    category: "drinks",
    image: "/images/drinks/butterfly-pea-soda.jpg",
    isTakeout: true,
    isAvailable: true,
    allergenNote: null,
  },
  {
    name: "シトラスレモネード",
    nameEn: "Citrus Lemonade",
    description:
      "柑橘のほろ苦さと甘酸っぱさが広がる、鮮やかなオレンジ色のレモネードです。",
    price: null,
    category: "drinks",
    image: "/images/drinks/citrus-soda.jpg",
    isTakeout: true,
    isAvailable: true,
    allergenNote: null,
  },
  {
    name: "レモン & ミント",
    nameEn: "Lemon & Mint",
    description:
      "レモンの酸味にミントの香りを添えて。フードの後味をすっきりと整えてくれる一杯。",
    price: null,
    category: "drinks",
    image: "/images/drinks/lemon-soda.jpg",
    isTakeout: true,
    isAvailable: true,
    allergenNote: null,
  },
  {
    name: "アイスコーヒー",
    nameEn: "Iced Coffee",
    description:
      "K-laboのロゴを添えたカップで。バインミーやスイーツのお供に、そのまま持ち歩ける一杯です。",
    price: null,
    category: "drinks",
    image: "/images/drinks/iced-coffee.jpg",
    isTakeout: true,
    isAvailable: true,
    allergenNote: null,
  },
];

/** カテゴリIDから所属商品を取得 */
export function getItemsByCategory(id: MenuCategoryId): MenuItem[] {
  return menuItems.filter((item) => item.category === id);
}

/** 価格表示（未確認の場合の共通文言） */
export const PRICE_UNCONFIRMED = "価格は店頭・Instagramでご確認ください";
