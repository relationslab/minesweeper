import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
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

const StyledDisplay = styled.div`
  min-width: 540px;
  min-height: 480px;
  display: grid;
  grid-template-columns: 540px;
  justify-content: center;
  margin: 60px;
`;

const Header = styled.div`
  display: grid;
  grid-template-columns: 50px 1fr 1fr;
  img {
    justify-self: right;
    width: 50px;
    height: 50px;
  }
`;
const StyledDiv = styled.div`
  background-color: rgb(77, 193, 249);
  border-radius: 10px;
  padding: 1rem;
  display: grid;
  grid-template-rows: 50px 1fr 20px;
`;

const StyledLink = styled(Link)`
  display: block;
  border: none;
  width: 35px;
  height: 35px;
  text-align: center;
  line-height: 35px;
  border-radius: 50%;
  background-color: salmon;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
`;

const Ranking: React.FC = () => {
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = useTable<Data>({ columns, data });
  return (
    <>
      <StyledDisplay>
        <StyledDiv>
          <Header>
            <StyledLink to="/">⬅</StyledLink>
            <img src="/images/trophy.png" alt="trophy" />
          </Header>
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
                {rows.map((row, i) => {
                  prepareRow(row);
                  return (
                    <tr {...row.getRowProps()}>
                      {row.cells.map((cell) => {
                        return (
                          <td {...cell.getCellProps()}>
                            {cell.render("Cell")}
                          </td>
                        );
                      })}
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </StyledTable>
          <div>
            <button>←</button>
            <button>→</button>
          </div>
        </StyledDiv>
      </StyledDisplay>
    </>
  );
};

export default Ranking;
