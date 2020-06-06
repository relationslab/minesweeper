import React from "react";
import { useDispatch, useSelector } from "react-redux";
import SelectLevel from "../components/SelectLevel";
import { SelectLevelAction, filterLevelAction } from "../reducers/Board";
import { gameRetryAction } from "../reducers/Game";
import { LevelKey } from "../reducers/Board/types";
import { RootState } from "../rootReducer";

type props = {
  isRanking?: boolean;
};

const ContainerSelectLevel: React.FC<props> = ({ isRanking }) => {
  const dispatch = useDispatch();
  const board = useSelector((state: RootState) => state.board);

  const handleSelectLevel = (level: LevelKey) => {
    if (isRanking) {
      dispatch(filterLevelAction(level));
    } else {
      dispatch(gameRetryAction());
      dispatch(SelectLevelAction(level));
    }
  };

  const _props = { board, handleSelectLevel, isRanking };
  return <SelectLevel {..._props} />;
};

export default ContainerSelectLevel;
