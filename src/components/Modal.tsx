import React from "react";
import styled from "styled-components";
import Modal from "react-modal";
import Timer from "../containers/Timer";
import TimeHistory from "../components/TimeHistory";
import RetryButton from "../components/RetryButton";
import { GameState } from "../reducers/Game/types";
import { BoardState } from "../reducers/Board/types";

const customStyles = {
  content: {
    width: "300px",
    height: "225px",
    top: "35%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    transform: "translate(-50%, -50%)",
    padding: "0",
    overflow: "visible",
    border: "none",
    borderRadius: "8px",
    backgroundColor: "#4dc1f9",
    backgroundImage: "url('/images/gameClear.png')",
    backgroundSize: "contain",
    backgroundPosition: "center bottom",
    backgroundRepeat: "no-repeat",
  },
  overlay: {
    backgroundColor: "rgba(0,0,0,0.8)",
  },
};

const ResultDisplay = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 0.5fr;
  grid-column-gap: 30px;
  margin: 25px 36px 20px 36px;
`;

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
  if (game.isEnded) {
    customStyles.content.backgroundImage = "url('/images/gameOver.png')";
  }

  return (
    <Modal
      isOpen={game.isEnded || game.isClearded}
      style={customStyles}
      ariaHideApp={false}
    >
      <ResultDisplay>
        <Timer isResult />
        <TimeHistory />
      </ResultDisplay>
      <RetryButton
        game={game}
        onClick={() =>
          handleCreateBoard(board.width, board.height, board.mines)
        }
      />
    </Modal>
  );
};

export default ModalDialog;
