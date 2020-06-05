import React from "react";
import styled from "styled-components";
import { BoardState } from "../../reducers/Board/types";
import Cell from "./Cell";
import { cellSize } from "../../config";

const StyledBoard = styled.div<{ width: number; height: number }>`
  display: grid;
  grid-auto-flow: column;
  @media screen and (max-width: 425px) {
    grid-template-columns: repeat(
      ${(props) => props.width},
      ${(props) => cellSize(props.width) - 10}px
    );
    grid-template-rows: repeat(
      ${(props) => props.height},
      ${(props) => cellSize(props.width) - 10}px
    );
  }
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
  handleOpenCell: (e: React.MouseEvent, x: number, y: number) => void;
  handleToggleFlag: (e: React.MouseEvent, x: number, y: number) => void;
  touchStartToggleFlag: (e: React.TouchEvent, x: number, y: number) => void;
  touchEndToggleFlag: (e: React.TouchEvent, x: number, y: number) => void;
};

const Board: React.FC<BoardProps> = ({
  board,
  handleOpenCell,
  handleToggleFlag,
  touchStartToggleFlag,
  touchEndToggleFlag,
}) => {
  return (
    <StyledBoard width={board.width} height={board.height}>
      {board.cells.map((cols, x) =>
        cols.map((cell, y) => (
          <Cell
            key={y}
            cell={cell}
            boardWidth={board.width}
            colorNumber={y % 2 === 0 ? y + x : y - x}
            x={x}
            y={y}
            onClick={(e) => handleOpenCell(e, x, y)}
            onContextMenu={(e) => handleToggleFlag(e, x, y)}
            onTouchStart={(e) => touchStartToggleFlag(e, x, y)}
            onTouchEnd={(e) => touchEndToggleFlag(e, x, y)}
          />
        ))
      )}
    </StyledBoard>
  );
};

export default Board;
