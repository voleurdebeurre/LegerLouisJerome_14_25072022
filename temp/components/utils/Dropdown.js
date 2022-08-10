import './dropdown.css'

function Dropdown ({ label, value, options, onChange }) {
    return (
        <label>
            <span>{label}</span>
            <select value={value} onChange={onChange}>
                {options.map((option) => (
                    <option key={option.value} value={option.value}>{option.label}</option>
                ))}
            </select>
        </label>
    );
};


export default Dropdown;