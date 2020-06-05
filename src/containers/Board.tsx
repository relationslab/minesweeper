import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Board from "../components/Board/Board";
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

  const [count, setCount] = useState(0);
  const [touched, setTouched] = useState(false);

  useEffect(() => {
    let interval: number = 0;
    if (touched) {
      interval = setInterval(() => {
        setCount((count) => count + 1);
      }, 100);
    } else {
      clearInterval(interval);
      setCount(0);
    }
    return () => {
      clearInterval(interval);
    };
  }, [touched]);

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

    if (!!board.cells[x][y].isFlagged || game.isEnded) {
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

    if (
      !board.cells[x][y].hasMine &&
      openCellCount() === board.width * board.height - board.mines
    ) {
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

  const touchStartToggleFlag = (e: React.TouchEvent, x: number, y: number) => {
    if (!game.isStarted || game.isEnded) {
      return;
    }
    setTouched(true);
  };

  const touchEndToggleFlag = (e: React.TouchEvent, x: number, y: number) => {
    if (count > 1) {
      dispatch(toggleFlagAction(x, y));
      dispatch(countFlagAction());
      e.preventDefault();
    }
    setTouched(false);
  };
  const _props = {
    board,
    handleOpenCell,
    handleToggleFlag,
    touchStartToggleFlag,
    touchEndToggleFlag,
  };

  return <Board {..._props} />;
};

export default ContainerBoard;
