import Hero from "@/components/sections/home/Hero";
import ConceptSection from "@/components/sections/home/ConceptSection";
import SignatureSection from "@/components/sections/home/SignatureSection";
import StoryTeaser from "@/components/sections/home/StoryTeaser";
import TakeoutSection from "@/components/sections/home/TakeoutSection";
import SweetsDrinksSection from "@/components/sections/home/SweetsDrinksSection";
import GallerySection from "@/components/sections/home/GallerySection";
import AccessSection from "@/components/sections/home/AccessSection";
import InstagramCta from "@/components/sections/home/InstagramCta";

export default function HomePage() {
  return (
    <>
      <Hero />
      <ConceptSection />
      <SignatureSection />
      <StoryTeaser />
      <TakeoutSection />
      <SweetsDrinksSection />
      <GallerySection />
      <AccessSection />
      <InstagramCta />
    </>
  );
}
