export const ActionTypes = {
  OPEN_CELL: "minesweeper/cell/OPEN_CELL",
  TOGGLE_FLAG: "minesweeper/cell/TOGGLE_FLAG",
} as const;

export type CellState = {
  isOpened: boolean;
  isFlagged: boolean;
};

type OpenCellAction = {
  type: typeof ActionTypes.OPEN_CELL;
};
type ToggleFlag = {
  type: typeof ActionTypes.TOGGLE_FLAG;
};

export type CellActionTypes = OpenCellAction | ToggleFlag;
