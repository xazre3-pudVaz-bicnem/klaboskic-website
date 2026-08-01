/**
 * お知らせデータ
 *
 * 新しいお知らせは配列の先頭に追加する。
 * 日付は "YYYY-MM-DD" 形式。
 */

export type NewsItem = {
  /** 日付（YYYY-MM-DD） */
  date: string;
  /** カテゴリ */
  category: "お知らせ" | "メニュー" | "営業情報";
  /** タイトル */
  title: string;
  /** 本文（段落ごとの配列） */
  body: string[];
};

export const newsItems: NewsItem[] = [
  {
    date: "2026-08-01",
    category: "お知らせ",
    title: "K-labo 公式サイトを公開しました",
    body: [
      "福岡県筑紫野市紫のテイクアウト＆カフェ「K-labo」の公式サイトを公開しました。お店のこと、メニューのこと、バンコクでの9年間から始まったK-laboの軌跡などをご紹介しています。",
      "当日のラインナップや臨時の営業案内など、日々の最新情報はこれまでどおり公式Instagramでお知らせしていきます。あわせてご覧ください。",
    ],
  },
  {
    date: "2026-08-01",
    category: "営業情報",
    title: "営業時間のご案内",
    body: [
      "月曜日から金曜日は11時30分から18時30分まで、土曜日・日曜日は11時30分から17時00分までの営業です。",
      "臨時休業などの最新の営業日は、公式Instagramの営業日カレンダーでお知らせしています。ご来店前にご確認ください。",
    ],
  },
];

/** 日付を「2026.08.01」表記に変換 */
export function formatNewsDate(date: string): string {
  return date.replaceAll("-", ".");
}

/** 日付をdatetime属性用に返す */
export function toDatetime(date: string): string {
  return date;
}
