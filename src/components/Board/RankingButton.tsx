import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const StyledImg = styled.img`
  width: 40px;
  height: 40px;
`;

const StyledLink = styled(Link)`
  width: 40px;
  height: 40px;
  align-self: center;
  justify-self: center;
  z-index: 999;
`;

const RankingButton = () => {
  return (
    <StyledLink to="/ranking/daily">
      <StyledImg src="/images/trophy.png" alt="trophy" />
    </StyledLink>
  );
};

export default RankingButton;
