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

        {/* Left Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <div className="text-[#ccff00] text-xl transform -rotate-12 group-hover:scale-110 transition-transform">
            <FaDumbbell />
          </div>
          <span className="font-extrabold tracking-wider text-[20px] sm:text-[27px] font-mono text-white">
            FITLOG
          </span>
        </Link>

        {/* Middle Nav Links */}
        <div className="flex items-center gap-2 sm:gap-8 text-sm font-semibold">
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

        {/* Right-side */}
        <div className="flex items-center gap-3 text-xs font-bold">
          {/* Total Listed Plan */}
          <Link
            href="/my-plan"
            className="bg-[#ccff00] text-black px-2 sm:px-3.5 py-1 sm:py-1.5 rounded-full flex items-center gap-2 hover:bg-[#bce600] transition-colors"
          >
            <span className="text-[10px] sm:text-[18px]">Plan</span>
            <span className="bg-black text-[#ccff00] py-0 px-1 sm:px-1.5 sm:py-0.5 rounded-full text-[10px] sm:text-[14px] font-extrabold min-w-[20px] text-center">
              {plan?.length || 0}
            </span>
          </Link>
          {/* Total Saved */}
          <Link
            href="/my-plan"
            className="bg-[#ccff00] text-black px-2 sm:px-3.5 py-1 sm:py-1.5 rounded-full flex items-center gap-2 hover:bg-[#bce600] transition-colors"
          >
            <span className="text-[10px] sm:text-[18px]">Saved</span>
            <span className="bg-black text-[#ccff00] py-0 px-1 sm:px-1.5 sm:py-0.5 rounded-full text-[10px] sm:text-[14px] font-extrabold min-w-[20px] text-center">
              {saved?.length || 0}
            </span>
          </Link>
   
        </div>

      </div>
    </nav>
  );
}
export default Navbar;