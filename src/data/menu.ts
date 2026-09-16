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
  /** 価格の補足。価格の直後に付く（例: "〜"、"前後〜"） */
  priceNote?: string;
  /** 数量などの単位。「（税込）」の後ろに付く（例: "（1本）"） */
  priceUnit?: string;
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
    name: "肉・魚料理",
    nameEn: "Meat & Fish",
    description:
      "黒毛和牛のローストビーフや、店内で漬け込む西京焼き。素材と向き合いながら、ひと皿ずつ仕上げています。",
    lineupNote:
      "お魚は仕入れにより内容が変わります。当日のラインナップは店頭・公式Instagramでご確認ください。",
  },
  {
    id: "delica",
    name: "お弁当・オードブル",
    nameEn: "Bento & Party Platter",
    description:
      "K-labo特製のお弁当と、集まりの席に映えるオードブル。ご予算などのご相談もお気軽にお申し付けください。",
    lineupNote:
      "オードブルのご注文・ご相談は、お電話または公式InstagramのDMへどうぞ。",
    comingSoon: ["スポーツ弁当"],
  },
  {
    id: "sweets",
    name: "スイーツ",
    nameEn: "Sweets",
    description:
      "彩りバターサンドやストロープワッフルなど、K-laboのオリジナルスイーツ。おやつの時間にも、手土産にも。",
    comingSoon: ["生プリン", "バスクチーズケーキ"],
  },
  {
    id: "drinks",
    name: "ドリンク",
    nameEn: "Drinks",
    description:
      "レモネードを中心に、フードやスイーツと合わせて楽しめるドリンクをご用意しています。",
    lineupNote:
      "K-laboのレモネードには、すべてナタデココが入っています。レモネードソーダ・ソーダなしからお選びいただけます。",
  },
];

