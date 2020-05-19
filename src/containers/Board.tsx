import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Board from "../components/Board";
import { RootState } from "../rootReducer";
import {
  createBoardAction,
  openCellAction,
  toggleFlagAction,
} from "../reducers/Board";
import {
  GameStartAction,
  GameOverAction,
  GameRetryAction,
} from "../reducers/Game";

const ContainerBoard = () => {
  const dispatch = useDispatch();

  const board = useSelector((state: RootState) => state.board);

  const game = useSelector((state: RootState) => state.game);

  const handleCreateBoard = (width: number, height: number, mines: number) => {
    dispatch(GameRetryAction());
    dispatch(createBoardAction(width, height, mines));
  };

  const handleOpenCell = (e: React.MouseEvent, x: number, y: number) => {
    if (game.isEnded) {
      return;
    } else if (!game.isStarted) {
      dispatch(GameStartAction());
    }
    e.preventDefault();
    dispatch(openCellAction(x, y));

    if (board.cells[x][y].hasMine && board.cells[x][y].isOpened) {
      dispatch(GameOverAction());
    }
  };

  const handleToggleFlag = (e: React.MouseEvent, x: number, y: number) => {
    if (board.cells[x][y].isFlagged) {
      dispatch(toggleFlagAction(x, y, true));
    } else {
      dispatch(toggleFlagAction(x, y, false));
    }
    e.preventDefault();
  };

  const _props = { board, handleCreateBoard, handleOpenCell, handleToggleFlag };

  return <Board {..._props} />;
};

export default ContainerBoard;
