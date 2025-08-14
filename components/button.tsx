import { ReactNode } from "react";

interface ButtonProps {
    label: string;
    type?: 'button' | 'submit' | 'reset';
    onClick?: () => void;
    className?: string;
    title?: string;
    icon?: ReactNode;
    disabled?: boolean;
}

const Button = ( props: ButtonProps ) => {
    const baseStyle = 'bg-[var(--primary-color)] text-[10px] font-bold hover:bg-[#444444] text-white p-[5px] rounded-[5px] cursor-pointer flex justify-center items-center gap-1 whitespace-nowrap';
    return (
        <button type={props.type} title={props.title} onClick={props.onClick} disabled={props.disabled} className={`${baseStyle} ${props.className}`}>
             {props.icon && <span>{props.icon}</span>}
            {props.label}
        </button>
    );
};

export default Button;
