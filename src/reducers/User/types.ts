export const ActionTypes = {
  SET_USER_NAME: "minesweeper/user/SET_USER_NAME",
} as const;

export type UserState = {
  uid: string;
  name: string | null;
};

type SetUserName = {
  type: typeof ActionTypes.SET_USER_NAME;
  payload: {
    uid: string;
    name: string;
  };
};

export type UserActionTypes = SetUserName;
