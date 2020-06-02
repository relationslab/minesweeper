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
  padding: 1rem;
  background-color: rgb(77, 193, 249);
  background-image: url("/images/gameClear.png");
  background-size: contain;
  background-position: center bottom;
  background-repeat: no-repeat;
`;

const StyledHeader = styled.div`
  display: grid;
  grid-template-columns: 50px 1fr 1fr 1fr;
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
  background-color: salmon;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
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
          <button>all</button>
          <button>my</button>
        </StyledHeader>
        <Table data={data} handleClick={() => handleClickNext(lastRecord)} />
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
