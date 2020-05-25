import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Timer from "../components/Timer";
import { RootState } from "../rootReducer";
import { startTimeAction } from "../reducers/Game";

type props = {
  isResult?: boolean;
};

const ContainerTimer: React.FC<props> = ({ isResult }) => {
  const dispatch = useDispatch();
  const game = useSelector((state: RootState) => state.game);

  useEffect(() => {
    let interval: number = 0;
    if (game.isStarted && game.time < 999) {
      interval = setInterval(() => {
        dispatch(startTimeAction());
      }, 1000);
    }
    if (game.isClearded || game.isEnded) {
      clearInterval(interval);
    }

    return () => {
      clearInterval(interval);
    };
  }, [dispatch, game]);

  const _props = { game, isResult };
  return <Timer {..._props} />;
};

export default ContainerTimer;
