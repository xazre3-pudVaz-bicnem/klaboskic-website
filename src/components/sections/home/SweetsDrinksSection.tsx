import Placeholder from "@/components/ui/Placeholder";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import LinkButton from "@/components/ui/LinkButton";

/** 06. スイーツ＆ドリンク */
export default function SweetsDrinksSection() {
  return (
    <section
      aria-labelledby="sweets-heading"
      className="border-y border-ink/10 bg-ivory-soft/60"
    >
      <div className="mx-auto w-full max-w-6xl px-5 py-24 sm:px-8 sm:py-36">
        <SectionHeading
          index="05"
          label="Sweets & Drinks"
          title={
            <span id="sweets-heading">
              甘いものと、一杯の楽しみ
            </span>
          }
        />

        <div className="mt-14 grid gap-x-10 gap-y-14 md:grid-cols-12 sm:mt-20">
          <Reveal className="md:col-span-6">
            <figure>
              <Placeholder
                src="/images/sweets/sandwich-cookies.jpg"
                alt="クリームをはさんだ4種のK-laboのサンドクッキー"
                aspect="aspect-[5/4]"
                sizes="(min-width: 768px) 48vw, 100vw"
              />
              <figcaption className="mt-6 flex flex-col gap-2.5">
                <p className="font-serif-en text-[0.65rem] uppercase tracking-[0.3em] text-olive-deep">
                  Sweets
                </p>
                <h3 className="font-mincho text-xl tracking-[0.08em]">
                  かわいらしい、季節のスイーツ
                </h3>
                <p className="max-w-md text-[0.82rem] leading-[2.1] text-espresso">
                  見た目にも心が弾む、手づくりのスイーツたち。季節限定のフレーバーやギフト用の詰め合わせもご用意しています。
                </p>
              </figcaption>
            </figure>
          </Reveal>

          <Reveal delay={0.15} className="md:col-span-5 md:col-start-8 md:mt-20">
            <figure>
              <Placeholder
                src="/images/drinks/citrus-soda-lemon.jpg"
                alt="レモンとミントを添えたK-laboのシトラスレモネード"
                aspect="aspect-[4/5]"
                sizes="(min-width: 768px) 38vw, 100vw"
              />
              <figcaption className="mt-6 flex flex-col gap-2.5">
                <p className="font-serif-en text-[0.65rem] uppercase tracking-[0.3em] text-olive-deep">
                  Drinks
                </p>
                <h3 className="font-mincho text-xl tracking-[0.08em]">
                  シェアしたくなる、レモネード
                </h3>
                <p className="max-w-md text-[0.82rem] leading-[2.1] text-espresso">
                  レモネードを中心にしたドリンクをご用意しています。バインミーのお供にも、休憩のひとときにも。
                </p>
              </figcaption>
            </figure>
          </Reveal>
        </div>

        <Reveal delay={0.1} className="mt-14">
          <LinkButton href="/menu" variant="text">
            メニューをすべて見る
          </LinkButton>
        </Reveal>
      </div>
    </section>
  );
}
