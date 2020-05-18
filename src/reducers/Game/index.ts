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
    default:
      return state;
  }
};

export const GameStartAction = () => {
  return {
    type: ActionTypes.GAME_START,
  };
};

export default reducer;
