import React from "react";
import styled from "styled-components";
import SelectLevel from "../containers/SelectLevel";
import FlagCount from "../containers/FlagCount";
import Timer from "../containers/Timer";

const StyledHeader = styled.header`
  width: 600px; /* とりあえず */
  height: 60px;
  background-color: #4a752c;
  display: grid;
  grid-template-rows: 60px;
  grid-template-columns: 1fr 1fr 1fr 1fr;
`;

const Header = () => {
  return (
    <StyledHeader>
      <SelectLevel />
      <FlagCount />
      <Timer />
    </StyledHeader>
  );
};

export default Header;
