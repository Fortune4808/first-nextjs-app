import { FloatingSelectProps } from "../types/ui"

const SelectField = (props: FloatingSelectProps & { options: { value: string; label: string }[] }) => {
    return (
        <div className="form-group">
            <select
                title={props.label}
                className={`floating-input ${props.className}`} required
                value={props.value} onChange={props.onChange as (e: React.ChangeEvent<HTMLSelectElement>) => void}
            >
                <option value="" disabled hidden></option>
                {props.options.map((option, index) => (
                    <option key={index} value={option.value}>
                        {option.label}
                    </option>
                ))}
            </select>
            <label
                htmlFor={props.label}
                className="floating-label">{props.label}
            </label>
        </div>
    );
};

export default SelectField;
