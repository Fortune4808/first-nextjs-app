import { ReactNode } from "react";

export type FloatingInputProps = {
    label: string;
    type?: string;
    value?: string;
    className?: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export type FloatingSelectProps = Omit<FloatingInputProps, "type" | "onChange"> & {
    onChange?: (e: React.ChangeEvent<HTMLSelectElement>) => void;
    options: { value: string; label: string }[];
};

export type ButtonProps = {
    label: string;
    type?: 'button' | 'submit' | 'reset';
    onClick?: () => void;
    className?: string;
    title?: string;
    icon?: ReactNode;
    disabled?: boolean;
}