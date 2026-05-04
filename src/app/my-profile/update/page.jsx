"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { toast } from "react-toastify";
import { authClient } from "@/lib/auth-client";
import { useAuth } from "@/context/AuthContext";
import Loader from "@/components/Loader";

export default function UpdateProfilePage() {
  const router = useRouter();
  const { session, isPending } = useAuth();
  const [name, setName] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [preview, setPreview] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!isPending && !session) {
      router.push("/login");
    }
    if (session) {
      setName(session.user?.name || "");
      setImageUrl(session.user?.image || "");
      setPreview(session.user?.image || null);
    }
  }, [session, isPending, router]);

  const handleImageUrlChange = (e) => {
    const url = e.target.value;
    setImageUrl(url);
    setPreview(url);
  };

  const handleUpdate = async () => {
    if (!name) {
      toast.error("Name cannot be empty.");
      return;
    }

    setLoading(true);

    const { error } = await authClient.updateUser({
      name,
      image: imageUrl || undefined,
    });

    if (error) {
      toast.error(error.message || "Update failed. Please try again.");
      setLoading(false);
      return;
    }

    toast.success("Profile updated successfully!");
    router.push("/my-profile");
    setLoading(false);
  };

  if (isPending) return <Loader />;
  if (!session) return null;

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4 py-12">
      <div className="bg-white rounded-2xl shadow-lg w-full max-w-md px-8 py-10 flex flex-col gap-6">

        {/* Title */}
        <h1 className="text-2xl font-extrabold text-center text-gray-800">
          Update Information
        </h1>

        {/* Image Preview */}
        <div className="flex justify-center">
          <div className="relative w-24 h-24 rounded-full overflow-hidden border-2 border-[#1a3557]">
            {preview ? (
              <Image
                src={preview}
                alt="Preview"
                fill
                className="object-cover"
                onError={() => setPreview(null)}
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center bg-[#1a3557]">
                <span className="text-white text-3xl font-bold">
                  {session.user?.name?.charAt(0).toUpperCase()}
                </span>
              </div>
            )}
          </div>
        </div>

        {/* Form */}
        <div className="flex flex-col gap-4">

          {/* Image URL */}
          <div className="flex flex-col gap-1">
            <label className="text-sm font-semibold text-gray-700">
              Photo URL
            </label>
            <input
              type="url"
              placeholder="Enter new image URL"
              value={imageUrl}
              onChange={handleImageUrlChange}
              className="input input-bordered w-full focus:outline-none focus:border-[#1a3557]"
            />
          </div>

          {/* Name */}
          <div className="flex flex-col gap-1">
            <label className="text-sm font-semibold text-gray-700">
              Name
            </label>
            <input
              type="text"
              placeholder="Enter your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="input input-bordered w-full focus:outline-none focus:border-[#1a3557]"
            />
          </div>

          {/* Update Button */}
          <button
            onClick={handleUpdate}
            disabled={loading}
            className="btn w-full bg-[#1a3557] text-white hover:bg-[#2c4a6e] border-none font-bold tracking-widest mt-2"
          >
            {loading ? (
              <span className="loading loading-spinner loading-sm"></span>
            ) : (
              "Update Information"
            )}
          </button>

          {/* Cancel */}
          <button
            onClick={() => router.push("/my-profile")}
            className="btn w-full btn-outline border-gray-300 text-gray-600 hover:bg-gray-100 hover:border-gray-300 font-semibold"
          >
            Cancel
          </button>

        </div>
      </div>
    </div>
  );
}