import { TOGLE_VISIBLE_PROFILE, UPDATE_PROFILE } from "./types";

const initialState = {
  firstName: "",
  lastName: "",
  isVisibleProfile: true,
  role: "admin",
  phone: "",
};

export const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGLE_VISIBLE_PROFILE: {
      return { ...state, isVisibleProfile: !state.isVisibleProfile };
    }
    case UPDATE_PROFILE: {
      return {
        ...state,
        ...action.payload,
      };
    }
    default:
      return state;
  }
};