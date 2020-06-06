import React, { useState } from "react";
import styled from "styled-components";
import { BoardState, LevelKey } from "../reducers/Board/types";

const StyledSelectLevel = styled.select`
  @media screen and (max-width: 425px) {
    margin: 4px 6px 4px 2px;
    font-size: 12px;
    padding-left: 4px;
    width: 80px;
  }
  appearance: none;
  outline: none;
  border: none;
  width: 150px;
  margin: 15px 10px;
  padding: 0 0 0 10px;
  font-size: 15px;
  font-weight: bold;
  line-height: 30px;
  border-radius: 5px;
  cursor: pointer;
`;

const SelectArrow = styled.span<{ isRanking?: boolean }>`
  position: relative;
  ::after {
    @media screen and (max-width: 425px) {
      top: 1.1em;
      right: 1em;
    }
    position: absolute;
    content: "";
    top: ${({ isRanking }) => (isRanking ? "1.8em" : "1.8em")};
    right: 1.8em;
    width: 0;
    height: 0;
    padding: 0;
    border-left: 4px solid transparent;
    border-right: 4px solid transparent;
    border-top: 4px solid #000000;
  }
  z-index: 1000;
`;

type SelectLevelProps = {
  board: BoardState;
  handleSelectLevel: (level: LevelKey) => void;
  isRanking?: boolean;
};

const SelectLevel: React.FC<SelectLevelProps> = ({
  board,
  handleSelectLevel,
  isRanking,
}) => {
  const levelName =
    board.mines === 10 ? "easy" : board.mines === 40 ? "medium" : "hard";
  const [level, setLevel] = useState<LevelKey>(levelName);

  const handleOnChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setLevel(e.target.value as LevelKey);
    handleSelectLevel(e.target.value as LevelKey);
  };

  return (
    <SelectArrow isRanking={isRanking}>
      <StyledSelectLevel value={level} onChange={handleOnChange}>
        <option value="easy">easy</option>
        <option value="medium">medium</option>
        <option value="hard">hard</option>
      </StyledSelectLevel>
    </SelectArrow>
  );
};

export default SelectLevel;
