import { UserActionTypes } from "./user.types";

const INITIAL_STATE = {
  currentUser: null
};

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case UserActionTypes.SET_CURRENT_USER:
      return {
        ...state,
        currentUser: action.payload
      };

    case UserActionTypes.SET_USER_NAME:
      return state.currentUser
        ? {
            ...state,
            currentUser: {
              ...state.currentUser,
              displayName: action.payload
            }
          }
        : state;

    default:
      return state;
  }
};

export default userReducer;
