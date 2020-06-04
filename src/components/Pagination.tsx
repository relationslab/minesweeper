import React from "react";
import styled from "styled-components";
import SelectLevel from "../containers/SelectLevel";

const StyledPagination = styled.div`
  margin: 0 137px;
`;

const StyledButton = styled.button`
  width: 30px;
  background-color: white;
  border-radius: 8px;
  font-size: 16px;
  padding: 0 5px;
  margin: 0 2px;
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
      <StyledButton onClick={handleClickPrev} disabled={prevDisabled}>
        ←
      </StyledButton>
      <StyledButton onClick={handleClickNext} disabled={nextDisabled}>
        →
      </StyledButton>
    </StyledPagination>
  );
};

export default Pagination;
