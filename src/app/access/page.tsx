import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import LinkButton from "@/components/ui/LinkButton";
import Placeholder from "@/components/ui/Placeholder";
import { CarIcon, InstagramIcon, PhoneIcon } from "@/components/ui/icons";
import QuickActions from "@/components/sections/shared/QuickActions";
import { getParkingInfo, siteConfig } from "@/data/siteConfig";

const parking = getParkingInfo();

export const metadata: Metadata = {
  title: "店舗情報・アクセス｜紫駅東口 徒歩約0分",
  description:
    "K-laboの店舗情報とアクセス。所在地は福岡県筑紫野市紫2-1-5、西鉄天神大牟田線・紫駅東口から徒歩約0分。駐車場、営業時間、ご予約・お取り置き、デリバリーについてご案内します。",
  alternates: { canonical: "/access" },
  openGraph: {
    title: "店舗情報・アクセス｜K-labo｜筑紫野・紫駅すぐ",
    description:
      "福岡県筑紫野市紫2-1-5。西鉄紫駅東口から徒歩約0分のテイクアウト＆カフェ K-laboへのアクセスをご案内します。",
    url: "/access",
    images: [{ url: "/opengraph-image", width: 1200, height: 630 }],
  },
};

type InfoRow = {
  label: string;
  labelEn: string;
  value: React.ReactNode;
};

const shopInfo: InfoRow[] = [
  { label: "店名", labelEn: "Name", value: "K-labo（ケイラボ）" },
  { label: "業態", labelEn: "Type", value: "カフェ＆テイクアウトショップ" },
  { label: "所在地", labelEn: "Address", value: siteConfig.address.full },
  { label: "アクセス", labelEn: "Access", value: siteConfig.access },
  {
    label: "営業時間",
    labelEn: "Hours",
    value: (
      <>
        月曜日 – 金曜日　11:30 – 18:30
        <br />
        土曜日・日曜日　11:30 – 17:00
      </>
    ),
  },
  {
    label: "電話番号",
    labelEn: "Tel",
    value: (
      <a
        href={siteConfig.phoneHref}
        className="inline-flex min-h-11 items-center border-b border-ink/30 py-1 tracking-[0.06em] transition-colors hover:text-olive-deep"
        aria-label={`K-laboに電話する ${siteConfig.phone}`}
      >
        {siteConfig.phone}
      </a>
    ),
  },
  {
    label: "店内席",
    labelEn: "Seating",
    value:
      "テイクアウトが中心のお店ですが、カウンター席もご用意しています。お仕事帰りやお買い物ついでにもお立ち寄りください。",
  },
  {
    label: "駐車場",
    labelEn: "Parking",
    value: (
      <>
        {parking.summary}
        {parking.detail && <span className="block">{parking.detail}</span>}
        <a href="#parking" className="mt-1 inline-block border-b border-ink/30 text-[0.76rem] text-ink">
          駐車場のご案内を見る
        </a>
      </>
    ),
  },
  {
    label: "ご予約",
    labelEn: "Reservation",
    value: siteConfig.reservation.message,
  },
  {
    label: "デリバリー",
    labelEn: "Delivery",
    value: `${siteConfig.uberEats.name}・${siteConfig.rocketNow.name}に対応しています。`,
  },
];

