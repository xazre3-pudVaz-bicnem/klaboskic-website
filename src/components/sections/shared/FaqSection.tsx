import type { ReactNode } from "react";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import JsonLd from "@/components/ui/JsonLd";
import { faqJsonLd } from "@/lib/jsonld";

type FaqSectionProps = {
  /** 見出しの id（ページ内で一意） */
  id: string;
  faqs: Array<{ question: string; answer: string }>;
  title?: ReactNode;
  /** FAQの下に置くボタンなど */
  footer?: ReactNode;
};

/**
 * よくあるご質問＋FAQPage構造化データ。
 * 画面の表示と構造化データを同じ配列から作り、内容がずれないようにする。
 */
export default function FaqSection({ id, faqs, title = "よくあるご質問", footer }: FaqSectionProps) {
  return (
    <section aria-labelledby={id} className="border-t border-ink/10 bg-ivory-soft/60">
      <JsonLd data={faqJsonLd(faqs)} />
      <div className="mx-auto w-full max-w-4xl px-5 py-20 sm:px-8 sm:py-28">
        <SectionHeading label="FAQ" title={<span id={id}>{title}</span>} />
        <dl className="mt-12 flex flex-col">
          {faqs.map((faq, index) => (
            <Reveal
              key={faq.question}
              delay={index * 0.08}
              className="border-b border-ink/12 py-8 first:border-t"
            >
              <dt className="flex items-baseline gap-5">
                <span className="font-serif-en text-sm italic text-gold-text">Q</span>
                <span className="font-mincho text-base tracking-[0.08em] sm:text-lg">{faq.question}</span>
              </dt>
              <dd className="mt-4 flex items-baseline gap-5">
                <span className="font-serif-en text-sm italic text-olive-deep" aria-hidden="true">
                  A
                </span>
                <span className="text-[0.82rem] leading-[2.2] text-espresso">{faq.answer}</span>
              </dd>
            </Reveal>
          ))}
        </dl>
        {footer && (
          <Reveal delay={0.2} className="mt-12 flex flex-wrap justify-center gap-4">
            {footer}
          </Reveal>
        )}
      </div>
    </section>
  );
}
