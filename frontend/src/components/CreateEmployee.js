import Dropdown from './utils/Dropdown';
import Modal from './utils/Modal';
import Datepicker from './utils/Datepicker';
import './createEmployee.css';
import { useState, useContext } from 'react';
import { employeesContext } from './utils/AllEmployeesProvider';

function CreateEmployee() {
    // Declares state listener for the Modal
    const [show, setShow] = useState(false)
    // Gets the employees + method to add more from global storage    
    // const [allEmployees, setEmployee] = useContext(employeesContext);
    const {allEmployees, setEmployee} = useContext(employeesContext)
    console.log(allEmployees, setEmployee)
    
    // Declares states listeners for select elements
    const [stateInput, setStateInput] = useState('');
    const [departmentInput, setDepartmentInput] = useState('');

    // Declares state listener for all input elements
    const [newEmployee, setNewEmployee] = useState({
        firstName : "",
        lastName : "",
        dateOfBirth: "",
        startDate : "",
        addressStreet: "",
        addressCity: "",
        addressState: "AL",
        addressZip: "",
        employeeDepartment: "Sales",
    })

    // Gets the selected option and updates newUser 
    const handleStateChange = (event) => {
        setStateInput(event.target.value);
        setNewEmployee({ ...newEmployee, addressState : event.target.value})
    };
    // Gets the selected option and updates newUser 
    const handleDepartmentChange = (event) => {
        setDepartmentInput(event.target.value);
        setNewEmployee({ ...newEmployee, employeeDepartment : event.target.value})
    };
    // Gets the input fields values and updates newUser 
    const handleInputChange = (event) => {
        console.log(event)
        setNewEmployee({ ...newEmployee, [event.target.name]: event.target.value });
    };

    // Triggers actions on form submit
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(newEmployee)
        // Adds the new employee to the global storage array
        setEmployee(current => [...current, newEmployee])
        // Opens the success modal 
        setShow(true)
    };

    return(
        <>
        <Modal onClose={() => setShow(false)} show={show} />
        <section className='createEmployee'>
            <h1>Create employee</h1>
            <div className="employee-form">
                <form id="create-employee" onSubmit={handleSubmit}>
                    <div className="formGroup">
                        <label htmlFor="first-name">First Name</label>
                        <input type="text" id="first-name" name="firstName" value={newEmployee.firstName} onChange={handleInputChange}/>
                    </div>
                    <div className="formGroup">
                        <label htmlFor="last-name">Last Name</label>
                        <input type="text" id="last-name" name="lastName" value={newEmployee.lastName} onChange={handleInputChange}/>
                    </div>
                    <div className="formGroup">
                        <Datepicker 
                            label="Date of Birth"
                            value={newEmployee.dateOfBirth}
                            onChange={handleInputChange}
                            name="dateOfBirth"
                        /> 
                    </div>
                    <div className="formGroup">
                        <Datepicker 
                            label="Start Date"
                            value={newEmployee.startDate}
                            onChange={handleInputChange}
                            name="startDate"
                        /> 
                    </div>
                    <fieldset className="address">
                        <legend>Address</legend>
                        <div className="formGroup">
                            <label htmlFor="street">Street</label>
                            <input id="street" type="text" name="addressStreet" value={newEmployee.addressStreet} onChange={handleInputChange}/>
                        </div>
                        <div className="formGroup">
                            <label htmlFor="city">City</label>
                            <input id="city" type="text" name="addressCity" value={newEmployee.addressCity} onChange={handleInputChange}/>
                        </div>
                        <div className="formGroup">
                            <Dropdown
                                label="State"
                                options={[
                                    { label: "Alabama", value: "AL"},
                                    { label: "Alaska", value: "AK"},
                                    { label: "American Samoa", value: "AS"},
                                    { label: "Arizona", value: "AZ"},
                                    { label: "Arkansas", value: "AR"},
                                    { label: "California", value: "CA"},
                                    { label: "Colorado", value: "CO"},
                                    { label: "Connecticut", value: "CT"},
                                    { label: "Delaware", value: "DE"},
                                    { label: "District Of Columbia", value: "DC"},
                                    { label: "Federated States Of Micronesia", value: "FM"},
                                    { label: "Florida", value: "FL"},
                                    { label: "Georgia", value: "GA"},
                                    { label: "Guam", value: "GU"},
                                    { label: "Hawaii", value: "HI"},
                                    { label: "Idaho", value: "ID"},
                                    { label: "Illinois", value: "IL"},
                                    { label: "Indiana", value: "IN"},
                                    { label: "Iowa", value: "IA"},
                                    { label: "Kansas", value: "KS"},
                                    { label: "Kentucky", value: "KY"},
                                    { label: "Louisiana", value: "LA"},
                                    { label: "Maine", value: "ME"},
                                    { label: "Marshall Islands", value: "MH"},
                                    { label: "Maryland", value: "MD"},
                                    { label: "Massachusetts", value: "MA"},
                                    { label: "Michigan", value: "MI"},
                                    { label: "Minnesota", value: "MN"},
                                    { label: "Mississippi", value: "MS"},
                                    { label: "Missouri", value: "MO"},
                                    { label: "Montana", value: "MT"},
                                    { label: "Nebraska", value: "NE"},
                                    { label: "Nevada", value: "NV"},
                                    { label: "New Hampshire", value: "NH"},
                                    { label: "New Jersey", value: "NJ"},
                                    { label: "New Mexico", value: "NM"},
                                    { label: "New York", value: "NY"},
                                    { label: "North Carolina", value: "NC"},
                                    { label: "North Dakota", value: "ND"},
                                    { label: "Northern Mariana Islands", value: "MP"},
                                    { label: "Ohio", value: "OH"},
                                    { label: "Oklahoma", value: "OK"},
                                    { label: "Oregon", value: "OR"},
                                    { label: "Palau", value: "PW"},
                                    { label: "Pennsylvania", value: "PA"},
                                    { label: "Puerto Rico", value: "PR"},
                                    { label: "Rhode Island", value: "RI"},
                                    { label: "South Carolina", value: "SC"},
                                    { label: "South Dakota", value: "SD"},
                                    { label: "Tennessee", value: "TN"},
                                    { label: "Texas", value: "TX"},
                                    { label: "Utah", value: "UT"},
                                    { label: "Vermont", value: "VT"},
                                    { label: "Virgin Islands", value: "VI"},
                                    { label: "Virginia", value: "VA"},
                                    { label: "Washington", value: "WA"},
                                    { label: "West Virginia", value: "WV"},
                                    { label: "Wisconsin", value: "WI"},
                                    { label: "Wyoming", value: "WY"}
                                ]}
                                value={stateInput}
                                onChange={handleStateChange}
                            />
                        </div>
                        <div className="formGroup">
                            <label htmlFor="zip-code">Zip Code</label>
                            <input id="zip-code" type="number" name="addressZip" value={newEmployee.addressZip}  onChange={handleInputChange}/>
                        </div>
                    </fieldset>
                    <div className="formGroup">
                        <Dropdown
                            label="Department"
                            options={[
                                { label: 'Sales', value: 'Sales' },
                                { label: 'Marketing', value: 'Marketing' },
                                { label: 'Engineering', value: 'Engineering' },
                                { label: 'Human Ressources', value: 'HR' },
                                { label: 'Legal', value: 'Legal' }
                            ]}
                            value={departmentInput}
                            onChange={handleDepartmentChange}
                        />
                    </div>
                    <button type="submit">Save</button>
                </form>
            </div>
        </section>
        </>
    )
}

export default CreateEmployee;
