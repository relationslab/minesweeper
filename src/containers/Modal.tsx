import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../rootReducer";
import Modal from "../components/Modal";
import { createBoardAction } from "../reducers/Board";
import { gameRetryAction } from "../reducers/Game";
import firebase, { db } from "../firebase";

const ContainerModal = () => {
  const dispatch = useDispatch();
  const game = useSelector((state: RootState) => state.game);
  const board = useSelector((state: RootState) => state.board);
  const user = useSelector((state: RootState) => state.user);

  useEffect(() => {
    if (game.isClearded && game.time !== 0) {
      db.collection("records").add({
        uid: user.uid,
        name: user.name,
        level: board.level,
        time: game.time,
        createdAt: firebase.firestore.FieldValue.serverTimestamp(),
      });
    }
  }, [game.isClearded, user, board.level, game.time]);

  const handleCreateBoard = () => {
    dispatch(gameRetryAction());
    dispatch(createBoardAction(board.width, board.height, board.mines));
  };

  const _props = { game, user, handleCreateBoard };

  return <Modal {..._props} />;
};

export default ContainerModal;
