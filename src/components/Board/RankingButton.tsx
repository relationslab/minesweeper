import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { RootState } from "../../rootReducer";

const StyledButton = styled.button<{ right?: boolean }>`
  width: 40px;
  height: 40px;
  background-image: url("images/trophy.png");
  background-size: cover;
  align-self: center;
  justify-self: ${({ right }) => (right ? "right" : "center")};
  z-index: 999;
`;

const StyledLink = StyledButton.withComponent(Link);

const RankingButton = () => {
  const user = useSelector((state: RootState) => state.user);
  return (
    <StyledLink to="/ranking/daily">
      <StyledButton disabled={user.name === ""} />
    </StyledLink>
  );
};

export default RankingButton;
