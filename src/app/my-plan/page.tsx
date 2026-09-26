"use client";

import { PlanContext } from "@/context/PlanContext";
import React, { useContext, useState } from "react";
import { Root } from "@/types/FitTypes";
import ListedPlan from "@/components/shared/ListedPlan";
import Link from "next/link";

const ListedCards = () => {
    // Cheking Plan and Saved
    const [activeTab, setActiveTab] = useState<"plan" | "saved">("plan");

    //  Sort Option State
    const [sortPlan, setSortPlan] = useState<"none" | "rating" | "duration" | "calories">("none");

    // Distruccring data plan and saved 
    const { plan = [], saved = [] } = useContext(PlanContext);

    // Sorting Function
    const getSortedList = (list: Root[]) => {
        // console.log(list)

        const sorted = [...list];

        if (sortPlan === "rating") {
            return sorted.sort((a, b) => (b.rating || 0) - (a.rating || 0));
        }
        if (sortPlan === "duration") {
            return sorted.sort((a, b) => (b.duration || 0) - (a.duration || 0));
        }
        if (sortPlan === "calories") {
            return sorted.sort((a, b) => (b.caloriesBurned || 0) - (a.caloriesBurned || 0));
        }
        return list;
    };

    // Short Cheking data
    const currentPlanList = getSortedList(plan);
    const currentSavedList = getSortedList(saved);

    const activeData = activeTab === "plan" ? plan : saved;

    const totalMinutes = activeData.reduce((acc, curr) => acc + (curr.duration || 0), 0);
    const totalCalories = activeData.reduce((acc, curr) => acc + (curr.caloriesBurned || 0), 0);

    return (
        <div className="bg-[#121316]  text-white pb-5">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-6">

                {/* Header */}
                <div className="mb-8">
                    <h1 className="text-3xl font-black uppercase tracking-tight text-white">
                        MY PLAN
                    </h1>
                    <p className="text-zinc-400 text-sm mt-1">
                        Cap of five lifts for today. Finish them, then load more.
                    </p>
                </div>

                {/* Stats Summary */}
                <div className="grid grid-cols-3 gap-0 py-6 border-y border-zinc-800/80 mb-6 items-center text-center">

                    {/* Left: Exercises */}
                    <div className="px-6">
                        <p className="text-zinc-400 text-xs font-bold uppercase tracking-wider mb-1">
                            Exercises
                        </p>
                        <h2 className="text-3xl font-black text-[#ccff00]">
                            {activeData.length}
                        </h2>
                    </div>

                    <div className="border-x border-zinc-300/100 px-4">
                        <p className="text-zinc-400 text-xs font-bold uppercase tracking-wider mb-1">
                            Minutes
                        </p>
                        <h2 className="text-3xl font-black text-white">
                            {totalMinutes}
                        </h2>
                    </div>

                    {/* Right: Calories */}
                    <div className="px-6">
                        <p className="text-zinc-400 text-xs font-bold uppercase tracking-wider mb-1">
                            Calories
                        </p>
                        <h2 className="text-3xl font-black text-white">
                            {totalCalories}
                        </h2>
                    </div>

                </div>
                {/* Control Bar */}
                <div className="flex items-center justify-between gap-3 mb-5">

                    {/* Input Tabs */}
                    <div className="tabs tabs-boxed bg-[#181a1e] p-1 border border-zinc-800/80 rounded-xl gap-1">
                        <input
                            type="radio"
                            name="my_plan_tabs"
                            role="tab"
                            className="tab text-xs font-bold text-zinc-400 checked:!bg-[#25282e] checked:!text-white rounded-lg transition-all h-8 px-3 sm:px-4 cursor-pointer"
                            aria-label="Today's Plan"
                            checked={activeTab === "plan"}
                            onChange={() => setActiveTab("plan")}
                        />
                        <input
                            type="radio"
                            name="my_plan_tabs"
                            role="tab"
                            className="tab text-xs font-bold text-zinc-400 checked:!bg-[#25282e] checked:!text-white rounded-lg transition-all h-8 px-3 sm:px-4 cursor-pointer"
                            aria-label="Saved"
                            checked={activeTab === "saved"}
                            onChange={() => setActiveTab("saved")}
                        />
                    </div>

                    {/* Sort By  */}
                    <div className="flex items-center gap-2 text-xs font-bold text-zinc-400">
                        <span className="whitespace-nowrap">Sort By</span>
                        <select
                            value={sortPlan}
                            onChange={(e) =>
                                setSortPlan(e.target.value as "none" | "rating" | "duration" | "calories")
                            }
                            className="bg-[#181a1e] text-white text-xs font-bold border border-zinc-700/80 rounded-lg px-3 py-2 focus:outline-none focus:border-[#ccff00] cursor-pointer"
                        >
                            <option value="none">Default</option>
                            <option value="rating">Rating</option>
                            <option value="duration">Duration</option>
                            <option value="calories">Calories</option>
                        </select>
                    </div>

                </div>

                {/* Data Cards */}
                <div className="space-y-3">
                    {activeTab === "plan" ? (
                        currentPlanList.length > 0 ? (
                            currentPlanList.map((card) => (
                                <ListedPlan key={card.id} cards={card} active="plan" />
                            ))
                        ) : (
                            <div className="text-center py-10 text-zinc-500 text-sm bg-[#0c0e10] rounded-xl border border-zinc-800/60">
                                <h2 className="text-3xl text-white">NOTHING HERE YET</h2>
                                <p className="text-gray-300 mt-1">Browse the library and add a lift to get today moving</p>
                                <Link href="/">
                                    <button className="border text-white bg-yellow-400 font-semibold p-1.5 rounded-full hover:bg-yellow-500 mt-1 transition-colors">
                                        Go to workouts
                                    </button>
                                </Link>
                            </div>
                        )
                    ) : (
                        currentSavedList.length > 0 ? (
                            currentSavedList.map((card) => (
                                <ListedPlan key={card.id} cards={card} active="saved" />
                            ))
                        ) : (
                            <div className="text-center py-10 text-zinc-500 text-sm bg-[#0e0f11] rounded-xl border border-zinc-800/60">
                                <h2 className="text-3xl text-white">NOTHING HERE YET</h2>
                                <p className="text-gray-300 mt-1">Browse the library and add a lift to get today moving</p>
                                <Link href="/">
                                    <button className="border text-white bg-yellow-400 font-semibold p-1.5 rounded-full hover:bg-yellow-500 mt-1 transition-colors">
                                        Go to workouts
                                    </button>
                                </Link>
                            </div>
                        )
                    )}
                </div>

            </div>
        </div>
    );
};

export default ListedCards;