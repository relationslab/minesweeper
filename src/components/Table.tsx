import React from "react";
import styled from "styled-components";
import { Record } from "../config";
import { withRouter, RouteComponentProps } from "react-router-dom";

const StyledTable = styled.table`
  border-collapse: collapse;
  border-spacing: 0;
  width: 100%;

  tr {
    border-bottom: solid 1px #eee;
  }

  th,
  td {
    text-align: center;
    padding: 13px 0;
    font-weight: bold;
    :nth-child(2) {
      width: 35%;
    }
  }
`;

type TableProps = {
  data: Record[];
} & RouteComponentProps<{ category: string }>;

const Table: React.FC<TableProps> = ({ data, match }) => {
  const header = ["Rank", "Name", "Time"];
  if (match.params.category !== "daily") {
    header.push("Date");
  }

  return (
    <StyledTable>
      <thead>
        <tr>
          {header.map((h) => (
            <td>{h}</td>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((d) => (
          <tr>
            <td>{d.rank}</td>
            <td>{d.name}</td>
            <td>{d.time}</td>
            {match.params.category === "daily" ? null : <td>{d.createdAt}</td>}
          </tr>
        ))}
      </tbody>
    </StyledTable>
  );
};

export default withRouter(Table);
