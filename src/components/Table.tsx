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

const Td = styled.td<{ currentUser?: boolean }>`
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
          <tr key={i}>
            <Td
              currentUser={d.uid === user.uid && match.params.category !== "my"}
            >
              {d.rank}
            </Td>
            <Td>{d.name}</Td>
            <Td>{d.time}</Td>
            {match.params.category === "daily" ? null : <td>{d.createdAt}</td>}
          </tr>
        ))}
      </tbody>
    </StyledTable>
  );
};

export default withRouter(Table);
