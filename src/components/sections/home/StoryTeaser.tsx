import Reveal from "@/components/ui/Reveal";
import LinkButton from "@/components/ui/LinkButton";

/** 04. Bangkok to Chikushino — ストーリー導入（静かなタイポグラフィ表現） */
export default function StoryTeaser() {
  return (
    <section
      aria-labelledby="story-teaser-heading"
      className="grain bg-ink text-ivory"
    >
      <div className="mx-auto flex w-full max-w-5xl flex-col items-center px-5 py-28 text-center sm:px-8 sm:py-40">
        <Reveal>
          <p className="font-serif-en text-[0.65rem] uppercase tracking-[0.4em] text-gold">
            Our Story — 03
          </p>
        </Reveal>

        <Reveal delay={0.15} className="mt-10 w-full">
          <h2
            id="story-teaser-heading"
            className="flex flex-col items-center gap-2 font-serif-en italic tracking-[0.04em]"
          >
            <span className="text-3xl sm:text-5xl lg:text-6xl">Bangkok</span>
            <span
              aria-hidden="true"
              className="reveal-line my-4 block h-14 w-px bg-gradient-to-b from-gold/0 via-gold/70 to-gold/0 sm:h-20"
              style={{ transformOrigin: "top center" }}
            />
            <span className="text-3xl text-gold sm:text-5xl lg:text-6xl">
              to Chikushino
            </span>
          </h2>
        </Reveal>

        <Reveal delay={0.3} className="mt-12 max-w-xl">
          <p className="text-[0.85rem] leading-[2.4] text-ivory/80 sm:text-sm">
            はじまりは、家族で移り住んだバンコクでの暮らし。
            <br />
            気がつけば9年が経ち、あの街の味は
            <br className="sm:hidden" />
            私たちの日常そのものになっていました。
          </p>
          <p className="mt-6 text-[0.85rem] leading-[2.4] text-ivory/80 sm:text-sm">
            その記憶を、福岡・筑紫野の小さな店から。
          </p>
        </Reveal>

        <Reveal delay={0.4} className="mt-14">
          <LinkButton href="/story" dark>
            K-laboの軌跡
          </LinkButton>
        </Reveal>
      </div>
    </section>
  );
}
