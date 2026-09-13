import Link from "next/link";
import Placeholder from "@/components/ui/Placeholder";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import LinkButton from "@/components/ui/LinkButton";
import { ArrowRightIcon } from "@/components/ui/icons";
import { formatPrice, signatureItemIds, type MenuItem } from "@/data/menu";
import { getMenuItems } from "@/lib/menu";
import { cn } from "@/lib/utils";

/** トップページ用の見せ方（写真・ひとこと・ジャンル）。価格はメニューデータから取得 */
const presentation: Record<
  (typeof signatureItemIds)[number],
  { tag: string; catch: string; image: string; alt: string }
> = {
  "banhmi-shrimp-avocado": {
    tag: "アジアン",
    catch: "軽やかなパンに、海老とアボカド。K-laboのはじまりの味。",
    image: "/images/food/banh-mi-shrimp.jpg",
    alt: "海老とアボカド、パクチーをはさんだK-laboのバインミー",
  },
  "gapao-rice": {
    tag: "アジアン",
    catch: "バジルが香る、タイの定番ごはん。",
    image: "/images/food/gapao-rice.jpg",
    alt: "目玉焼きをのせたK-laboのガパオライス",
  },
  "roast-beef": {
    tag: "お肉料理",
    catch: "黒毛和牛を、しっとりやわらかく。",
    image: "/images/delica/roast-beef-slices.jpg",
    alt: "ベビーリーフの上に並べたK-laboの黒毛和牛ローストビーフ",
  },
  stroopwafel: {
    tag: "スイーツ",
    catch: "ざくっと香ばしい、オランダ生まれの焼き菓子。",
    image: "/images/sweets/stroopwafel-nuts.jpg",
    alt: "ナッツとチョコレートをあしらったK-laboのストロープワッフル",
  },
  "butter-sandwich": {
    tag: "スイーツ",
    catch: "色とりどりの生地で、バタークリームをサンド。",
    image: "/images/sweets/butter-sandwich.jpg",
    alt: "4色の生地でクリームをはさんだK-laboの彩りバターサンド",
  },
};

function SignatureCard({
  item,
  large = false,
}: {
  item: MenuItem;
  large?: boolean;
}) {
  const view = presentation[item.id as keyof typeof presentation];
  const price = formatPrice(item);

  return (
    <Link href={`/menu#${item.id}`} className="group flex h-full flex-col">
      <div className="overflow-hidden">
        <Placeholder
          src={view.image}
          alt={view.alt}
          aspect={large ? "aspect-[4/3] lg:aspect-[4/5]" : "aspect-square"}
          sizes={large ? "(min-width: 1024px) 42vw, 100vw" : "(min-width: 1024px) 28vw, 50vw"}
          className="transition-transform duration-1000 ease-quiet group-hover:scale-[1.03]"
        />
      </div>
      <div className={cn("flex flex-1 flex-col gap-1.5", large ? "mt-5" : "mt-3.5 sm:mt-4")}>
        <p className="text-[0.62rem] tracking-[0.2em] text-gold-text">{view.tag}</p>
        <h3
          className={cn(
            "flex items-center gap-2 font-mincho tracking-[0.06em]",
            large ? "text-2xl" : "text-[0.98rem] leading-snug sm:text-lg",
          )}
        >
          {large ? item.name : item.name.replace(/^バインミー /, "")}
          <ArrowRightIcon className="h-3.5 w-3.5 shrink-0 text-olive-deep transition-transform duration-300 group-hover:translate-x-1" />
        </h3>
        <p
          className={cn(
            "leading-[1.9] text-espresso",
            large ? "max-w-md text-[0.84rem]" : "hidden text-[0.78rem] sm:block",
          )}
        >
          {view.catch}
        </p>
        <p
          className={cn(
            "mt-auto pt-1 tracking-[0.04em]",
            price.hasPrice
              ? "text-sm text-ink"
              : "text-[0.66rem] leading-[1.7] text-olive-deep sm:text-[0.7rem]",
          )}
        >
          {price.text}
        </p>
      </div>
    </Link>
  );
}

/** 02. 代表商品 — アジアの料理からお肉料理、スイーツまで、K-laboの幅を一目で伝える */
export default async function SignatureSection() {
  const items = await getMenuItems();
  const featured = signatureItemIds
    .map((id) => items.find((item) => item.id === id))
    .filter((item): item is MenuItem => Boolean(item));
  const [main, ...rest] = featured;

  return (
    <section aria-labelledby="signature-heading" className="border-b border-ink/10 bg-paper">
      <div className="mx-auto w-full max-w-6xl px-5 py-20 sm:px-8 sm:py-32">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <SectionHeading
            index="01"
            label="Signature"
            title={
              <span id="signature-heading">
                アジアの味から、
                <br className="sm:hidden" />
                スイーツまで
              </span>
            }
          />
          <Reveal delay={0.1}>
            <p className="max-w-sm text-[0.84rem] leading-[2.1] text-espresso">
              バインミーやガパオに、黒毛和牛のローストビーフ、手づくりのスイーツ。ジャンルにとらわれない、K-laboの代表的な味です。
            </p>
          </Reveal>
        </div>

        <div className="mt-12 grid gap-x-10 gap-y-10 sm:mt-16 lg:grid-cols-12">
          {main && (
            <Reveal className="lg:col-span-5">
              <SignatureCard item={main} large />
            </Reveal>
          )}
          <ul className="grid grid-cols-2 gap-x-3 gap-y-9 sm:gap-x-6 sm:gap-y-12 lg:col-span-7">
            {rest.map((item, index) => (
              <Reveal as="li" key={item.id} delay={0.08 + (index % 2) * 0.1}>
                <SignatureCard item={item} />
              </Reveal>
            ))}
          </ul>
        </div>

        <Reveal delay={0.1} className="mt-14 flex flex-col items-start gap-5 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-[0.75rem] leading-[1.9] text-olive-deep">
            ほかにも、デザート＆ドリンク付きのランチセットや、ヤムウンセン、ロコモコ、西京焼き、お弁当などをご用意しています。
          </p>
          <LinkButton href="/menu">メニューと価格を見る</LinkButton>
        </Reveal>
      </div>
    </section>
  );
}
