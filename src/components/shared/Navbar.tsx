"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaDumbbell } from "react-icons/fa6"; // npm install react-icons
import { useContext } from "react";
import { PlanContext } from "@/context/PlanContext";

const Navbar = () => {
  const pathname = usePathname();
  const { plan, saved } = useContext(PlanContext);

  return (
    <nav className="bg-[#121316] text-white border-b border-zinc-800/80 sticky top-0 z-50 px-6 py-3.5">
      <div className="max-w-7xl mx-auto flex items-center justify-between">

        {/* 1. Left Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <div className="text-[#ccff00] text-xl transform -rotate-12 group-hover:scale-110 transition-transform">
            <FaDumbbell />
          </div>
          <span className="font-extrabold tracking-wider text-xl font-mono text-white">
            FITLOG
          </span>
        </Link>

        {/* 2. Middle Navigation Links */}
        <div className="flex items-center gap-8 text-sm font-semibold">
          <Link
            href="/"
            className={`pb-1 transition-colors relative font-bold ${
              pathname === "/"
                ? "text-[#ccff00] after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-[#ccff00]"
                : "text-zinc-400 hover:text-white"
              }`}
          >
            Workouts
          </Link>
          <Link
            href="/my-plan"
            className={`pb-1 transition-colors relative ${pathname === '/my-plan'
                ? "text-[#ccff00] font-bold after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-[#ccff00]"
                : "text-zinc-400 hover:text-white"
              }`}
          >
            My Plan
          </Link>
        </div>

        {/* 3. Right-side Status Badges */}
        <div className="flex items-center gap-3 text-xs font-bold">
          {/* Plan Badge - Filled pill */}
          <Link
            href="/my-plan"
            className="bg-[#ccff00] text-black px-3.5 py-1.5 rounded-full flex items-center gap-2 hover:bg-[#bce600] transition-colors"
          >
            <span>Plan</span>
            <span className="bg-black text-[#ccff00] px-1.5 py-0.5 rounded-full text-[11px] font-extrabold min-w-[20px] text-center">
              {plan?.length || 0}
            </span>
          </Link>

          {/* Saved Badge - Outline pill */}
          <Link
            href="/"
            className="border border-zinc-700 text-zinc-300 px-3.5 py-1.5 rounded-full flex items-center gap-2 hover:border-[#ccff00] hover:text-white transition-colors"
          >
            <span>Saved</span>
            <span className="bg-zinc-800 text-zinc-200 px-1.5 py-0.5 rounded-full text-[11px] font-extrabold min-w-[20px] text-center">
              {saved?.length || 0}
            </span>
          </Link>
        </div>

      </div>
    </nav>
  );
}
export default Navbar;