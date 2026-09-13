"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import {
  InstagramIcon,
  MapPinIcon,
  MenuBookIcon,
  PhoneIcon,
} from "@/components/ui/icons";
import { siteConfig } from "@/data/siteConfig";
import { cn } from "@/lib/utils";

/**
 * スマートフォン用の固定アクションバー（画面下部）
 * 電話・メニュー・Instagram・地図へ、どこからでも1タップで進める。
 * ファーストビューのボタンと重複しないよう、少しスクロールしてから表示する。
 */
export default function MobileActionBar() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 480);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const itemClass =
    "flex min-h-14 flex-1 flex-col items-center justify-center gap-1 text-[0.62rem] tracking-[0.08em] text-ivory/90 transition-colors active:bg-ivory/10";

  return (
    <nav
      aria-label="クイックアクセス"
      className={cn(
        "fixed inset-x-0 bottom-0 z-30 border-t border-ivory/10 bg-ink/95 pb-[env(safe-area-inset-bottom)] backdrop-blur-md transition-transform duration-500 lg:hidden",
        visible ? "translate-y-0" : "pointer-events-none translate-y-full",
      )}
      aria-hidden={!visible}
    >
      <ul className="mx-auto flex max-w-lg divide-x divide-ivory/10">
        <li className="flex flex-1">
          <a
            href={siteConfig.phoneHref}
            className={itemClass}
            tabIndex={visible ? 0 : -1}
            aria-label={`電話する ${siteConfig.phone}`}
          >
            <PhoneIcon className="h-5 w-5 text-gold" />
            電話・予約
          </a>
        </li>
        <li className="flex flex-1">
          <Link href="/menu" className={itemClass} tabIndex={visible ? 0 : -1}>
            <MenuBookIcon className="h-5 w-5 text-gold" />
            メニュー
          </Link>
        </li>
        <li className="flex flex-1">
          <a
            href={siteConfig.instagram.url}
            target="_blank"
            rel="noopener noreferrer"
            className={itemClass}
            tabIndex={visible ? 0 : -1}
          >
            <InstagramIcon className="h-5 w-5 text-gold" />
            Instagram
            <span className="sr-only">（新しいタブで開きます）</span>
          </a>
        </li>
        <li className="flex flex-1">
          <a
            href={siteConfig.googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={itemClass}
            tabIndex={visible ? 0 : -1}
          >
            <MapPinIcon className="h-5 w-5 text-gold" />
            地図
            <span className="sr-only">（Googleマップが新しいタブで開きます）</span>
          </a>
        </li>
      </ul>
    </nav>
  );
}
