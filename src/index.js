import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import "./index.css";

const MessageComponent = ({ messageList = [] }) => {
  return messageList.map((message) => (
    <div className="message">
      <h2 className="name">{message.author}</h2>
      <p className="text">{message.message}</p>
    </div>
  ));
};

const App = () => {
  const [messageList, setMessageList] = useState([]);
  const [name, setName] = useState("");
  const [text, setText] = useState("");

  useEffect(() => {
    const lastMess = messageList[messageList.length - 1];
    if (messageList.length && lastMess.author !== "Bot") {
      setMessageList([...messageList, { author: "Bot", message: `Hello` }]);
    }
  }, [messageList]);

  const addMessage = () => {
    if (name !== "" && text !== "") {
      setMessageList([...messageList, { author: name, message: text }]);
      setName("");
      setText("");
    }
  };

  const handleName = (event) => {
    setName(event.target.value);
  };
  const handleText = (event) => {
    setText(event.target.value);
  };

  return (
    <div>
      <h1 className="test-header">Сообщения пользователей:</h1>
      <form action="#" className="form">
        <input
          className="form-name"
          placeholder="Ваше имя"
          onChange={handleName}
          value={name}
        />
        <input
          className="form-text"
          placeholder="Сообщение"
          onChange={handleText}
          value={text}
        />
        <button className="form-button" onClick={addMessage}>
          Отправить
        </button>
      </form>
      <MessageComponent messageList={messageList} />
    </div>
  );
};

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
