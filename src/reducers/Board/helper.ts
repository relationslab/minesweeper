import _ from "lodash";
import { CellState, BoardState } from "./types";

export const createBoard = (width: number, height: number): CellState[][] => {
  const newCells: CellState[][] = [];

  for (let i = 0; i < width; i++) {
    newCells.push([]);
    for (let j = 0; j < height; j++) {
      newCells[i].push({
        isOpened: false,
        isFlagged: false,
        hasMine: false,
        surroundingMines: 0,
      });
    }
  }

  //mineとsurroundingMinesをいれる
  const mines = 5;

  if (width * height < mines) {
    return newCells;
  }

  for (let i = 0; i < mines; i++) {
    const randomX = Math.floor(Math.random() * width);
    const randomY = Math.floor(Math.random() * height);
    if (newCells[randomX][randomY].hasMine === true) {
      i--;
      continue;
    } else {
      newCells[randomX][randomY].hasMine = true;
      for (let cols = -1; cols <= 1; cols++) {
        for (let rows = -1; rows <= 1; rows++) {
          const surroundingX = randomX + cols;
          const surroundingY = randomY + rows;
          if (isInsideBoard(surroundingX, surroundingY, width, height)) {
            newCells[surroundingX][surroundingY].surroundingMines++;
          }
        }
      }
    }
  }
  return newCells;
};

//x座標とy座標が負の数じゃないか返す
const isInsideBoard = (
  x: number,
  y: number,
  width: number,
  height: number
): boolean => {
  if (0 <= x && 0 <= y && x < width && y < height) {
    return true;
  } else {
    return false;
  }
};

export const openCell = (
  cells: CellState[][],
  width: number,
  height: number,
  currentX: number,
  currentY: number
): CellState[][] => {
  const currentCells: CellState[][] = [];
  cells.forEach((cellArray) => {
    const newCells: CellState[] = [];
    cellArray.forEach((cell: CellState) => newCells.push(cell));
    currentCells.push(newCells);
  });

  if (
    currentCells[currentX][currentY].isOpened === false &&
    currentCells[currentX][currentY].isFlagged === false
  ) {
    currentCells[currentX][currentY].isOpened = true;
    currentCells[currentX][currentY].isFlagged = false;
  }

  if (
    currentCells[currentX][currentY].surroundingMines === 0 &&
    currentCells[currentX][currentY].hasMine === false
  ) {
    for (let cols = -1; cols <= 1; cols++) {
      for (let rows = -1; rows <= 1; rows++) {
        const surroundingX = currentX + cols;
        const surroundingY = currentY + rows;
        if (
          isInsideBoard(surroundingX, surroundingY, width, height) &&
          currentCells[surroundingX][surroundingY].isOpened === false
        ) {
          currentCells[surroundingX][surroundingY].isOpened = true;
          currentCells[surroundingX][surroundingY].isFlagged = false;

          if (
            currentCells[surroundingX][surroundingY].surroundingMines === 0 &&
            currentCells[surroundingX][surroundingY].hasMine === false
          ) {
            openCell(currentCells, width, height, surroundingX, surroundingY);
          }
        }
      }
    }
  }
  return currentCells;
};

export const toggleFlag = (
  state: BoardState,
  x: number,
  y: number
): CellState[][] => {
  const newCells = _.cloneDeep(state.cells);
  if (newCells[x][y].isOpened === true) {
    return newCells;
  } else {
    newCells[x][y].isFlagged = !newCells[x][y].isFlagged;
  }
  return newCells;
};
