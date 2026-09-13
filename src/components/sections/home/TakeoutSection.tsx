import Placeholder from "@/components/ui/Placeholder";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import QuickActions from "@/components/sections/shared/QuickActions";
import ReserveBlock from "@/components/sections/shared/ReserveBlock";
import { siteConfig } from "@/data/siteConfig";

/** 05. テイクアウト・デリバリー */
export default function TakeoutSection() {
  return (
    <section
      id="takeout"
      aria-labelledby="takeout-heading"
      className="mx-auto w-full max-w-6xl px-5 py-20 sm:px-8 sm:py-32"
    >
      <div className="grid gap-12 md:grid-cols-12 md:gap-10">
        <div className="flex flex-col gap-8 md:col-span-5">
          <SectionHeading
            index="04"
            label="Takeout & Delivery"
            title={
              <span id="takeout-heading">
                持ち帰りも、
                <br />
                デリバリーも。
              </span>
            }
          />
          <Reveal delay={0.1} className="text-sm leading-[2.2] text-espresso">
            <p>
              駅前で受け取れるテイクアウトはもちろん、{siteConfig.uberEats.name}・{siteConfig.rocketNow.name}
              でのデリバリーにも対応。お弁当やオードブルのご予約もどうぞ。
            </p>
          </Reveal>
          <Reveal delay={0.15} className="hidden md:block">
            <Placeholder
              src="/images/delica/roast-beef-pack.jpg"
              alt="ロゴ入りの蓋をしたK-laboのローストビーフのテイクアウト容器"
              aspect="aspect-[4/3]"
              sizes="40vw"
            />
          </Reveal>
        </div>

        <div className="flex flex-col gap-12 md:col-span-7 md:col-start-6 lg:col-span-6 lg:col-start-7 md:pt-4">
          <Reveal delay={0.1}>
            <QuickActions />
          </Reveal>
          <Reveal delay={0.2}>
            <ReserveBlock />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
