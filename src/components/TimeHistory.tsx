import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { RootState } from "../rootReducer";

const StyledTimeHistory = styled.div`
  display: grid;
  grid-template-rows: 1fr 1fr;
  justify-items: center;
  align-items: center;
  color: white;
  font-size: 22px;
`;

const StyledImg = styled.img`
  width: 50px;
  height: 50px;
`;
const TimeHistory = () => {
  const game = useSelector((state: RootState) => state.game);

  return (
    <StyledTimeHistory>
      <StyledImg src="/images/trophy.png" alt="trophy" />
      {game.isEnded && game.timeHistory === 0 ? "---" : game.timeHistory}
    </StyledTimeHistory>
  );
};

export default TimeHistory;
