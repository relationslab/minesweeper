import React from "react";
import styled from "styled-components";

import Button from "./Board/Button";

const StyledInput = styled.input`
  border-radius: 10px;
  height: 25px;
  font-size: 16px;
  padding: 15px;
`;

const StyledLabel = styled.label`
  text-align: center;
`;

const Div = styled.div`
  margin: 15px 0 100px 0;
  display: grid;
  justify-content: center;
`;

type Props = {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onClick: (name: string) => void;
};

const InputForm: React.FC<Props> = ({ value, onChange, onClick }) => {
  return (
    <>
      <Div>
        <StyledLabel>名前を入力してください</StyledLabel>
        <StyledLabel>※8文字以内</StyledLabel>
        <StyledInput type="text" value={value} onChange={onChange} />
      </Div>

      <Button text="スタート" onClick={() => onClick(value)} isStart={true} />
    </>
  );
};

export default InputForm;
