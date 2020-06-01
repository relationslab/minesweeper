import React from "react";
import styled from "styled-components";
import { GameState } from "src/reducers/Game/types";

const StyledImg = styled.img<{ right?: boolean }>`
  width: 25px;
  height: 25px;
  align-self: center;
  justify-self: ${({ right }) => (right ? "right" : "center")};
  z-index: 1111;
  cursor: pointer;
`;

type SoundButtonProps = {
  playing: boolean;
  game: GameState;
  handleOnClick: () => void;
};

const SoundButton: React.FC<SoundButtonProps> = ({
  playing,
  game,
  handleOnClick,
}) => {
  return (
    <StyledImg
      right
      src={game.isSounded ? "/images/sound.png" : "/images/soundOff.png"}
      alt="sound"
      onClick={() => handleOnClick()}
    />
  );
};

export default SoundButton;
