import React from "react";
import styled from "styled-components";

const StyledImg = styled.img<{ right?: boolean }>`
  width: 25px;
  height: 25px;
  align-self: center;
  justify-self: ${({ right }) => (right ? "right" : "center")};
  z-index: 999;
`;

const SoundButton = () => {
  return <StyledImg right src="/images/sound.png" alt="sound" />;
};

export default SoundButton;
