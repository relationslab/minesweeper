import React from "react";
import styled from "styled-components";
import { useTable, Column } from "react-table";
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
    width: 25%;
    padding: 10px 0;
  }
`;

const columns: Column<Record>[] = [
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

type TableProps = {
  data: Record[];
};

const Table: React.FC<TableProps> = ({ data }) => {
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = useTable<Record>({ columns, data });
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
                  return !cell.value ? (
                    <td {...cell.getCellProps()}>{i + 1}</td>
                  ) : (
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
