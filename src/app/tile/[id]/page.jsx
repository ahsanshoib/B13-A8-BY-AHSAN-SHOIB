"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { useAuth } from "@/context/AuthContext";
import Loader from "@/components/Loader";
import tiles from "@/data/tiles";
import { use } from "react";

export default function TileDetailsPage({ params }) {
  const router = useRouter();
  const { session, isPending } = useAuth();
  const { id } = use(params);
  const tile = tiles.find((t) => t.id === id);

  useEffect(() => {
    if (!isPending && !session) {
      router.push("/login");
    }
  }, [session, isPending, router]);

  if (isPending) return <Loader />;
  if (!session) return null;
  if (!tile) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh] gap-4">
        <h1 className="text-4xl font-bold text-gray-700">Tile Not Found</h1>
        <Link href="/all-tiles">
          <button className="btn bg-[#1a3557] text-white border-none hover:bg-[#2c4a6e]">
            Back to All Tiles
          </button>
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-6 md:px-16">
      <div className="max-w-5xl mx-auto">

        {/* Back Button */}
        <Link href="/all-tiles">
          <button className="btn btn-sm btn-outline border-[#1a3557] text-[#1a3557] hover:bg-[#1a3557] hover:text-white mb-8">
            ← Back to All Tiles
          </button>
        </Link>

        {/* Main Content */}
        <div className="flex flex-col md:flex-row gap-10 bg-white rounded-2xl shadow-lg p-8">

          {/* Left: Image */}
          <div className="relative w-full md:w-1/2 h-72 md:h-auto min-h-[320px] rounded-xl overflow-hidden">
            <Image
              src={tile.image}
              alt={tile.title}
              fill
              className="object-cover rounded-xl"
            />
          </div>

          {/* Right: Details */}
          <div className="flex flex-col gap-5 w-full md:w-1/2">

            {/* Title */}
            <h1 className="text-3xl font-extrabold text-gray-800">
              {tile.title}
            </h1>

            {/* Creator */}
            <p className="text-gray-500 text-sm">
              <span className="font-semibold text-gray-700">Creator:</span>{" "}
              {tile.creator}
            </p>

            <div className="divider my-0"></div>

            {/* Style Description */}
            <div>
              <h2 className="text-lg font-bold text-gray-800 mb-2">
                Style Description
              </h2>
              <p className="text-gray-600 text-sm leading-relaxed">
                {tile.styleDescription}
              </p>
            </div>

            <div className="divider my-0"></div>

            {/* Tags */}
            <div>
              <h2 className="text-lg font-bold text-gray-800 mb-3">Tags</h2>
              <div className="flex flex-wrap gap-2">
                {tile.tags.map((tag) => (
                  <span
                    key={tag}
                    className="badge bg-[#1a3557] text-white text-xs font-semibold px-3 py-2 rounded-full uppercase tracking-wide"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="divider my-0"></div>

            {/* Extra Info */}
            <div className="grid grid-cols-2 gap-3 text-sm">
              <div>
                <span className="font-semibold text-gray-700">Material:</span>{" "}
                <span className="text-gray-600">{tile.material}</span>
              </div>
              <div>
                <span className="font-semibold text-gray-700">Dimensions:</span>{" "}
                <span className="text-gray-600">{tile.dimensions}</span>
              </div>
              <div>
                <span className="font-semibold text-gray-700">Price:</span>{" "}
                <span className="text-[#1a3557] font-bold">
                  ${tile.price} {tile.currency}
                </span>
              </div>
              <div>
                <span className="font-semibold text-gray-700">Stock:</span>{" "}
                <span className={tile.inStock ? "text-green-600 font-semibold" : "text-red-500 font-semibold"}>
                  {tile.inStock ? "In Stock" : "Out Of Stock"}
                </span>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
