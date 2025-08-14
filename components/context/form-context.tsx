'use client';
import { FormContextType, FormType } from '../types/user';
import { createContext, useContext, useState, ReactNode } from 'react';
import { useSideNav } from './side-nav-context';

const FormContext = createContext<FormContextType | undefined>(undefined);

export function FormProvider({ children }: { children: ReactNode }) {
    const [form, setFormState] = useState<FormType>(null);
    const [id, setId] = useState<string | undefined>(undefined);
    const { setSideNav } = useSideNav();

    const setForm = (form: FormType, id?: string) => {
        setFormState(form);
        setId(id);
        setSideNav(undefined);
    };

    const handleClose = () => {
        setFormState(null);
        setId(undefined);
    };

    return (
        <FormContext.Provider value={{ form, setForm, handleClose, id }}>
            {children}
        </FormContext.Provider>
    );
}

export function useFormContext() {
    const context = useContext(FormContext);
    if (!context) {
        throw new Error('useFormContext must be used within a FormProvider');
    }
    return context;
}
