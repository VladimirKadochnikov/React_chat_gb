import { CREATE_CONVERSATION } from "./types";
import { DELETE_CONVERSATION } from "../types";

const initialState = {
  conversations: ["chat 1", "chat 2", "chat 3"],
};

export const conversationReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_CONVERSATION:
      return {
        ...state,
        conversations: [...state.conversations, action.payload],
      };
    case DELETE_CONVERSATION:
      return {
        ...state,
        conversations: state.conversations.filter(
          (conversation) => conversation !== action.payload
        ),
      };
    default:
      return state;
  }
};
