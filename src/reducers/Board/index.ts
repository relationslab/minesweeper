import {
  ActionTypes,
  BoardState,
  Level,
  LevelKey,
  BoardActionTypes,
} from "./types";
import { initializeBoard, openCell, toggleFlag } from "./helper";

const level: Level = {
  easy: {
    width: 10,
    height: 8,
    mines: 10,
  },
  normal: {
    width: 18,
    height: 14,
    mines: 40,
  },
  hard: {
    width: 24,
    height: 20,
    mines: 99,
  },
};

const { width, height, mines } = level.normal;
const initialState: BoardState = {
  cells: initializeBoard(width, height, mines),
  width: width,
  height: height,
  mines: mines,
};

const reducer = (state = initialState, action: BoardActionTypes) => {
  switch (action.type) {
    case ActionTypes.SELECT_LEVEL:
      const { width, height, mines } = level[action.payload.level];
      return {
        cells: initializeBoard(width, height, mines),
        width: width,
        height: height,
        mines: mines,
      };
    case ActionTypes.CREATE_BOARD:
      return {
        ...state,
        cells: initializeBoard(
          action.payload.width,
          action.payload.height,
          action.payload.mines
        ),
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
    default:
      return state;
  }
};

export const SelectLevelAction = (level: LevelKey): BoardActionTypes => {
  return {
    type: ActionTypes.SELECT_LEVEL,
    payload: {
      level: level,
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
      width: width,
      height: height,
      mines: mines,
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
