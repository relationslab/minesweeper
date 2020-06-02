import React from "react";
import styled from "styled-components";
import SelectLevel from "../containers/SelectLevel";

const StyledPagination = styled.div`
  margin: 0 auto;
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
      <button onClick={handleClickPrev} disabled={prevDisabled}>
        ←
      </button>
      <button onClick={handleClickNext} disabled={nextDisabled}>
        →
      </button>
    </StyledPagination>
  );
};

export default Pagination;
