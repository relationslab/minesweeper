import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { GameState } from "../reducers/Game/types";

const StyledTimer = styled.div``;
const StyledClock = styled.img`
  width: 40px;
  height: 40px;
`;

const Clock = () => {
  return (
    <StyledClock src={`${process.env.PUBLIC_URL}/clock.png`} alt="timer" />
  );
};

type TimerProps = {
  game: GameState;
};
const Timer: React.FC<TimerProps> = ({ game }) => {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    let interval: any;
    if (game.isStarted === true) {
      interval = setInterval(() => {
        setSeconds((seconds) => seconds + 1);
      }, 1000);
      // } else if (game.isStarted === false && game.isEnded === true) {
      // clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [game]);

  return (
    <StyledTimer>
      <Clock />
      {seconds}
    </StyledTimer>
  );
};

export default Timer;
