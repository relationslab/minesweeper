import React from "react";
import styled from "styled-components";
import { useTable, Column, usePagination } from "react-table";
import { Record } from "../config";

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
    padding: 13px 0;
    font-weight: bold;
  }
  td {
    :nth-last-child(1) {
      font-size: 10px;
    }
  }
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
  {
    Header: "Date",
    accessor: "createdAt",
  },
];

type TableProps = {
  data: Record[];
  handleClick: () => void;
};

const Table: React.FC<TableProps> = ({ data, handleClick }) => {
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    page,
    prepareRow,
  } = useTable<Record>(
    { columns, data, initialState: { pageIndex: 0, pageSize: 6 } },
    usePagination
  );

  return (
    <StyledTable>
      <table {...getTableProps()}>
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th {...column.getHeaderProps()}>{column.render("Header")}</th>
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
  );
};

export default Table;
