import React, { useState } from "react";
import styled from "styled-components";
import Modal from "react-modal";
import Timer from "../containers/Timer";
import TimeHistory from "./Board/TimeHistory";
import Button from "./Button";
import InputForm from "./InputForm";
import { GameState } from "../reducers/Game/types";
import { UserState } from "../reducers/User/types";

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

type ModalProps = {
  game: GameState;
  user: UserState;
  handleSetName: (name: string) => void;
  handleCreateBoard: () => void;
  isStart?: boolean;
};

const ModalDialog: React.FC<ModalProps> = ({
  game,
  user,
  handleSetName,
  handleCreateBoard,
}) => {
  const [name, setName] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  if (game.isEnded) {
    customStyles.content.backgroundImage = "url('/images/gameOver.png')";
  }

  return (
    <>
      <Modal isOpen={user.name === ""} style={customStyles} ariaHideApp={false}>
        <InputForm
          value={name}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleChange(e)}
          onClick={() => handleSetName(name)}
        />
      </Modal>

      <Modal
        isOpen={game.isEnded || game.isClearded}
        style={customStyles}
        ariaHideApp={false}
      >
        <ResultDisplay game={game}>
          <Timer isResult />
          <TimeHistory />
        </ResultDisplay>
        <Button
          retry={game.isEnded}
          text={game?.isClearded ? "もう一度プレイ" : "再チャレンジ"}
          onClick={() => handleCreateBoard()}
        />
      </Modal>
    </>
  );
};

export default ModalDialog;
