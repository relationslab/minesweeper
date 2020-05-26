import React from "react";
import { useDispatch } from "react-redux";
import SelectLevel from "../components/Board/SelectLevel";
import { SelectLevelAction } from "../reducers/Board";
import { gameRetryAction } from "../reducers/Game";
import { LevelKey } from "../reducers/Board/types";

const ContainerSelectLevel = () => {
  const dispatch = useDispatch();

  const handleSelectLevel = (level: LevelKey) => {
    dispatch(gameRetryAction());
    dispatch(SelectLevelAction(level));
  };

  const _props = { handleSelectLevel };
  return <SelectLevel {..._props} />;
};

export default ContainerSelectLevel;
