"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import tiles from "@/data/tiles";
import { useAuth } from "@/context/AuthContext";
import Loader from "@/components/Loader";

export default function MyProfilePage() {
  const router = useRouter();
  const { session, isPending } = useAuth();

  const tileHistory = tiles.slice(0, 3);

  useEffect(() => {
    if (!isPending && !session) {
      router.push("/login");
    }
  }, [session, isPending, router]);

  if (isPending) return <Loader />;
  if (!session) return null;

  const user = session.user;

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-6 md:px-16">
      <div className="max-w-4xl mx-auto flex flex-col gap-10">

        {/* Profile Overview Card */}
        <div className="bg-white rounded-2xl shadow-md p-8 flex flex-col gap-6">
          <h2 className="text-2xl font-bold text-gray-800">Profile Overview</h2>

          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6">
            {/* Profile Picture */}
            
            <div className="flex flex-col items-center gap-2">
              <div className="relative w-28 h-28 rounded-xl overflow-hidden border-2 border-gray-200 bg-gray-100">
               {user.image && !user.image.includes("default") ? (
  <img
    src={user.image}
    alt="Profile Picture"
    className="w-full h-full object-cover"
    onError={(e) => {
      e.target.style.display = "none";
      e.target.nextSibling.style.display = "flex";
    }}
  />
) : null}
<div
  className="w-full h-full flex items-center justify-center bg-[#1a3557]"
  style={{ display: user.image && !user.image.includes("default") ? "none" : "flex" }}
>
  <span className="text-white text-4xl font-bold">
    {user.name?.charAt(0).toUpperCase()}
  </span>
</div>
              </div>
              <p className="text-xs text-gray-500 font-medium">
                Current Profile Picture
              </p>
            </div>

            {/* User Info */}
            <div className="flex flex-col gap-2 flex-1">
              <p className="text-sm text-gray-500 font-medium">Current Name</p>
              <h3 className="text-2xl font-bold text-gray-800">{user.name}</h3>
              <p className="text-sm text-gray-500">{user.email}</p>

              <Link href="/my-profile/update" className="mt-3 w-fit">
                <button className="btn bg-[#1a3557] text-white hover:bg-[#2c4a6e] border-none font-semibold px-6">
                  Update Information
                </button>
              </Link>
            </div>
          </div>
        </div>

        {/* Tile History */}
        <div className="flex flex-col gap-6">
          <h2 className="text-2xl font-bold text-gray-800">
            Tile History{" "}
            <span className="text-gray-400 font-normal text-lg">
              
            </span>
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {tileHistory.map((tile, index) => (
              <div
                key={tile.id}
                className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100 hover:shadow-lg transition-shadow duration-300"
              >
                <div className="relative w-full h-44">
                  <Image
                    src={tile.image}
                    alt={tile.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-4 flex flex-col gap-3">
                  <h3 className="font-bold text-gray-800 text-sm">
                    {index === 0
                      ? "Favorite Tile 1"
                      : index === 1
                      ? "Purchased Tile 2"
                      : "Nmmuz Tile 1"}
                  </h3>
                  <Link href={`/tile/${tile.id}`}>
                    <button className="btn btn-sm bg-[#1a3557] text-white hover:bg-[#2c4a6e] border-none w-full font-semibold">
                      View Details
                    </button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}