import { Root } from '@/types/FitTypes';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { LuClock, LuFlame, LuStar } from 'react-icons/lu'; // npm install react-icons

const PlanCards = ({ card }: { card: Root }) => {
    return (
        <Link href={`/workout/${card.id}`} className="block group cursor-pointer">
            <div className="bg-[#121316] rounded-2xl p-4 border border-zinc-800/60 hover:border-[#ccff00] transition-all duration-300 flex flex-col justify-between h-full">
                
                {/* 1. Illustration / Image */}
                <div className="relative w-full h-48 sm:h-52 rounded-xl overflow-hidden mb-4">
                    <Image
                        src={card.image}
                        alt={card.name}
                        width={400}
                        height={300}
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                </div>

                {/* 2. Content Container */}
                <div className="flex-1 flex flex-col justify-between space-y-3">
                    
                    {/* Category Tags */}
                    <div className="flex flex-wrap gap-2">
                        {card.muscleGroups?.map((group, index) => (
                            <span
                                key={index}
                                className="bg-[#ccff00] text-black text-[10px] font-extrabold tracking-wider px-2.5 py-0.5 rounded-full uppercase"
                            >
                                {group}
                            </span>
                        ))}
                    </div>

                    {/* Title & Equipment */}
                    <div>
                        <h3 className="text-lg font-black text-white uppercase tracking-tight group-hover:text-[#ccff00] transition-colors">
                            {card.name}
                        </h3>
                        <p className="text-xs text-zinc-400 mt-1 font-medium">
                            {card.equipment}
                        </p>
                    </div>

                    {/* 3. Stats Row */}
                    <div className="flex items-center gap-4 text-xs font-semibold text-zinc-400 pt-2 border-t border-zinc-800/40">
                        {/* Duration */}
                        <div className="flex items-center gap-1.5">
                            <LuClock className="text-sm text-zinc-400" />
                            <span>{card.duration} min</span>
                        </div>
   
                        {/* Calories */}
                        <div className="flex items-center gap-1.5">
                            <LuFlame className="text-sm text-zinc-400" />
                            <span>{card.caloriesBurned} kcal</span>
                        </div>

                        {/* Rating */}
                        <div className="flex items-center gap-1.5">
                            <LuStar className="text-sm text-zinc-400" />
                            <span>{card.rating}</span>
                        </div>
                    </div>

                </div>

            </div>
        </Link>
    );
};

export default PlanCards;