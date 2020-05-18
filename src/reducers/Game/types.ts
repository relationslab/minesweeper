export const ActionTypes = {
  GAME_START: "minesweeper/game/GAME_START",
  GAME_CLEAR: "minesweeper/game/GAME_CLEAR",
  GAME_OVER: "minesweeper/game/GAME_OVER",
} as const;

export type GameState = {
  isStarted: boolean;
  isClearded: boolean;
  isEnded: boolean;
};

export type GameStartAction = {
  type: typeof ActionTypes.GAME_START;
};

export type GameClearAction = {
  type: typeof ActionTypes.GAME_CLEAR;
};

export type GameOverAction = {
  type: typeof ActionTypes.GAME_OVER;
};

export type GameActionTypes =
  | GameStartAction
  | GameClearAction
  | GameOverAction;
