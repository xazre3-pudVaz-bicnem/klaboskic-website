import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import Placeholder from "@/components/ui/Placeholder";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import LinkButton from "@/components/ui/LinkButton";
import JsonLd from "@/components/ui/JsonLd";
import { PhoneIcon } from "@/components/ui/icons";
import { faqJsonLd } from "@/lib/jsonld";
import { siteConfig } from "@/data/siteConfig";

export const metadata: Metadata = {
  title: "テイクアウトのご案内｜紫駅すぐの持ち帰りグルメ",
  description:
    "筑紫野市でテイクアウトなら、紫駅東口から徒歩約0分のK-labo。バインミーやお惣菜、スイーツを持ち帰りで楽しめます。注文から受け取りまでの流れと、当日メニューの確認方法をご案内します。",
  alternates: { canonical: "/takeout" },
  openGraph: {
    title: "テイクアウトのご案内｜K-labo｜筑紫野・紫駅すぐ",
    description:
      "バインミー・お惣菜・スイーツを持ち帰りで。筑紫野市・紫駅東口すぐのテイクアウト＆カフェ K-laboのテイクアウト案内です。",
    url: "/takeout",
    images: [{ url: "/opengraph-image", width: 1200, height: 630 }],
  },
};

const steps = [
  {
    number: "01",
    title: "当日のメニューを確かめる",
    text: "その日のラインナップは、公式Instagramのストーリーズ・投稿でご紹介しています。もちろん、店頭で選んでいただくのも歓迎です。",
  },
  {
    number: "02",
    title: "店頭でご注文",
    text: "紫駅東口を出てすぐの店舗にお越しください。ショーケースと当日のメニューから、お好きな品をお選びいただけます。",
  },
  {
    number: "03",
    title: "受け取って、日常へ",
    text: "袋に提げて、そのまま職場へ、公園へ、家の食卓へ。あたたかいうちに楽しんでいただくのがおすすめです。",
  },
];

const items = [
  {
    name: "バインミー",
    note: "片手で食べられる、テイクアウトの定番。",
    image: "/images/food/banh-mi-creamy-plate.jpg",
    alt: "皿に盛り付けたK-laboのバインミーとサラダ",
  },
  {
    name: "デリカ・お惣菜",
    note: "お肉やお魚のおかず。夕食にもう一品。",
    image: "/images/delica/roast-beef-pack.jpg",
    alt: "ロゴシールを貼った容器に入ったK-laboのローストビーフ",
  },
  {
    name: "スイーツ",
    note: "おやつや手土産に。かわいらしい手づくりの甘いもの。",
    image: "/images/sweets/stroopwafel-caramel.jpg",
    alt: "キャラメルチップとチョコレートをあしらったK-laboのストロープワッフル",
  },
  {
    name: "ドリンク",
    note: "フードと一緒に。散歩のお供にも。",
    image: "/images/drinks/lemon-soda-mint.jpg",
    alt: "レモンとミントを添えたK-laboのレモネード",
  },
];

const faqs = [
  {
    question: "テイクアウトはできますか？",
    answer:
      "はい。K-laboはテイクアウトを中心としたお店です。バインミーなどのフード、お惣菜やお弁当、スイーツ、ドリンクをお持ち帰りいただけます。",
  },
  {
    question: "営業時間を教えてください。",
    answer:
      "月曜日から金曜日は11時30分から18時30分まで、土曜日・日曜日は11時30分から17時00分までの営業です。臨時休業などの最新の営業日は、公式Instagram（@klaboskic）の営業日カレンダーをご確認ください。",
  },
  {
    question: "店内で食べることはできますか？",
    answer:
      "テイクアウトが中心のお店ですが、カウンター席もご用意しています。お仕事帰りやお買い物のついでにもお立ち寄りいただけます。",
  },
  {
    question: "デリバリーには対応していますか？",
    answer:
      "Uber Eatsでのデリバリーに対応しています。最新の対応状況・提供エリアはUber Eatsアプリまたは公式Instagramをご確認ください。",
  },
  {
    question: "予約や取り置きはできますか？",
    answer:
      "ご予約・お取り置きの受付については、お電話（070-8959-5364）または公式Instagramでお問い合わせください。",
  },
];

