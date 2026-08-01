/**
 * ギャラリーデータ
 *
 * 画像はすべて /public/images/ 配下にローカル保存したものを使用する。
 * 外部（Instagram等）の画像URLを直接指定しないこと。
 * aspect は元写真の向きに合わせて指定し、被写体が切れないようにする。
 */

export type GalleryItem = {
  /** 画像パス（/public 基準）。未配置の場合は null */
  src: string | null;
  /** 代替テキスト */
  alt: string;
  /** 被写体名（日本語） */
  subject: string;
  /** 被写体名（英字・キャプション表示用） */
  subjectEn: string;
  /** 表示アスペクト比 */
  aspect: "portrait" | "landscape" | "square";
};

export const galleryItems: GalleryItem[] = [
  {
    src: "/images/delica/bento-hamburg.jpg",
    alt: "ハンバーグと卵焼き、ポテトを詰め合わせたK-laboのお弁当",
    subject: "お弁当",
    subjectEn: "Bento",
    aspect: "portrait",
  },
  {
    src: "/images/food/kaisen-don.jpg",
    alt: "マグロやサーモン、いくらを盛り付けたK-laboの海鮮丼",
    subject: "海鮮丼",
    subjectEn: "Kaisen Don",
    aspect: "square",
  },
  {
    src: "/images/shop/interior-seating.jpg",
    alt: "壁にバインミーとストロープワッフルのポスターが飾られたK-labo店内のカウンター席",
    subject: "店内",
    subjectEn: "Inside",
    aspect: "landscape",
  },
  {
    src: "/images/food/roast-beef-salad.jpg",
    alt: "レモンを添えたK-laboのローストビーフのサラダ仕立て",
    subject: "ローストビーフ",
    subjectEn: "Roast Beef",
    aspect: "square",
  },
  {
    src: "/images/story/apple-slicing.jpg",
    alt: "りんごを薄くスライスして並べるK-laboの仕込みのようす",
    subject: "仕込み",
    subjectEn: "Prep",
    aspect: "portrait",
  },
  {
    src: "/images/shop/interior-opening-flowers.jpg",
    alt: "アートが飾られたK-laboの店内と開店祝いの花",
    subject: "店内のしつらえ",
    subjectEn: "Atmosphere",
    aspect: "landscape",
  },
];
