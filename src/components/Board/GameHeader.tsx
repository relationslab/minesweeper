import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import SelectLevel from "../../containers/SelectLevel";
import FlagCount from "../../containers/FlagCount";
import Timer from "../../containers/Timer";
import { RootState } from "../../rootReducer";
import { cellSize } from "../../config";
import { Link } from "react-router-dom";

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
  z-index: 999;
`;

const StyledLink = StyledImg.withComponent(Link);

const CloseButton = () => {
  return (
    <StyledLink to="/ranking">
      <StyledImg src="/images/trophy.png" alt="ranking" />
    </StyledLink>
  );
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
