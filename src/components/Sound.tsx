import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "src/rootReducer";
import ReactPlayer from "react-player";

const Sound = () => {
  const game = useSelector((state: RootState) => state.game);
  const user = useSelector((state: RootState) => state.user);

  const stop = !game.isStarted;

  const bgm = game.isClearded
    ? `${process.env.PUBLIC_URL}/clear.mp3`
    : game.isEnded
    ? `${process.env.PUBLIC_URL}/gameover.mp3`
    : `${process.env.PUBLIC_URL}/play.mp3`;
  return (
    <ReactPlayer
      url={stop ? "" : bgm}
      playing={game.isSounded && user.name !== ""}
      volume={0.3}
      loop={bgm === `${process.env.PUBLIC_URL}/gameover.mp3` ? false : true}
      width="0"
      height="0"
    />
  );
};

export default Sound;
