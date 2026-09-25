import { Root } from '@/types/FitTypes';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { LuClock, LuFlame, LuStar } from 'react-icons/lu';

const PlanCards = ({ card }: { card: Root }) => {
    return (
       <Link href={`/workout/${card.id}`} className="block group cursor-pointer h-full">
    <div className="bg-[#121316] rounded-2xl p-4 border border-zinc-800/60 hover:border-[#ccff00] transition-all duration-300 flex flex-col justify-between h-full">
        
        {/* Image Section */}
        <div className="w-full rounded-xl overflow-hidden mb-4 bg-zinc-900/40">
            <Image
                src={card.image}
                alt={card.name}
                width={600}
                height={400}
                className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500 ease-out rounded-xl"
            />
        </div>

        {/* Container */}
        <div className="flex-1 flex flex-col justify-between space-y-3">
            
            {/* Category  */}
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

            {/* Title */}
            <div>
                <h3 className="text-lg font-black text-white uppercase  tracking-tight group-hover:text-[#ccff00] transition-colors ">
                    {card.name}
                </h3>
                <p className="text-xs text-zinc-400 mt-1 font-medium truncate">
                    {card.equipment}
                </p>
            </div>

            {/* Time Caloris Reting */}
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
                    <LuStar className="text-sm text-amber-400 fill-amber-400" />
                    <span>{card.rating}</span>
                </div>
            </div>

        </div>

    </div>
</Link>
    );
};

export default PlanCards;