function Datepicker ({ label, value, name, className, onChange }) {
    return (
        <label>
            <span>{label}</span>
            <input className={className} type="date" name={name} value={value} onChange={onChange}/>
        </label>
    );
};


export default Datepicker;