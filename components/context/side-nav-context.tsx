'use client';
import { createContext, useContext, useState, ReactNode } from 'react';
import { NavContextType } from '../types/user';

const NavContext = createContext<NavContextType | undefined>(undefined);

export function NavProvider({ children }: { children: ReactNode }) {
    const [sideNav, setSideNav] = useState<'session' | undefined>(undefined);
    const handleClose = () => setSideNav(undefined);

    return (
        <NavContext.Provider value={{ sideNav, setSideNav, handleClose }}>
            {children}
        </NavContext.Provider>
    );
}

export function useSideNav() {
    const context = useContext(NavContext);
    if (!context) {
        throw new Error('useNav must be used within a PageProvider');
    }
    return context;
}
