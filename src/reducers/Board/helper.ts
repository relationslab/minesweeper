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
        isOpened: true,
        isFlagged: false,
        hasMine: false,
        surroundingMines: 0,
      });
    }
  }

  //mineとsurroundingMinesをいれる
  const mines = 10;

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

const getBoardSize = (
  boardSize: number,
  currentCellNumber: number,
  nearCellNumber: number
) => {
  if (currentCellNumber + nearCellNumber <= 0) {
    return 0;
  } else if (boardSize <= currentCellNumber + nearCellNumber) {
    return boardSize - 1;
  } else {
    return currentCellNumber + nearCellNumber;
  }
};

export const openCell = (
  state: BoardState,
  { payload }: OpenCellAction
): CellState[][] => {
  const y = payload.y;
  const x = payload.x;
  const { width, height } = state;
  const newCells = [...state.cells];

  if (
    newCells[y][x].surroundingMines === 0 &&
    newCells[y][x].hasMine === false
  ) {
    for (let rows = -1; rows <= 1; rows++) {
      for (let cols = -1; cols <= 1; cols++) {
        if (
          newCells[getBoardSize(height, y, rows)][getBoardSize(width, x, cols)]
            .hasMine === false
        ) {
          newCells[getBoardSize(height, y, rows)][
            getBoardSize(width, x, cols)
          ].isOpened = true;
          newCells[getBoardSize(height, y, rows)][
            getBoardSize(width, x, cols)
          ].isFlagged = false;
        }
      }
    }
  } else {
    newCells[y][x].isOpened = true;
    newCells[y][x].isFlagged = false;
  }
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
