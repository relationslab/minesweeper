import { ActionTypes, UserActionTypes, UserState } from "./types";
import { initialUserState } from "../../config";

const initialState: UserState = initialUserState;

const reducer = (state = initialState, action: UserActionTypes) => {
  switch (action.type) {
    case ActionTypes.SET_USER_NAME:
      return {
        ...state,
        name: action.payload.name,
      };
    case ActionTypes.SET_IS_START:
      return {
        ...state,
        isStart: true,
      };
    default:
      return state;
  }
};

export const userSetNameAction = (name: string) => {
  return {
    type: ActionTypes.SET_USER_NAME,
    payload: {
      name,
    },
  };
};

export const userSetIsStartAction = () => {
  return {
    type: ActionTypes.SET_IS_START,
  };
};

export default reducer;
