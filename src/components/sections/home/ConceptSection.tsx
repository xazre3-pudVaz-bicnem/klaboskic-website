import Placeholder from "@/components/ui/Placeholder";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import LinkButton from "@/components/ui/LinkButton";

/** 02. コンセプト */
export default function ConceptSection() {
  return (
    <section
      id="concept"
      aria-labelledby="concept-heading"
      className="mx-auto w-full max-w-6xl px-5 py-24 sm:px-8 sm:py-36"
    >
      <div className="grid gap-14 md:grid-cols-12 md:gap-10">
        <div className="flex flex-col gap-10 md:col-span-6 lg:col-span-5">
          <SectionHeading
            index="01"
            label="Concept"
            title={
              <span id="concept-heading">
                9年間のバンコク暮らしから
                <br />
                生まれた味
              </span>
            }
          />
          <Reveal delay={0.15} className="flex flex-col gap-6 text-sm leading-[2.3] text-espresso">
            <p>
              家族で過ごした、バンコクでの9年間。そこで出会ったのは、特別な日のごちそうではなく、街角や食卓にあたりまえのように溶け込んでいる味でした。
            </p>
            <p>
              甘さ、辛さ、酸味、そして香り。記憶の中のあの味を、筑紫野の日常でも気軽に楽しんでほしい。K-laboは、そんな思いから生まれたテイクアウト＆カフェです。
            </p>
          </Reveal>
          <Reveal delay={0.25}>
            <LinkButton href="/story" variant="text">
              K-laboの軌跡を読む
            </LinkButton>
          </Reveal>
        </div>

        <div className="relative md:col-span-6 md:col-start-7 lg:col-span-6 lg:col-start-7">
          <Reveal delay={0.2}>
            <Placeholder
              src="/images/food/gapao-rice.jpg"
              alt="目玉焼きをのせたK-laboのガパオライス"
              aspect="aspect-[4/5]"
              sizes="(min-width: 768px) 50vw, 100vw"
              className="md:mt-10"
            />
          </Reveal>
          {/* 小さな装飾 */}
          <span
            aria-hidden="true"
            className="absolute -left-3 top-2 hidden h-16 w-16 border border-gold/60 md:block"
          />
          <p
            aria-hidden="true"
            className="writing-vertical absolute -right-2 top-1/2 hidden -translate-y-1/2 font-serif-en text-[0.62rem] uppercase tracking-[0.32em] text-olive-deep lg:block"
          >
            Nine years of family life
          </p>
        </div>
      </div>
    </section>
  );
}
