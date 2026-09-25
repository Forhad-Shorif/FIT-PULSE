"use client";
import { toast } from "react-toastify";
import Image from "next/image";
import Link from "next/link";
import { Root } from "@/types/FitTypes";
import { LuClock, LuFlame, LuStar, LuX } from "react-icons/lu";
import { useContext } from "react";
import { PlanContext } from "@/context/PlanContext";

interface DataType {
  cards: Root;
  active: string;
}

const ListedPlan = ({ cards, active }: DataType) => {
  const { plan = [], saved = [], setPlan, setSaved } = useContext(PlanContext);

  // HandleRemove
  const handleRemove = () => {

    if (active === "plan") {
      const updatedPlan = plan.filter((elem) => elem.id !== cards.id);
      setPlan(updatedPlan);

      // Toast Notification for Today's Plan
      toast.error(`${cards.name} removed from Today's Plan!`, {
        style: {
          backgroundColor: "#181a1e",
          color: "#ffffff",
          border: "1px solid #27272a",
        },
      });
    } else {

      const updatedSaved = saved.filter((elem) => elem.id !== cards.id);
      setSaved(updatedSaved);

      //  Toast Notification for Saved
      toast.error(`${cards.name} removed from Saved!`, {
        style: {
          backgroundColor: "#181a1e",
          color: "#ffffff",
          border: "1px solid #27272a",
        },
      });
    }
  };

  return (
    <div className="bg-[#181a1e] border border-zinc-800/80 hover:border-zinc-700 rounded-xl p-3 sm:p-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-4 transition-all group overflow-hidden">

      {/* Left side */}
      <div className="flex items-center gap-3 sm:gap-4 w-full sm:w-auto">
        {/* Image side */}
        <div className="relative w-20 h-16 sm:w-20 sm:h-14 rounded-lg overflow-hidden flex-shrink-0 bg-zinc-800">
          <Image
            src={cards.image}
            alt={cards.name}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>

        {/* Title side */}
        <div className="min-w-0 flex-1">
          <h3 className="text-xs sm:text-sm font-black text-white uppercase tracking-tight group-hover:text-[#ccff00] transition-colors truncate">
            {cards.name}
          </h3>
          <p className="text-[11px] sm:text-xs text-zinc-400 font-medium mb-1 truncate">
            {cards.equipment}
          </p>

          <div className="flex flex-wrap items-center gap-2 sm:gap-3 text-[10px] sm:text-[11px] text-zinc-400 font-semibold">
            <span className="flex items-center gap-1">
              <LuClock className="text-xs text-zinc-500" />
              {cards.duration} min
            </span>
            <span className="flex items-center gap-1">
              <LuFlame className="text-xs text-zinc-500" />
              {cards.caloriesBurned} kcal
            </span>
            <span className="flex items-center gap-1">
              <LuStar className="text-xs text-amber-400 fill-amber-400" />
              {cards.rating}
            </span>
          </div>
        </div>
      </div>

      {/* Right side */}
      <div className="flex items-center justify-end gap-2 w-full sm:w-auto pt-2 sm:pt-0 border-t sm:border-t-0 border-zinc-800/60">
        <Link
          href={`/workout/${cards.id}`}
          className="bg-zinc-800/80 hover:bg-zinc-700 text-white text-[11px] sm:text-xs font-bold px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg border border-zinc-700/60 transition-colors whitespace-nowrap"
        >
          View Details
        </Link>

        <button
          onClick={handleRemove}
          className="text-zinc-500 hover:text-red-400 p-1.5 sm:p-2 rounded-lg hover:bg-zinc-800 transition-colors cursor-pointer shrink-0"
          title="Remove"
        >
          <LuX className="text-sm sm:text-base" />
        </button>
      </div>

    </div>
  );
};

export default ListedPlan;