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

const StyledDiv = styled.div`
  background-color: rgb(77, 193, 249);
  border-radius: 10px;
  padding: 1rem;
`;

const StyledUl = styled.ul`
  padding: 1rem;
  border: dashed 2px blue;
`;

const StyledLi = styled.li`
  /* margin: 10px; */
`;

const Ranking: React.FC = () => {
  return (
    <>
      <StyledDisplay>
        <StyledDiv>
          <StyledUl>
            <StyledLi>ranking</StyledLi>
            <StyledLi>ranking</StyledLi>
            <StyledLi>ranking</StyledLi>
            <StyledLi>ranking</StyledLi>
            <StyledLi>ranking</StyledLi>
            <StyledLi>ranking</StyledLi>
            <StyledLi>ranking</StyledLi>
            <StyledLi>ranking</StyledLi>
            <StyledLi>ranking</StyledLi>
            <StyledLi>ranking</StyledLi>
            <StyledLi>ranking</StyledLi>
            <StyledLi>ranking</StyledLi>
          </StyledUl>
        </StyledDiv>
      </StyledDisplay>
    </>
  );
};

export default Ranking;
