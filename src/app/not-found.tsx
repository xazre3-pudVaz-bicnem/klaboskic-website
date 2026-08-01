import type { Metadata } from "next";
import LinkButton from "@/components/ui/LinkButton";
import { siteConfig } from "@/data/siteConfig";

export const metadata: Metadata = {
  title: "ページが見つかりません",
  description:
    "お探しのページが見つかりませんでした。K-labo公式サイトのトップページから改めてご覧ください。",
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return (
    <div className="grain flex min-h-svh flex-col items-center justify-center bg-ink px-5 text-center text-ivory">
      <p className="font-serif-en text-[0.68rem] uppercase tracking-[0.4em] text-gold">
        Not Found
      </p>
      <p
        aria-hidden="true"
        className="mt-6 font-serif-en text-7xl italic tracking-[0.1em] sm:text-8xl"
      >
        404
      </p>
      <h1 className="mt-8 font-mincho text-xl leading-[1.8] tracking-[0.1em] sm:text-2xl">
        お探しのページが
        <br className="sm:hidden" />
        見つかりませんでした
      </h1>
      <p className="mt-5 max-w-md text-[0.82rem] leading-[2.2] text-ivory/70">
        ページが移動したか、URLが変更された可能性があります。
        <br />
        トップページから改めてご覧ください。
      </p>
      <div className="mt-10 flex flex-col items-center gap-5 sm:flex-row">
        <LinkButton href="/" dark>
          トップページへ
        </LinkButton>
        <LinkButton href="/menu" variant="text" dark>
          メニューを見る
        </LinkButton>
      </div>
      <p className="mt-12 font-serif-en text-[0.62rem] uppercase tracking-[0.3em] text-ivory/40">
        {siteConfig.nameEn}
      </p>
    </div>
  );
}
