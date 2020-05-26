import React from "react";
import styled from "styled-components";
import GameHeader from "./GameHeader";
import Board from "../../containers/Board";
import Modal from "../../containers/Modal";

const StyledGame = styled.div`
  min-width: 540px;
  min-height: 420px;
  display: grid;
  justify-content: center;
  margin: 60px;
`;

const Game = () => {
  return (
    <>
      <StyledGame>
        <GameHeader />
        <Board />
      </StyledGame>
      <Modal />
    </>
  );
};

export default Game;
