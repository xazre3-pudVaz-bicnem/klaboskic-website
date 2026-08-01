# K-labo 公式サイト

福岡県筑紫野市紫・紫駅東口すぐのテイクアウト＆カフェ「K-labo」の公式サイト。

- Next.js（App Router）+ TypeScript + Tailwind CSS v4
- 全ページ静的生成。Vercelにそのままデプロイ可能。

## コマンド

```bash
npm run dev        # 開発サーバー
npm run build      # 本番ビルド
npm run lint       # ESLint
npm run typecheck  # 型チェック
```

## 店舗情報の更新

店舗情報は [src/data/siteConfig.ts](src/data/siteConfig.ts) で一元管理しています。
ここを書き換えれば、表示・構造化データの双方に反映されます。

| ファイル | 内容 |
| --- | --- |
| `src/data/siteConfig.ts` | 店名・住所・電話・営業時間・Instagram など |
| `src/data/menu.ts` | メニュー（カテゴリ・商品・価格・写真） |
| `src/data/news.ts` | お知らせ |
| `src/data/gallery.ts` | トップページのギャラリー写真 |

### 確認済みの情報

- 住所：福岡県筑紫野市紫2-1-5（紫駅東口すぐ）
- 電話：070-8959-5364
- 営業時間：月〜金 11:30–18:30／土・日 11:30–17:00
- カウンター席あり（テイクアウト中心）
- Uber Eats 対応

### 未確認（オーナー確認が必要）

`siteConfig.ts` 内で空欄またはコメント付きにしています。

- 定休日・臨時休業の扱い（現在は「Instagramの営業日カレンダーをご確認ください」と表記）
- 郵便番号（818-0061 はマップ検索結果。要確認。現在は構造化データのみで使用）
- 各商品の価格（すべて「店頭・Instagramでご確認ください」と表記）
- 駐車場の有無
- 予約・取り置きの可否
- LINE公式アカウントのURL（`siteConfig.line.url`）
- Uber Eats の店舗ページURL（`siteConfig.uberEats.url`）

**架空の口コミ・評価・受賞歴・価格は掲載しない方針です。**
未確認の情報は断定せず、Instagramへ誘導する構成にしています。

## 公開前に必ず設定するもの

**本番URL** — 独自ドメイン決定後、環境変数 `NEXT_PUBLIC_SITE_URL` を実URLに
設定してください。canonical / OGP / sitemap がこの値を使用します。
未設定時は `https://k-labo.vercel.app` が使われます。

## 画像について

`/public/images/` にカテゴリ別で配置しています（全80点）。

| フォルダ | 内容 |
| --- | --- |
| `brand/` | ロゴ（原本 + 背景透過処理した3色版・モノグラム） |
| `hero/` | トップページのヒーロー写真 |
| `food/` | バインミー・丼・オリエンタルメニューなど |
| `delica/` | お弁当・お惣菜・オードブル |
| `sweets/` | ストロープワッフル・クッキーなど |
| `drinks/` | レモネード・アイスコーヒー |
| `shop/` | 外観・店内 |
| `story/` | 仕込み・調理風景 |

### ロゴの3色版について

公式ロゴ（`brand/k-labo-logo-original.jpg`）はダークブラウン背景のJPEGのため、
輝度からアルファマスクを生成して背景を透過したPNGを用意しています。

- `k-labo-logo-ink.png` — 明るい背景用（ヘッダー等）
- `k-labo-logo-ivory.png` — 暗い背景用（ヒーロー・フッター）
- `k-labo-logo-gold.png` — 原色
- `k-labo-mark-*.png` — 円形モノグラムのみ

ロゴ原本を差し替える場合は、同じ手順で3色版を再生成してください。

### 写真の差し替え

各データファイルの `image` / `src` にパスを書き換えるだけで反映されます。
ヒーロー写真は [Hero.tsx](src/components/sections/home/Hero.tsx) の
`<Image src="...">` を差し替え、モバイルの `object-position` を
被写体に合わせて調整してください。
