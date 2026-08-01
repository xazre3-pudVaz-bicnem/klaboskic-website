import Placeholder from "@/components/ui/Placeholder";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import LinkButton from "@/components/ui/LinkButton";
import { siteConfig } from "@/data/siteConfig";

/** 08. アクセス — 路線図モチーフの静かなビジュアル */
export default function AccessSection() {
  return (
    <section
      aria-labelledby="access-heading"
      className="border-y border-ink/10 bg-paper"
    >
      <div className="mx-auto grid w-full max-w-6xl gap-14 px-5 py-24 sm:px-8 sm:py-36 md:grid-cols-12 md:gap-10">
        <div className="flex flex-col gap-9 md:col-span-5">
          <SectionHeading
            index="07"
            label="Access"
            title={<span id="access-heading">紫駅の、すぐそばに</span>}
          />
          <Reveal delay={0.15}>
            <dl className="flex flex-col gap-6 text-sm">
              <div className="flex flex-col gap-1.5 border-b border-ink/10 pb-5">
                <dt className="font-serif-en text-[0.62rem] uppercase tracking-[0.3em] text-olive-deep">
                  Shop
                </dt>
                <dd className="font-mincho text-lg tracking-[0.08em]">
                  {siteConfig.name}（{siteConfig.nameJa}）
                </dd>
              </div>
              <div className="flex flex-col gap-1.5 border-b border-ink/10 pb-5">
                <dt className="font-serif-en text-[0.62rem] uppercase tracking-[0.3em] text-olive-deep">
                  Address
                </dt>
                <dd className="leading-[2]">{siteConfig.address.full}</dd>
              </div>
              <div className="flex flex-col gap-1.5 border-b border-ink/10 pb-5">
                <dt className="font-serif-en text-[0.62rem] uppercase tracking-[0.3em] text-olive-deep">
                  Train
                </dt>
                <dd className="leading-[2]">{siteConfig.access}</dd>
              </div>
              <div className="flex flex-col gap-1.5 border-b border-ink/10 pb-5">
                <dt className="font-serif-en text-[0.62rem] uppercase tracking-[0.3em] text-olive-deep">
                  Open
                </dt>
                <dd className="leading-[2]">
                  月曜日 – 金曜日 11:30 – 18:30
                  <br />
                  土曜日・日曜日 11:30 – 17:00
                </dd>
              </div>
              <div className="flex flex-col gap-1.5">
                <dt className="font-serif-en text-[0.62rem] uppercase tracking-[0.3em] text-olive-deep">
                  Tel
                </dt>
                <dd>
                  <a
                    href={siteConfig.phoneHref}
                    className="inline-flex min-h-11 items-center border-b border-ink/30 py-1 tracking-[0.06em] transition-colors hover:text-olive-deep"
                    aria-label={`K-laboに電話する ${siteConfig.phone}`}
                  >
                    {siteConfig.phone}
                  </a>
                </dd>
              </div>
            </dl>
          </Reveal>
          <Reveal delay={0.25} className="flex flex-wrap gap-4">
            <LinkButton href={siteConfig.googleMapsUrl} external>
              Googleマップで開く
            </LinkButton>
            <LinkButton href="/access" variant="text">
              店舗情報を見る
            </LinkButton>
          </Reveal>
        </div>

        {/* 外観写真と、駅からの近さを伝える簡易ダイアグラム */}
        <div className="flex flex-col gap-6 md:col-span-7 md:col-start-6 lg:col-span-6 lg:col-start-7">
          <Reveal delay={0.15}>
            <Placeholder
              src="/images/shop/exterior-day.jpg"
              alt="紫駅東口すぐ、K-laboの外観。入口に立て看板が置かれている"
              aspect="aspect-[16/10]"
              sizes="(min-width: 768px) 55vw, 100vw"
            />
          </Reveal>
          <Reveal delay={0.2} className="flex items-center">
          <figure className="grain w-full bg-ink px-7 py-14 text-ivory sm:px-12 sm:py-20">
            <figcaption className="sr-only">
              西鉄天神大牟田線 紫駅とK-laboの位置関係
            </figcaption>
            <p className="font-serif-en text-[0.62rem] uppercase tracking-[0.34em] text-gold">
              Nishitetsu Tenjin–Omuta Line
            </p>
            <div aria-hidden="true" className="mt-12">
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
                <span className="font-mincho text-base tracking-[0.2em] text-ivory">
                  紫
                </span>
                <span>朝倉街道</span>
              </div>
              <div className="mt-10 flex flex-col items-center gap-3">
                <span className="block h-10 w-px bg-gradient-to-b from-gold/70 to-gold/10" />
                <p className="font-mincho text-sm tracking-[0.18em] text-gold">
                  東口から徒歩約0分
                </p>
                <p className="font-serif-en text-[0.6rem] uppercase tracking-[0.3em] text-ivory/50">
                  K-labo — Higashi Exit
                </p>
              </div>
            </div>
          </figure>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
