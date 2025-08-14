interface FloatingInputProps {
    label: string;
    type?: string;
    value?: string;
    className?: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const InputField = (props:FloatingInputProps) => {
    return (
        <div className="form-group">
            <input
                type={props.type} title={props.label}
                className={`floating-input ${props.className}`} placeholder=" "
                required value={props.value} onChange={props.onChange}
            />
            <label
                htmlFor={props.label}
                className="floating-label">{props.label}
            </label>
        </div>
    );
};

export default InputField;
