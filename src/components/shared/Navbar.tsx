"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaDumbbell } from "react-icons/fa6";
import { useContext } from "react";
import { PlanContext } from "@/context/PlanContext";

const Navbar = () => {
  const pathname = usePathname();
  const { plan, saved } = useContext(PlanContext);

  return (
    <div className="navbar bg-base-100 shadow-sm border-b border-zinc-800/60 px-2 sm:px-6">
      <div className="navbar-start gap-2 sm:gap-3">
        
        {/* Mobile Hamburger Dropdown (sudhu sm-er niche dekhabe) */}
        <div className="dropdown sm:hidden">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost p-1.5 text-zinc-300 hover:text-white hover:bg-zinc-800/60 rounded-xl transition-all"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2.5"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </div>
          
          {/* Mobile Menu List */}
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-[#121316] border border-zinc-800/80 rounded-2xl z-50 mt-3 w-44 p-3 shadow-2xl space-y-2"
          >
            <li>
              <Link
                href="/"
                className={`font-bold transition-colors ${
                  pathname === "/"
                    ? "text-[#ccff00] bg-zinc-800/50 border-l-2 border-[#ccff00]"
                    : "text-zinc-400 hover:text-white"
                }`}
              >
                Workouts
              </Link>
            </li>
            <li>
              <Link
                href="/my-plan"
                className={`font-bold transition-colors ${
                  pathname === "/my-plan"
                    ? "text-[#ccff00] bg-zinc-800/50 border-l-2 border-[#ccff00]"
                    : "text-zinc-400 hover:text-white"
                }`}
              >
                My Plan
              </Link>
            </li>
          </ul>
        </div>

        {/* Logo */}
        <div>
          <Link href="/" className="flex items-center gap-2 group">
            <div className="text-[#ccff00] text-xl transform -rotate-12 group-hover:scale-110 transition-transform">
              <FaDumbbell />
            </div>
            <span className="font-extrabold tracking-wider text-[18px] sm:text-[24px] font-mono text-white">
              FITLOG
            </span>
          </Link>
        </div>
      </div>

      {/* Desktop & Tablet Menu (sm, md, lg, xl sob-khane dekhabe) */}
      <div className="navbar-center hidden sm:flex">
        <ul className="flex items-center gap-6 md:gap-8">
          <Link
            href="/"
            className={`py-2 transition-all relative font-extrabold text-sm tracking-wide ${
              pathname === "/"
                ? "text-[#ccff00] border-b-2 border-[#ccff00]"
                : "text-zinc-400 hover:text-white"
            }`}
          >
            Workouts
          </Link>
          <Link
            href="/my-plan"
            className={`py-2 transition-all relative font-extrabold text-sm tracking-wide ${
              pathname === "/my-plan"
                ? "text-[#ccff00] border-b-2 border-[#ccff00]"
                : "text-zinc-400 hover:text-white"
            }`}
          >
            My Plan
          </Link>
        </ul>
      </div>

      {/* Right Buttons */}
      <div className="navbar-end gap-1.5 sm:gap-2">
        <Link
          href="/my-plan"
          className="bg-[#ccff00] text-black px-2.5 sm:px-3.5 py-1 sm:py-1.5 rounded-full flex items-center gap-1.5 sm:gap-2 hover:bg-[#bce600] transition-colors font-black"
        >
          <span className="text-[11px] sm:text-[13px]">Plan</span>
          <span className="bg-black text-[#ccff00] py-0.5 px-1.5 rounded-full text-[10px] sm:text-[11px] font-extrabold min-w-[18px] text-center">
            {plan?.length || 0}
          </span>
        </Link>
        <Link
          href="/my-plan"
          className="bg-[#ccff00] text-black px-2.5 sm:px-3.5 py-1 sm:py-1.5 rounded-full flex items-center gap-1.5 sm:gap-2 hover:bg-[#bce600] transition-colors font-black"
        >
          <span className="text-[11px] sm:text-[13px]">Saved</span>
          <span className="bg-black text-[#ccff00] py-0.5 px-1.5 rounded-full text-[10px] sm:text-[11px] font-extrabold min-w-[18px] text-center">
            {saved?.length || 0}
          </span>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;