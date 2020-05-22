import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import SelectLevel from "../containers/SelectLevel";
import FlagCount from "../containers/FlagCount";
import Timer from "../containers/Timer";
import { RootState } from "../rootReducer";

const StyledHeader = styled.header<{ boardWidth: number }>`
  width: ${(props) => props.boardWidth * 30}px;
  height: 60px;
  background-color: #4a752c;
  display: grid;
  grid-template-rows: 60px;
  grid-template-columns: 1fr 1fr 1fr 1fr;
`;

const Header: React.FC = () => {
  const board = useSelector((state: RootState) => state.board);
  return (
    <StyledHeader boardWidth={board.width}>
      <SelectLevel />
      <FlagCount />
      <Timer />
    </StyledHeader>
  );
};

export default Header;
