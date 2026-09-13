import Placeholder from "@/components/ui/Placeholder";
import Reveal from "@/components/ui/Reveal";
import LinkButton from "@/components/ui/LinkButton";

/** 04. Bangkok to Chikushino — ブランドストーリーとコンセプト */
export default function StoryTeaser() {
  return (
    <section aria-labelledby="story-teaser-heading" className="grain overflow-hidden bg-ink text-ivory">
      <div className="mx-auto grid w-full max-w-6xl gap-12 px-5 py-20 sm:px-8 sm:py-32 md:grid-cols-12 md:items-center md:gap-10">
        {/* 写真 */}
        <div className="relative md:col-span-5">
          <Reveal>
            <Placeholder
              src="/images/story/bangkok-wat-arun-portrait.jpg"
              alt="夕暮れのチャオプラヤー川と、バンコクの寺院ワット・アルン"
              aspect="aspect-[4/5] md:aspect-[3/4]"
              sizes="(min-width: 768px) 40vw, 100vw"
            />
          </Reveal>
          <Reveal
            delay={0.25}
            className="absolute -bottom-8 -right-3 w-[46%] border-4 border-ink sm:-right-6 md:-right-16 md:w-[52%]"
          >
            <Placeholder
              src="/images/story/bangkok-temple.jpg"
              alt="青空の下に建つバンコクの寺院"
              aspect="aspect-[4/3]"
              sizes="(min-width: 768px) 22vw, 46vw"
            />
          </Reveal>
        </div>

        {/* 本文 */}
        <div className="mt-6 flex flex-col gap-8 md:col-span-6 md:col-start-7 md:mt-0">
          <Reveal>
            <p className="flex items-center gap-4 font-serif-en text-[0.7rem] uppercase tracking-[0.32em] text-gold">
              <span aria-hidden="true" className="reveal-line inline-block h-px w-10 bg-gold/70" />
              Our Story <span className="tracking-[0.2em]">— 03</span>
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="font-serif-en text-2xl italic tracking-[0.04em] text-gold sm:text-3xl">
              Bangkok to Chikushino
            </p>
            <h2
              id="story-teaser-heading"
              className="mt-4 font-mincho text-[1.6rem] leading-[1.65] tracking-[0.08em] sm:text-4xl sm:leading-[1.55]"
            >
              原点は、バンコクで
              <br />
              暮らした9年間。
            </h2>
          </Reveal>
          <Reveal delay={0.2} className="flex flex-col gap-5 text-[0.86rem] leading-[2.3] text-ivory/80 sm:text-sm">
            <p>
              家族で移り住んだバンコク。街角に、市場に、食卓に。あたりまえのように暮らしに溶け込んでいたおいしいものが、いつしか私たちの日常になっていました。
            </p>
            <p>
              その記憶を原点に、ジャンルにとらわれず、日々のおいしいものを。アジアの料理も、お肉やお魚の料理も、スイーツも、K-laboの一皿はひとつの想いでつながっています。
            </p>
          </Reveal>
          <Reveal delay={0.3} className="border-l border-gold/50 pl-5">
            <p className="font-mincho text-base leading-[1.9] tracking-[0.08em] text-ivory sm:text-lg">
              アジアを原点に、日常の一皿を。
            </p>
            <p className="mt-1 font-serif-en text-[0.72rem] italic tracking-[0.12em] text-ivory/55">
              Rooted in Asia, made for every day.
            </p>
          </Reveal>
          <Reveal delay={0.35}>
            <LinkButton href="/story" dark>
              K-laboの軌跡を読む
            </LinkButton>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
