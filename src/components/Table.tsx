import React from "react";
import styled from "styled-components";
import { Record } from "../config";
import { withRouter, RouteComponentProps } from "react-router-dom";
import { UserState } from "src/reducers/User/types";

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

const Tr = styled.tr<{ currentUser?: boolean }>`
  color: ${({ currentUser }) => (currentUser ? "#FDC108" : "white")};
`;

type TableProps = {
  data: Record[];
  user: UserState;
} & RouteComponentProps<{ category: string }>;

const Table: React.FC<TableProps> = ({ data, user, match }) => {
  const header = ["Rank", "Name", "Time"];
  if (match.params.category !== "daily") {
    header.push("Date");
  }

  return (
    <StyledTable>
      <thead>
        <tr>
          {header.map((h, i) => (
            <td key={i}>{h}</td>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((d, i) => (
          <Tr
            key={i}
            currentUser={d.uid === user.uid && match.params.category !== "my"}
          >
            <td>{d.rank}</td>
            <td>{d.name}</td>
            <td>{d.time}</td>
            {match.params.category === "daily" ? null : <td>{d.createdAt}</td>}
          </Tr>
        ))}
      </tbody>
    </StyledTable>
  );
};

export default withRouter(Table);
