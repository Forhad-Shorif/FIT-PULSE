'use client';
import { PlanContext } from '@/context/PlanContext';
import { Root } from '@/types/FitTypes';
import { useContext } from 'react';

interface SavedBtnProps {
    item: Root;
}
const SavedBtn = ({ item }: SavedBtnProps) => {

    const { saved, setSaved , savedMinutes, setSavedMinutes, savedCalories, setSavedCalories } = useContext(PlanContext);


      const Cheking = saved.find((savedItem) => savedItem.id === item.id);


      const handleSave = () => {
      if(!Cheking) {
        setSaved([...saved, item]);
        setSavedMinutes(savedMinutes + item.duration);
        setSavedCalories(savedCalories + item.caloriesBurned);
      }
    };

    return (
        <div>
            <button onClick={() => handleSave()} className="bg-[#181a1e] hover:bg-zinc-800 border border-zinc-700 text-white font-bold text-xs uppercase px-5 py-3 rounded-lg flex items-center gap-2 transition-colors cursor-pointer">
                <span className="text-base">💾</span>
                <span>Save for later</span>
            </button>
        </div>
    );
};

export default SavedBtn;