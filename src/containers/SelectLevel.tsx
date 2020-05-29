import React from "react";
import { useDispatch } from "react-redux";
import SelectLevel from "../components/Board/SelectLevel";
import { SelectLevelAction, filterLevelAction } from "../reducers/Board";
import { gameRetryAction } from "../reducers/Game";
import { LevelKey } from "../reducers/Board/types";

type props = {
  isRanking?: boolean;
};

const ContainerSelectLevel: React.FC<props> = ({ isRanking }) => {
  const dispatch = useDispatch();

  const handleSelectLevel = (level: LevelKey) => {
    if (isRanking) {
      dispatch(filterLevelAction(level));
    } else {
      dispatch(gameRetryAction());
      dispatch(SelectLevelAction(level));
    }
  };

  const _props = { handleSelectLevel, isRanking };
  return <SelectLevel {..._props} />;
};

export default ContainerSelectLevel;
