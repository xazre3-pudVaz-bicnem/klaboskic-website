import Placeholder from "@/components/ui/Placeholder";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import LinkButton from "@/components/ui/LinkButton";
import { PRICE_UNCONFIRMED } from "@/data/menu";

/** 03. シグネチャーメニュー — 非対称レイアウト */
export default function SignatureSection() {
  return (
    <section
      aria-labelledby="signature-heading"
      className="border-y border-ink/10 bg-paper"
    >
      <div className="mx-auto w-full max-w-6xl px-5 py-24 sm:px-8 sm:py-36">
        <SectionHeading
          index="02"
          label="Signature"
          title={
            <span id="signature-heading">
              バインミーと、
              <br className="sm:hidden" />
              日々のおいしいもの
            </span>
          }
        />

        <div className="mt-14 grid gap-x-10 gap-y-16 md:grid-cols-12 sm:mt-20">
          {/* メイン: バインミー */}
          <Reveal className="md:col-span-7">
            <figure>
              <Placeholder
                src="/images/food/banh-mi-shrimp.jpg"
                alt="海老とパクチーをはさんだK-laboのバインミー"
                aspect="aspect-[4/3]"
                sizes="(min-width: 768px) 58vw, 100vw"
              />
              <figcaption className="mt-6 flex flex-col gap-2.5">
                <p className="font-serif-en text-[0.65rem] uppercase tracking-[0.3em] text-olive-deep">
                  Banh Mi
                </p>
                <p className="font-mincho text-2xl tracking-[0.08em]">
                  バインミー
                </p>
                <p className="max-w-md text-[0.82rem] leading-[2.1] text-espresso">
                  軽い食感のパンに具材を挟んだ、ベトナム生まれのサンドイッチ。片手で気軽に楽しめる、K-laboの看板メニューです。
                </p>
                <p className="text-[0.72rem] tracking-[0.06em] text-olive-deep">
                  {PRICE_UNCONFIRMED}
                </p>
              </figcaption>
            </figure>
          </Reveal>

          {/* サブ: スイーツ・デリカ */}
          <div className="flex flex-col gap-14 md:col-span-5 md:mt-24">
            <Reveal delay={0.15}>
              <figure>
                <Placeholder
                  src="/images/sweets/stroopwafel-nuts.jpg"
                  alt="ナッツとチョコレートをあしらったK-laboのストロープワッフル"
                  aspect="aspect-square"
                  sizes="(min-width: 768px) 38vw, 100vw"
                />
                <figcaption className="mt-5 flex flex-col gap-2">
                  <p className="font-mincho text-lg tracking-[0.08em]">
                    ざくっと香ばしい、ストロープワッフル
                  </p>
                  <p className="text-[0.8rem] leading-[2] text-espresso">
                    おやつの時間にも、手土産にも。季節のスイーツをご用意しています。
                  </p>
                </figcaption>
              </figure>
            </Reveal>
            <Reveal delay={0.25}>
              <figure>
                <Placeholder
                  src="/images/delica/bento-premium.jpg"
                  alt="刺身やローストビーフを詰め合わせたK-laboの幕の内弁当"
                  aspect="aspect-[5/4]"
                  sizes="(min-width: 768px) 38vw, 100vw"
                />
                <figcaption className="mt-5 flex flex-col gap-2">
                  <p className="font-mincho text-lg tracking-[0.08em]">
                    お肉とお魚の、お惣菜とお弁当
                  </p>
                  <p className="text-[0.8rem] leading-[2] text-espresso">
                    今日の食卓にもう一品。そのまま並べられるデリカが揃います。
                  </p>
                </figcaption>
              </figure>
            </Reveal>
          </div>
        </div>

        <Reveal delay={0.1} className="mt-16 flex flex-col items-start gap-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-[0.75rem] leading-[1.9] text-olive-deep">
            当日のラインナップ・価格は、店頭および公式Instagramでご案内しています。
          </p>
          <LinkButton href="/menu">メニューを見る</LinkButton>
        </Reveal>
      </div>
    </section>
  );
}
