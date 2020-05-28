import React, { useState } from "react";
import styled from "styled-components";
import GameHeader from "./GameHeader";
import Board from "../../containers/Board";
import Modal from "../../containers/Modal";
import Overlay from "../Overlay";

const StyledGame = styled.div`
  min-width: 540px;
  min-height: 420px;
  display: grid;
  grid-template-rows: 60px 1fr;
  justify-content: center;
  margin: 60px;
`;

const Game = () => {
  const [isStart, setIsStart] = useState(false);
  const handleClick = () => {
    setIsStart(true);
  };

  return (
    <StyledGame>
      <GameHeader />
      {isStart ? <Modal /> : <Overlay onClick={handleClick} />}
      <Board />
    </StyledGame>
  );
};

export default Game;
