import { menuItems, type MenuItem } from "@/data/menu";

/**
 * メニューの取得
 *
 * 環境変数 MENU_SHEET_CSV_URL（Googleスプレッドシートの「ウェブに公開」→CSV のURL）
 * が設定されていれば、その「価格」「価格の補足」「区分」「提供状況」で
 * src/data/menu.ts の値を上書きする。未設定・取得失敗時は menu.ts の値をそのまま使う。
 *
 * スプレッドシートの1行目（見出し）は次の列名にすること（列の順番は自由）:
 *   id / 商品名 / 価格 / 価格の補足 / 区分 / 提供状況
 *   - id       … menu.ts の id と同じ値（この列で商品を特定する）
 *   - 商品名   … 管理用の目印（サイトには反映しない）
 *   - 価格     … 数字のみ（例: 650）。「¥」「円」「,」は無視する。空欄なら未掲載
 *   - 価格の補足 … 例: 〜 ／（2個入り）
 *   - 区分     … 「定番」または「変動」。空欄なら menu.ts の設定のまま
 *   - 提供状況 … 「休止」「売り切れ」と書くと「ただいま休止中」を表示
 */

/** スプレッドシートの更新をサイトに反映する間隔（秒） */
export const MENU_REVALIDATE_SECONDS = 600;

export async function getMenuItems(): Promise<MenuItem[]> {
  const url = process.env.MENU_SHEET_CSV_URL;
  if (!url) return menuItems;

  try {
    const response = await fetch(url, {
      next: { revalidate: MENU_REVALIDATE_SECONDS },
    });
    if (!response.ok) throw new Error(`HTTP ${response.status}`);
    const overrides = parseSheet(await response.text());
    return menuItems.map((item) => {
      const row = overrides.get(item.id);
      return row ? { ...item, ...row } : item;
    });
  } catch (error) {
    console.error("[menu] スプレッドシートの読み込みに失敗しました", error);
    return menuItems;
  }
}

type Override = Partial<Pick<MenuItem, "price" | "priceNote" | "kind" | "isAvailable">>;

function parseSheet(csv: string): Map<string, Override> {
  const [header, ...rows] = parseCsv(csv);
  const map = new Map<string, Override>();
  if (!header) return map;

  const col = (name: string) => header.findIndex((cell) => cell.trim() === name);
  const idCol = col("id");
  const priceCol = col("価格");
  const noteCol = col("価格の補足");
  const kindCol = col("区分");
  const statusCol = col("提供状況");
  if (idCol === -1) return map;

  for (const row of rows) {
    const id = row[idCol]?.trim();
    if (!id) continue;
    const override: Override = {};

    if (priceCol !== -1) {
      const digits = (row[priceCol] ?? "").replace(/[^\d]/g, "");
      override.price = digits ? Number(digits) : null;
    }
    if (noteCol !== -1) {
      const note = row[noteCol]?.trim();
      override.priceNote = note || undefined;
    }
    if (kindCol !== -1) {
      const kind = row[kindCol]?.trim();
      if (kind === "定番") override.kind = "regular";
      if (kind === "変動") override.kind = "variable";
    }
    if (statusCol !== -1) {
      const status = row[statusCol]?.trim() ?? "";
      override.isAvailable = !/休止|売り切れ|売切/.test(status);
    }
    map.set(id, override);
  }
  return map;
}

/** ダブルクォート・改行を含むセルに対応した最小限のCSVパーサー */
function parseCsv(text: string): string[][] {
  const rows: string[][] = [];
  let row: string[] = [];
  let cell = "";
  let quoted = false;
  // 先頭のBOM（U+FEFF）を除く
  const input = text.charCodeAt(0) === 0xfeff ? text.slice(1) : text;

  for (let i = 0; i < input.length; i++) {
    const char = input[i];
    if (quoted) {
      if (char === '"' && input[i + 1] === '"') {
        cell += '"';
        i++;
      } else if (char === '"') {
        quoted = false;
      } else {
        cell += char;
      }
    } else if (char === '"') {
      quoted = true;
    } else if (char === ",") {
      row.push(cell);
      cell = "";
    } else if (char === "\n" || char === "\r") {
      if (char === "\r" && input[i + 1] === "\n") i++;
      row.push(cell);
      rows.push(row);
      row = [];
      cell = "";
    } else {
      cell += char;
    }
  }
  if (cell !== "" || row.length > 0) {
    row.push(cell);
    rows.push(row);
  }
  return rows;
}
