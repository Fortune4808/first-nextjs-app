'use client';
import { createContext, useContext, useState, ReactNode } from 'react';

type FormType = 'addStaff' | 'addDepartment' | 'myProfile' | null;

type FormContextType = {
    form: FormType;
    setForm: (form: FormType) => void;
    handleClose:()=> void;
};

const FormContext = createContext<FormContextType | undefined>(undefined);

export function FormProvider({ children }: { children: ReactNode }) {
    const [form, setForm] = useState<FormType>(null);
    const handleClose = () => setForm(null);

    return (
        <FormContext.Provider value={{ form, setForm, handleClose }}>
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
