import React from "react";
import styled from "styled-components";
import { BoardState } from "../reducers/Board/types";

const StyledFlagCount = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-items: center;
  align-items: center;
  color: white;
  font-size: 20px;
`;
const StyledImg = styled.img`
  width: 50px;
  height: 50px;
`;

type FlagCountProps = {
  board: BoardState;
};

const FlagCount: React.FC<FlagCountProps> = ({ board }) => {
  return (
    <StyledFlagCount>
      <StyledImg src={`${process.env.PUBLIC_URL}/flag.png`} alt="flag" />
      <span>{board.flags}</span>
    </StyledFlagCount>
  );
};

export default FlagCount;
