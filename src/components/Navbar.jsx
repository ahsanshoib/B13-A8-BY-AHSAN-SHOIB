"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useAuth } from "@/context/AuthContext";
import { authClient } from "@/lib/auth-client";
import { toast } from "react-toastify";

export default function Navbar() {
  const pathname = usePathname();
  const router = useRouter();
  const { session, isPending } = useAuth();

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/all-tiles", label: "All Tiles" },
    { href: "/my-profile", label: "My Profile" },
  ];

  const handleLogout = async () => {
    try {
      await authClient.signOut();
      toast.success("Logged out successfully!");
      router.push("/");
    } catch (error) {
      toast.error("Logout failed. Please try again.");
    }
  };

  return (
    <div className="navbar bg-base-100 shadow-md px-4 md:px-10 sticky top-0 z-50">
      {/* Left: Logo */}
      <div className="navbar-start">
        <Link href="/">
          <Image
            src="/title-logo.png"
            alt="Tile Shop Logo"
            width={120}
            height={40}
            className="object-contain cursor-pointer"
          />
        </Link>
      </div>

      {/* Centre: Nav Links (Desktop) */}
      <div className="navbar-center hidden md:flex">
        <ul className="menu menu-horizontal px-1 gap-2">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={`font-medium text-base ${
                  pathname === link.href
                    ? "text-primary font-semibold underline underline-offset-4"
                    : "text-base-content hover:text-primary"
                }`}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Right: Auth Buttons */}
      <div className="navbar-end gap-2">
        {isPending ? (
          <span className="loading loading-spinner loading-sm text-[#1a3557]"></span>
        ) : session ? (
          <>
            {/* User Avatar */}
            <Link href="/my-profile">
              <div className="avatar cursor-pointer">
                <div className="w-9 rounded-full ring ring-[#1a3557] ring-offset-1">
                  {session.user?.image ? (
                    <img src={session.user.image} alt="Profile" />
                  ) : (
                    <div className="w-full h-full bg-[#1a3557] flex items-center justify-center rounded-full">
                      <span className="text-white text-sm font-bold">
                        {session.user?.name?.charAt(0).toUpperCase()}
                      </span>
                    </div>
                  )}
                </div>
              </div>
            </Link>

            {/* Logout Button */}
            <button
              onClick={handleLogout}
              className="btn btn-sm bg-[#1a3557] text-white hover:bg-[#2c4a6e] border-none font-semibold"
            >
              LOGOUT
            </button>
          </>
        ) : (
          <Link href="/login">
            <button className="btn btn-primary btn-sm text-white font-semibold px-5">
              LOGIN
            </button>
          </Link>
        )}

        {/* Mobile Dropdown */}
        <div className="dropdown dropdown-end md:hidden">
          <div tabIndex={0} role="button" className="btn btn-ghost btn-sm ml-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-40"
          >
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={
                    pathname === link.href ? "text-primary font-semibold" : ""
                  }
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}