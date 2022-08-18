import { useTable, useSortBy } from 'react-table';
import './employeeList.css';
import { useMemo, useContext } from 'react';
import { employeesContext } from './utils/AllEmployeesProvider';

function EmployeeList() {
  const {allEmployees, setEmployee} = useContext(employeesContext)
  const data = allEmployees
    
  const columns = useMemo(
    () => [
        { Header: 'First Name', accessor: 'firstName' },
        { Header: 'Last Name', accessor: 'lastName' },
        { Header: 'Date of Birth', accessor: 'dateOfBirth' },
        { Header: 'Start Date', accessor: 'startDate' },
        { Header: 'Street', accessor: 'addressStreet' },
        { Header: 'City', accessor: 'addressCity' },
        { Header: 'State', accessor: 'addressState' },
        { Header: 'Zip Code', accessor: 'addressZip' },
        { Header: 'Department', accessor: 'employeeDepartment' },
      ],
    []
  )
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = useTable({ columns, data }, useSortBy)
    
  return(
    <section className='allEmployees'>
      <div id="employee-div" className="container">
        <h1>Current Employees</h1>
        <table {...getTableProps()}>
          <thead>
            {headerGroups.map(headerGroup => (
              <tr {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map(column => (
                  <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                    {column.render('Header')}
                    <span>
                      {column.isSorted
                        ? column.isSortedDesc
                          ? ' 🔽'
                          : ' 🔼'
                        : ''}
                    </span>
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody {...getTableBodyProps()}>
            {rows.map(row => {
              prepareRow(row)
              return (
                <tr {...row.getRowProps()}>
                  {row.cells.map(cell => {
                    return (
                      <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                    )
                  })}</tr>
              )
            })}
          </tbody>
        </table>
      </div>
    </section>
  )
}

export default EmployeeList;
