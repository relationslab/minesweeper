import React, { useState } from "react";
import styled from "styled-components";
import { LevelKey } from "../../reducers/Board/types";

const StyledSelectLevel = styled.select`
  appearance: none;
  outline: none;
  border: none;
  width: 100px;
  margin: 15px 10px;
  padding: 0 0 0 10px;
  font-size: 15px;
  font-weight: bold;
  line-height: 30px;
  border-radius: 5px;
  cursor: pointer;
`;

const SelectArrow = styled.span`
  position: relative;
  ::after {
    position: absolute;
    content: "";
    top: 1.8em;
    right: 1.2em;
    width: 0;
    height: 0;
    padding: 0;
    border-left: 4px solid transparent;
    border-right: 4px solid transparent;
    border-top: 4px solid #000000;
  }
`;

type SelectLevelProps = {
  handleSelectLevel: (level: LevelKey) => void;
};

const SelectLevel: React.FC<SelectLevelProps> = ({ handleSelectLevel }) => {
  const [level, setLevel] = useState<LevelKey>("medium");

  const handleOnChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setLevel(e.target.value as LevelKey);
    handleSelectLevel(e.target.value as LevelKey);
  };

  return (
    <SelectArrow>
      <StyledSelectLevel value={level} onChange={handleOnChange}>
        <option value="easy">難易度:低</option>
        <option value="medium">難易度:中</option>
        <option value="hard">難易度:高</option>
      </StyledSelectLevel>
    </SelectArrow>
  );
};

export default SelectLevel;
