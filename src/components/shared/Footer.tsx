import Link from "next/link";
import { FaDumbbell } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="w-full bg-[#040507] border-t border-zinc-900 py-8 px-4 md:px-8 mt-auto">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        
        {/* Left Side */}
       <Link href="/" className="flex items-center gap-2 group">
          <div className="text-[#ccff00] text-xl transform -rotate-12 group-hover:scale-110 transition-transform">
            <FaDumbbell/>
          </div>
          <span className="font-extrabold tracking-wider text-xl font-mono text-white">
            FITLOG
          </span>
        </Link>
        {/* Right Side */}
        <p className="text-xs text-zinc-500 font-medium text-center sm:text-right">
          © FitLog — Workout Library. Train hard, log honest
        </p>

      </div>
    </footer>
  );
}