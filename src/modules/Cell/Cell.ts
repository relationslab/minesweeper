import { ActionTypes, CellState, CellActionTypes } from "./types";

const initialState: CellState = {
  isOpened: false,
  isFlagged: false,
  hasMine: true,
};

const reducer = (state = initialState, action: CellActionTypes) => {
  switch (action.type) {
    case ActionTypes.OPEN_CELL:
      return {
        ...state,
        isOpened: !state.isOpened,
      };
    case ActionTypes.TOGGLE_FLAG:
      return {
        ...state,
        isFlagged: !state.isFlagged,
      };
    default:
      return state;
  }
};

export const openCell = (): CellActionTypes => {
  return {
    type: ActionTypes.OPEN_CELL,
  };
};
export const toggleFlag = (): CellActionTypes => {
  return {
    type: ActionTypes.TOGGLE_FLAG,
  };
};

export default reducer;
