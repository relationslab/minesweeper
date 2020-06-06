import { GameState } from "./reducers/Game/types";
import { Level } from "./reducers/Board/types";
import { UserState } from "./reducers/User/types";

export type Record = {
  uid: string;
  rank: number;
  level: string;
  name: string;
  time: number;
  createdAt: string;
};

export const initialUserState: UserState = {
  uid: "",
  name: "",
};

export const initialGameState: GameState = {
  isStarted: false,
  isClearded: false,
  isEnded: false,
  isSounded: false,
  time: 0,
  timeHistory: 0,
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
