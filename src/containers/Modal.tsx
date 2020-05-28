import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../rootReducer";
import Modal from "../components/Modal";
import { createBoardAction } from "../reducers/Board";
import { gameRetryAction } from "../reducers/Game";
import { userSetNameAction } from "../reducers/User";

const ContainerModal = () => {
  const dispatch = useDispatch();
  const game = useSelector((state: RootState) => state.game);
  const board = useSelector((state: RootState) => state.board);
  const user = useSelector((state: RootState) => state.user);

  const handleCreateBoard = () => {
    dispatch(gameRetryAction());
    dispatch(createBoardAction(board.width, board.height, board.mines));
  };

  const handleSetName = (name: string) => {
    if (name.length <= 8) {
      dispatch(userSetNameAction(name));
    } else {
      return;
    }
  };

  const _props = { game, user, handleSetName, handleCreateBoard };

  return <Modal {..._props} />;
};

export default ContainerModal;
