import React from "react";
import { useSelector } from "react-redux";
import Timer from "../components/Timer";
import { RootState } from "../rootReducer";

const ContainerTimer = () => {
  const game = useSelector((state: RootState) => state.game);

  const _props = { game };
  return <Timer {..._props} />;
};

export default ContainerTimer;
