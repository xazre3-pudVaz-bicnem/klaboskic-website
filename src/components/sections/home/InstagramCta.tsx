import Reveal from "@/components/ui/Reveal";
import { InstagramIcon } from "@/components/ui/icons";
import { siteConfig } from "@/data/siteConfig";

/** 09. Instagram導線 */
export default function InstagramCta() {
  return (
    <section
      aria-labelledby="instagram-heading"
      className="mx-auto w-full max-w-6xl px-5 pb-28 pt-4 sm:px-8 sm:pb-36"
    >
      <Reveal>
        <div className="grain relative overflow-hidden bg-ink px-6 py-16 text-center text-ivory sm:px-10 sm:py-24">
          <span
            aria-hidden="true"
            className="pointer-events-none absolute inset-4 border border-gold/25 sm:inset-6"
          />
          <div className="relative flex flex-col items-center gap-7">
            <p className="font-serif-en text-[0.65rem] uppercase tracking-[0.4em] text-gold">
              Follow Us
            </p>
            <h2
              id="instagram-heading"
              className="font-mincho text-2xl leading-[1.7] tracking-[0.1em] sm:text-3xl"
            >
              日々のメニューと営業日は、
              <br className="sm:hidden" />
              Instagramで
            </h2>
            <p className="max-w-md text-[0.82rem] leading-[2.2] text-ivory/75">
              当日のラインナップ、営業日カレンダー、新商品のお知らせなど、K-laboの「いま」を毎日の投稿でお届けしています。
            </p>
            <a
              href={siteConfig.instagram.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group mt-2 inline-flex min-h-13 items-center gap-3 border border-ivory/45 px-10 py-4 text-sm tracking-[0.16em] transition-colors duration-500 hover:border-ivory hover:bg-ivory hover:text-ink"
              aria-label="Instagramで最新情報を見る（新しいタブで開きます）"
            >
              <InstagramIcon className="h-4 w-4" />
              Instagramで最新情報を見る
            </a>
            <p className="font-serif-en text-[0.7rem] tracking-[0.22em] text-ivory/55">
              {siteConfig.instagram.handle}
            </p>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
