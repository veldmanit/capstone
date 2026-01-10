'use client';

import React, { createContext, useContext, useRef } from 'react';

interface PageNumberContextType {
    getNextPageNumber: () => number;
    getCurrentPageNumber: () => number;
}

const PageNumberContext = createContext<PageNumberContextType | null>(null);

interface PageNumberProviderProps {
    children: React.ReactNode;
    startingPage?: number; // Default 1
}

export function PageNumberProvider({
    children,
    startingPage = 1
}: PageNumberProviderProps) {
    const pageCounterRef = useRef(startingPage);

    const getNextPageNumber = () => {
        const current = pageCounterRef.current;
        pageCounterRef.current += 1;
        return current;
    };

    const getCurrentPageNumber = () => pageCounterRef.current;

    return (
        <PageNumberContext.Provider value={{ getNextPageNumber, getCurrentPageNumber }}>
            {children}
        </PageNumberContext.Provider>
    );
}

export function usePageNumber() {
    const context = useContext(PageNumberContext);
    if (!context) {
        throw new Error('usePageNumber must be used within a PageNumberProvider');
    }
    return context;
}

// Hook to get and consume a page number (for pages that should be numbered)
export function useNextPageNumber(enabled: boolean = true): number | null {
    const { getNextPageNumber } = usePageNumber();
    const pageNumberRef = useRef<number | null>(null);

    // Only get the page number once per component instance, and only if enabled
    if (enabled && pageNumberRef.current === null) {
        pageNumberRef.current = getNextPageNumber();
    }

    return pageNumberRef.current;
}
