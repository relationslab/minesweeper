import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const StyledHeader = styled.header`
  display: grid;
  justify-content: center;
  align-items: center;
  width: 100%;
  background-color: gray;
`;

const StyledH1 = styled.h1`
  margin: 0;
`;

const Header = () => {
  return (
    <StyledHeader>
      <Link to="/">
        <StyledH1>minesweeeeeper</StyledH1>
      </Link>
    </StyledHeader>
  );
};

export default Header;
