import React from "react";
import { useDispatch } from "react-redux";
import SelectLevel from "../components/SelectLevel";
import { SelectLevelAction } from "../reducers/Board";
import { LevelKey } from "../reducers/Board/types";

const ContainerSelectLevel = () => {
  const dispatch = useDispatch();

  const handleSelectLevel = (level: LevelKey) => {
    dispatch(SelectLevelAction(level));
  };

  const _props = { handleSelectLevel };
  return <SelectLevel {..._props} />;
};

export default ContainerSelectLevel;
