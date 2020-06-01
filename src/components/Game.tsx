import React, { useState } from "react";
import styled from "styled-components";
import GameHeader from "./Board/GameHeader";
import Board from "../containers/Board";
import Modal from "../containers/Modal";
import Overlay from "./Overlay";
import { UserState } from "src/reducers/User/types";

const StyledGame = styled.div`
  min-width: 540px;
  min-height: 420px;
  display: grid;
  grid-template-rows: 60px 1fr;
  justify-content: center;
  margin: 60px;
`;

type GameProps = {
  user: UserState;
};

const Game: React.FC<GameProps> = ({ user }) => {
  const [isStart, setIsStart] = useState(false);
  const handleClick = () => {
    setIsStart(true);
  };

  return (
    <StyledGame>
      <GameHeader />
      {!isStart && !user.name.length ? (
        <Overlay onClick={handleClick} />
      ) : (
        <Modal />
      )}
      <Board />
    </StyledGame>
  );
};

export default Game;
