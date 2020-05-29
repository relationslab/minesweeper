import { GameState } from "./reducers/Game/types";
import { Level } from "./reducers/Board/types";
import { UserState } from "./reducers/User/types";

export const initialUserState: UserState = {
  name: "",
};

export const initialGameState: GameState = {
  isStarted: false,
  isClearded: false,
  isEnded: false,
  time: 0,
  timeHistory: 0,
};

export type Record = {
  rank?: number;
  name: string;
  time: number;
};

export const level: Level = {
  easy: {
    width: 10,
    height: 8,
    mines: 10,
  },
  medium: {
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

export const cellSize = (boardWidth: number) => {
  return boardWidth === 10
    ? 45
    : boardWidth === 18
    ? 30
    : boardWidth === 24
    ? 25
    : 0;
};
