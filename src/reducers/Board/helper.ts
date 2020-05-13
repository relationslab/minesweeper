import {
  CellState,
  BoardState,
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
  for (let i = 0; i < width; i++) {
    cells.push([]);
    for (let j = 0; j < height; j++) {
      cells[i].push({
        isOpened: false,
        isFlagged: false,
        hasMine: false,
        surroundingMines: 0,
      });
    }
  }

  //mineとsurroundingMinesをいれる
  const mines = 5;

  for (let i = 0; i < mines; i++) {
    const randomX = Math.floor(Math.random() * width);
    const randomY = Math.floor(Math.random() * height);
    if (cells[randomX][randomY].hasMine === true) {
      i--;
      continue;
    } else {
      cells[randomX][randomY].hasMine = true;
      for (let cols = -1; cols <= 1; cols++) {
        for (let rows = -1; rows <= 1; rows++) {
          const surroundingX = randomX + cols;
          const surroundingY = randomY + rows;
          if (
            0 <= surroundingX &&
            0 <= surroundingY &&
            surroundingX < width &&
            surroundingY < height
          ) {
            cells[surroundingX][surroundingY].surroundingMines++;
          }
        }
      }
    }
  }
  return cells;
};

export const openCell = (
  cells: CellState[][],
  width: number,
  height: number,
  currentX: number,
  currentY: number
): CellState[][] => {
  if (cells[currentX][currentY].isOpened === false) {
    cells[currentX][currentY].isOpened = true;
    cells[currentX][currentY].isFlagged = false;
  }

  if (
    cells[currentX][currentY].surroundingMines === 0 &&
    cells[currentX][currentY].hasMine === false
  ) {
    for (let cols = -1; cols <= 1; cols++) {
      for (let rows = -1; rows <= 1; rows++) {
        const surroundingX = currentX + cols;
        const surroundingY = currentY + rows;
        if (
          0 <= surroundingX &&
          0 <= surroundingY &&
          surroundingX < width &&
          surroundingY < height &&
          cells[surroundingX][surroundingY].isOpened === false
        ) {
          cells[surroundingX][surroundingY].isOpened = true;
          cells[surroundingX][surroundingY].isFlagged = false;

          if (
            cells[surroundingX][surroundingY].surroundingMines === 0 &&
            cells[surroundingX][surroundingY].hasMine === false
          ) {
            openCell(cells, width, height, surroundingX, surroundingY);
          }
        }
      }
    }
  } else {
    return cells;
  }

  return cells;
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
