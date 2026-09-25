'use client';
import { Dispatch } from 'react';     
import React, { ReactNode } from 'react';
import { Root } from '@/types/FitTypes';

interface PlanContextType {
    plan: Root[];
    setPlan: Dispatch<React.SetStateAction<Root[]>>;
    saved: Root[];
    setSaved: Dispatch<React.SetStateAction<Root[]>>;
    planMinutes: number;
    setPlanMinutes: Dispatch<React.SetStateAction<number>>;
    planCalories: number;
    setPlanCalories: Dispatch<React.SetStateAction<number>>;
    savedMinutes: number;
    setSavedMinutes: Dispatch<React.SetStateAction<number>>;
    savedCalories: number;
    setSavedCalories: Dispatch<React.SetStateAction<number>>;
}

const PlanContext = React.createContext<PlanContextType>({
    plan: [],
    setPlan: () => {},
    saved: [],
    setSaved: () => {},
    planMinutes: 0,
    setPlanMinutes: () => {},
    planCalories: 0,
    setPlanCalories: () => {},
    savedMinutes: 0,
    setSavedMinutes: () => {},
    savedCalories: 0,
    setSavedCalories: () => {}
});

const PlanProvider = ({ children }:{ children: ReactNode }) => {
    const [plan, setPlan] = React.useState<Root[]>([]);
    const [saved, setSaved] = React.useState<Root[]>([]);

  
    const [planMinutes, setPlanMinutes] = React.useState<number>(0);
    const [planCalories, setPlanCalories] = React.useState<number>(0);


    const [savedMinutes, setSavedMinutes] = React.useState<number>(0);
    const [savedCalories, setSavedCalories] = React.useState<number>(0);

   const SharedState: PlanContextType = {
        plan,
        setPlan,
        saved,
        setSaved,
        planMinutes,
        setPlanMinutes,
        planCalories,
        setPlanCalories,
        savedMinutes,
        setSavedMinutes,
        savedCalories,
        setSavedCalories
    };

    return (
        <PlanContext.Provider value={SharedState}>
            {children}
        </PlanContext.Provider>
    );
};

export { PlanContext, PlanProvider };