export default function AccessPage() {
  return (
    <>
      <PageHero
        label="Access"
        title="店舗情報・アクセス"
        titleEn="Murasaki Sta. East Exit — 0 min walk"
        lede={
          <>
            K-laboは、西鉄天神大牟田線「紫駅」東口を出てすぐ。西鉄二日市駅からもひと駅の、立ち寄りやすい駅前のお店です。
          </>
        }
        breadcrumbs={[{ name: "店舗情報・アクセス", path: "/access" }]}
      />

      {/* 店舗情報 */}
      <section
        aria-labelledby="shop-info-heading"
        className="mx-auto w-full max-w-6xl px-5 py-20 sm:px-8 sm:py-28"
      >
        <div className="grid gap-14 md:grid-cols-12">
          <div className="md:col-span-6">
            <SectionHeading
              label="Shop Info"
              title={<span id="shop-info-heading">店舗情報</span>}
            />
            <dl className="mt-10 flex flex-col">
              {shopInfo.map((row, index) => (
                <Reveal
                  key={row.label}
                  delay={index * 0.05}
                  className="grid grid-cols-[7rem_1fr] gap-4 border-b border-ink/12 py-5 first:border-t sm:grid-cols-[8.5rem_1fr]"
                >
                  <dt className="flex flex-col gap-0.5">
                    <span className="text-[0.8rem] tracking-[0.1em] text-ink">
                      {row.label}
                    </span>
                    <span className="font-serif-en text-[0.58rem] uppercase tracking-[0.26em] text-olive-deep">
                      {row.labelEn}
                    </span>
                  </dt>
                  <dd className="text-[0.82rem] leading-[2.1] text-espresso">
                    {row.value}
                  </dd>
                </Reveal>
              ))}
            </dl>
            <Reveal delay={0.2} className="mt-6">
              <p className="text-[0.75rem] leading-[2] text-olive-deep">
                {siteConfig.openDaysNote}
              </p>
            </Reveal>
            <Reveal delay={0.25} className="mt-6 flex flex-wrap items-center gap-5">
              <LinkButton href={siteConfig.googleMapsUrl} external>
                Googleマップで開く
              </LinkButton>
              <a
                href={siteConfig.phoneHref}
                className="inline-flex min-h-11 items-center gap-2.5 border-b border-ink/40 py-2 text-sm tracking-[0.12em] transition-colors hover:text-olive-deep"
                aria-label={`K-laboに電話する ${siteConfig.phone}`}
              >
                <PhoneIcon className="h-4 w-4" />
                {siteConfig.phone}
              </a>
              <a
                href={siteConfig.instagram.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-11 items-center gap-2.5 border-b border-ink/40 py-2 text-sm tracking-[0.12em] transition-colors hover:text-olive-deep"
                aria-label="K-labo公式Instagram（新しいタブで開きます）"
              >
                <InstagramIcon className="h-4 w-4" />
                {siteConfig.instagram.handle}
              </a>
            </Reveal>
          </div>

          {/* 地図 */}
          <Reveal delay={0.15} className="md:col-span-6">
            <div className="flex h-full flex-col gap-4">
              <div className="relative aspect-[4/3] overflow-hidden border border-ink/15 md:h-full md:min-h-105">
                <iframe
                  src={siteConfig.mapEmbedUrl}
                  title="K-laboの地図（福岡県筑紫野市紫2-1-5）"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  allowFullScreen
                  className="absolute inset-0 h-full w-full border-0 grayscale-[35%] contrast-[0.95]"
                />
              </div>
              <p className="text-[0.72rem] leading-[1.9] text-olive-deep">
                地図が表示されない場合は「Googleマップで開く」からご覧ください。
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 電車でのアクセス */}
      <section
        aria-labelledby="train-heading"
        className="border-t border-ink/10 bg-paper"
      >
        <div className="mx-auto w-full max-w-6xl px-5 py-20 sm:px-8 sm:py-28">
          <SectionHeading
            label="By Train"
            title={<span id="train-heading">電車でお越しの方へ</span>}
          />
          <Reveal delay={0.05} className="mt-10 flex flex-wrap items-baseline gap-x-4 gap-y-2 border-y border-ink/12 py-6">
            <span className="text-[0.8rem] tracking-[0.1em] text-olive-deep">西鉄天神大牟田線「紫駅」東口から</span>
            <span className="flex items-baseline gap-2 font-mincho text-2xl tracking-[0.1em]">
              徒歩約
              <span className="font-serif-en text-6xl leading-none text-gold-text">0</span>
              分
            </span>
          </Reveal>
          <div className="mt-12 grid gap-10 md:grid-cols-2">
            <Reveal delay={0.1}>
              <div className="flex h-full flex-col gap-4 border border-ink/12 bg-ivory px-8 py-9">
                <p className="font-serif-en text-[0.62rem] uppercase tracking-[0.3em] text-gold-text">
                  From Murasaki Sta.
                </p>
                <h3 className="font-mincho text-lg tracking-[0.1em]">
                  紫駅から
                </h3>
                <p className="text-[0.82rem] leading-[2.2] text-espresso">
                  西鉄天神大牟田線「紫駅」の改札を出て、東口へ。駅前すぐ（徒歩約0分）の場所にあります。電車の待ち時間に立ち寄っていただけます。
                </p>
              </div>
            </Reveal>
            <Reveal delay={0.2}>
              <div className="flex h-full flex-col gap-4 border border-ink/12 bg-ivory px-8 py-9">
                <p className="font-serif-en text-[0.62rem] uppercase tracking-[0.3em] text-gold-text">
                  From Nishitetsu-Futsukaichi
                </p>
                <h3 className="font-mincho text-lg tracking-[0.1em]">
                  西鉄二日市駅から
                </h3>
                <p className="text-[0.82rem] leading-[2.2] text-espresso">
                  西鉄二日市駅からはひと駅。二日市エリアでのお買い物や乗り換えの途中にも、気軽にご利用いただけます。
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 駐車場 */}
      <section
        id="parking"
        aria-labelledby="parking-heading"
        className="scroll-mt-24 border-t border-ink/10 bg-ivory"
      >
        <div className="mx-auto grid w-full max-w-6xl gap-10 px-5 py-20 sm:px-8 sm:py-28 md:grid-cols-12">
          <div className="flex flex-col gap-8 md:col-span-6">
            <SectionHeading
              label="Parking"
              title={<span id="parking-heading">お車でお越しの方へ</span>}
            />
            <Reveal delay={0.1}>
              <dl className="flex flex-col border-t border-ink/12">
                <div className="grid grid-cols-[7rem_1fr] gap-4 border-b border-ink/12 py-5 sm:grid-cols-[8.5rem_1fr]">
                  <dt className="flex items-center gap-2 text-[0.8rem] tracking-[0.1em] text-ink">
                    <CarIcon className="h-4 w-4 text-olive-deep" />
                    台数
                  </dt>
                  <dd className="text-[0.86rem] leading-[2] text-espresso">
                    {siteConfig.parking.spaces || "準備中"}
                  </dd>
                </div>
                <div className="grid grid-cols-[7rem_1fr] gap-4 border-b border-ink/12 py-5 sm:grid-cols-[8.5rem_1fr]">
                  <dt className="pl-6 text-[0.8rem] tracking-[0.1em] text-ink">場所</dt>
                  <dd className="text-[0.86rem] leading-[2] text-espresso">
                    {siteConfig.parking.location || "準備中"}
                  </dd>
                </div>
                {siteConfig.parking.fee && (
                  <div className="grid grid-cols-[7rem_1fr] gap-4 border-b border-ink/12 py-5 sm:grid-cols-[8.5rem_1fr]">
                    <dt className="pl-6 text-[0.8rem] tracking-[0.1em] text-ink">料金</dt>
                    <dd className="text-[0.86rem] leading-[2] text-espresso">
                      {siteConfig.parking.fee}
                    </dd>
                  </div>
                )}
              </dl>
            </Reveal>
            <Reveal delay={0.15}>
              <p className="border-l-2 border-gold pl-5 text-[0.82rem] leading-[2.1] text-espresso">
                {parking.detail ?? "満車の際やご不明な点は、お電話でお問い合わせください。"}
              </p>
            </Reveal>
            <Reveal delay={0.2} className="flex flex-wrap gap-4">
              <LinkButton href={siteConfig.googleMapsUrl} external>
                Google Mapで見る
              </LinkButton>
              <a
                href={siteConfig.phoneHref}
                className="inline-flex min-h-11 items-center gap-2.5 border-b border-ink/40 py-2 text-sm tracking-[0.12em] transition-colors hover:text-olive-deep"
                aria-label={`駐車場について電話で問い合わせる ${siteConfig.phone}`}
              >
                <PhoneIcon className="h-4 w-4" />
                {siteConfig.phone}
              </a>
            </Reveal>
          </div>
          {siteConfig.parking.image && (
            <Reveal delay={0.15} className="md:col-span-5 md:col-start-8">
              <Placeholder
                src={siteConfig.parking.image}
                alt="K-laboの駐車場"
                aspect="aspect-[4/3]"
                sizes="(min-width: 768px) 42vw, 100vw"
              />
            </Reveal>
          )}
        </div>
      </section>

      {/* 行動導線 */}
      <section aria-label="メニュー・デリバリー・SNS" className="border-t border-ink/10 bg-paper">
        <div className="mx-auto w-full max-w-6xl px-5 py-16 sm:px-8 sm:py-20">
          <Reveal>
            <QuickActions cols="grid-cols-2 md:grid-cols-3" />
          </Reveal>
        </div>
      </section>

      {/* 店舗のようす */}
      <section
        aria-labelledby="shop-photos-heading"
        className="border-t border-ink/10 bg-ivory"
      >
        <div className="mx-auto w-full max-w-6xl px-5 py-20 sm:px-8 sm:py-28">
          <SectionHeading
            label="The Shop"
            title={<span id="shop-photos-heading">お店のようす</span>}
          />
          <div className="mt-12 grid gap-8 md:grid-cols-2">
            <Reveal delay={0.1}>
              <figure>
                <Placeholder
                  src="/images/shop/exterior-night.jpg"
                  alt="夜のK-labo。壁面にロゴの看板と案内バナーが掲げられている"
                  aspect="aspect-[4/3]"
                  sizes="(min-width: 768px) 48vw, 100vw"
                />
                <figcaption className="mt-4 text-[0.78rem] leading-[2] text-espresso">
                  紫駅東口すぐ。壁面のロゴ看板が目印です。
                </figcaption>
              </figure>
            </Reveal>
            <Reveal delay={0.2} className="md:mt-12">
              <figure>
                <Placeholder
                  src="/images/shop/interior-counter.jpg"
                  alt="K-labo店内のカウンター席と、ロゴの暖簾がかかる受付カウンター"
                  aspect="aspect-[4/3]"
                  sizes="(min-width: 768px) 48vw, 100vw"
                />
                <figcaption className="mt-4 text-[0.78rem] leading-[2] text-espresso">
                  店内にはカウンター席をご用意しています。
                </figcaption>
              </figure>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
