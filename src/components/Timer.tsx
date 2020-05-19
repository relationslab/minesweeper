import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { GameState } from "../reducers/Game/types";

const StyledTimer = styled.div``;
const StyledImg = styled.img`
  width: 40px;
  height: 40px;
`;

type TimerProps = {
  game: GameState;
};

const Timer: React.FC<TimerProps> = ({ game }) => {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    let interval: number = 0;
    if (game.isStarted) {
      interval = setInterval(() => {
        setSeconds((seconds) => seconds + 1);
      }, 1000);
    } else if (game.isEnded) {
      clearInterval(interval);
    }

    if (!game.isStarted && !game.isEnded) {
      setSeconds(0);
    }
    return () => clearInterval(interval);
  }, [game]);

  return (
    <StyledTimer>
      <StyledImg src={`${process.env.PUBLIC_URL}/clock.png`} alt="timer" />
      {seconds}
    </StyledTimer>
  );
};

export default Timer;
