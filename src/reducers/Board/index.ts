import { ActionTypes, BoardState, BoardActionTypes } from "./types";
import { createBoard, openCell, toggleFlag } from "./helper";

const initialState: BoardState = {
  cells: [],
  width: 10,
  height: 8,
};

const reducer = (state = initialState, action: BoardActionTypes) => {
  switch (action.type) {
    case ActionTypes.CREATE_BOARD:
      return {
        ...state,
        cells: createBoard(state, action),
      };
    case ActionTypes.OPEN_CELL:
      const { height, width } = state;
      return {
        ...state,
        cells: openCell(
          state.cells,
          height,
          width,
          action.payload.y,
          action.payload.x
        ),
      };
    case ActionTypes.TOGGLE_FLAG:
      return {
        ...state,
        cells: toggleFlag(state, action),
      };
    default:
      return state;
  }
};
export const createBoardAction = (
  width: number,
  height: number
): BoardActionTypes => {
  return {
    type: ActionTypes.CREATE_BOARD,
    payload: {
      width: width,
      height: height,
    },
  };
};

export const openCellAction = (x: number, y: number): BoardActionTypes => {
  return {
    type: ActionTypes.OPEN_CELL,
    payload: {
      x: x,
      y: y,
    },
  };
};

export const toggleFlagAction = (x: number, y: number): BoardActionTypes => {
  return {
    type: ActionTypes.TOGGLE_FLAG,
    payload: {
      x: x,
      y: y,
    },
  };
};

export default reducer;
