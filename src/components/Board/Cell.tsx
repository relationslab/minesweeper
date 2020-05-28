import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { CellState } from "../../reducers/Board/types";
import { RootState } from "../../rootReducer";
import { cellSize } from "../../config";

const StyledCell = styled.div<{
  boardWidth: number;
  styleIsOpened: boolean;
  cellColor: number;
}>`
  width: ${({ boardWidth }) => cellSize(boardWidth)}px;
  height: ${({ boardWidth }) => cellSize(boardWidth)}px;
  line-height: ${({ boardWidth }) => cellSize(boardWidth)}px;
  text-align: center;
  background: ${(props) =>
    props.styleIsOpened
      ? props.styleIsOpened && props.cellColor % 2 === 0
        ? "#E5C29F"
        : "#D7B899"
      : props.cellColor % 2 === 0
      ? "#A7D948"
      : "#8ECC39"};
`;

const StyledNumber = styled.span<{
  number: number;
}>`
  font-weight: bold;
  font-size: 20px;
  color: ${({ number }) =>
    number === 1
      ? "blue"
      : number === 2
      ? "green"
      : number === 3
      ? "red"
      : number === 4
      ? "purple"
      : number === 5
      ? "orange"
      : "red"};
`;

const StyledImg = styled.img`
  width: 100%;
  height: 100%;
`;

const Flag = () => {
  return <StyledImg src="/images/flag.png" alt="flag" />;
};

const Mine = () => {
  return <StyledImg src="/images/mine.png" alt="mine" />;
};

const Batsu = () => {
  return <StyledImg src="/images/batsu.png" alt="batsu" />;
};

type CellProps = {
  cell: CellState;
  boardWidth: number;
  colorNumber: number;
  x: number;
  y: number;
  onClick: (e: React.MouseEvent) => void;
  onContextMenu: (e: React.MouseEvent) => void;
};

const Cell: React.FC<CellProps> = ({
  cell,
  boardWidth,
  colorNumber,
  onClick,
  onContextMenu,
}) => {
  const game = useSelector((state: RootState) => state.game);
  return (
    <StyledCell
      onClick={(e) => onClick(e)}
      onContextMenu={(e) => onContextMenu(e)}
      styleIsOpened={cell.isOpened}
      cellColor={colorNumber}
      boardWidth={boardWidth}
    >
      {cell.isOpened ? (
        cell.hasMine ? (
          <Mine />
        ) : cell.surroundingMines !== 0 ? (
          <StyledNumber number={cell.surroundingMines}>
            {cell.surroundingMines}
          </StyledNumber>
        ) : null
      ) : cell.isFlagged && !cell.hasMine && !cell.isOpened && game.isEnded ? (
        <Batsu />
      ) : cell.isFlagged ? (
        <Flag />
      ) : null}
    </StyledCell>
  );
};

export default Cell;
