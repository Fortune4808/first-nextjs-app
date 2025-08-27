'use client';
import { PageContextType } from '../types/user';
import { createContext, useContext, useState, ReactNode } from 'react';
import { useSideNav } from './side-nav-context';

const PageContext = createContext<PageContextType | undefined>(undefined);

export function PageProvider({ children }: { children: ReactNode }) {
    const [page, setPageState] = useState<'dashboard' | 'staff' | 'school'>('dashboard');
    const { setSideNav } = useSideNav();

    const setPage = (page: 'dashboard' | 'staff' | 'school') => {
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
