export const ActionTypes = {
  OPEN_CELL: "minesweeper/board/OPEN_CELL",
  TOGGLE_FLAG: "minesweeper/board/TOGGLE_FLAG",
  COUNT_FLAG: "minesweeper/board/COUNT_FLAG",
  CREATE_BOARD: "minesweeper/board/CREATE_BOARD",
  SELECT_LEVEL: "minesweeper/board/SELECT_LEVEL",
} as const;

export type CellState = {
  isOpened: boolean;
  isFlagged: boolean;
  hasMine: boolean;
  surroundingMines: number;
};

export type BoardState = {
  cells: CellState[][];
  width: number;
  height: number;
  mines: number;
  flags: number;
  isFirst: boolean;
};

export type LevelState = {
  width: number;
  height: number;
  mines: number;
};

export type Level = {
  easy: LevelState;
  medium: LevelState;
  hard: LevelState;
};

export type LevelKey = "easy" | "medium" | "hard";

export type OpenCellAction = {
  type: typeof ActionTypes.OPEN_CELL;
  payload: {
    x: number;
    y: number;
  };
};

export type ToggleFlagAction = {
  type: typeof ActionTypes.TOGGLE_FLAG;
  payload: {
    x: number;
    y: number;
  };
};

export type CountFlagAction = {
  type: typeof ActionTypes.COUNT_FLAG;
};

export type CreateBoardAction = {
  type: typeof ActionTypes.CREATE_BOARD;
  payload: {
    width: number;
    height: number;
    mines: number;
  };
};

export type SelectLevelAction = {
  type: typeof ActionTypes.SELECT_LEVEL;
  payload: {
    level: LevelKey;
  };
};

export type BoardActionTypes =
  | OpenCellAction
  | ToggleFlagAction
  | CountFlagAction
  | CreateBoardAction
  | SelectLevelAction;
