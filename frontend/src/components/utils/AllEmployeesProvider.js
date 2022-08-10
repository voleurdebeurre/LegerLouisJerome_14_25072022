import { createContext, useState } from 'react';

//create a context, with createContext api
export const employeesContext = createContext();

const AllEmployeesProvider = (props) => {
    // this state will be shared with all components 
    const initialState = [{
        firstName : "Test",
        lastName : "User",
        dateOfBirth: "15/10/2020",
        startDate : "15/10/2020",
        addressStreet: "A Random Street",
        addressCity: "Random City",
        addressState: "AL",
        addressZip: "12345",
        employeeDepartment: "Sales",
    }]
    const [allEmployees, setEmployee] = useState(initialState);
    
    return (
        // this is the provider providing state
        <employeesContext.Provider value={[allEmployees, setEmployee]}>
            {props.children}
        </employeesContext.Provider>
    );
};

export default AllEmployeesProvider;