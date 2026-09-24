"use client";
import Image from "next/image";
import Logo from "@/assets/banner.png"; // ইমেজের পাথ
import { FaArrowDown } from "react-icons/fa6"; // npm install react-icons
const Banner = () => {
  const scrollToLibrary = () => {
    const librarySection = document.getElementById("library");
    if (librarySection) {
      librarySection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="max-w-7xl mx-auto px-6 pt-8 pb-12">
      {/* Outer Banner Card with Dark Background */}
      <div className="bg-[#181a1e] rounded-2xl border border-zinc-800/60 p-8 md:p-12 lg:p-16 flex flex-col-reverse lg:flex-row items-center justify-between gap-8 relative overflow-hidden">

        {/* Left Content */}
        <div className="flex-1 space-y-6 z-10">

          {/* Eyebrow Text */}
          <span className="text-[#ccff00] text-xs font-bold tracking-widest uppercase bg-[#ccff00]/10 px-3 py-1 rounded-full inline-block">
            WORKOUT LIBRARY
          </span>

          {/* Main Heading */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-tight uppercase font-sans">
            <span className="text-white block">
              TRAIN WITH INTENT.
            </span>
            <span className="bg-gradient-to-r from-pink-500 via-blue-500 to-purple-500 bg-clip-text text-transparent inline-block">
              LOG EVERY SET.
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-zinc-400 text-sm sm:text-base max-w-lg leading-relaxed">
            FitLog is a dark, no-nonsense gym companion: pick a lift, lock it into today's plan, and watch the week's work add up.
          </p>

          {/* Primary CTA Button */}
          <button
            onClick={scrollToLibrary}
            className="bg-[#ccff00] hover:bg-[#bce600] text-black font-extrabold text-sm uppercase px-6 py-3.5 rounded-lg flex items-center gap-2 transition-all transform active:scale-95 cursor-pointer"
          >
            <span>BROWSE WORKOUTS</span>
            <FaArrowDown className="text-xs" />
          </button>
        </div>

        {/* Right Banner Image Container */}
        <div className="flex-1 w-full flex justify-center lg:justify-end z-10">
          <div className="relative w-full max-w-[400px] h-[280px] sm:h-[350px]">
            <Image
              src={Logo}
              height={350}
              width={400}
              alt="Gym Exercise Illustration"
              className="object-contain"
              priority
            />
          </div>
        </div>

      </div>
    </section>
  );
}
export default Banner;