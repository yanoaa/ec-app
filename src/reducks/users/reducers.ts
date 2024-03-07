import { Action } from "./types";
import * as Actions from "./actions";
import initialState from "./store/initialState";

export const UsersReducers = (state = initialState.users, action: Action) => {
  switch (action.type) {
    case Actions.SIGN_IN:
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
};
