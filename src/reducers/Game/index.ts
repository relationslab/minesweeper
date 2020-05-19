import { ActionTypes, GameActionTypes, GameState } from "./types";

const initialState: GameState = {
  isStarted: false,
  isClearded: false,
  isEnded: false,
};

const reducer = (state = initialState, action: GameActionTypes) => {
  switch (action.type) {
    case ActionTypes.GAME_START:
      return {
        ...state,
        isStarted: true,
      };
    case ActionTypes.GAME_OVER:
      return {
        ...state,
        isStarted: false,
        isEnded: true,
      };
    case ActionTypes.GAME_RETRY:
      return {
        isStarted: false,
        isClearded: false,
        isEnded: false,
      };
    default:
      return state;
  }
};

export const GameStartAction = () => {
  return {
    type: ActionTypes.GAME_START,
  };
};

export const GameOverAction = () => {
  return {
    type: ActionTypes.GAME_OVER,
  };
};

export const GameRetryAction = () => {
  return {
    type: ActionTypes.GAME_RETRY,
  };
};

export default reducer;
