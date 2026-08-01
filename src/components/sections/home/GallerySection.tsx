import Placeholder from "@/components/ui/Placeholder";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import { InstagramIcon } from "@/components/ui/icons";
import { galleryItems } from "@/data/gallery";
import { siteConfig } from "@/data/siteConfig";
import { cn } from "@/lib/utils";

const aspectClass = {
  portrait: "aspect-[3/4]",
  landscape: "aspect-[4/3]",
  square: "aspect-square",
} as const;

const motifs = ["ring", "arc", "lines"] as const;

/**
 * 07. ギャラリー
 * 実写真は /public/images/gallery/ に配置し、src/data/gallery.ts の src を
 * 設定すると表示される。それまでは抽象プレースホルダー。
 */
export default function GallerySection() {
  return (
    <section
      aria-labelledby="gallery-heading"
      className="mx-auto w-full max-w-6xl px-5 py-24 sm:px-8 sm:py-36"
    >
      <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
        <SectionHeading
          index="06"
          label="Gallery"
          title={<span id="gallery-heading">K-laboのある風景</span>}
        />
        <Reveal delay={0.1}>
          <p className="max-w-xs text-[0.75rem] leading-[2] text-olive-deep">
            日々の料理やお店のようすは、公式Instagramでご覧いただけます。
          </p>
        </Reveal>
      </div>

      <ul className="mt-14 grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-3">
        {galleryItems.map((item, index) => (
          <Reveal
            as="li"
            key={item.subject}
            delay={(index % 3) * 0.1}
            className={cn(index % 3 === 1 && "lg:mt-10", index % 3 === 2 && "lg:-mt-6")}
          >
            <Placeholder
              src={item.src}
              alt={item.alt}
              motif={motifs[index % motifs.length]}
              tone={index % 4 === 2 ? "dark" : "light"}
              aspect={aspectClass[item.aspect]}
              label={item.subjectEn}
              sizes="(min-width: 1024px) 30vw, 50vw"
            />
          </Reveal>
        ))}
      </ul>

      <Reveal delay={0.15} className="mt-12 flex justify-center">
        <a
          href={siteConfig.instagram.url}
          target="_blank"
          rel="noopener noreferrer"
          className="group inline-flex min-h-12 items-center gap-3 border-b border-ink/40 px-2 py-3 text-sm tracking-[0.14em] text-ink transition-colors hover:border-olive-deep hover:text-olive-deep"
          aria-label="Instagramで写真をもっと見る（新しいタブで開きます）"
        >
          <InstagramIcon className="h-4 w-4" />
          Instagramで写真をもっと見る
        </a>
      </Reveal>
    </section>
  );
}
