import React from "react";
import styled from "styled-components";
import { BoardState } from "../reducers/Board/types";
import Cell from "./Cell";

const cellSize = (boardWidth: number) => {
  return boardWidth === 10
    ? 45
    : boardWidth === 18
    ? 30
    : boardWidth === 24
    ? 25
    : 0;
};

const StyledBoard = styled.span<{ width: number; height: number }>`
  display: grid;
  grid-auto-flow: column;
  grid-template-columns: repeat(
    ${(props) => props.width},
    ${(props) => cellSize(props.width)}px
  );
  grid-template-rows: repeat(
    ${(props) => props.height},
    ${(props) => cellSize(props.width)}px
  );
`;

type BoardProps = {
  board: BoardState;
  handleCreateBoard: (width: number, height: number, mines: number) => void;
  handleOpenCell: (e: React.MouseEvent, x: number, height: number) => void;
  handleToggleFlag: (e: React.MouseEvent, x: number, height: number) => void;
};

const Board: React.FC<BoardProps> = ({
  board,
  handleCreateBoard,
  handleOpenCell,
  handleToggleFlag,
}) => {
  return (
    <StyledBoard width={board.width} height={board.height}>
      {board.cells.map((cols, x) =>
        cols.map((cell, y) => (
          <Cell
            key={y}
            colorNumber={y % 2 === 0 ? y + x : y - x}
            cell={cell}
            x={x}
            y={y}
            onClick={(e) => handleOpenCell(e, x, y)}
            onContextMenu={(e) => handleToggleFlag(e, x, y)}
          />
        ))
      )}
    </StyledBoard>
  );
};
export default Board;
