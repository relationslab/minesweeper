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
  span {
    align-self: flex-start;
    margin-left: 5px;
    font-size: 30px;
    letter-spacing: 5px;
  }
`;

const StyledImg = styled.img`
  width: 60px;
  height: 60px;
`;
const TimeHistory = () => {
  const game = useSelector((state: RootState) => state.game);

  return (
    <StyledTimeHistory>
      <StyledImg src="/images/trophy.png" alt="trophy" />
      <span>
        {game.isEnded && game.timeHistory === 0 ? "–––" : game.timeHistory}
      </span>
    </StyledTimeHistory>
  );
};

export default TimeHistory;

//再チャレンジの画像から
