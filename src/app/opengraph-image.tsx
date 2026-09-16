import { readFile } from "fs/promises";
import { join } from "path";
import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt =
  "K-labo — Sweets & Delica | 福岡県筑紫野市紫・紫駅すぐのカフェ＆テイクアウト";

async function dataUri(relPath: string, mime: string) {
  const buffer = await readFile(join(process.cwd(), "public", relPath));
  return `data:${mime};base64,${buffer.toString("base64")}`;
}

/**
 * OG画像
 * 左にブランドパネル（公式ロゴ）、右にヒーロー写真を配置した分割レイアウト。
 * 画像はビルド時にローカルから読み込む。
 *
 * 注: satori の既定フォントは日本語字形を持たないため、
 * 画像内のテキストは英字のみで構成している。
 */
export default async function OgImage() {
  const [photo, logo] = await Promise.all([
    dataUri("images/hero/banh-mi-shrimp-set.jpg", "image/jpeg"),
    dataUri("images/brand/k-labo-logo-ivory.png", "image/png"),
  ]);

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          backgroundColor: "#181515",
        }}
      >
        {/* 左：ブランドパネル */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            width: 720,
            height: "100%",
            paddingLeft: 78,
            paddingRight: 56,
            backgroundColor: "#181515",
            position: "relative",
          }}
        >
          <div
            style={{
              position: "absolute",
              top: 30,
              left: 30,
              right: 0,
              bottom: 30,
              display: "flex",
              borderTop: "1px solid rgba(201,194,140,0.45)",
              borderBottom: "1px solid rgba(201,194,140,0.45)",
              borderLeft: "1px solid rgba(201,194,140,0.45)",
            }}
          />

          <div
            style={{
              display: "flex",
              fontSize: 20,
              letterSpacing: "0.4em",
              color: "#c9c28c",
              textTransform: "uppercase",
            }}
          >
            Takeout &amp; Cafe
          </div>

          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={logo}
            alt="K-labo"
            width={468}
            height={193}
            style={{ marginTop: 30, marginLeft: -10 }}
          />

          <div
            style={{
              display: "flex",
              marginTop: 34,
              width: 92,
              height: 1,
              backgroundColor: "rgba(201,194,140,0.8)",
            }}
          />

          <div
            style={{
              display: "flex",
              marginTop: 32,
              fontSize: 35,
              lineHeight: 1.42,
              color: "#f3f0e6",
              letterSpacing: "0.02em",
            }}
          >
            From Bangkok, to everyday Chikushino.
          </div>

          <div
            style={{
              display: "flex",
              marginTop: 30,
              fontSize: 18,
              letterSpacing: "0.24em",
              color: "rgba(201,194,140,0.9)",
              textTransform: "uppercase",
            }}
          >
            Murasaki Sta. — Chikushino, Fukuoka
          </div>
        </div>

        {/* 右：写真 */}
        <div
          style={{
            display: "flex",
            position: "relative",
            width: 480,
            height: "100%",
          }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={photo}
            alt=""
            width={480}
            height={630}
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        </div>
      </div>
    ),
    size,
  );
}
