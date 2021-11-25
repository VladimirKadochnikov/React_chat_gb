import React, { useState, useEffect, useRef } from "react";
import { Message } from "./message";
import { makeStyles } from "@mui/styles";
import { Input, InputAdornment } from "@mui/material";
import { Send } from "@mui/icons-material";
import styles from "./message-list.module.css";

export const useStyles = makeStyles(() => {});

export const MessageList = () => {
  const [messageList, setMessageList] = useState([]);
  const [text, setText] = useState("");
  const ref = useRef(null);
  const refScroll = useRef(null);

  useEffect(() => {
    const lastMess = messageList[messageList.length - 1];
    let timerId = null;

    if (messageList.length && lastMess.author !== "Bot") {
      timerId = setTimeout(() => {
        setMessageList([
          ...messageList,
          {
            author: "Bot",
            message: `Hello ${lastMess.author}`,
            date: new Date(),
          },
        ]);
      }, 500);
    }

    return () => clearInterval(timerId);
  }, [messageList]);

  useEffect(() => {
    ref.current?.focus();
  }, []);

  useEffect(() => {
    if (refScroll.current) {
      refScroll.current.scrollTo(0, refScroll.current.scrollHeight);
    }
  }, [messageList]);

  const addMessage = () => {
    if (text !== "") {
      setMessageList([
        ...messageList,
        { author: "User", message: text, date: new Date() },
      ]);
      setText("");
    }
  };

  const handleText = (event) => {
    setText(event.target.value);
  };

  const handlePressInput = ({ code }) => {
    if (code === "Enter") {
      addMessage();
    }
  };

  return (
    <>
      <div ref={refScroll}>
        {messageList.map((message, index) => (
          <Message message={message} key={index} />
        ))}
      </div>
      <Input
        fullWidth
        ref={ref}
        className={styles.form_text}
        placeholder="Enter message"
        onChange={handleText}
        onKeyPress={handlePressInput}
        value={text}
        endAdornment={
          <InputAdornment position="end">
            <Send onClick={addMessage} />
          </InputAdornment>
        }
      />
    </>
  );
};
