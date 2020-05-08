const OPEN = "minesweeper/cell/OPEN";

export type CellState = {
  isOpened: boolean;
};

const initialState: CellState = {
  isOpened: false,
};

const reducer = (state = initialState, action: any) => {
  switch (action.type) {
    case OPEN:
      return {
        ...state,
        isOpened: !state.isOpened,
      };
    default:
      return state;
  }
};

export const openCell = () => {
  return {
    type: OPEN,
  };
};

export default reducer;
