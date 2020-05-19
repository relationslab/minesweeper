import React from "react";
import Modal from "react-modal";
import Timer from "../containers/Timer";
import RetryButton from "../components/RetryButton";
import { GameState } from "../reducers/Game/types";
import { BoardState } from "../reducers/Board/types";

const customStyles = {
  content: {
    width: "300px",
    height: "225px",
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    backgroundColor: "#4dc1f9",
  },
  overlay: {
    backgroundColor: "rgba(0,0,0,0.8)",
  },
};

type ModalProps = {
  game: GameState;
  board: BoardState;
  handleCreateBoard: (width: number, height: number, mines: number) => void;
};

const ModalDialog: React.FC<ModalProps> = ({
  game,
  board,
  handleCreateBoard,
}) => {
  return (
    <Modal isOpen={game.isEnded} style={customStyles} ariaHideApp={false}>
      <Timer />
      <RetryButton
        onClick={() =>
          handleCreateBoard(board.width, board.height, board.mines)
        }
      />
    </Modal>
  );
};

export default ModalDialog;
