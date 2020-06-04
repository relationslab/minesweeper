import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Table from "./Table";
import Pagination from "./Pagination";
import { Record } from "../config";

const StyledDisplay = styled.div`
  min-width: 540px;
  min-height: 480px;
  display: grid;
  grid-template-columns: 540px;
  justify-content: center;
  margin: 60px;
`;

const StyledDiv = styled.div`
  display: grid;
  grid-template-rows: 50px 1fr 40px;
  border-radius: 10px;
  padding: 15px;
  background-color: rgb(77, 193, 249);
  background-image: url("/images/gameClear.png");
  background-size: contain;
  background-position: center bottom;
  background-repeat: no-repeat;
`;

const StyledHeader = styled.div`
  display: grid;
  grid-template-columns: 50px 1fr 1fr;
  img {
    justify-self: right;
    width: 50px;
    height: 50px;
  }
`;

const StyledLink = styled(Link)`
  display: block;
  border: none;
  width: 35px;
  height: 35px;
  text-align: center;
  line-height: 35px;
  border-radius: 50%;
  background-color: #ffc107;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
`;

const ButtonGroup = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  justify-items: right;
`;

const StyledButton = styled.button`
  width: 60px;
  background-color: white;
  color: #4dc1f9;
  line-height: 1;
  padding: 5px 15px;
  border-radius: 10px;
  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12),
    0 3px 1px -2px rgba(0, 0, 0, 0.2);
  -webkit-tap-highlight-color: transparent;
  transition: 0.2s;
  :hover {
    box-shadow: 0 3px 3px 0 rgba(0, 0, 0, 0.14), 0 1px 7px 0 rgba(0, 0, 0, 0.12),
      0 3px 1px -1px rgba(0, 0, 0, 0.2);
  }
`;

type RankingProps = {
  data: Record[];
  lastRecord: any;
  handleClickPrev: () => void;
  handleClickNext: (last: any) => void;
  nextDisabled: boolean;
  prevDisabled: boolean;
};

const Ranking: React.FC<RankingProps> = ({
  data,
  lastRecord,
  handleClickPrev,
  handleClickNext,
  nextDisabled,
  prevDisabled,
}) => {
  return (
    <StyledDisplay>
      <StyledDiv>
        <StyledHeader>
          <StyledLink to="/">⬅</StyledLink>
          <img src="/images/trophy.png" alt="trophy" />
          <ButtonGroup>
            <Link to="/ranking/daily">
              <StyledButton>DAILY</StyledButton>
            </Link>
            <Link to="/ranking/all">
              <StyledButton>ALL</StyledButton>
            </Link>
            <Link to="/ranking/my">
              <StyledButton>MY</StyledButton>
            </Link>
          </ButtonGroup>
        </StyledHeader>
        <Table data={data} />
        <Pagination
          handleClickPrev={() => handleClickPrev()}
          handleClickNext={() => handleClickNext(lastRecord)}
          nextDisabled={nextDisabled}
          prevDisabled={prevDisabled}
        />
      </StyledDiv>
    </StyledDisplay>
  );
};

export default Ranking;
