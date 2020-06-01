import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "src/rootReducer";
import ReactPlayer from "react-player";

const Sound = () => {
  const game = useSelector((state: RootState) => state.game);
  const user = useSelector((state: RootState) => state.user);

  //gameOver,gameClearの音楽は金曜までに探します。
  const stop = game.isEnded || !game.isStarted;
  return (
    <ReactPlayer
      url={stop ? "" : `${process.env.PUBLIC_URL}/pastelHouse.mp3`}
      playing={game.isSounded && user.name !== ""}
      volume={0.5}
      loop
      width="0"
      height="0"
    />
  );
};

export default Sound;
