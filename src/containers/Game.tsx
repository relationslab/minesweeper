import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "src/rootReducer";

import Game from "../components/Game";

const ContainerGame = () => {
  const user = useSelector((state: RootState) => state.user);

  const _props = { user };
  return <Game {..._props} />;
};

export default ContainerGame;
