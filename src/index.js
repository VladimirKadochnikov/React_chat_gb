import React from "react";
import ReactDOM from "react-dom";
import { ThemeProvider, createTheme } from "@mui/material";
import { MessageList, ChatList } from "./components";

const theme = createTheme({});

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <ChatList />
      <MessageList />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
