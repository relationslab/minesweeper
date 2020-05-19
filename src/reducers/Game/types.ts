export const ActionTypes = {
  GAME_START: "minesweeper/game/GAME_START",
  GAME_CLEAR: "minesweeper/game/GAME_CLEAR",
  GAME_OVER: "minesweeper/game/GAME_OVER",
  GAME_RETRY: "minesweeper/game/GAME_RETRY",
  START_TIME: "minesweeper/game/START_TIME",
} as const;

export type GameState = {
  isStarted: boolean;
  isClearded: boolean;
  isEnded: boolean;
  time: number;
};

type GameStartAction = {
  type: typeof ActionTypes.GAME_START;
};

type GameClearAction = {
  type: typeof ActionTypes.GAME_CLEAR;
};

type GameOverAction = {
  type: typeof ActionTypes.GAME_OVER;
};

type GameRetryAction = {
  type: typeof ActionTypes.GAME_RETRY;
};

type StartTimeAction = {
  type: typeof ActionTypes.START_TIME;
};

export type GameActionTypes =
  | GameStartAction
  | GameClearAction
  | GameOverAction
  | GameRetryAction
  | StartTimeAction;
