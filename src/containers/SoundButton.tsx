import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "src/rootReducer";
import SoundButton from "../components/Board/SoundButton";
import { toggleSoundAction } from "../reducers/Game";

const ContainerSoundButton = () => {
  const [playing, setPlaying] = useState(true);
  const game = useSelector((state: RootState) => state.game);
  const dispatch = useDispatch();

  const handleOnClick = () => {
    setPlaying(!playing);
    dispatch(toggleSoundAction());
  };

  const _props = { playing, game, handleOnClick };

  return <SoundButton {..._props} />;
};

export default ContainerSoundButton;
