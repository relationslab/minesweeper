import React from "react";
import styled from "styled-components";
import { CellState } from "../modules/Cell/types";

const StyledCell = styled.div<{ styleIsOpened: boolean }>`
  width: 30px;
  height: 30px;
  border: 1px solid #000;
  text-align: center;
  line-height: 30px;
  background: ${(props) => (props.styleIsOpened ? "#fff" : "#000")};
`;

const StyledImg = styled.img`
  width: 30px;
  height: 30px;
`;

type CellProps = {
  cell: CellState;
  handleOpenCell: () => void;
  handleToggleFlag: (e: React.MouseEvent) => void;
};

const Cell: React.FC<CellProps> = ({
  cell,
  handleOpenCell,
  handleToggleFlag,
}) => {
  return (
    <StyledCell
      onClick={handleOpenCell}
      onContextMenu={handleToggleFlag}
      styleIsOpened={cell.isOpened}
    >
      {cell.isFlagged ? (
        <StyledImg src={`${process.env.PUBLIC_URL}/flag.png`} alt="hgoe" />
      ) : (
        ""
      )}
    </StyledCell>
  );
};

export default Cell;
