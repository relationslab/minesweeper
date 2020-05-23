import React from "react";
import styled from "styled-components";
import { BoardState } from "../reducers/Board/types";

const StyledFlagCount = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-items: center;
  align-items: center;
  justify-self: right;
`;

const StyledSpan = styled.span`
  font-size: 20px;
  color: white;
  justify-self: left;
`;

const StyledImg = styled.img`
  width: 40px;
  height: 40px;
`;

type FlagCountProps = {
  board: BoardState;
};

const FlagCount: React.FC<FlagCountProps> = ({ board }) => {
  return (
    <StyledFlagCount>
      <StyledImg src={`${process.env.PUBLIC_URL}/flag.png`} alt="flag" />
      <StyledSpan>{board.flags}</StyledSpan>
    </StyledFlagCount>
  );
};

export default FlagCount;
