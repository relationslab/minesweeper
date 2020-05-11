import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Board from "../components/Board";
import { RootState } from "../rootReducer";
import {
  createBoardAction,
  openCellAction,
  toggleFlagAction,
} from "../modules/Board/board";

const ContainerBoard = () => {
  const dispatch = useDispatch();

  const board = useSelector((state: RootState) => state.board);

  const handleCreateBoard = (width: number, height: number) => {
    dispatch(createBoardAction(width, height));
  };

  const handleOpenCell = (e: React.MouseEvent, x: number, y: number) => {
    e.preventDefault();
    dispatch(openCellAction(x, y));
  };

  const handleToggleFlag = (e: React.MouseEvent, x: number, y: number) => {
    e.preventDefault();
    dispatch(toggleFlagAction(x, y));
  };

  const _props = { board, handleCreateBoard, handleOpenCell, handleToggleFlag };

  return <Board {..._props}></Board>;
};

export default ContainerBoard;
