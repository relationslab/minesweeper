import React from "react";
import styled from "styled-components";
import { CellState } from "../modules/Board/types";

const StyledCell = styled.div<{ styleIsOpened: boolean }>`
  width: 30px;
  height: 30px;
  border: 1px solid #000;
  text-align: center;
  line-height: 30px;
  background: ${(props) => (props.styleIsOpened ? "#fff" : "#777")};
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

const flag = () => {
  return <StyledImg src={`${process.env.PUBLIC_URL}/flag.png`} alt="hgoe" />;
};

const Cell: React.FC<CellProps> = ({ cell, onClick, onContextMenu }) => {
  return (
    <StyledCell
      onClick={(e) => onClick(e)}
      onContextMenu={(e) => onContextMenu(e)}
      styleIsOpened={cell.isOpened}
    >
      {cell.isFlagged
        ? flag()
        : !cell.isOpened
        ? ""
        : cell.hasMine
        ? "💣"
        : cell.surrounding_mines}
    </StyledCell>
  );
};

export default Cell;
