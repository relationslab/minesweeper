import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const StyledImg = styled.img<{ right?: boolean }>`
  width: 40px;
  height: 40px;
  align-self: center;
  justify-self: ${({ right }) => (right ? "right" : "center")};
  z-index: 1111;
`;

const StyledLink = StyledImg.withComponent(Link);

const RankingButton = () => {
  return (
    <StyledLink to="/ranking/daily">
      <StyledImg src="/images/trophy.png" alt="ranking" />
    </StyledLink>
  );
};

export default RankingButton;
