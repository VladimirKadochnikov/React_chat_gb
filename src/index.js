import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import { PersistGate } from "redux-persist/integration/react";
import { Provider } from "react-redux";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ChatPage, ProfilePage, Gists, LoginPage, SignUpPage } from "./pages";
import { Header, PublicRoute, PrivateRoute } from "./components";
import "./global.css";
import { store, persistor } from "./store";
import { firebaseApp } from "./api/firebase";

const App = () => {
  const [session, setSession] = useState(null);

  useEffect(() => {
    firebaseApp.auth().onAuthStateChanged((user) => {
      if (user) {
        setSession(user);
      } else {
        setSession(null);
      }
    });
  }, []);

  const isAuth = session?.email;

  return (
    <React.StrictMode>
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <BrowserRouter>
            <Header session={session} />

            <Routes>
              <Route path="/" element={<h1>Home Page</h1>} />
              <Route
                path="/chat/*"
                element={
                  <PrivateRoute isAuth={isAuth} to="/login">
                    <ChatPage />
                  </PrivateRoute>
                }
              />
              <Route
                path="/profile"
                element={
                  <PrivateRoute isAuth={isAuth}>
                    <ProfilePage />
                  </PrivateRoute>
                }
              />
              <Route
                path="/gists"
                element={
                  <PrivateRoute isAuth={isAuth}>
                    <Gists />
                  </PrivateRoute>
                }
              />
              <Route
                path="/login"
                element={
                  <PublicRoute isAuth={isAuth}>
                    <LoginPage />
                  </PublicRoute>
                }
              />
              <Route
                path="/sign-up"
                element={
                  <PublicRoute isAuth={isAuth}>
                    <SignUpPage />
                  </PublicRoute>
                }
              />
            </Routes>
          </BrowserRouter>
        </PersistGate>
      </Provider>
    </React.StrictMode>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
