import React from 'react';
import { useTable, useSortBy } from 'react-table'
import './employeeList.css';

function EmployeeList() {
    // 
    
    const data = React.useMemo(
      () => [
        {
          col1: 'Hello',
          col2: 'World',
        },
        {
          col1: 'react-table',
          col2: 'rocks',
        },
        {
          col1: 'whatever',
          col2: 'you want',
        },
      ],
      []
    )
    const columns = React.useMemo(
      () => [
          { Header: 'First Name', accessor: 'firstName' },
          { Header: 'Last Name', accessor: 'lastName' },
          { Header: 'Start Date', accessor: 'startDate' },
          { Header: 'Department', accessor: 'department' },
          { Header: 'Date of Birth', accessor: 'dateOfBirth' },
          { Header: 'Street', accessor: 'street' },
          { Header: 'City', accessor: 'city' },
          { Header: 'State', accessor: 'state' },
          { Header: 'Zip Code', accessor: 'zipCode' },
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
                        <th {...column.getHeaderProps()}>{column.render('Header')}</th>
                      ))}</tr>
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
