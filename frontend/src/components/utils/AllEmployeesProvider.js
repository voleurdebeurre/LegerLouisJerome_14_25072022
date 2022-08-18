import { createContext, useState, useMemo } from 'react';

//create a context, with createContext api
export const employeesContext = createContext();

const AllEmployeesProvider = (props) => {
    // this state will be shared with all components 
    
    const [allEmployees, setEmployee] = useState([{
        firstName : "Test",
        lastName : "User",
        dateOfBirth: "2020-10-15",
        startDate : "2020-10-15",
        addressStreet: "A Random Street",
        addressCity: "Random City",
        addressState: "AL",
        addressZip: "12345",
        employeeDepartment: "Sales",
    }]);
    const value = useMemo(() => ({
        allEmployees, setEmployee
    }), [allEmployees, setEmployee]);
    return (
        // this is the provider providing state
        <employeesContext.Provider value={value}>
            {props.children}
        </employeesContext.Provider>
    );
};

export default AllEmployeesProvider;