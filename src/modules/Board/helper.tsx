import {
  CellState,
  BoardState,
  OpenCellAction,
  ToggleFlagAction,
  CreateBoardAction,
} from "./types";

export const createBoard = (
  state: BoardState,
  { payload }: CreateBoardAction
): CellState[][] => {
  const { width, height } = payload;
  state.cells = [];

  const cells: CellState[][] = state.cells;
  for (let i = 0; i < height; i++) {
    cells.push([]);
    for (let j = 0; j < width; j++) {
      cells[i].push({
        isOpened: false,
        isFlagged: false,
        hasMine: false,
        surrounding_mines: 0,
      });
    }
  }
  return cells;
};

export const openCell = (
  state: BoardState,
  { payload }: OpenCellAction
): CellState[][] => {
  const { x, y } = payload;

  const newCells = [...state.cells];
  newCells[x][y].isOpened = true;
  newCells[x][y].isFlagged = false;
  return newCells;
};

export const toggleFlag = (
  state: BoardState,
  { payload }: ToggleFlagAction
): CellState[][] => {
  const { x, y } = payload;

  const newToggleFlag = [...state.cells];
  if (newToggleFlag[x][y].isOpened === true) {
    return newToggleFlag;
  } else {
    newToggleFlag[x][y].isFlagged = !newToggleFlag[x][y].isFlagged;
  }
  return newToggleFlag;
};
