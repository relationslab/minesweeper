import React from "react";
import styled from "styled-components";
import { BoardState } from "../reducers/Board/types";

const StyledFlagCount = styled.div``;
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
      {board.flags}
    </StyledFlagCount>
  );
};

export default FlagCount;
