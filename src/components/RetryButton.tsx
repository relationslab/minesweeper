import React from "react";
import styled from "styled-components";
import { GameState } from "../reducers/Game/types";

const StyledButton = styled.button`
  border: none;
  width: 300px;
  height: 64px;
  background: #4a752c;
  border-radius: 8px;
  margin-top: 12px;
  cursor: pointer;
  span {
    color: #fff;
    font-size: 20px;
  }
`;

const StyledImg = styled.img`
  width: 30px;
  height: 30px;
  position: absolute;
  left: 50px;
`;
type RetryButtonProps = {
  game: GameState;
  onClick: () => void;
};

const RetryButton: React.FC<RetryButtonProps> = ({ game, onClick }) => {
  return (
    <StyledButton onClick={onClick}>
      <StyledImg src="/images/retry.png" alt="retry" />
      <span>{game.isClearded ? "clear!" : "再チャレンジ"}</span>
    </StyledButton>
  );
};

export default RetryButton;
