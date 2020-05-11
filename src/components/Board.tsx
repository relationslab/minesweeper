import React from "react";
import styled from "styled-components";
import { BoardState } from "../reducers/Board/types";
import Cell from "./Cell";

const StyledBoard = styled.div<{ width: number; height: number }>`
  display: grid;
  grid-template-columns: repeat(${(props) => props.width}, 30px);
  grid-template-rows: repeat(${(props) => props.height}, 30px);
`;

type BoardProps = {
  board: BoardState;
  handleCreateBoard: (width: number, height: number) => void;
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
    <>
      <button onClick={() => handleCreateBoard(board.width, board.height)}>
        start
      </button>
      <StyledBoard width={board.width} height={board.height}>
        {board.cells.map((row, y) =>
          row.map((cell, x) => (
            <Cell
              key={x}
              cell={cell}
              x={x}
              y={y}
              onClick={(e) => handleOpenCell(e, x, y)}
              onContextMenu={(e) => handleToggleFlag(e, x, y)}
            />
          ))
        )}
      </StyledBoard>
    </>
  );
};

export default Board;
