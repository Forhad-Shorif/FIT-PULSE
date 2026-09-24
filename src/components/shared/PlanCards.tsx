import { Root } from '@/types/FitTypes';
import React from 'react';

const PlanCards = ({ card }: { card: Root }) => {
    return (
        <div className="bg-[#181a1e] rounded-2xl border border-zinc-800/60 p-6 hover:border-[#ccff00] transition-colors">
            <h3 className="text-xl font-bold text-white">{card.name}</h3>
            <p className="text-zinc-400 mt-2">{card.description}</p>
        </div>
    );
};

export default PlanCards;