export default function TakeoutPage() {
  return (
    <>
      <JsonLd data={faqJsonLd(faqs)} />
      <PageHero
        label="Takeout"
        title={
          <>
            筑紫野の日常に、
            <br />
            持ち帰るおいしさを
          </>
        }
        titleEn="Takeout Guide"
        lede={
          <>
            K-laboは、紫駅東口から徒歩約0分のテイクアウト＆カフェ。仕事や学校の合間に、家族の食卓に、公園でのひとときに。筑紫野の毎日に寄り添う持ち帰りグルメをご用意しています。
          </>
        }
        breadcrumbs={[{ name: "テイクアウト", path: "/takeout" }]}
      />

      {/* テイクアウトできるもの */}
      <section
        aria-labelledby="takeout-items-heading"
        className="mx-auto w-full max-w-6xl px-5 py-20 sm:px-8 sm:py-28"
      >
        <SectionHeading
          label="Items"
          title={<span id="takeout-items-heading">お持ち帰りいただけるもの</span>}
        />
        <ul className="mt-12 grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((item, index) => (
            <Reveal as="li" key={item.name} delay={index * 0.08}>
              <figure className="flex h-full flex-col">
                <Placeholder
                  src={item.image}
                  alt={item.alt}
                  aspect="aspect-[4/3]"
                  sizes="(min-width: 1024px) 23vw, (min-width: 640px) 46vw, 100vw"
                />
                <figcaption className="mt-5 flex flex-col gap-2">
                  <span className="font-serif-en text-[0.62rem] uppercase tracking-[0.3em] text-gold-text">
                    0{index + 1}
                  </span>
                  <h3 className="font-mincho text-lg tracking-[0.1em]">
                    {item.name}
                  </h3>
                  <p className="text-[0.8rem] leading-[2] text-espresso">
                    {item.note}
                  </p>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </ul>
        <Reveal delay={0.1} className="mt-6">
          <p className="text-[0.75rem] leading-[2] text-olive-deep">
            内容は日替わり・季節替わりです。当日のラインナップは店頭・公式Instagramでご確認ください。
          </p>
        </Reveal>
      </section>

      {/* 流れ */}
      <section
        aria-labelledby="takeout-flow-heading"
        className="border-y border-ink/10 bg-paper"
      >
        <div className="mx-auto w-full max-w-6xl px-5 py-20 sm:px-8 sm:py-28">
          <SectionHeading
            label="How To"
            title={<span id="takeout-flow-heading">注文から受け取りまで</span>}
          />
          <ol className="mt-14 grid gap-12 md:grid-cols-3 md:gap-8">
            {steps.map((step, index) => (
              <Reveal as="li" key={step.number} delay={index * 0.12}>
                <div className="flex flex-col gap-5">
                  <div className="flex items-center gap-4">
                    <span className="font-serif-en text-3xl italic tracking-[0.06em] text-gold-text">
                      {step.number}
                    </span>
                    <span
                      aria-hidden="true"
                      className="reveal-line block h-px flex-1 bg-olive-deep/30"
                    />
                  </div>
                  <h3 className="font-mincho text-lg tracking-[0.1em]">
                    {step.title}
                  </h3>
                  <p className="text-[0.8rem] leading-[2.1] text-espresso">
                    {step.text}
                  </p>
                </div>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      {/* 受け取り場所 */}
      <section
        aria-labelledby="takeout-place-heading"
        className="mx-auto w-full max-w-6xl px-5 py-20 sm:px-8 sm:py-28"
      >
        <div className="grid gap-12 md:grid-cols-12">
          <div className="flex flex-col gap-8 md:col-span-6">
            <SectionHeading
              label="Pick Up"
              title={<span id="takeout-place-heading">受け取りは、紫駅東口すぐ</span>}
            />
            <Reveal delay={0.1} className="flex flex-col gap-4 text-sm leading-[2.2] text-espresso">
              <p>
                {siteConfig.name}（{siteConfig.nameJa}）
                <br />
                {siteConfig.address.full}
                <br />
                {siteConfig.access}
              </p>
              <p className="border-l-2 border-gold pl-5 text-[0.82rem]">
                月曜日 – 金曜日　11:30 – 18:30
                <br />
                土曜日・日曜日　11:30 – 17:00
              </p>
              <p className="text-[0.78rem] text-olive-deep">
                改札を出て東口へ。駅の目の前なので、電車の待ち時間にも受け取りやすい場所です。
              </p>
            </Reveal>
            <Reveal delay={0.2} className="flex flex-wrap items-center gap-4">
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
            </Reveal>
          </div>

          <Reveal delay={0.15} className="md:col-span-5 md:col-start-8">
            <div className="grain flex h-full flex-col justify-center gap-6 bg-ink px-8 py-12 text-ivory">
              <p className="font-serif-en text-[0.62rem] uppercase tracking-[0.34em] text-gold">
                Delivery
              </p>
              <h3 className="font-mincho text-xl tracking-[0.1em]">
                Uber Eatsにも対応
              </h3>
              <p className="text-[0.8rem] leading-[2.2] text-ivory/75">
                ご自宅からのご注文には、Uber Eatsでのデリバリーもご利用いただけます。最新の対応状況・提供エリアは、Uber Eatsアプリまたは公式Instagramをご確認ください。
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* FAQ */}
      <section
        aria-labelledby="takeout-faq-heading"
        className="border-t border-ink/10 bg-ivory-soft/60"
      >
        <div className="mx-auto w-full max-w-4xl px-5 py-20 sm:px-8 sm:py-28">
          <SectionHeading
            label="FAQ"
            title={<span id="takeout-faq-heading">よくあるご質問</span>}
          />
          <dl className="mt-12 flex flex-col">
            {faqs.map((faq, index) => (
              <Reveal
                key={faq.question}
                delay={index * 0.08}
                className="border-b border-ink/12 py-8 first:border-t"
              >
                <dt className="flex items-baseline gap-5">
                  <span className="font-serif-en text-sm italic text-gold-text">
                    Q
                  </span>
                  <span className="font-mincho text-base tracking-[0.08em] sm:text-lg">
                    {faq.question}
                  </span>
                </dt>
                <dd className="mt-4 flex items-baseline gap-5">
                  <span
                    className="font-serif-en text-sm italic text-olive-deep"
                    aria-hidden="true"
                  >
                    A
                  </span>
                  <span className="text-[0.82rem] leading-[2.2] text-espresso">
                    {faq.answer}
                  </span>
                </dd>
              </Reveal>
            ))}
          </dl>
          <Reveal delay={0.2} className="mt-12 flex justify-center">
            <LinkButton href={siteConfig.instagram.url} external>
              Instagramで当日のメニューを見る
            </LinkButton>
          </Reveal>
        </div>
      </section>
    </>
  );
}
