import React from "react";
import styled from "styled-components";
import { GameState } from "../reducers/Game/types";

const StyledTimer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-items: center;
  justify-self: left;
  align-items: center;
  color: white;
  font-size: 22px;
`;

const StyledImg = styled.img`
  width: 50px;
  height: 50px;
`;

type TimerProps = {
  game: GameState;
};

const Timer: React.FC<TimerProps> = ({ game }) => {
  return (
    <StyledTimer>
      <StyledImg src={`${process.env.PUBLIC_URL}/clock.png`} alt="timer" />
      <span>{game.time}</span>
    </StyledTimer>
  );
};

export default Timer;
