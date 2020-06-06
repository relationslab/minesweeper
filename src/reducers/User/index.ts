import { ActionTypes, UserActionTypes, UserState } from "./types";
import { initialUserState } from "../../config";

const initialState: UserState = initialUserState;

const reducer = (state = initialState, action: UserActionTypes) => {
  switch (action.type) {
    case ActionTypes.SET_USER_NAME:
      return {
        ...state,
        uid: action.payload.uid,
        name: action.payload.name,
      };
    default:
      return state;
  }
};

export const userSetNameAction = (uid: string, name: string | null) => {
  return {
    type: ActionTypes.SET_USER_NAME,
    payload: {
      uid,
      name,
    },
  };
};

export default reducer;
