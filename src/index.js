import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

const MessageComponent = (props) => {
  return (
    <div>
      <h2 className="test-message">{props.message}</h2>
    </div>
  );
};

const App = () => {
  return (
    <div>
      <h1 className="test-header">Вывод на экран:</h1>
      <MessageComponent message="Тестовое сообщение" />
    </div>
  );
};

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
