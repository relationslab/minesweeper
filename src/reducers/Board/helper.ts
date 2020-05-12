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
  for (let i = 0; i < height; i++) {
    cells.push([]);
    for (let j = 0; j < width; j++) {
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
    const randomY = Math.floor(Math.random() * height);
    const randomX = Math.floor(Math.random() * width);
    if (cells[randomY][randomX].hasMine === true) {
      i--;
      continue;
    } else {
      cells[randomY][randomX].hasMine = true;
      for (let rows = -1; rows <= 1; rows++) {
        for (let cols = -1; cols <= 1; cols++) {
          const surroundingY = randomY + rows;
          const surroundingX = randomX + cols;
          if (
            0 <= surroundingY &&
            0 <= surroundingX &&
            surroundingY < height &&
            surroundingX < width
          ) {
            cells[surroundingY][surroundingX].surroundingMines++;
          }
        }
      }
    }
  }
  return cells;
};

export const openCell = (
  cells: CellState[][],
  height: number,
  width: number,
  currentY: number,
  currentX: number
): CellState[][] => {
  if (cells[currentY][currentX].isOpened === false) {
    cells[currentY][currentX].isOpened = true;
    cells[currentY][currentX].isFlagged = false;
  }

  if (
    cells[currentY][currentX].surroundingMines === 0 &&
    cells[currentY][currentX].hasMine === false
  ) {
    for (let rows = -1; rows <= 1; rows++) {
      for (let cols = -1; cols <= 1; cols++) {
        const surroundingY = currentY + rows;
        const surroundingX = currentX + cols;
        if (
          0 <= surroundingY &&
          0 <= surroundingX &&
          surroundingY < height &&
          surroundingX < width &&
          cells[surroundingY][surroundingX].isOpened === false
        ) {
          cells[surroundingY][surroundingX].isOpened = true;
          cells[surroundingY][surroundingX].isFlagged = false;

          if (
            cells[surroundingY][surroundingX].surroundingMines === 0 &&
            cells[surroundingY][surroundingX].hasMine === false
          ) {
            openCell(cells, height, width, surroundingY, surroundingX);
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
