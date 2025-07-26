'use client';
import { createContext, useContext, useState, ReactNode } from 'react';
import { useSideNav } from './side-nav-context';

type PageContextType = {
    page: 'dashboard' | 'department';
    setPage: (page: 'dashboard' | 'department') => void;
};

const PageContext = createContext<PageContextType | undefined>(undefined);

export function PageProvider({ children }: { children: ReactNode }) {
    const [page, setPageState] = useState<'dashboard' | 'department'>('dashboard');
    const { setSideNav } = useSideNav();

    const setPage = (page: 'dashboard' | 'department') => {
        setPageState(page);
        setSideNav(undefined); 
    };

    return (
        <PageContext.Provider value={{ page, setPage }}>
            {children}
        </PageContext.Provider>
    );
}

export function usePage() {
    const context = useContext(PageContext);
    if (!context) {
        throw new Error('usePage must be used within a PageProvider');
    }
    return context;
}
