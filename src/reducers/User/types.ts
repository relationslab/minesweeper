export const ActionTypes = {
  SET_USER_NAME: "minesweeper/user/SET_USER_NAME",
} as const;

export type UserState = {
  name: string;
};

type SetUserName = {
  type: typeof ActionTypes.SET_USER_NAME;
  payload: {
    name: string;
  };
};

export type UserActionTypes = SetUserName;
