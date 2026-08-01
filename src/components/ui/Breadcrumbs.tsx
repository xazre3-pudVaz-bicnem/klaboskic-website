import Link from "next/link";
import JsonLd from "@/components/ui/JsonLd";
import { breadcrumbJsonLd } from "@/lib/jsonld";

type Crumb = {
  name: string;
  path: string;
};

type BreadcrumbsProps = {
  /** ホームを除く階層。例: [{ name: "メニュー", path: "/menu" }] */
  items: Crumb[];
};

/**
 * パンくずリスト
 * 表示とBreadcrumbList構造化データを同一ソースから出力する。
 */
export default function Breadcrumbs({ items }: BreadcrumbsProps) {
  const all: Crumb[] = [{ name: "ホーム", path: "/" }, ...items];

  return (
    <nav aria-label="パンくずリスト" className="overflow-x-auto">
      <JsonLd data={breadcrumbJsonLd(all)} />
      <ol className="flex items-center gap-3 whitespace-nowrap text-[0.7rem] tracking-[0.1em] text-espresso/80">
        {all.map((crumb, index) => {
          const isLast = index === all.length - 1;
          return (
            <li key={crumb.path} className="flex items-center gap-3">
              {index > 0 && (
                <span aria-hidden="true" className="h-px w-4 bg-espresso/40" />
              )}
              {isLast ? (
                <span
                  aria-current="page"
                  className="flex min-h-11 items-center text-olive-deep"
                >
                  {crumb.name}
                </span>
              ) : (
                <Link
                  href={crumb.path}
                  className="flex min-h-11 items-center transition-colors hover:text-ink"
                >
                  {crumb.name}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
