import { ActionTypes, GameActionTypes, GameState } from "./types";
import { initialGameState } from "../../config";

const initialState: GameState = initialGameState;

const reducer = (state = initialState, action: GameActionTypes) => {
  switch (action.type) {
    case ActionTypes.GAME_START:
      return {
        ...state,
        isStarted: true,
      };
    case ActionTypes.GAME_CLEAR:
      const bestTime =
        state.timeHistory === 0
          ? state.time
          : Math.min(state.time, state.timeHistory);
      return {
        ...state,
        isClearded: true,
        timeHistory: bestTime,
      };
    case ActionTypes.GAME_OVER:
      return {
        ...state,
        isEnded: true,
      };
    case ActionTypes.GAME_RETRY:
      return {
        ...initialState,
        isSounded: state.isSounded,
        timeHistory: state.timeHistory,
      };
    case ActionTypes.START_TIME:
      return {
        ...state,
        time: state.time + 1,
      };

    case ActionTypes.TOGGLE_SOUND:
      return {
        ...state,
        isSounded: !state.isSounded,
      };
    default:
      return state;
  }
};

export const gameStartAction = () => {
  return {
    type: ActionTypes.GAME_START,
  };
};

export const gameClearAction = () => {
  return {
    type: ActionTypes.GAME_CLEAR,
  };
};

export const gameOverAction = () => {
  return {
    type: ActionTypes.GAME_OVER,
  };
};

export const gameRetryAction = () => {
  return {
    type: ActionTypes.GAME_RETRY,
  };
};

export const startTimeAction = () => {
  return {
    type: ActionTypes.START_TIME,
  };
};

export const toggleSoundAction = () => {
  return {
    type: ActionTypes.TOGGLE_SOUND,
  };
};
export default reducer;
