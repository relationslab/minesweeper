import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Timer from "../components/Timer";
import { RootState } from "../rootReducer";
import { gameRetryAction, startTimeAction } from "../reducers/Game";

const ContainerTimer = () => {
  const dispatch = useDispatch();
  const game = useSelector((state: RootState) => state.game);
  useEffect(() => {
    let interval: number = 0;
    if (game.isStarted) {
      interval = setInterval(() => {
        dispatch(startTimeAction());
      }, 1000);
    } else if (game.isEnded) {
      clearInterval(interval);
    }

    if (!game.isStarted && !game.isEnded) {
      dispatch(gameRetryAction());
    }
    return () => clearInterval(interval);
  }, [dispatch, game.time, game.isStarted, game.isEnded]);

  const _props = { game };
  return <Timer {..._props} />;
};

export default ContainerTimer;
