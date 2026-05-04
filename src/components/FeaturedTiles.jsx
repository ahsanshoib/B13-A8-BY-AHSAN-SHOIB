import tiles from "@/data/tiles";
import TileCard from "./TileCard";

export default function FeaturedTiles() {
  const featuredTiles = tiles.slice(0, 4);

  return (
    <section className="py-12 px-6 md:px-16 max-w-6xl mx-auto">
      {/* Section Header */}
      <h2 className="text-2xl md:text-3xl font-bold text-white-800 mb-8">
        Featured Tiles
      </h2>

      {/* Tiles Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {featuredTiles.map((tile) => (
          <TileCard key={tile.id} tile={tile} />
        ))}
      </div>
    </section>
  );
}