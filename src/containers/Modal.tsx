import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../rootReducer";
import Modal from "../components/Board/Modal";
import { createBoardAction } from "../reducers/Board";
import { gameRetryAction } from "../reducers/Game";

const ContainerModal = () => {
  const dispatch = useDispatch();
  const game = useSelector((state: RootState) => state.game);
  const board = useSelector((state: RootState) => state.board);

  const handleCreateBoard = (width: number, height: number, mines: number) => {
    dispatch(gameRetryAction());
    dispatch(createBoardAction(width, height, mines));
  };

  const _props = { game, board, handleCreateBoard };

  return <Modal {..._props} />;
};

export default ContainerModal;
