import React from "react";
import styled from "styled-components";
import { CellState } from "../reducers/Board/types";

const StyledCell = styled.div<{ styleIsOpened: boolean }>`
  width: 30px;
  height: 30px;
  border: 1px solid #000;
  text-align: center;
  line-height: 30px;
  background: ${(props) => (props.styleIsOpened ? "#fff" : "#777")};
  /* :nth-child(2n) {
    background: red;
  }
  :nth-child(2n-1) {
    background: green;
  } */
`;

const StyledImg = styled.img`
  width: 30px;
  height: 30px;
`;

type CellProps = {
  cell: CellState;
  x: number;
  y: number;
  onClick: (e: React.MouseEvent) => void;
  onContextMenu: (e: React.MouseEvent) => void;
};

const Flag = () => {
  return <StyledImg src={`${process.env.PUBLIC_URL}/flag.png`} alt="flag" />;
};

const Mine = () => {
  return <StyledImg src={`${process.env.PUBLIC_URL}/mine.png`} alt="mine" />;
};

const Cell: React.FC<CellProps> = ({ cell, onClick, onContextMenu }) => {
  return (
    <StyledCell
      onClick={(e) => onClick(e)}
      onContextMenu={(e) => onContextMenu(e)}
      styleIsOpened={cell.isOpened}
    >
      {cell.isFlagged ? (
        <Flag />
      ) : !cell.isOpened ? null : cell.hasMine ? (
        <Mine />
      ) : cell.surroundingMines === 0 ? null : (
        cell.surroundingMines
      )}
    </StyledCell>
  );
};

export default Cell;
