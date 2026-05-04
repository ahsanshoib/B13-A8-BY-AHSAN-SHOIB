import Banner from "@/components/Banner";
import Marquee from "@/components/Marquee";
import FeaturedTiles from "@/components/FeaturedTiles";

export default function HomePage() {
  return (
    <div>
      {/* Hero Banner with Swiper */}
      <Banner />

      {/* Scrolling Marquee */}
      <Marquee />

      {/* Featured Tiles Section */}
      <FeaturedTiles />
    </div>
  );
}