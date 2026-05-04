"use client";

import { useState } from "react";
import tiles from "@/data/tiles";
import TileCard from "@/components/TileCard";
import { FiSearch } from "react-icons/fi";

export default function AllTilesPage() {
  const [search, setSearch] = useState("");

  const filteredTiles = tiles.filter((tile) =>
    tile.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Search Section */}
      <div className="bg-[#1a3557] py-12 px-6 flex flex-col items-center gap-4">
        <h1 className="text-3xl md:text-4xl font-extrabold text-white text-center">
          ALL COLLECTION
        </h1>
        <div className="relative w-full max-w-lg">
          <input
            type="text"
            placeholder="Search tiles by name..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="input input-bordered w-full pl-5 pr-12 py-3 rounded-full bg-white text-gray-800 placeholder-gray-400 shadow-md focus:outline-none"
          />
          <FiSearch className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 text-xl" />
        </div>
      </div>

      {/* Tiles Grid */}
      <div className="max-w-6xl mx-auto px-6 md:px-10 py-10">
        {filteredTiles.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {filteredTiles.map((tile) => (
              <TileCard key={tile.id} tile={tile} />
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center min-h-[300px] gap-4">
            <p className="text-gray-500 text-lg font-medium">
              No tiles found for &quot;{search}&quot;
            </p>
            <button
              onClick={() => setSearch("")}
              className="btn btn-sm bg-[#1a3557] text-white border-none hover:bg-[#2c4a6e]"
            >
              Clear Search
            </button>
          </div>
        )}
      </div>
    </div>
  );
}