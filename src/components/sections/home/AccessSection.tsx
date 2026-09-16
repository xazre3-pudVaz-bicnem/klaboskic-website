import Placeholder from "@/components/ui/Placeholder";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import LinkButton from "@/components/ui/LinkButton";
import { CarIcon, ClockIcon, MapPinIcon, PhoneIcon } from "@/components/ui/icons";
import { getParkingInfo, siteConfig } from "@/data/siteConfig";

/** 07. アクセス — 「紫駅東口から徒歩約0分」を大きく見せる */
export default function AccessSection() {
  const parking = getParkingInfo();

  const rows = [
    {
      icon: <MapPinIcon className="h-4 w-4" />,
      label: "住所",
      value: siteConfig.address.full,
    },
    {
      icon: <ClockIcon className="h-4 w-4" />,
      label: "営業時間",
      value: (
        <>
          月〜金 11:30 – 18:30／土・日 11:30 – 17:00
          <span className="mt-0.5 block text-[0.72rem] text-olive-deep">
            {siteConfig.openDaysNote}
          </span>
        </>
      ),
    },
    {
      icon: <PhoneIcon className="h-4 w-4" />,
      label: "電話",
      value: (
        <a
          href={siteConfig.phoneHref}
          className="border-b border-ink/30 tracking-[0.06em] transition-colors hover:text-olive-deep"
          aria-label={`K-laboに電話する ${siteConfig.phone}`}
        >
          {siteConfig.phone}
        </a>
      ),
    },
    {
      icon: <CarIcon className="h-4 w-4" />,
      label: "駐車場",
      value: (
        <>
          {parking.summary}
          {parking.detail && (
            <span className="mt-0.5 block text-[0.72rem] text-olive-deep">{parking.detail}</span>
          )}
        </>
      ),
    },
  ];

  return (
    <section id="access" aria-labelledby="access-heading" className="border-t border-ink/10 bg-paper">
      <div className="mx-auto grid w-full max-w-6xl gap-14 px-5 py-20 sm:px-8 sm:py-32 md:grid-cols-12 md:gap-10">
        <div className="flex flex-col gap-9 md:col-span-6 lg:col-span-5">
          <SectionHeading
            index="06"
            label="Access"
            title={<span id="access-heading">駅チカ、アクセス便利。</span>}
          />

          {/* 駅からの近さ */}
          <Reveal delay={0.1}>
            <div className="border-y border-ink/12 py-6">
              <p className="text-[0.76rem] tracking-[0.1em] text-olive-deep">
                西鉄天神大牟田線「紫駅」東口から
              </p>
              <p className="mt-2 flex items-baseline gap-3 font-mincho text-2xl tracking-[0.1em] sm:text-3xl">
                徒歩約
                <span className="font-serif-en text-[5.5rem] leading-[0.85] tracking-normal text-gold-text sm:text-[6.5rem]">
                  0
                </span>
                分
              </p>
              <p className="mt-3 text-[0.78rem] leading-[1.9] text-espresso">
                改札を出て東口へ。電車の待ち時間や、お仕事・お買い物帰りにも立ち寄りやすい駅前です。
              </p>
              <p className="mt-4 flex flex-wrap items-baseline gap-x-3 gap-y-1 border-t border-ink/10 pt-4">
                <span className="text-[0.76rem] tracking-[0.1em] text-olive-deep">JR鹿児島本線「二日市駅」から</span>
                <span className="font-mincho text-lg tracking-[0.1em]">徒歩5分</span>
                <span className="text-[0.72rem] text-espresso">（{siteConfig.accessJrFromHakata}）</span>
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.15}>
            <dl className="flex flex-col">
              {rows.map((row) => (
                <div
                  key={row.label}
                  className="grid grid-cols-[5.5rem_1fr] gap-3 border-b border-ink/10 py-4 text-[0.84rem] last:border-b-0"
                >
                  <dt className="flex items-center gap-2 self-start pt-0.5 text-[0.76rem] tracking-[0.1em] text-olive-deep">
                    {row.icon}
                    {row.label}
                  </dt>
                  <dd className="leading-[1.9] text-ink">{row.value}</dd>
                </div>
              ))}
            </dl>
          </Reveal>

          <Reveal delay={0.2} className="flex flex-wrap gap-4">
            <LinkButton href={siteConfig.googleMapsUrl} external>
              Google Mapで見る
            </LinkButton>
            <LinkButton href="/access" variant="text">
              アクセス・駐車場の詳細
            </LinkButton>
          </Reveal>
        </div>

        {/* 外観写真と、駅からの近さを伝える簡易ダイアグラム */}
        <div className="flex flex-col gap-6 md:col-span-6 md:col-start-7 lg:col-span-6 lg:col-start-7">
          <Reveal delay={0.15}>
            <Placeholder
              src="/images/shop/exterior-evening.jpg"
              alt="夕暮れのK-laboの外観。入口にメニューの看板が置かれている"
              aspect="aspect-[16/10]"
              sizes="(min-width: 768px) 50vw, 100vw"
            />
          </Reveal>
          <Reveal delay={0.2}>
            <figure className="grain w-full bg-ink px-7 py-12 text-ivory sm:px-12 sm:py-16">
              <figcaption className="sr-only">西鉄紫駅・JR二日市駅とK-laboの位置関係</figcaption>
              <p className="font-serif-en text-[0.62rem] uppercase tracking-[0.34em] text-gold">
                Nishitetsu Tenjin–Omuta Line
              </p>
              <div aria-hidden="true" className="mt-10">
                <div className="relative">
                  <span className="reveal-line block h-px w-full bg-ivory/35" />
                  <div className="absolute inset-x-0 -top-[3px] flex justify-between">
                    <span className="h-[7px] w-[7px] rounded-full border border-ivory/60 bg-ink" />
                    <span className="h-[7px] w-[7px] rounded-full bg-gold" />
                    <span className="h-[7px] w-[7px] rounded-full border border-ivory/60 bg-ink" />
                  </div>
                </div>
                <div className="mt-5 flex justify-between text-[0.68rem] tracking-[0.14em] text-ivory/65">
                  <span>西鉄二日市</span>
                  <span className="font-mincho text-base tracking-[0.2em] text-ivory">紫</span>
                  <span>朝倉街道</span>
                </div>
                <div className="mt-8 flex flex-col items-center gap-3">
                  <span className="block h-10 w-px bg-gradient-to-b from-gold/70 to-gold/10" />
                  <p className="font-mincho text-sm tracking-[0.18em] text-gold">東口を出てすぐ</p>
                  <p className="font-serif-en text-[0.6rem] uppercase tracking-[0.3em] text-ivory/50">
                    K-labo — Higashi Exit
                  </p>
                </div>
              </div>

              {/* JR鹿児島本線 */}
              <p className="mt-12 font-serif-en text-[0.62rem] uppercase tracking-[0.34em] text-gold">
                JR Kagoshima Main Line
              </p>
              <div aria-hidden="true" className="mt-8">
                <div className="relative">
                  <span className="reveal-line block h-px w-full bg-ivory/35" />
                  <div className="absolute inset-x-0 -top-[3px] flex justify-between">
                    <span className="h-[7px] w-[7px] rounded-full border border-ivory/60 bg-ink" />
                    <span className="h-[7px] w-[7px] rounded-full bg-gold" />
                    <span className="h-[7px] w-[7px] rounded-full border border-ivory/60 bg-ink" />
                  </div>
                </div>
                <div className="mt-5 flex justify-between text-[0.68rem] tracking-[0.14em] text-ivory/65">
                  <span>博多</span>
                  <span className="font-mincho text-base tracking-[0.12em] text-ivory">JR二日市</span>
                  <span>久留米</span>
                </div>
                <p className="mt-6 text-center font-mincho text-sm tracking-[0.18em] text-gold">
                  二日市駅から徒歩5分
                </p>
              </div>
              <p className="sr-only">
                JR鹿児島本線「二日市駅」から徒歩5分。博多駅から二日市駅までは約15分です。
              </p>
            </figure>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
