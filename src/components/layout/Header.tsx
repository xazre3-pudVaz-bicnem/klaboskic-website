"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCallback, useEffect, useState } from "react";
import Logo from "@/components/ui/Logo";
import { InstagramIcon, PhoneIcon } from "@/components/ui/icons";
import { navigation, siteConfig } from "@/data/siteConfig";
import { cn } from "@/lib/utils";

/**
 * 固定ヘッダー
 * - トップページの最上部では透明（暗いヒーローの上に載る）
 * - スクロール後・下層ページではアイボリー背景
 * - モバイルはフルスクリーンのメニューを開く
 */
export default function Header() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  // ルート遷移でメニューを閉じる（レンダー中の状態調整パターン）
  const [prevPathname, setPrevPathname] = useState(pathname);
  if (prevPathname !== pathname) {
    setPrevPathname(pathname);
    setOpen(false);
  }

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // メニュー展開中は背景のスクロールを止める
  useEffect(() => {
    document.documentElement.style.overflow = open ? "hidden" : "";
    return () => {
      document.documentElement.style.overflow = "";
    };
  }, [open]);

  // Escapeで閉じる
  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  const toggle = useCallback(() => setOpen((v) => !v), []);

  // 暗い背景の上に載っている状態（トップ最上部 or メニュー展開中）
  const onDark = (isHome && !scrolled) || open;

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-colors duration-500",
        onDark
          ? "bg-transparent text-ivory"
          : "border-b border-ink/10 bg-ivory/92 text-ink backdrop-blur-md",
      )}
    >
      <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-5 sm:h-20 sm:px-8">
        <Link
          href="/"
          className="relative z-50 flex min-h-11 items-center"
          aria-label="K-labo トップページへ"
        >
          <Logo size="md" dark={onDark} priority />
        </Link>

        {/* PCナビゲーション */}
        <nav aria-label="メインナビゲーション" className="hidden lg:block">
          <ul className="flex items-center gap-8">
            {navigation.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={cn(
                    "group relative flex min-h-11 items-center text-[0.82rem] tracking-[0.14em] transition-opacity hover:opacity-70",
                    pathname === item.href && "pointer-events-none",
                  )}
                  aria-current={pathname === item.href ? "page" : undefined}
                >
                  {item.label}
                  <span
                    aria-hidden="true"
                    className={cn(
                      "absolute -bottom-0.5 left-0 h-px w-full origin-left scale-x-0 bg-gold-deep transition-transform duration-300 group-hover:scale-x-100",
                      pathname === item.href && "scale-x-100",
                    )}
                  />
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="relative z-50 flex items-center gap-1 sm:gap-3">
          <a
            href={siteConfig.instagram.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="K-labo公式Instagram（新しいタブで開きます）"
            className="flex h-11 w-11 items-center justify-center transition-opacity hover:opacity-70"
          >
            <InstagramIcon />
          </a>

          {/* モバイルメニューボタン */}
          <button
            type="button"
            onClick={toggle}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "メニューを閉じる" : "メニューを開く"}
            className="flex h-11 w-11 flex-col items-center justify-center gap-[7px] lg:hidden"
          >
            <span
              aria-hidden="true"
              className={cn(
                "h-px w-6 bg-current transition-transform duration-300",
                open && "translate-y-1 rotate-45",
              )}
            />
            <span
              aria-hidden="true"
              className={cn(
                "h-px w-6 bg-current transition-transform duration-300",
                open && "-translate-y-1 -rotate-45",
              )}
            />
          </button>
        </div>
      </div>

      {/* モバイルメニュー */}
      <div
        id="mobile-menu"
        className={cn(
          "fixed inset-0 z-40 flex flex-col bg-ink text-ivory transition-opacity duration-400 lg:hidden",
          open ? "grain opacity-100" : "pointer-events-none opacity-0",
        )}
        aria-hidden={!open}
      >
        <div className="flex min-h-0 flex-1 flex-col justify-center overflow-y-auto px-8 pb-10 pt-24">
          <nav aria-label="モバイルナビゲーション">
            <ul className="flex flex-col">
              {navigation.map((item, index) => (
                <li key={item.href} className="border-b border-ivory/10">
                  <Link
                    href={item.href}
                    onClick={() => setOpen(false)}
                    tabIndex={open ? 0 : -1}
                    className="flex min-h-14 items-baseline gap-4 py-4"
                  >
                    <span className="font-serif-en text-[0.65rem] tracking-[0.2em] text-gold">
                      0{index + 1}
                    </span>
                    <span className="font-mincho text-xl tracking-[0.1em]">
                      {item.label}
                    </span>
                    <span className="ml-auto font-serif-en text-[0.65rem] uppercase tracking-[0.24em] text-ivory/50">
                      {item.labelEn}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="mt-10 flex flex-col gap-4">
            <div className="flex flex-wrap gap-3">
              <a
                href={siteConfig.phoneHref}
                tabIndex={open ? 0 : -1}
                className="inline-flex min-h-12 w-fit items-center gap-3 border border-ivory/40 px-7 py-3 text-sm tracking-[0.14em] transition-colors hover:bg-ivory hover:text-ink"
                aria-label={`K-laboに電話する ${siteConfig.phone}`}
              >
                <PhoneIcon className="h-4 w-4" />
                電話する
              </a>
              <a
                href={siteConfig.instagram.url}
                target="_blank"
                rel="noopener noreferrer"
                tabIndex={open ? 0 : -1}
                className="inline-flex min-h-12 w-fit items-center gap-3 border border-ivory/40 px-7 py-3 text-sm tracking-[0.14em] transition-colors hover:bg-ivory hover:text-ink"
              >
                <InstagramIcon className="h-4 w-4" />
                Instagram
              </a>
            </div>
            <p className="text-xs leading-relaxed text-ivory/60">
              {siteConfig.address.full}
              <br />
              {siteConfig.access}
              <br />
              {siteConfig.hoursSummary}
            </p>
          </div>
        </div>
      </div>
    </header>
  );
}
