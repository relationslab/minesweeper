import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import SelectLevel from "../containers/SelectLevel";
import FlagCount from "../containers/FlagCount";
import Timer from "../containers/Timer";
import { RootState } from "../rootReducer";

const cellSize = (boardWidth: number) => {
  return boardWidth === 10
    ? 45
    : boardWidth === 18
    ? 30
    : boardWidth === 24
    ? 25
    : 0;
};

const StyledHeader = styled.header<{ boardWidth: number }>`
  width: ${(props) => cellSize(props.boardWidth) * props.boardWidth}px;
  background-color: #4a752c;
  display: grid;
  grid-template-rows: 60px;
  grid-template-columns: 1fr 2fr 2fr 1fr 1fr;
  justify-content: center;
`;

const StyledImg = styled.img<{ right?: boolean }>`
  width: 25px;
  height: 25px;
  align-self: center;
  justify-self: ${({ right }) => (right ? "right" : "center")};
`;

const CloseButton = () => {
  return <StyledImg src="/images/close.png" alt="close" />;
};

const SoundButton = () => {
  return <StyledImg right src="/images/sound.png" alt="sound" />;
};

const Header: React.FC = () => {
  const board = useSelector((state: RootState) => state.board);
  return (
    <StyledHeader boardWidth={board.width}>
      <SelectLevel />
      <FlagCount />
      <Timer />
      <SoundButton />
      <CloseButton />
    </StyledHeader>
  );
};

export default Header;
