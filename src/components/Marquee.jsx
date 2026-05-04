"use client";

export default function Marquee() {
  const marqueeText =
    "New Arrivals: Azure Wave | Weekly Feature: Modern Geometric Patterns | Join the Community | New Arrivals: Mosaic Dream | Limited Edition: Marble Luxe | Explore Premium Collections |";

  return (
    <div className="bg-[#1a3557] text-white py-2 overflow-hidden whitespace-nowrap">
      <div
        style={{
          display: "inline-flex",
          animation: "marquee 20s linear infinite",
          width: "max-content",
        }}
      >
        <span className="text-sm font-medium tracking-wide px-4">
          {marqueeText} &nbsp;&nbsp;&nbsp; {marqueeText}
        </span>
      </div>

      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  );
}