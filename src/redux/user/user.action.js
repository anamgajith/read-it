import { UserActionTypes } from "./user.types";

export const setCurrentUser = user => ({
  type: UserActionTypes.SET_CURRENT_USER,
  payload: user
});

export const setUserName = name => ({
  type: UserActionTypes.SET_USER_NAME,
  payload: name
});
