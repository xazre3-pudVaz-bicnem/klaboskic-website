import Placeholder from "@/components/ui/Placeholder";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import LinkButton from "@/components/ui/LinkButton";
import { siteConfig } from "@/data/siteConfig";

const scenes = [
  {
    title: "仕事や学校の合間に",
    text: "駅の目の前だから、移動の途中でも受け取りやすい。",
  },
  {
    title: "自宅でのランチに",
    text: "いつもの食卓が、少しだけ旅先の気分に変わります。",
  },
  {
    title: "家族の食卓に",
    text: "お惣菜をもう一品添えて、今日の夕食に小さな変化を。",
  },
  {
    title: "公園や外出先で",
    text: "天気のいい日は、外で頬張るバインミーもおいしい。",
  },
  {
    title: "夕食にもう一品",
    text: "メインにも副菜にも。帰り道にふらりとお立ち寄りください。",
  },
];

/** 05. テイクアウト */
export default function TakeoutSection() {
  return (
    <section
      aria-labelledby="takeout-heading"
      className="mx-auto w-full max-w-6xl px-5 py-24 sm:px-8 sm:py-36"
    >
      <div className="grid gap-14 md:grid-cols-12 md:gap-10">
        <div className="flex flex-col gap-10 md:col-span-5">
          <SectionHeading
            index="04"
            label="Takeout"
            title={
              <span id="takeout-heading">
                日常のいろんな場面に、
                <br />
                持ち帰るおいしさを
              </span>
            }
          />
          <Reveal delay={0.15} className="text-sm leading-[2.3] text-espresso">
            <p>
              K-laboはテイクアウトを中心にした駅前の小さな店。バインミーもお惣菜もスイーツも、そのまま袋に提げて日常のつづきへ。
            </p>
          </Reveal>
          <Reveal delay={0.25} className="flex flex-col gap-5">
            <LinkButton href="/takeout">テイクアウトのご案内</LinkButton>
            <p className="text-[0.72rem] leading-[1.9] text-olive-deep">
              Uber Eatsでのデリバリーにも対応しています。
              <br />
              最新の対応状況は公式Instagramをご確認ください。
            </p>
          </Reveal>
          <Reveal delay={0.3} className="hidden md:block">
            <Placeholder
              src="/images/delica/bento-roast-beef.jpg"
              alt="彩り野菜を添えたK-laboのローストビーフ弁当"
              aspect="aspect-[5/4]"
              sizes="40vw"
            />
          </Reveal>
        </div>

        <div className="md:col-span-7 md:col-start-6 lg:col-span-6 lg:col-start-7">
          <ol className="flex flex-col">
            {scenes.map((scene, index) => (
              <Reveal
                as="li"
                key={scene.title}
                delay={index * 0.08}
                className="border-b border-ink/12 first:border-t"
              >
                <div className="flex items-baseline gap-6 py-7 sm:gap-10">
                  <span className="font-serif-en text-[0.7rem] tracking-[0.2em] text-gold-text">
                    0{index + 1}
                  </span>
                  <div className="flex flex-col gap-1.5">
                    <h3 className="font-mincho text-lg tracking-[0.08em] text-ink">
                      {scene.title}
                    </h3>
                    <p className="text-[0.8rem] leading-[1.9] text-espresso">
                      {scene.text}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </ol>
          <Reveal delay={0.2} className="mt-8">
            <p className="text-[0.72rem] leading-[1.9] text-olive-deep">
              {siteConfig.access}／{siteConfig.hoursSummary}
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
