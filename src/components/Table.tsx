import React from "react";
import styled from "styled-components";
import { useTable, Column } from "react-table";

type Data = {
  rank: number;
  name: string;
  time: number;
};

const columns: Column<Data>[] = [
  {
    Header: "順位",
    accessor: "rank",
  },
  {
    Header: "名前",
    accessor: "name",
  },
  {
    Header: "記録",
    accessor: "time",
  },
];

const data: Data[] = [
  {
    rank: 1,
    name: "John",
    time: 23,
  },
  {
    rank: 2,
    name: "Jane",
    time: 26,
  },
];

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
    padding: 10px 0;
  }
`;

const Table = () => {
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = useTable<Data>({ columns, data });
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
          {rows.map((row, i) => {
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
