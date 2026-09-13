import Placeholder from "@/components/ui/Placeholder";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import { cn } from "@/lib/utils";

const works = [
  {
    labelEn: "Meat",
    title: "黒毛和牛ローストビーフ",
    text: "塊のお肉に香ばしい焼き色をつけ、しっとりと火を入れて仕上げます。",
    image: "/images/story/roast-beef-searing.jpg",
    alt: "焼き色をつけたばかりの黒毛和牛の塊肉",
    position: "[&_img]:object-center",
  },
  {
    labelEn: "Fish",
    title: "西京漬け",
    text: "魚の切り身ひとつひとつに西京味噌をまとわせ、じっくりと漬け込みます。",
    image: "/images/story/marinated-fish-hand.jpg",
    alt: "西京味噌に漬け込んだ魚の切り身を手に取るようす",
    position: "[&_img]:object-center",
  },
  {
    labelEn: "Sweets",
    title: "彩りバターサンド",
    text: "焼き上げた生地に、クリームをひとつずつ絞ってサンドしています。",
    image: "/images/story/staff-piping-butter-sandwich.jpg",
    alt: "彩りバターサンドの生地にクリームを絞るK-laboのスタッフ",
    position: "[&_img]:object-[62%_center]",
  },
];

/** 03. 手づくり・店内仕込み */
export default function HandmadeSection() {
  return (
    <section
      aria-labelledby="handmade-heading"
      className="mx-auto w-full max-w-6xl px-5 py-20 sm:px-8 sm:py-32"
    >
      <div className="grid gap-8 md:grid-cols-12 md:items-end">
        <div className="md:col-span-6">
          <SectionHeading
            index="02"
            label="Handmade"
            title={<span id="handmade-heading">ひとつひとつ、店内で。</span>}
          />
        </div>
        <Reveal delay={0.1} className="md:col-span-5 md:col-start-8">
          <p className="font-mincho text-[1.05rem] leading-[2] tracking-[0.06em] text-ink sm:text-lg">
            お肉も、お魚も、スイーツも。
            <br />
            素材と向き合いながら、K-laboの味に仕上げています。
          </p>
        </Reveal>
      </div>

      <ol className="mt-12 grid gap-10 sm:mt-16 md:grid-cols-3 md:gap-8">
        {works.map((work, index) => (
          <Reveal
            as="li"
            key={work.title}
            delay={index * 0.12}
            className={cn(index === 1 && "md:mt-16")}
          >
            <figure className="grid grid-cols-5 items-end gap-5 md:flex md:flex-col md:items-stretch md:gap-0">
              <div className="col-span-2 md:w-full">
                <Placeholder
                  src={work.image}
                  alt={work.alt}
                  aspect="aspect-[4/5]"
                  sizes="(min-width: 768px) 30vw, 40vw"
                  className={work.position}
                />
              </div>
              <figcaption className="col-span-3 flex flex-col gap-2 md:mt-6">
                <p className="flex items-center gap-3 font-serif-en text-[0.62rem] uppercase tracking-[0.3em] text-gold-text">
                  <span className="text-[0.7rem] italic tracking-[0.1em]">0{index + 1}</span>
                  {work.labelEn}
                </p>
                <h3 className="font-mincho text-lg leading-snug tracking-[0.06em] sm:text-xl">
                  {work.title}
                </h3>
                <p className="text-[0.8rem] leading-[2] text-espresso">{work.text}</p>
              </figcaption>
            </figure>
          </Reveal>
        ))}
      </ol>
    </section>
  );
}
