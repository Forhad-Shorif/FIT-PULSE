'use client';
import { PlanContext } from '@/context/PlanContext';
import { Root } from '@/types/FitTypes';
import { CalendarPlus } from 'lucide-react';
import { useContext } from 'react';
import React from 'react';
import { toast } from 'react-toastify';

interface TodayPlanBtnProps {
    items: Root;
}

const TodayPlanBtn = ({ items }: TodayPlanBtnProps) => {
    const { plan, setPlan } = useContext(PlanContext);



    const handleAddToPlan = () => {

        const isAlreadyInPlan = plan.find((planItem) => planItem.id === items.id);
        
        if (!isAlreadyInPlan) {
            setPlan([...plan, items]);

            toast.success(`${items.name} added to Today's Plan!`, {
                style: {
                    backgroundColor: "#181a1e",
                    color: "#ffffff",
                    border: "1px solid #27272a",
                    width: "280px"
                },
            });
        } else {
            toast.info(`${items.name} is already in Today's Plan!`, {
                style: {
                    backgroundColor: "#181a1e",
                    color: "#ffffff",
                    border: "1px solid #27272a",
                    width: "280px"
                },
            });
        }
    };

    return (
        <div>
            <button
                onClick={handleAddToPlan}
                className="bg-[#ccff00] hover:bg-[#bce600] text-black font-extrabold text-xs uppercase px-5 py-3 rounded-lg flex items-center gap-2 transition-colors cursor-pointer"
            >
                <CalendarPlus className='w-5 h-5' />
                <span>Add to today's plan</span>
            </button>
        </div>
    );
};

export default TodayPlanBtn; 