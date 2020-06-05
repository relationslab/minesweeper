import React from "react";
import styled, { css, keyframes } from "styled-components";

const Color = keyframes`
  from {
    background-color: #FFC107;
  }
  to {
    background-color: gold;
  }
`;

const Grow = keyframes`
  0% {
    transform: scale(1);
  }
  14% {
    transform: scale(1.3);
  }
  28% {
    transform: scale(1);
  }
  42% {
    transform: scale(1.3);
  }
  70% {
    transform: scale(1);
  }
}
`;

const StyledButton = styled.button<{ isClearded?: boolean }>`
  width: 300px;
  height: 64px;
  background-color: ${({ isClearded }) => (isClearded ? "#FFC107" : "#4a752c")};
  border-radius: 8px;
  margin-top: 12px;

  span {
    color: #fff;
    font-size: 21px;
  }

  :disabled {
    background-color: gray;
  }

  ${({ isClearded }) =>
    isClearded &&
    css`
      animation: ${Color} 0.5s linear infinite, ${Grow} 1300ms ease infinite;
    `}
`;

const StyledImg = styled.img`
  width: 30px;
  height: 30px;
  position: absolute;
  left: 50px;
`;

type RetryButtonProps = {
  text: string;
  retry?: boolean;
  onClick: () => void;
  isClearded?: boolean;
  disabled?: boolean;
};

const RetryButton: React.FC<RetryButtonProps> = ({
  text,
  retry,
  onClick,
  isClearded,
  disabled,
}) => {
  return (
    <StyledButton onClick={onClick} isClearded={isClearded} disabled={disabled}>
      {retry ? <StyledImg src="/images/retry.png" alt="retry" /> : null}
      <span>{text}</span>
    </StyledButton>
  );
};

export default RetryButton;
