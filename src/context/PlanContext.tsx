'use client';
import { Dispatch } from 'react';     
import React, { ReactNode } from 'react';
import { Root } from '@/types/FitTypes';

interface PlanContextType {
    plan: Root[];
    setPlan: Dispatch<React.SetStateAction<Root[]>>;
    saved: Root[];
    setSaved: Dispatch<React.SetStateAction<Root[]>>;
}

const PlanContext = React.createContext<PlanContextType>        ({
    plan: [],
    setPlan: () => {},
    saved: [],
    setSaved: () => {}
});

const PlanProvider = ({ children }:{ children: ReactNode }) => {
    const [plan, setPlan] = React.useState<Root[]>([]);
    const [saved, setSaved] = React.useState<Root[]>([]);
    const SharedState = { 
        plan,
        setPlan,
        saved,
        setSaved
    };

    return (
        <PlanContext.Provider value={SharedState}>
            {children}
        </PlanContext.Provider>
    );
};

export { PlanProvider };
export default PlanContext;