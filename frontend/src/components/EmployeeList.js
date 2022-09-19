import { useTable, usePagination, useGlobalFilter, useSortBy } from "react-table";
import { useMemo, useContext, useEffect } from 'react';
import './employeeList.css';
import { employeesContext } from './utils/AllEmployeesProvider';

function Table({ columns, data }) {
  const props = useTable(
    {
      columns,
      data
    },
    
    useGlobalFilter,
    useSortBy,
    usePagination
  );
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    prepareRow,
    setGlobalFilter,
    page,
    canPreviousPage,
    canNextPage,
    pageOptions,
    pageCount,
    gotoPage,
    nextPage,
    previousPage,
    setPageSize,
    state: { pageIndex, pageSize, globalFilter }
  } = props;
  console.log(props);
  useEffect(() => {
    console.log(globalFilter);
  }, [globalFilter]);

  return (
    <section className='allEmployees'>
      <div id="employee-div" className="container">
        <h1>Current Employees</h1>
        <div className="table-controls-top">
          <select
            value={pageSize}
            onChange={e => {
              setPageSize(Number(e.target.value));
            }}
          >
            {[10, 20, 30, 40, 50].map(pageSize => (
              <option key={pageSize} value={pageSize}>
                Show {pageSize}
              </option>
            ))}
          </select>
          <div className="global-search">
            <label htmlFor="globalFilter">Search: </label>
            <input
              name="globalFilter" id ="globalFilter"
              type="text"
              value={globalFilter || ""}
              onChange={e => setGlobalFilter(e.target.value)}
            />
          </div>
        </div>
        {console.log(globalFilter)}
        <table {...getTableProps()}>
          <thead>
            {headerGroups.map(headerGroup => (
              <tr {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map(column => (
                  <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                    {column.render("Header")}
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
            {page.map((row, i) => {
              prepareRow(row);
              return (
                <tr {...row.getRowProps()}>
                  {row.cells.map(cell => {
                    return (
                      <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                    );
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>
        <div className="table-controls-bottom">
          <div className="table-infos">
            <span>
              Page{" "}
              <strong>
                {pageIndex + 1} of {pageOptions.length}
              </strong>{" "}
            </span>
            <span>
              <label htmlFor="pageNumber">| Go to page:{" "}</label>
              <input
                id="pageNumber"
                name="pageNumber"
                type="number"
                defaultValue={pageIndex + 1}
                onChange={e => {
                  const page = e.target.value ? Number(e.target.value) - 1 : 0;
                  gotoPage(page);
                }}
                style={{ width: "100px" }}
              />
            </span>{" "}
          </div>
          <div className="pagination-buttons">
            <button onClick={() => gotoPage(0)} disabled={!canPreviousPage}>
              {"<<"}
            </button>{" "}
            <button onClick={() => previousPage()} disabled={!canPreviousPage}>
              {"<"}
            </button>{" "}
            <button onClick={() => nextPage()} disabled={!canNextPage}>
              {">"}
            </button>{" "}
            <button onClick={() => gotoPage(pageCount - 1)} disabled={!canNextPage}>
              {">>"}
            </button>{" "}
            </div>
        </div>
      </div>
    </section>
  );
}

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
  );



  return (
    <Table columns={columns} data={data} />
  );
}

export default EmployeeList;
