import React from "react";
import styled from "styled-components";
import { BoardState } from "../../reducers/Board/types";
import Cell from "./Cell";
import { cellSize } from "../../config";
import Overlay from "../Overlay";

const StyledBoard = styled.div<{ width: number; height: number }>`
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
  background-image: url("/images/gameClear.png");
`;

type BoardProps = {
  board: BoardState;
  handleOpenCell: (e: React.MouseEvent, x: number, height: number) => void;
  handleToggleFlag: (e: React.MouseEvent, x: number, height: number) => void;
};

const Board: React.FC<BoardProps> = ({
  board,
  handleOpenCell,
  handleToggleFlag,
}) => {
  return (
    <>
      <Overlay />
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
    </>
  );
};
export default Board;
