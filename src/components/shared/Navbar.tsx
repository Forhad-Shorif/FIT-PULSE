'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useContext } from 'react';
import { FaDumbbell } from 'react-icons/fa6';
import { PlanContext } from '@/context/PlanContext'; // আপনার কন্টেক্সটের পাথ অনুযায়ী অ্যাডজাস্ট করুন

const Navbar = () => {
  const pathname = usePathname();
  const { plan, saved } = useContext(PlanContext);

  return (
    <nav className="sticky top-0 z-50 bg-[#121316]/95 backdrop-blur-md border-b border-zinc-800/80 px-3 sm:px-8 py-3">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        
        {/* Left Side: Mobile Menu Dropdown & Logo */}
        <div className="flex items-center gap-2 sm:gap-4">
          
          {/* Mobile Hamburger Dropdown */}
          <div className="dropdown sm:hidden">
            <div
              tabIndex={0}
              role="button"
              className="p-1.5 text-zinc-300 hover:text-white hover:bg-zinc-800/60 rounded-xl transition-all cursor-pointer"
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

            {/* Mobile Menu Content */}
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-[#181a1e] border border-zinc-800/80 rounded-2xl z-50 mt-3 w-48 p-3 shadow-2xl space-y-2"
            >
              <li>
                <Link
                  href="/"
                  className={`font-bold py-2 ${
                    pathname === "/"
                      ? "text-[#ccff00] bg-zinc-800/60 border-l-2 border-[#ccff00]"
                      : "text-zinc-400 hover:text-white"
                  }`}
                >
                  Workouts
                </Link>
              </li>
              <li>
                <Link
                  href="/my-plan"
                  className={`font-bold py-2 ${
                    pathname === "/my-plan"
                      ? "text-[#ccff00] bg-zinc-800/60 border-l-2 border-[#ccff00]"
                      : "text-zinc-400 hover:text-white"
                  }`}
                >
                  My Plan
                </Link>
              </li>
            </ul>
          </div>

          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="text-[#ccff00] text-xl transform -rotate-12 group-hover:scale-110 transition-transform">
              <FaDumbbell />
            </div>
            <span className="font-extrabold tracking-wider text-[20px] sm:text-[24px] font-mono text-white">
              FIT<span className="text-[#ccff00]">LOG</span>
            </span>
          </Link>
        </div>

        {/* Center Navigation (Desktop Only) */}
        <div className="hidden sm:flex items-center gap-8">
          <Link
            href="/"
            className={`py-1 text-sm font-extrabold tracking-wide transition-all ${
              pathname === "/"
                ? "text-[#ccff00] border-b-2 border-[#ccff00]"
                : "text-zinc-400 hover:text-white"
            }`}
          >
            Workouts
          </Link>
          <Link
            href="/my-plan"
            className={`py-1 text-sm font-extrabold tracking-wide transition-all ${
              pathname === "/my-plan"
                ? "text-[#ccff00] border-b-2 border-[#ccff00]"
                : "text-zinc-400 hover:text-white"
            }`}
          >
            My Plan
          </Link>
        </div>

        {/* Right Badges / Action Buttons */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Plan Badge */}
          <Link
            href="/my-plan"
            className="bg-[#ccff00] hover:bg-[#bce600] text-black px-3 py-1.5 rounded-full flex items-center gap-2 transition-colors font-extrabold text-xs tracking-wider"
          >
            <span>Plan</span>
            <span className="bg-black text-[#ccff00] w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-black">
              {plan?.length || 0}
            </span>
          </Link>

          {/* Saved Badge */}
          <Link
            href="/saved"
            className="border border-[#ccff00]/80 text-[#ccff00] hover:bg-[#ccff00]/10 px-3 py-1.5 rounded-full flex items-center gap-2 transition-colors font-extrabold text-xs tracking-wider"
          >
            <span>Saved</span>
            <span className="bg-[#ccff00] text-black w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-black">
              {saved?.length || 0}
            </span>
          </Link>
        </div>

      </div>
    </nav>
  );
};

export default Navbar;