export const ActionTypes = {
  SET_USER_NAME: "minesweeper/user/SET_USER_NAME",
  SET_IS_START: "minesweeper/user/SET_IS_START",
} as const;

export type UserState = {
  name: string;
  isStart: boolean;
};

type SetUserName = {
  type: typeof ActionTypes.SET_USER_NAME;
  payload: {
    name: string;
  };
};
type SetIsFirst = {
  type: typeof ActionTypes.SET_IS_START;
};

export type UserActionTypes = SetUserName | SetIsFirst;
