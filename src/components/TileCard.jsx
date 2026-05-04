import Image from "next/image";
import Link from "next/link";

export default function TileCard({ tile }) {
  return (
    <div className="card bg-base-100 shadow-md hover:shadow-xl transition-shadow duration-300 rounded-xl overflow-hidden border border-gray-100">
      {/* Tile Image */}
      <div className="relative w-full h-48">
        <Image
          src={tile.image}
          alt={tile.title}
          fill
          className="object-cover hover:scale-105 transition-transform duration-300"
        />
      </div>

      {/* Card Body */}
      <div className="card-body p-4 gap-2">
        <h2 className="card-title text-base font-bold text-white-800">
          {tile.title}
        </h2>

        <div className="flex items-center justify-between">
          <span className="badge badge-outline text-xs text-gray-500 capitalize">
            {tile.category}
          </span>
          <span className="text-sm font-semibold text-[#7d7e7e]">
            ${tile.price}
          </span>
        </div>

        <div className="card-actions mt-2">
          <Link href={`/tile/${tile.id}`} className="w-full">
            <button className="btn btn-sm w-full bg-[#1a3557] text-white hover:bg-[#2c4a6e] border-none font-semibold">
              View Details
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}