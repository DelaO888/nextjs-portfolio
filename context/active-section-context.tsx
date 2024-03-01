"use client"

import type { SectionName } from '@/lib/types'
import React, { useContext, useState, createContext } from 'react'




type ActiveSectionContextProviderProps = {
    children: React.ReactNode
}

type ActiveSectionContextType = {
    activeSection: SectionName
    setActiveSection: React.Dispatch<React.SetStateAction<SectionName>>
    timeOfLastClick: number
    setTimeOfLastClick: React.Dispatch<React.SetStateAction<number>>
}

export const ActiveSectionContext = createContext<ActiveSectionContextType | null>(null);

export default function ActiveSectionContextProvider({ children }: ActiveSectionContextProviderProps) {



    const [activeSection, setActiveSection] = useState<SectionName>("Home")
    const [timeOfLastClick, setTimeOfLastClick] = useState(0)

    return <ActiveSectionContext.Provider value={{ activeSection, setActiveSection, timeOfLastClick, setTimeOfLastClick }}>
        {children}
    </ActiveSectionContext.Provider>
}

export function useActiveSectionContext() {
    const context = useContext(ActiveSectionContext)

    if (context === null) {
        throw new Error(
            "can only use context within ActiveSectionContextProvider"
        )
    }
    return context
}