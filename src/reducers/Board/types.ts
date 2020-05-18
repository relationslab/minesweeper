export const ActionTypes = {
  OPEN_CELL: "minesweeper/board/OPEN_CELL",
  TOGGLE_FLAG: "minesweeper/board/TOGGLE_FLAG",
  CREATE_BOARD: "minesweeper/board/CREATE_BOARD",
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
};

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

export type CreateBoardAction = {
  type: typeof ActionTypes.CREATE_BOARD;
  payload: {
    width: number;
    height: number;
  };
};

export type BoardActionTypes =
  | OpenCellAction
  | ToggleFlagAction
  | CreateBoardAction;
