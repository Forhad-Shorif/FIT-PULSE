'use client';
import { PlanContext } from '@/context/PlanContext';
import { Root } from '@/types/FitTypes';
import { useContext } from 'react';
import React from 'react';

interface TodayPlanBtnProps {
    items: Root;
}

const TodayPlanBtn = ({ items }: TodayPlanBtnProps) => {

    const { plan, setPlan, planMinutes, setPlanMinutes, planCalories, setPlanCalories } = useContext(PlanContext);


    const Cheking = plan.find((planItem) => planItem.id === items.id);

    const handleAddToPlan = () => {
        if (!Cheking) {
            setPlan([...plan, items]);
           
            setPlanMinutes(planMinutes + items.duration);
            setPlanCalories(planCalories + items.caloriesBurned);
        }
    }


    return (
        <div>
            <button onClick={() => handleAddToPlan()} className="bg-[#ccff00] hover:bg-[#bce600] text-black font-extrabold text-xs uppercase px-5 py-3 rounded-lg flex items-center gap-2 transition-colors cursor-pointer">
                <span className="text-base">➕</span>
                <span>Add to today's plan</span>
            </button>

        </div>
    );
};


export default TodayPlanBtn;