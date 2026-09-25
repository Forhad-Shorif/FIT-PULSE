"use client";

// import React, { useContext } from "react";
import Image from "next/image";
import Link from "next/link";
import { Root } from "@/types/FitTypes";
import { LuClock, LuFlame, LuStar, LuX } from "react-icons/lu";
// import { PlanContext } from "@/context/PlanContext";

interface DataType {
  cards: Root;
}

const ListedPlan = ({ cards }: DataType) => {
//   const { removeFromPlan } = useContext(PlanContext) || {};

  return (
    <div className="bg-[#181a1e] border border-zinc-800/80 hover:border-zinc-700 rounded-xl p-4 flex items-center justify-between gap-4 transition-all group">
      
      {/* Left: Image + Info */}
      <div className="flex items-center gap-4">
        {/* Thumbnail Image */}
        <div className="relative w-20 h-14 rounded-lg overflow-hidden flex-shrink-0 bg-zinc-800">
          <Image
            src={cards.image}
            alt={cards.name}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>

        {/* Details */}
        <div>
          <h3 className="text-sm font-black text-white uppercase tracking-tight group-hover:text-[#ccff00] transition-colors">
            {cards.name}
          </h3>
          <p className="text-xs text-zinc-400 font-medium mb-1">
            {cards.equipment}
          </p>

          {/* Stats Badges */}
          <div className="flex items-center gap-3 text-[11px] text-zinc-400 font-semibold">
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

      {/* Right: Actions */}
      <div className="flex items-center gap-3">
        <Link
          href={`/workout/${cards.id}`}
          className="bg-zinc-800/80 hover:bg-zinc-700 text-white text-xs font-bold px-4 py-2 rounded-lg border border-zinc-700/60 transition-colors"
        >
          View Details
        </Link>

        {/* {removeFromPlan && ( */}
          <button
            // onClick={() => removeFromPlan(cards.id)}
            className="text-zinc-500 hover:text-red-400 p-2 rounded-lg hover:bg-zinc-800 transition-colors cursor-pointer"
            title="Remove"
          >
            <LuX className="text-base" />
          </button>
        {/* )} */}
      </div>

    </div>
  );
};

export default ListedPlan;