import React, { useState } from "react";
import styled from "styled-components";
import GameHeader from "./Board/GameHeader";
import Board from "../containers/Board";
import Modal from "../containers/Modal";
import Overlay from "./Overlay";
import { UserState } from "src/reducers/User/types";

const StyledGame = styled.div`
  display: grid;
  justify-content: center;
  margin: 60px 0;
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
      {!isStart && !user.uid ? <Overlay onClick={handleClick} /> : <Modal />}
      <Board />
    </StyledGame>
  );
};

export default Game;
