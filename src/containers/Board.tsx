import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Board from "../components/Board";
import { RootState } from "../rootReducer";
import {
  openCellAction,
  toggleFlagAction,
  countFlagAction,
} from "../reducers/Board";
import {
  gameStartAction,
  gameClearAction,
  gameOverAction,
} from "../reducers/Game";

const ContainerBoard = () => {
  const dispatch = useDispatch();

  const board = useSelector((state: RootState) => state.board);

  const game = useSelector((state: RootState) => state.game);

  const openCellCount = () => {
    let openCells: number = 0;
    board.cells.forEach((cellArray) => {
      cellArray.forEach((cell) => {
        if (cell.isOpened) {
          openCells++;
        }
      });
    });
    return openCells;
  };

  const handleOpenCell = (e: React.MouseEvent, x: number, y: number) => {
    e.preventDefault();

    if (game.isEnded) {
      return;
    }

    if (!game.isStarted) {
      dispatch(gameStartAction());
    }

    dispatch(openCellAction(x, y));
    dispatch(countFlagAction());

    if (!board.isFirst && board.cells[x][y].hasMine) {
      dispatch(gameOverAction());
    }

    if (openCellCount() === board.width * board.height - board.mines) {
      dispatch(gameClearAction());
    }
  };

  const handleToggleFlag = (e: React.MouseEvent, x: number, y: number) => {
    e.preventDefault();

    if (!game.isStarted || game.isEnded) {
      return;
    }

    dispatch(toggleFlagAction(x, y));
    dispatch(countFlagAction());
  };

  const _props = { board, handleOpenCell, handleToggleFlag };

  return <Board {..._props} />;
};

export default ContainerBoard;
