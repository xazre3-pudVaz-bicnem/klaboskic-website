import Hero from "@/components/sections/home/Hero";
import PhotoMarquee from "@/components/sections/home/PhotoMarquee";
import SignatureSection from "@/components/sections/home/SignatureSection";
import HandmadeSection from "@/components/sections/home/HandmadeSection";
import StoryTeaser from "@/components/sections/home/StoryTeaser";
import TakeoutSection from "@/components/sections/home/TakeoutSection";
import SweetsDrinksSection from "@/components/sections/home/SweetsDrinksSection";
import InstagramCta from "@/components/sections/home/InstagramCta";
import AccessSection from "@/components/sections/home/AccessSection";

/**
 * トップページ
 * 写真とコピー → 流れる写真の帯 → 代表商品 → 手づくり → バンコクのストーリー
 * → テイクアウト・デリバリー → スイーツ・ドリンク → Instagram → アクセス
 */
export default function HomePage() {
  return (
    <>
      <Hero />
      <PhotoMarquee />
      <SignatureSection />
      <HandmadeSection />
      <StoryTeaser />
      <TakeoutSection />
      <SweetsDrinksSection />
      <InstagramCta />
      <AccessSection />
    </>
  );
}
