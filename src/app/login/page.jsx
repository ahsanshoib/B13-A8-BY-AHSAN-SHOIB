"use client";

import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { FcGoogle } from "react-icons/fc";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { toast } from "react-toastify";
import { authClient } from "@/lib/auth-client";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleLogin = async () => {
    if (!email || !password) {
      toast.error("Please fill in all fields.");
      return;
    }

    setLoading(true);

    const { data, error } = await authClient.signIn.email({
      email,
      password,
    });

    if (error) {
      toast.error(error.message || "Login failed. Please try again.");
      setLoading(false);
      return;
    }

    toast.success("Login successful!");
    router.push("/");
    setLoading(false);
  };

  const handleGoogleLogin = async () => {
    const { error } = await authClient.signIn.social({
      provider: "google",
      callbackURL: "/",
    });

    if (error) {
      toast.error(error.message || "Google login failed.");
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4 py-12">
      <div className="bg-white rounded-2xl shadow-lg w-full max-w-md px-8 py-10 flex flex-col gap-5">

        {/* Title */}
        <h1 className="text-2xl font-extrabold text-center text-gray-800 tracking-wide uppercase">
          User Login
        </h1>

        {/* Form */}
        <div className="flex flex-col gap-4">
          {/* Email */}
          <input
            type="email"
            placeholder="Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="input input-bordered w-full focus:outline-none focus:border-[#1a3557]"
          />

          {/* Password */}
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="input input-bordered w-full pr-12 focus:outline-none focus:border-[#1a3557]"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 text-xl"
            >
              {showPassword ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
            </button>
          </div>

          {/* Login Button */}
          <button
            onClick={handleLogin}
            disabled={loading}
            className="btn w-full bg-[#1a3557] text-white hover:bg-[#2c4a6e] border-none font-bold tracking-widest"
          >
            {loading ? (
              <span className="loading loading-spinner loading-sm"></span>
            ) : (
              "LOGIN"
            )}
          </button>
        </div>

        {/* Register Link */}
        <div className="text-center">
          <Link
            href="/register"
            className="text-[#1a3557] font-semibold hover:underline text-sm"
          >
            Register Now
          </Link>
        </div>

        {/* Divider */}
        <div className="divider text-gray-400 text-xs">Social Login</div>

        {/* Google Login */}
        <button
          onClick={handleGoogleLogin}
          className="btn w-full bg-white border border-gray-300 hover:bg-gray-50 text-gray-700 font-semibold flex items-center justify-center gap-3 shadow-sm"
        >
          <FcGoogle className="text-2xl" />
          Google
        </button>

      </div>
    </div>
  );
}