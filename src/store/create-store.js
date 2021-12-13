import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import storage from "redux-persist/lib/storage";
import { persistStore, persistReducer } from "redux-persist";
import thunk from "redux-thunk";
import { getGistsApi, searchGistsByNameApi } from "../api/gists";
import { profileReducer } from "./profile";
import { conversationReducer } from "./conversations";
import { messagesReducer } from "./messages";
import { gistsReducer } from "./gists";
import { botSendMessage } from "./middlewares";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["profile"],
  blacklist: ["conversations", "messages"],
};

const rootReducer = combineReducers({
  profile: profileReducer,
  conversations: conversationReducer,
  messages: messagesReducer,
  gists: gistsReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = createStore(
  persistedReducer,
  compose(
    applyMiddleware(
      botSendMessage,
      thunk.withExtraArgument({ getGistsApi, searchGistsByNameApi })
    ),
    window.__REDUX_DEVTOOLS_EXTENSION__
      ? window.__REDUX_DEVTOOLS_EXTENSION__()
      : (args) => args
  )
);

export const persistor = persistStore(store);
