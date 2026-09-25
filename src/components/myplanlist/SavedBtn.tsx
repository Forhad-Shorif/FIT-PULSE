'use client';
import { PlanContext } from '@/context/PlanContext';
import { Root } from '@/types/FitTypes';
import { Bookmark, Calendar, CalendarPlus } from 'lucide-react';
import { useContext } from 'react';
import { toast } from 'react-toastify';


interface SavedBtnProps {
    item: Root;
}

const SavedBtn = ({ item }: SavedBtnProps) => {
    const { saved, setSaved } = useContext(PlanContext);



    // add to 
    const handleSave = () => {

        const isAlreadySaved = saved.find((savedItem) => savedItem.id === item.id);

        if (!isAlreadySaved) {
            setSaved([...saved, item]);
            // Success Toast
            toast.success(`${item.name} saved for later!`, {
                style: {
                    backgroundColor: "#181a1e",
                    color: "#ffffff",
                    border: "1px solid #27272a",
                    width: "280px"
                },
            });
        } else {
            //  Already Saved Toast
            toast.info(`${item.name} is already saved!`, {
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
                onClick={handleSave}
                className="bg-[#181a1e] hover:bg-zinc-800 border border-zinc-700 text-white font-bold text-xs uppercase px-5 py-3 rounded-lg flex items-center gap-2 transition-colors cursor-pointer"
            >
                <Bookmark className='w-5 h-5' />
                <span>Save for later</span>
            </button>
        </div>
    );
};

export default SavedBtn;