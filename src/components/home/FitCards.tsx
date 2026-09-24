
import { Root } from '@/types/FitTypes';
import React from 'react'
import PlanCards from '../shared/PlanCards';

const FitData = async () => {
    const res = await fetch('https://api.abcz.workers.dev/api/fitlog');
    if (!res.ok) {
        throw new Error('Failed to fetch data');
    }
    return res.json();
}

const FitCards = async () => {
    const Cards: Root[] = await FitData();
    // console.log(Cards);
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {Cards.map((card:Root) => <PlanCards key={card.id} card={card} />)}
        </div>
    );
};

export default FitCards;