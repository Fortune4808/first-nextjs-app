import { IconType } from 'react-icons';

interface ButtonProps {
    id: string;
    label: string;
    type?: 'button' | 'submit' | 'reset';
    onClick?: () => void;
    className?: string;
    title?: string;
    icon?: IconType;
}

const Button = ({ id, label, type = 'button', onClick, className = '', title, icon: Icon, }: ButtonProps) => {
    const baseStyle = 'bg-[var(--primary-color)] text-[10px] font-bold hover:bg-[#444444] text-white p-[5px] rounded-[5px] cursor-pointer flex justify-center items-center gap-1 whitespace-nowrap';
    return (
        <button id={id} type={type} title={title} onClick={onClick} className={`${baseStyle} ${className}`}>
            {Icon && <Icon />}
            {label}
        </button>
    );
};

export default Button;
