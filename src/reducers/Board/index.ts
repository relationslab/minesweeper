import { ActionTypes, BoardState, LevelKey, BoardActionTypes } from "./types";
import { initializeBoard, openCell, toggleFlag, countFlag } from "./helper";
import { level } from "../../config";

const { width, height, mines } = level.medium;
const initialState: BoardState = {
  cells: initializeBoard(width, height, mines),
  width,
  height,
  mines,
  flags: mines,
};

const reducer = (state = initialState, action: BoardActionTypes) => {
  switch (action.type) {
    case ActionTypes.SELECT_LEVEL:
      const { width, height, mines } = level[action.payload.level];
      return {
        cells: initializeBoard(width, height, mines),
        width,
        height,
        mines,
        flags: mines,
      };
    case ActionTypes.CREATE_BOARD:
      return {
        ...state,
        cells: initializeBoard(
          action.payload.width,
          action.payload.height,
          action.payload.mines
        ),
        flags: action.payload.mines,
      };
    case ActionTypes.OPEN_CELL:
      return {
        ...state,
        cells: openCell(
          state.cells,
          state.width,
          state.height,
          action.payload.x,
          action.payload.y
        ),
      };
    case ActionTypes.TOGGLE_FLAG:
      return {
        ...state,
        cells: toggleFlag(state, action.payload.x, action.payload.y),
      };
    case ActionTypes.COUNT_FLAG:
      return {
        ...state,
        flags: countFlag(state.cells),
      };
    default:
      return state;
  }
};

export const SelectLevelAction = (level: LevelKey): BoardActionTypes => {
  return {
    type: ActionTypes.SELECT_LEVEL,
    payload: {
      level,
    },
  };
};

export const createBoardAction = (
  width: number,
  height: number,
  mines: number
): BoardActionTypes => {
  return {
    type: ActionTypes.CREATE_BOARD,
    payload: {
      width,
      height,
      mines,
    },
  };
};

export const openCellAction = (x: number, y: number): BoardActionTypes => {
  return {
    type: ActionTypes.OPEN_CELL,
    payload: {
      x,
      y,
    },
  };
};

export const toggleFlagAction = (x: number, y: number): BoardActionTypes => {
  return {
    type: ActionTypes.TOGGLE_FLAG,
    payload: {
      x,
      y,
    },
  };
};

export const countFlagAction = (): BoardActionTypes => {
  return {
    type: ActionTypes.COUNT_FLAG,
  };
};

export default reducer;
