import React from "react";
import styled from "styled-components";

const StyledButton = styled.button<{ isStart?: boolean }>`
  width: 300px;
  height: 64px;
  background-color: ${({ isStart }) => (isStart ? "salmon" : "#4a752c")};
  border-radius: 8px;
  margin-top: 12px;
  span {
    color: #fff;
    font-size: 21px;
    ${({ isStart }) => (isStart ? null : "margin-left: 20px")};
  }

  :disabled {
    background-color: gray;
  }
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
  isStart?: boolean;
  disabled?: boolean;
};

const RetryButton: React.FC<RetryButtonProps> = ({
  text,
  retry,
  onClick,
  isStart,
  disabled,
}) => {
  return (
    <StyledButton onClick={onClick} isStart={isStart} disabled={disabled}>
      {retry ? <StyledImg src="/images/retry.png" alt="retry" /> : null}
      <span>{text}</span>
    </StyledButton>
  );
};

export default RetryButton;
