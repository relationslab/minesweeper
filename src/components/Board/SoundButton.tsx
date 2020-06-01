import React, { useState } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import ReactPlayer from "react-player";
import { RootState } from "../../rootReducer";

const StyledImg = styled.img<{ right?: boolean }>`
  width: 25px;
  height: 25px;
  align-self: center;
  justify-self: ${({ right }) => (right ? "right" : "center")};
  z-index: 1111;
  cursor: pointer;
`;

const SoundButton = () => {
  const [playing, setPlaying] = useState(true);
  const user = useSelector((state: RootState) => state.user);
  const handleOnclick = () => {
    setPlaying(!playing);
  };

  return (
    <>
      <StyledImg
        right
        src={playing ? "/images/sound.png" : "/images/soundOff.png"}
        alt="sound"
        onClick={handleOnclick}
      />
      <ReactPlayer
        url={`${process.env.PUBLIC_URL}/pastelHouse.mp3`}
        playing={playing && user.name !== ""}
        loop
        volume={0.5}
        width="0"
        height="0"
      />
    </>
  );
};

export default SoundButton;
