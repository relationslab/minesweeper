import React from "react";
import styled from "styled-components";
import { GameState } from "../reducers/Game/types";

const StyledButton = styled.button`
  width: 300px;
  height: 64px;
  background: #4a752c;
  border-radius: 8px;
  color: #fff;
  font-size: 20px;
  text-align: center;
  margin-top: 138px;
  cursor: pointer;
`;

type RetryButtonProps = {
  game: GameState;
  onClick: () => void;
};

const RetryButton: React.FC<RetryButtonProps> = ({ game, onClick }) => {
  return (
    <StyledButton onClick={onClick}>
      {game.isClearded ? "clear!" : "再チャレンジ！"}
    </StyledButton>
  );
};

export default RetryButton;
