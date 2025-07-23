interface FloatingInputProps {
    id: string;
    label: string;
    type?: string;
    value?: string;
    className?: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const InputField = ({ id, label, type = 'text', value, className ='', onChange, }: FloatingInputProps) => {
    return (
        <div className="form-group">
            <input
                type={type} id={id} title={label}
                className={`floating-input ${className}`} placeholder=" "
                required value={value} onChange={onChange}
            />
            <label
                htmlFor={id}
                className="floating-label">{label}
            </label>
        </div>
    );
};

export default InputField;
