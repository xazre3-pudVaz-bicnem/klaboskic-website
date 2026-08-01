/** クラス名を結合する軽量ヘルパー（外部依存なし） */
export function cn(
  ...classes: Array<string | false | null | undefined>
): string {
  return classes.filter(Boolean).join(" ");
}
