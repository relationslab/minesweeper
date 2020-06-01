import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import SelectLevel from "../../containers/SelectLevel";
import FlagCount from "../../containers/FlagCount";
import Timer from "../../containers/Timer";
import SoundButton from "../../containers/SoundButton";
import RankingButton from "./RankingButton";
import { RootState } from "../../rootReducer";
import { cellSize } from "../../config";

const StyledHeader = styled.header<{ boardWidth: number }>`
  width: ${(props) => cellSize(props.boardWidth) * props.boardWidth}px;
  background-color: #4a752c;
  display: grid;
  grid-template-rows: 60px;
  grid-template-columns: 1fr 2fr 2fr 1fr 1fr;
  justify-content: center;
`;

const Header: React.FC = () => {
  const board = useSelector((state: RootState) => state.board);
  return (
    <StyledHeader boardWidth={board.width}>
      <SelectLevel />
      <FlagCount />
      <Timer />
      <SoundButton />
      <RankingButton />
    </StyledHeader>
  );
};

export default Header;
