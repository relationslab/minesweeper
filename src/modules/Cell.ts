const OPEN_CELL = "minesweeper/cell/OPEN_CELL";
const TOGGLE_FLAG = "minesweeper/cell/TOGGLE_FLAG";

export type CellState = {
  isOpened: boolean;
  isFlagged: boolean;
};

const initialState: CellState = {
  isOpened: false,
  isFlagged: false,
};

const reducer = (state = initialState, action: any) => {
  switch (action.type) {
    case OPEN_CELL:
      return {
        ...state,
        isOpened: !state.isOpened,
      };
    case TOGGLE_FLAG:
      return {
        ...state,
        isFlagged: !state.isFlagged,
      };
    default:
      return state;
  }
};

export const openCell = () => {
  return {
    type: OPEN_CELL,
  };
};
export const toggleFlag = () => {
  return {
    type: TOGGLE_FLAG,
  };
};

export default reducer;
