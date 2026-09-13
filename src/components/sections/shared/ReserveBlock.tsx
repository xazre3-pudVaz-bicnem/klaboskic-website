import { InstagramIcon, PhoneIcon } from "@/components/ui/icons";
import { siteConfig } from "@/data/siteConfig";
import { cn } from "@/lib/utils";

type ReserveBlockProps = {
  dark?: boolean;
  className?: string;
};

/**
 * ご予約・お取り置きの案内
 * 電話（tel:）と Instagram のDM画面へ、ワンタップで進めるようにする。
 */
export default function ReserveBlock({ dark = false, className }: ReserveBlockProps) {
  const buttonBase =
    "inline-flex min-h-13 w-full items-center justify-center gap-2.5 px-5 py-3.5 text-sm tracking-[0.1em] transition-colors duration-300 sm:w-auto sm:px-8";

  return (
    <div
      className={cn(
        "flex flex-col gap-5 border-l-2 border-gold py-1 pl-5 sm:pl-7",
        className,
      )}
    >
      <div className="flex flex-col gap-1.5">
        <p
          className={cn(
            "font-serif-en text-[0.62rem] uppercase tracking-[0.3em]",
            dark ? "text-gold" : "text-gold-text",
          )}
        >
          Reservation
        </p>
        <p className="font-mincho text-[1.05rem] leading-[1.8] tracking-[0.06em] sm:text-lg">
          {siteConfig.reservation.message}
        </p>
      </div>
      <div className="flex flex-col gap-2.5 sm:flex-row sm:flex-wrap">
        <a
          href={siteConfig.phoneHref}
          className={cn(
            buttonBase,
            dark
              ? "bg-ivory text-ink hover:bg-gold"
              : "bg-ink text-ivory hover:bg-espresso",
          )}
          aria-label={`電話で予約・取り置きする ${siteConfig.phone}`}
        >
          <PhoneIcon className="h-4 w-4" />
          電話で予約する
        </a>
        <a
          href={siteConfig.instagramDmUrl}
          target="_blank"
          rel="noopener noreferrer"
          className={cn(
            buttonBase,
            "border",
            dark
              ? "border-ivory/45 text-ivory hover:border-ivory hover:bg-ivory hover:text-ink"
              : "border-ink/35 text-ink hover:border-ink hover:bg-ink hover:text-ivory",
          )}
        >
          <InstagramIcon className="h-4 w-4" />
          InstagramのDMで予約
          <span className="sr-only">（新しいタブで開きます）</span>
        </a>
      </div>
      <p className={cn("text-[0.72rem] tracking-[0.04em]", dark ? "text-ivory/60" : "text-olive-deep")}>
        Tel. {siteConfig.phone}／{siteConfig.hoursSummary}
      </p>
    </div>
  );
}
