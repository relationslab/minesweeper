import React from "react";
import styled from "styled-components";
import { GameState } from "../reducers/Game/types";

const StyledTimer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-items: center;
  align-items: center;
  justify-self: left;
`;
const StyledSpan = styled.span`
  font-size: 20px;
  color: white;
`;

const StyledImg = styled.img`
  width: 40px;
  height: 40px;
`;

type TimerProps = {
  game: GameState;
};

const Timer: React.FC<TimerProps> = ({ game }) => {
  const time = game.time;
  const defaultDigit = "000";
  const doubleDigit = "00";
  const digit = "0";
  return (
    <StyledTimer>
      <StyledImg src={`${process.env.PUBLIC_URL}/clock.png`} alt="timer" />
      <StyledSpan>
        {time === 0
          ? defaultDigit
          : time < 10
          ? doubleDigit + time
          : time < 100
          ? digit + time
          : time}
      </StyledSpan>
    </StyledTimer>
  );
};

export default Timer;
