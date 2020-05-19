import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  width: 300px;
  height: 64px;
  background: #4a752c;
  border-radius: 8px;
  color: #fff;
  font-size: 20px;
  text-align: center;
  margin-top: 100px;
  cursor: pointer;
`;

type RetryButtonProps = {
  onClick: () => void;
};
const RetryButton: React.FC<RetryButtonProps> = ({ onClick }) => {
  return <StyledButton onClick={onClick}>再チャレンジ</StyledButton>;
};

export default RetryButton;