export const menuItems: MenuItem[] = [
  // ---------------- ランチセット ----------------
  {
    id: "lunch-set",
    name: "ランチセット（デザート＆ドリンク付き）",
    nameEn: "Lunch Set with Dessert & Drink",
    description:
      "メインの一皿に、サラダ、デザートとドリンクを添えて。お昼のひとときを、ゆっくり楽しみたい日にどうぞ。",
    kind: "regular",
    price: 1500,
    priceNote: "〜",
    category: "lunch",
    image: "/images/food/lunch-set-gapao.jpg",
    isTakeout: true,
    isAvailable: true,
    allergenNote: null,
  },

  // ---------------- アジアンフード ----------------
  {
    id: "banhmi-shrimp-avocado",
    name: "バインミー ～海老アボカド～",
    nameEn: "Banh Mi — Shrimp & Avocado",
    description:
      "ぷりっとした海老に、まろやかなアボカドが重なって、軽やかなのに満足感のある一本。",
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
    name: "バインミー ～ローストチキンとアボカド～",
    nameEn: "Banh Mi — Roast Chicken & Avocado",
    description:
      "しっとりローストしたチキンの旨みとアボカドのコクがじんわり広がる、やさしい口あたりで食べごたえのある一本。",
    kind: "regular",
    price: 720,
    priceNote: "〜",
    category: "asian",
    image: "/images/food/banh-mi-roast-chicken-avocado.jpg",
    isTakeout: true,
    isAvailable: true,
    allergenNote: null,
  },
  {
    id: "banhmi-tuna-avocado",
    name: "バインミー ～ツナアボカド～",
    nameEn: "Banh Mi — Tuna & Avocado",
    description:
      "ツナの旨みとアボカドのなめらかな口当たりが自然に溶け合う、後味すっきりまとまる一本。",
    kind: "regular",
    price: 720,
    priceNote: "〜",
    category: "asian",
    image: "/images/food/banh-mi-tuna-avocado.jpg",
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
      "海老とパクチー、紫玉ねぎを合わせたタイ風の春雨サラダ。酸味と辛みが心地よく、食卓のサイドメニューにもぴったりです。",
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
    name: "黒毛和牛ローストビーフサラダ",
    nameEn: "Wagyu Roast Beef Salad",
    description:
      "厳選した黒毛和牛を低温で、しっとりと火入れして。ご自宅の食卓の主役にも、おもてなしにも。",
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
    name: "黒毛和牛ローストビーフ丼",
    nameEn: "Wagyu Roast Beef Don",
    description:
      "しっとりと仕上げたローストビーフを、ごはんの上にたっぷりと。満足感のある一杯です。",
    kind: "regular",
    price: null,
    category: "meatfish",
    image: "/images/food/wagyu-roast-beef-don.jpg",
    isTakeout: true,
    isAvailable: true,
    allergenNote: null,
  },
  {
    id: "saikyo-yaki",
    name: "西京焼き",
    nameEn: "Saikyo-yaki",
    description:
      "自家製の西京味噌に漬け込んだ魚を、真空パック詰めにして販売しています。ごはんにもお酒にも寄り添う一品です。",
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
      "ふっくらハンバーグにオリジナルソースをたっぷりかけ、半熟卵、彩り野菜と一緒に楽しむ、満足感のあるワンプレートです。",
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
    name: "至福の海鮮丼",
    nameEn: "Kaisen Don",
    description:
      "新鮮な魚を彩りよく盛り付けた、贅沢な海の丼です。",
    kind: "variable",
    price: null,
    category: "meatfish",
    image: "/images/food/kaisen-don.jpg",
    isTakeout: true,
    isAvailable: true,
    allergenNote: null,
  },
  {
    id: "roast-chicken",
    name: "若鶏ローストチキン",
    nameEn: "Roast Chicken",
    description:
      "香ばしく焼き上げた若鶏のローストチキン。もう一品欲しいときや、おつまみにも。",
    kind: "regular",
    price: 150,
    category: "meatfish",
    image: "/images/food/chicken-wings.jpg",
    isTakeout: true,
    isAvailable: true,
    allergenNote: null,
  },

  // ---------------- お弁当・オードブル ----------------
  {
    id: "bento",
    name: "K-labo特製弁当",
    nameEn: "K-labo Special Bento",
    description:
      "焼き魚やハンバーグ、ローストビーフなどを彩りよく詰め合わせたお弁当です。",
    kind: "variable",
    price: null,
    category: "delica",
    image: "/images/delica/bento-mixed.jpg",
    isTakeout: true,
    isAvailable: true,
    allergenNote: null,
  },
  {
    id: "party-platter",
    name: "オードブル盛り合わせ",
    nameEn: "Party Platter",
    description:
      "ローストビーフやハンバーグ、サラダなどを一皿に。クリスマスパーティーやお花見、歓送迎会など、集まりの席やお祝いごとに。",
    kind: "regular",
    price: 5000,
    priceNote: "前後〜",
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
      "7つの素材の色と味にこだわった、彩り豊かなバターサンドクッキー。手作りのバタークリームをひとつずつ絞ってサンドしています。季節限定のフレーバーもご用意しています。",
    kind: "regular",
    price: 350,
    priceUnit: "（1本）",
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
      "薄く焼いたワッフル生地に、チョコレートやトッピングを重ねて。ザクッとした食感が楽しいスイーツです。",
    kind: "regular",
    price: 450,
    priceNote: "〜",
    category: "sweets",
    image: "/images/sweets/stroopwafel-nuts.jpg",
    isTakeout: true,
    isAvailable: true,
    allergenNote: null,
  },

  // ---------------- ドリンク ----------------
  {
    id: "butterfly-pea-lemonade",
    name: "バタフライピーレモネード",
    nameEn: "Butterfly Pea Lemonade",
    description:
      "澄んだ青色が目を引く一杯。レモネードを注ぐとふわっと色が変わり、キレイなグラデーションで見た目も楽しいレモネードです。",
    kind: "regular",
    price: 600,
    category: "drinks",
    image: "/images/drinks/butterfly-pea-soda.jpg",
    isTakeout: true,
    isAvailable: true,
    allergenNote: null,
  },
  {
    id: "mango-lemonade",
    name: "マンゴーレモネード",
    nameEn: "Mango Lemonade",
    description:
      "南国気分を味わえるマンゴーレモネード。果肉もゴロッと入っていて、ボリューム感たっぷりなレモネードです。",
    kind: "regular",
    price: 600,
    category: "drinks",
    image: "/images/drinks/citrus-soda.jpg",
    isTakeout: true,
    isAvailable: true,
    allergenNote: null,
  },
  {
    id: "white-peach-lemonade",
    name: "白桃レモネード",
    nameEn: "White Peach Lemonade",
    description:
      "とろける白桃の甘さに、レモンのきりっとした酸味が重なり、ひと口で季節がほどけるレモネードです。",
    kind: "regular",
    price: 530,
    priceNote: "〜",
    category: "drinks",
    image: "/images/drinks/lemon-soda.jpg",
    isTakeout: true,
    isAvailable: true,
    allergenNote: null,
  },
  {
    id: "coffee",
    name: "挽き立てコーヒー（Hot & Iced）",
    nameEn: "Freshly Ground Coffee — Hot & Iced",
    description:
      "オーダーが入ってから挽き立てる、フレッシュなコーヒー。東南アジアの豆だけを厳選しているので、南国らしいフルーティーなコーヒーが味わえます。",
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
export function formatPrice(
  item: Pick<MenuItem, "kind" | "price" | "priceNote" | "priceUnit">,
): {
  text: string;
  hasPrice: boolean;
} {
  if (item.price !== null) {
    return {
      text: `¥${item.price.toLocaleString("ja-JP")}${item.priceNote ?? ""}（税込）${item.priceUnit ?? ""}`,
      hasPrice: true,
    };
  }
  return {
    text: item.kind === "variable" ? PRICE_VARIABLE : PRICE_UNSET,
    hasPrice: false,
  };
}
