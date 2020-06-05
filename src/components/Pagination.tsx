import React from "react";
import styled from "styled-components";
import SelectLevel from "../containers/SelectLevel";

const StyledPagination = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-content: center;
  align-content: center;
  span {
    justify-self: right;
  }
  div {
    justify-self: left;
    align-self: center;
  }
`;

const StyledButton = styled.button`
  width: 30px;
  background-color: white;
  border-radius: 8px;
  font-size: 16px;
  padding: 0 5px;
  margin: 0 2px;
  align-self: center;
`;

type PaginationProps = {
  handleClickPrev: () => void;
  handleClickNext: () => void;
  prevDisabled?: boolean;
  nextDisabled?: boolean;
};

const Pagination: React.FC<PaginationProps> = ({
  handleClickPrev,
  handleClickNext,
  prevDisabled,
  nextDisabled,
}) => {
  return (
    <StyledPagination>
      <SelectLevel isRanking />
      <div>
        <StyledButton onClick={handleClickPrev} disabled={prevDisabled}>
          ←
        </StyledButton>
        <StyledButton onClick={handleClickNext} disabled={nextDisabled}>
          →
        </StyledButton>
      </div>
    </StyledPagination>
  );
};

export default Pagination;
