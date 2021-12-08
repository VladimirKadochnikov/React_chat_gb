import React, { useState, useEffect, useRef, useCallback } from "react";
import { useParams } from "react-router-dom";
import { Message } from "./message";
import { makeStyles } from "@mui/styles";
import { Input, InputAdornment } from "@mui/material";
import { Send } from "@mui/icons-material";
import { useSelector, useDispatch } from "react-redux";
import { messagesSelector, sendMessage } from "../../store/messages";
import styles from "./message-list.module.css";

export const useStyles = makeStyles(() => {});

export const MessageList = () => {
  const { roomId } = useParams();
  const messages = useSelector(messagesSelector(roomId));
  const [text, setText] = useState("");
  const ref = useRef(null);
  const refScroll = useRef(null);

  const dispatch = useDispatch(sendMessage);

  const addMessage = useCallback(
    (author = "User", botMessage) => {
      if (text || botMessage) {
        dispatch(sendMessage({ author, message: text || botMessage }, roomId));
        setText("");
      }
    },
    [text, roomId, dispatch]
  );

  // useEffect(() => {
  //   const lastMess = messages[messages.length - 1];
  //   let timerId = null;
  //   if (messages.length && lastMess.author !== "Bot") {
  //     timerId = setTimeout(() => {
  //       addMessage("Bot", `Hello ${lastMess.author}`);
  //     }, 500);
  //   }
  //   return () => clearInterval(timerId);
  // }, [messages, roomId, addMessage]);

  useEffect(() => {
    ref.current?.focus();
  }, []);

  useEffect(() => {
    if (refScroll.current) {
      refScroll.current.scrollTo(0, refScroll.current.scrollHeight);
    }
  }, [messages]);

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
      <div ref={refScroll} className={styles.message_list}>
        {messages.map((message, index) => (
          <Message message={message} key={index} />
        ))}
      </div>
      <Input
        fullWidth
        ref={ref}
        className={styles.input_message}
        placeholder="Enter message"
        onChange={handleText}
        onKeyPress={handlePressInput}
        value={text}
        endAdornment={
          <InputAdornment position="end">
            <Send className={styles.input_icon} onClick={addMessage} />
          </InputAdornment>
        }
      />
    </>
  );
};
