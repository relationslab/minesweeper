import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { RootState } from "../rootReducer";

const StyledHeader = styled.header`
  display: grid;
  grid-template-columns: 1fr 150px;
  justify-content: center;
  align-items: center;
  width: 100%;
  background-color: #66bb6a;
  a {
    justify-self: center;
    margin-left: 150px;
    h1 {
      margin: 0;
    }
  }

  span {
    justify-self: center;
  }
`;

const Span = styled.span``;

const Header = () => {
  const user = useSelector((state: RootState) => state.user);
  return (
    <StyledHeader>
      <Link to="/">
        <h1>minesweeeeeper</h1>
      </Link>
      <Span>{user.name}</Span>
    </StyledHeader>
  );
};

export default Header;
