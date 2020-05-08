import React from "react";
import styled from "styled-components";
import { CellState } from "../modules/Cell";

const StyledCell = styled.div<{ isOpened: boolean }>`
  width: 30px;
  height: 30px;
  border: 1px solid #000;
  background: ${(props) => (props.isOpened ? "#fff" : "#000")};
`;

type CellProps = {
  cell: CellState;
  handleOpenCell: () => void;
};

const Cell: React.FC<CellProps> = ({ cell, handleOpenCell }) => {
  return (
    <StyledCell onClick={handleOpenCell} isOpened={cell.isOpened}></StyledCell>
  );
};

export default Cell;
