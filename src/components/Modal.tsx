import React from "react";
import styled from "styled-components";
import Modal from "react-modal";
import Timer from "../containers/Timer";
import TimeHistory from "./Board/TimeHistory";
import Button from "./Button";
import { GameState } from "../reducers/Game/types";
import { UserState } from "../reducers/User/types";
import GoogleLogin from "./GoogleLogin";

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
    backgroundColor: "rgba(0,0,0,0.3)",
    zIndex: 1000,
  },
};

const ResultDisplay = styled.div<{ game: GameState }>`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 0.5fr;
  grid-column-gap: 30px;
  margin: 25px 36px 20px 36px;
  ${({ game }) => (game.timeHistory === 0 ? "letter-spacing: 5px;" : null)}
`;

const LoginDisplay = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  justify-content: center;
  align-content: center;
`;

type ModalProps = {
  game: GameState;
  user: UserState;
  handleCreateBoard: () => void;
  isStart?: boolean;
};

const ModalDialog: React.FC<ModalProps> = ({
  game,
  user,
  handleCreateBoard,
}) => {
  if (game.isEnded) {
    customStyles.content.backgroundImage = "url('/images/gameOver.png')";
  }

  return (
    <>
      <Modal isOpen={user.name === ""} style={customStyles} ariaHideApp={false}>
        <LoginDisplay>
          <GoogleLogin />
        </LoginDisplay>
      </Modal>

      <Modal
        isOpen={game.isEnded || game.isClearded}
        style={customStyles}
        ariaHideApp={false}
        onRequestClose={handleCreateBoard}
      >
        <ResultDisplay game={game}>
          <Timer isResult />
          <TimeHistory />
        </ResultDisplay>
        <Button
          retry={game.isEnded}
          text={game?.isClearded ? "Clear!" : "再チャレンジ"}
          onClick={() => handleCreateBoard()}
        />
      </Modal>
    </>
  );
};

export default ModalDialog;
