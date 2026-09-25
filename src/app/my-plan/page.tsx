"use client";

import { PlanContext } from "@/context/PlanContext";
import React, { useContext, useState } from "react";
import { Root } from "@/types/FitTypes";
import ListedPlan from "@/components/shared/ListedPlan";

const ListedCards = () => {
    const [activeTab, setActiveTab] = useState<"plan" | "saved">("plan");
    const [sortPlan, setSortPlan] = useState<"rating" | "duration" | "calories">("rating");
    const { plan = [], saved = [], planMinutes, planCalories } = useContext(PlanContext);

    // Sorting Function
    const sortList = (list: Root[]) => {
        const sorted = [...list];
        if (sortPlan === "rating") {
            sorted.sort((a, b) => b.rating - a.rating);
        } else if (sortPlan === "duration") {
            sorted.sort((a, b) => b.duration - a.duration);
        } else if (sortPlan === "calories") {
            sorted.sort((a, b) => b.caloriesBurned - a.caloriesBurned);
        }
        return sorted;
    };

    const sortedPlanList = sortList(plan);
    const sortedSavedList = sortList(saved);
    const currentList = activeTab === "plan" ? sortedPlanList : sortedSavedList;
     
    return (
        <div className="bg-[#121316] min-h-screen text-white pb-20">
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
                <div className="grid grid-cols-3 gap-6 py-6 border-y border-zinc-800/80 mb-8">
                    <div>
                        <p className="text-zinc-400 text-xs font-bold uppercase tracking-wider mb-1">
                            Exercises
                        </p>
                        <h2 className="text-3xl font-black text-[#ccff00]">
                            {plan.length}
                        </h2>
                    </div>
                    <div>
                        <p className="text-zinc-400 text-xs font-bold uppercase tracking-wider mb-1">
                            Minutes
                        </p>
                        <h2 className="text-3xl font-black text-white">
                            {planMinutes || 0}
                        </h2>
                    </div>
                    <div>
                        <p className="text-zinc-400 text-xs font-bold uppercase tracking-wider mb-1">
                            Calories
                        </p>
                        <h2 className="text-3xl font-black text-white">
                            {planCalories || 0}
                        </h2>
                    </div>
                </div>

                {/* Control Bar: Tabs (Left) & Sort By (Right) in exact same row */}
                <div className="flex items-center justify-between gap-3 mb-6">
                    
                    {/* Today's Plan & Saved Buttons */}
                    <div className="flex items-center gap-2 bg-[#181a1e] p-1 rounded-xl border border-zinc-800/80">
                        <button
                            type="button"
                            onClick={() => setActiveTab("plan")}
                            className={`text-xs font-bold px-3 sm:px-4 py-2 rounded-lg transition-all ${
                                activeTab === "plan"
                                    ? "bg-[#25282e] text-white border border-zinc-700/80"
                                    : "text-zinc-400 hover:text-white"
                            }`}
                        >
                            Today's Plan
                        </button>
                        <button
                            type="button"
                            onClick={() => setActiveTab("saved")}
                            className={`text-xs font-bold px-3 sm:px-4 py-2 rounded-lg transition-all ${
                                activeTab === "saved"
                                    ? "bg-[#25282e] text-white border border-zinc-700/80"
                                    : "text-zinc-400 hover:text-white"
                            }`}
                        >
                            Saved
                        </button>
                    </div>

                    {/* Sort Dropdown */}
                    <div className="flex items-center gap-2 text-xs font-bold text-zinc-400">
                        <span className="whitespace-nowrap">Sort By</span>
                        <select
                            value={sortPlan}
                            onChange={(e) =>
                                setSortPlan(e.target.value as "rating" | "duration" | "calories")
                            }
                            className="bg-[#181a1e] text-white text-xs font-bold border border-zinc-700/80 rounded-lg px-3 py-2 focus:outline-none focus:border-[#ccff00] cursor-pointer"
                        >
                            <option value="rating">Rating</option>
                            <option value="duration">Duration</option>
                            <option value="calories">Calories</option>
                        </select>
                    </div>

                </div>

                {/* List Content Area */}
                <div className="space-y-3">
                    {currentList.length > 0 ? (
                        currentList.map((card:Root) => (
                            <ListedPlan key={card.id} cards={card} />
                        ))
                    ) : (
                        <div className="text-center py-16 text-zinc-500 text-sm bg-[#181a1e] rounded-xl border border-zinc-800/60">
                            {activeTab === "plan" ? "No workouts added yet." : "No saved workouts yet."}
                        </div>
                    )}
                </div>

            </div>
        </div>
    );
};

export default ListedCards;