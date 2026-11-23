import Link from "next/link";
import Placeholder from "@/components/ui/Placeholder";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import { formatPrice, type MenuItem } from "@/data/menu";
import { cn } from "@/lib/utils";

type ItemShowcaseProps = {
  /** 見出しの id（ページ内で一意） */
  id: string;
  label: string;
  title: string;
  items: MenuItem[];
  /** 一覧の下に添える補足 */
  note?: string;
};

/**
 * 特集ページ用の商品一覧。
 * 価格・説明はメニューと同じデータ（スプレッドシートの上書きを含む）から表示する。
 */
export default function ItemShowcase({ id, label, title, items, note }: ItemShowcaseProps) {
  return (
    <section aria-labelledby={id} className="mx-auto w-full max-w-6xl px-5 py-20 sm:px-8 sm:py-28">
      <SectionHeading label={label} title={<span id={id}>{title}</span>} />
      <ul className="mt-12 grid gap-x-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((item, index) => {
          const price = formatPrice(item);
          return (
            <Reveal as="li" key={item.id} delay={(index % 3) * 0.08}>
              <article className="flex h-full flex-col">
                <Placeholder
                  src={item.image}
                  alt={item.name}
                  aspect="aspect-[4/3]"
                  label={item.nameEn}
                  sizes="(min-width: 1024px) 31vw, (min-width: 640px) 46vw, 100vw"
                />
                <div className="mt-5 flex flex-col gap-2">
                  <h3 className="font-mincho text-lg leading-snug tracking-[0.08em]">{item.name}</h3>
                  <p
                    className={cn(
                      "tracking-[0.04em]",
                      price.hasPrice ? "font-mincho text-base text-ink" : "text-[0.72rem] leading-[1.7] text-olive-deep",
                    )}
                  >
                    {price.text}
                  </p>
                  <p className="text-[0.8rem] leading-[2] text-espresso">{item.description}</p>
                  {!item.isAvailable && (
                    <p className="w-fit border border-espresso/40 bg-espresso px-2.5 py-0.5 text-[0.66rem] tracking-[0.1em] text-ivory">
                      ただいま休止中
                    </p>
                  )}
                  <Link
                    href={`/menu#${item.id}`}
                    className="mt-1 w-fit text-[0.72rem] tracking-[0.1em] text-olive-deep underline decoration-olive-deep/40 underline-offset-4 hover:text-ink"
                  >
                    メニューで見る
                  </Link>
                </div>
              </article>
            </Reveal>
          );
        })}
      </ul>
      {note && <p className="mt-10 text-[0.75rem] leading-[2] text-olive-deep">{note}</p>}
    </section>
  );
}
