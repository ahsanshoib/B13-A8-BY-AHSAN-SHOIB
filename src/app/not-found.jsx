import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] gap-6 px-4">
      <h1 className="text-6xl font-extrabold text-[#1a3557]">404</h1>
      <h2 className="text-2xl font-bold text-gray-700">Page Not Found</h2>
      <p className="text-gray-500 text-center max-w-md">
        The page you are looking for does not exist or has been moved.
      </p>
      <Link href="/">
        <button className="btn bg-[#1a2c41] text-white hover:bg-[#2c4a6e] border-none px-8">
          Back to Home
        </button>
      </Link>
    </div>
  );
}