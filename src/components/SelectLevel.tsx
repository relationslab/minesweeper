import React, { useState } from "react";
import styled from "styled-components";
import { LevelKey } from "../reducers/Board/types";

const StyledSelectLevel = styled.select`
  height: 30px;
  font-size: 15px;
  line-height: 30px;
  border-radius: 5px;
  cursor: pointer;
  z-index: 1;
  :focus {
    outline: none;
  }
`;

type SelectLevelProps = {
  handleSelectLevel: (level: LevelKey) => void;
};

const SelectLevel: React.FC<SelectLevelProps> = ({ handleSelectLevel }) => {
  const [level, setLevel] = useState("normal");

  const handleOnChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setLevel(e.target.value);
    handleSelectLevel(e.target.value as LevelKey);
  };

  return (
    <StyledSelectLevel value={level} onChange={handleOnChange}>
      <option value="easy">難易度:低</option>
      <option value="normal">難易度:中</option>
      <option value="hard">難易度:高</option>
    </StyledSelectLevel>
  );
};

export default SelectLevel;
