import { Root } from '@/types/FitTypes';
import React from 'react';
import Image from 'next/image';
import SavedBtn from '@/components/myplanlist/SavedBtn';
import TodayPlanBtn from '@/components/myplanlist/TodayPlanBtn';

const cardsData = async () => {
    const res = await fetch('https://api.abcz.workers.dev/api/fitlog', {
        cache: 'no-store' 
    });
    if (!res.ok) {
        throw new Error('Failed to fetch data');
    }
    return res.json();
}

interface PageProps {
    params: Promise<{
        id: string;
    }>;
}

const Page = async ({ params }: PageProps) => {
    const { id } = await params;
    const cards = await cardsData();
    const card: Root | undefined = cards.find((gym: Root) => String(gym.id) === id);

    if (!card) {
        return (
            <div className="min-h-screen bg-[#141111] text-white flex items-center justify-center">
                <h1 className="text-xl font-bold">Card not found</h1>
            </div>
        );
    }

    return (
        <div className="bg-[#040507] min-h-screen text-white py-8 px-4 md:px-8">

            <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch">

                {/* Left Side */}
                <div className="lg:col-span-5 flex flex-col w-full rounded-2xl overflow-hidden border border-zinc-800/80 bg-[#181a1e] p-2.5 sm:p-3">
                    <div className="relative w-full h-full min-h-[380px] sm:min-h-[480px] lg:min-h-0 flex-1 rounded-xl overflow-hidden">
                        <Image
                            src={card.image}
                            alt={card.name}
                            fill
                            priority
                            sizes="(max-width: 1024px) 100vw, 40vw"
                            className="object-cover rounded-xl"
                        />
                    </div>
                </div>

                {/* Right Side */}
                <div className="lg:col-span-7 space-y-5">

                    {/* Title & Description */}
                    <div>
                        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-black uppercase tracking-tight text-white mb-2 font-sans">
                            {card.name}
                        </h1>
                        <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed max-w-xl">
                            {card.description}
                        </p>
                    </div>

                    {/* Category */}
                    <div className="flex flex-wrap gap-2">
                        {card.muscleGroups?.map((group, index) => (
                            <span
                                key={index}
                                className="bg-[#ccff00] text-black text-[11px] font-extrabold uppercase px-3 py-1 rounded-full"
                            >
                                {group}
                            </span>
                        ))}
                    </div>

                    {/* Summary */}
                    <div className="bg-[#181a1e] rounded-xl border border-zinc-800/60 p-4 sm:p-5 space-y-2.5 text-xs sm:text-sm font-semibold">
                        <div className="flex justify-between items-center py-1 border-b border-zinc-800/40">
                            <span className="text-zinc-500 uppercase tracking-wider font-extrabold">EQUIPMENT</span>
                            <span className="text-white font-medium">{card.equipment}</span>
                        </div>
                        <div className="flex justify-between items-center py-1 border-b border-zinc-800/40">
                            <span className="text-zinc-500 uppercase tracking-wider font-extrabold">DIFFICULTY</span>
                            <span className="text-white font-medium">{card.difficulty}</span>
                        </div>
                        <div className="flex justify-between items-center py-1 border-b border-zinc-800/40">
                            <span className="text-zinc-500 uppercase tracking-wider font-extrabold">SETS</span>
                            <span className="text-white font-medium">{card.sets}</span>
                        </div>
                        <div className="flex justify-between items-center py-1 border-b border-zinc-800/40">
                            <span className="text-zinc-500 uppercase tracking-wider font-extrabold">REPS</span>
                            <span className="text-white font-medium">{card.reps}</span>
                        </div>
                        <div className="flex justify-between items-center py-1 border-b border-zinc-800/40">
                            <span className="text-zinc-500 uppercase tracking-wider font-extrabold">DURATION</span>
                            <span className="text-white font-medium">{card.duration} min</span>
                        </div>
                        <div className="flex justify-between items-center py-1 border-b border-zinc-800/40">
                            <span className="text-zinc-500 uppercase tracking-wider font-extrabold">CALORIES</span>
                            <span className="text-white font-medium">{card.caloriesBurned} kcal</span>
                        </div>
                        <div className="flex justify-between items-center py-1">
                            <span className="text-zinc-500 uppercase tracking-wider font-extrabold">RATING</span>
                            <span className="text-white font-medium">{card.rating}</span>
                        </div>
                    </div>

                    {/* Instructions Section */}
                    <div className="space-y-2.5 pt-1">
                        <h3 className="text-sm sm:text-base font-black uppercase text-white tracking-wider">
                            INSTRUCTIONS
                        </h3>
                        <ol className="space-y-1.5 text-zinc-300 text-xs sm:text-sm list-decimal list-inside leading-relaxed">
                            {card.instructions?.map((instruction, index) => (
                                <li key={index} className="pl-1">
                                    <span className="text-zinc-300">{instruction}</span>
                                </li>
                            ))}
                        </ol>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex flex-wrap items-center gap-3 pt-3">
                        <TodayPlanBtn key="today-plan" items={card} />
                        <SavedBtn key="saved" item={card} />
                    </div>

                </div>

            </div>
        </div>
    );
};

export default Page;