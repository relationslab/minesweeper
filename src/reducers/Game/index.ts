import { ActionTypes, GameActionTypes, GameState } from "./types";

const initialState: GameState = {
  isStarted: false,
  isClearded: false,
  isEnded: false,
  time: 0,
  timeHistory: 0,
};

const reducer = (state = initialState, action: GameActionTypes) => {
  switch (action.type) {
    case ActionTypes.GAME_START:
      return {
        ...state,
        isStarted: true,
      };
    case ActionTypes.GAME_CLEAR:
      return {
        ...state,
        isClearded: true,
        timeHistory: state.time,
      };
    case ActionTypes.GAME_OVER:
      return {
        ...state,
        isEnded: true,
      };
    case ActionTypes.GAME_RETRY:
      return {
        ...initialState,
        timeHistory: state.timeHistory,
      };
    case ActionTypes.START_TIME:
      return {
        ...state,
        time: state.time + 1,
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

export default reducer;
