import Link from "next/link";
import Logo from "@/components/ui/Logo";
import { InstagramIcon, PhoneIcon } from "@/components/ui/icons";
import { navigation, siteConfig } from "@/data/siteConfig";

/** フッター */
export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="grain bg-ink text-ivory">
      {/* モバイルでは画面下の固定アクションバーに隠れないよう下余白を足す */}
      <div className="mx-auto w-full max-w-6xl px-5 pb-[calc(5rem+env(safe-area-inset-bottom))] pt-16 sm:px-8 sm:pt-20 lg:pb-20">
        <div className="flex flex-col gap-12 md:flex-row md:justify-between">
          {/* ブランド */}
          <div className="flex flex-col gap-5">
            <Link href="/" className="w-fit" aria-label="K-labo トップページへ">
              <Logo size="md" dark withTagline />
            </Link>
            <p className="max-w-xs text-xs leading-[2] text-ivory/70">
              {siteConfig.tagline}
              <br />
              {siteConfig.shopType}
            </p>
          </div>

          {/* サイトマップ */}
          <nav aria-label="フッターナビゲーション">
            <p className="font-serif-en text-[0.65rem] uppercase tracking-[0.3em] text-gold">
              Menu
            </p>
            <ul className="mt-4 grid grid-cols-2 gap-x-10 gap-y-1 sm:grid-cols-1">
              {navigation.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="inline-flex min-h-10 items-center text-[0.82rem] tracking-[0.1em] text-ivory/85 transition-colors hover:text-gold"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/privacy"
                  className="inline-flex min-h-10 items-center text-[0.82rem] tracking-[0.1em] text-ivory/85 transition-colors hover:text-gold"
                >
                  プライバシーポリシー
                </Link>
              </li>
            </ul>
          </nav>

          {/* 店舗情報 */}
          <div className="flex flex-col gap-4">
            <p className="font-serif-en text-[0.65rem] uppercase tracking-[0.3em] text-gold">
              Shop
            </p>
            <address className="text-xs not-italic leading-[2.1] text-ivory/70">
              {siteConfig.name}（{siteConfig.nameJa}）
              <br />
              {siteConfig.address.full}
              <br />
              {siteConfig.access}
            </address>
            <p className="text-xs leading-[2.1] text-ivory/70">
              月〜金 11:30–18:30
              <br />
              土・日 11:30–17:00
            </p>
            <div className="flex flex-col gap-1">
              <a
                href={siteConfig.phoneHref}
                className="inline-flex min-h-11 w-fit items-center gap-2.5 border-b border-ivory/40 py-2 text-[0.82rem] tracking-[0.12em] transition-colors hover:text-gold"
                aria-label={`K-laboに電話する ${siteConfig.phone}`}
              >
                <PhoneIcon className="h-4 w-4" />
                {siteConfig.phone}
              </a>
              <a
                href={siteConfig.instagram.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-11 w-fit items-center gap-2.5 border-b border-ivory/40 py-2 text-[0.82rem] tracking-[0.12em] transition-colors hover:text-gold"
                aria-label="K-labo公式Instagram（新しいタブで開きます）"
              >
                <InstagramIcon className="h-4 w-4" />
                {siteConfig.instagram.handle}
              </a>
            </div>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-start justify-between gap-3 border-t border-ivory/15 pt-6 sm:flex-row sm:items-center">
          <p className="font-serif-en text-[0.65rem] uppercase tracking-[0.26em] text-ivory/50">
            Chikushino, Fukuoka — Takeout &amp; Cafe
          </p>
          <p className="text-[0.7rem] tracking-[0.14em] text-ivory/50">
            &copy; {year} {siteConfig.name}
          </p>
        </div>
      </div>
    </footer>
  );
}
