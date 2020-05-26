import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";

import { userSetIsStartAction } from "../reducers/User/index";

const StyledOverlay = styled.div`
  position: absolute;
  width: 540px;
  height: 424px;
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

const Overlay: React.FC = () => {
  const [isDig, setIsDig] = useState(true);
  const [isClicked, setisClicked] = useState(false);

  const dispatch = useDispatch();

  const handleClick = () => {
    setisClicked(true);
    dispatch(userSetIsStartAction());
  };

  useEffect(() => {
    let interval: number = 0;
    interval = setInterval(() => {
      setIsDig(!isDig);
    }, 3000);

    return () => {
      clearInterval(interval);
    };
  });

  return isClicked ? null : (
    <StyledOverlay onClick={handleClick}>
      <img
        src={isDig ? "/images/tutorial_dig.png" : "/images/tutorial_flag.png"}
        alt="dig"
      />
    </StyledOverlay>
  );
};

export default Overlay;

//containerにわける
