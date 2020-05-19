import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../rootReducer";
import FlagCount from "../components/FlagCount";

const ContainerFlagCount = () => {
  const board = useSelector((state: RootState) => state.board);
  const _props = { board };

  return <FlagCount {..._props} />;
};

export default ContainerFlagCount;
