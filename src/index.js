import React from "react";
import ReactDOM from "react-dom";
import { PersistGate } from "redux-persist/integration/react";
import { Provider } from "react-redux";
import { ThemeProvider, createTheme } from "@mui/material";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ChatPage, ProfilePage, Gists } from "./pages";
import { Header } from "./components";
import "./global.css";
import { store, persistor } from "./store";

const theme = createTheme({});

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <ThemeProvider theme={theme}>
          <BrowserRouter>
            <Header />
            <Routes>
              <Route path="/" element={<h2>Home page</h2>} />
              <Route path="/chat/*" element={<ChatPage />} />
              <Route path="/profile" element={<ProfilePage />} />
              <Route path="/gists" element={<Gists />} />
            </Routes>
          </BrowserRouter>
        </ThemeProvider>
      </PersistGate>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
