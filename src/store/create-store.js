import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import { profileReducer } from "./profile";
import { conversationReducer } from "./conversations";
import { messagesReducer } from "./messages";
import { botSendMessage } from "./middlewares";

export const store = createStore(
  combineReducers({
    profile: profileReducer,
    conversations: conversationReducer,
    messages: messagesReducer,
  }),
  compose(
    applyMiddleware(botSendMessage),
    window.__REDUX_DEVTOOLS_EXTENSION__
      ? window.__REDUX_DEVTOOLS_EXTENSION__()
      : (args) => args
  )
);
