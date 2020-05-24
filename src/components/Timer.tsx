import React from "react";
import styled, { css } from "styled-components";
import { GameState } from "../reducers/Game/types";

const StyledTimer = styled.div<{ isResult?: boolean }>`
  display: grid;
  justify-items: center;
  align-items: center;
  span {
    color: white;
  }
  ${({ isResult }) =>
    isResult
      ? css`
          grid-template-rows: 1fr 1fr;
          img {
            width: 60px;
            height: 60px;
          }
          span {
            align-self: flex-start;
            margin-left: 5px;
            font-size: 30px;
            letter-spacing: 5px;
          }
        `
      : css`
          grid-template-columns: 1fr 1fr;
          justify-self: left;
          img {
            width: 40px;
            height: 40px;
          }
          span {
            font-size: 20px;
          }
        `}
`;

type TimerProps = {
  game: GameState;
  isResult?: boolean;
};

const Timer: React.FC<TimerProps> = ({ game, isResult }) => {
  const time = game.time;
  const defaultDigit = "000";
  const doubleDigit = "00";
  const digit = "0";
  return (
    <StyledTimer isResult={isResult}>
      <img src="/images/clock.png" alt="timer" />
      <span>
        {game.isEnded && isResult
          ? "–––"
          : time === 0
          ? defaultDigit
          : time < 10
          ? doubleDigit + time
          : time < 100
          ? digit + time
          : time}
      </span>
    </StyledTimer>
  );
};

export default Timer;
