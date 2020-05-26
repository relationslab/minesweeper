import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const StyledDisplay = styled.div`
  min-width: 540px;
  min-height: 480px;
  display: grid;
  grid-template-columns: 540px;
  justify-content: center;
  margin: 60px;
`;

const StyledTitle = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  border-radius: 10px;
  background-color: rgb(77, 193, 249);
  background-image: url("/images/gameClear.png");
  background-size: contain;
  background-position: center bottom;
  background-repeat: no-repeat;
`;

const StyledLink = styled(Link)`
  justify-self: center;
  align-self: center;
  border: none;
  width: 150px;
  height: 50px;
  text-align: center;
  line-height: 50px;
  border-radius: 10px;
  background-color: blue;
  font-size: 1.5rem;
  font-weight: bold;
`;

const Title: React.FC = () => {
  return (
    <>
      <StyledDisplay>
        <StyledTitle>
          <StyledLink to="/play">プレイ</StyledLink>
          <StyledLink to="/ranking">ランキング</StyledLink>
        </StyledTitle>
      </StyledDisplay>
    </>
  );
};

export default Title;
