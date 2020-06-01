import React, { useEffect, useState } from "react";
import styled from "styled-components";

const StyledOverlay = styled.div`
  position: absolute;
  width: 65%;
  height: 65%;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: grid;
  img {
    justify-self: center;
    align-self: center;
    width: 120px;
    height: 110px;
    margin-bottom: 60px;
    background-color: rgba(0, 0, 0, 0.4);
    border-radius: 10px;
  }
  z-index: 999;
`;

type OverlayProps = {
  onClick: () => void;
};

const Overlay: React.FC<OverlayProps> = ({ onClick }) => {
  const [isDig, setIsDig] = useState(true);

  useEffect(() => {
    let interval: number = 0;
    interval = setInterval(() => {
      setIsDig(!isDig);
    }, 2000);

    return () => {
      clearInterval(interval);
    };
  });

  return (
    <StyledOverlay onClick={onClick}>
      <img
        src={isDig ? "/images/tutorial_dig.png" : "/images/tutorial_flag.png"}
        alt="dig"
      />
    </StyledOverlay>
  );
};

export default Overlay;
