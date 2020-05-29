import React from "react";
import styled from "styled-components";
import { useTable, Column, usePagination } from "react-table";
import { Record } from "../config";
import SelectLevel from "../containers/SelectLevel";

const StyledTable = styled.div`
  table {
    border-collapse: collapse;
    border-spacing: 0;
    width: 100%;
  }

  tr {
    border-bottom: solid 1px #eee;
  }

  th,
  td {
    text-align: center;
    width: 25%;
    padding: 13px 0;
    font-weight: bold;
  }
`;

const StyledPagination = styled.div`
  margin: 0 auto;
`;

const columns: Column<Record>[] = [
  {
    Header: "Rank",
    accessor: "rank",
  },
  {
    Header: "Name",
    accessor: "name",
  },
  {
    Header: "Time",
    accessor: "time",
  },
];

type TableProps = {
  data: Record[];
};

const Table: React.FC<TableProps> = ({ data }) => {
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    page,
    prepareRow,
    previousPage,
    nextPage,
    canPreviousPage,
    canNextPage,
  } = useTable<Record>(
    { columns, data, initialState: { pageIndex: 1, pageSize: 6 } },
    usePagination
  );

  return (
    <>
      <StyledTable>
        <table {...getTableProps()}>
          <thead>
            {headerGroups.map((headerGroup) => (
              <tr {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map((column) => (
                  <th {...column.getHeaderProps()}>
                    {column.render("Header")}
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
                  {row.cells.map((cell) => {
                    return (
                      <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                    );
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>
      </StyledTable>
      <StyledPagination>
        <SelectLevel isRanking />
        <button onClick={() => previousPage()} disabled={!canPreviousPage}>
          ←
        </button>
        <button onClick={() => nextPage()} disabled={!canNextPage}>
          →
        </button>
      </StyledPagination>
    </>
  );
};

export default Table;
