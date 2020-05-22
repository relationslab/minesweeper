import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { CellState } from "../reducers/Board/types";
import { RootState } from "../rootReducer";

const StyledCell = styled.div<{ styleIsOpened: boolean; cellColor: number }>`
  width: 30px;
  height: 30px;
  text-align: center;
  line-height: 30px;
  background: ${(props) =>
    props.styleIsOpened
      ? props.styleIsOpened && props.cellColor % 2 === 0
        ? "#E5C29F"
        : "#D7B899"
      : props.cellColor % 2 === 0
      ? "#A7D948"
      : "#8ECC39"};
`;

const StyledImg = styled.img`
  width: 30px;
  height: 30px;
`;

type CellProps = {
  cell: CellState;
  colorNumber: number;
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

const Batsu = () => {
  return (
    <StyledImg src={`${process.env.PUBLIC_URL}/batsu_red.png`} alt="batsu" />
  );
};
const Cell: React.FC<CellProps> = ({
  cell,
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
    >
      {cell.isOpened ? (
        cell.hasMine ? (
          <Mine />
        ) : cell.surroundingMines !== 0 ? (
          cell.surroundingMines
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
