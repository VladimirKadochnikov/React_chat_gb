import React, { useState, useEffect, useRef } from "react";
import { useParams } from "react-router-dom";
import { Message } from "./message";
import { makeStyles } from "@mui/styles";
import { Input, InputAdornment } from "@mui/material";
import { Send } from "@mui/icons-material";
import styles from "./message-list.module.css";

export const useStyles = makeStyles(() => {});

export const MessageList = () => {
  const { roomId } = useParams();
  const [messageList, setMessageList] = useState({});
  const [text, setText] = useState("");
  const ref = useRef(null);
  const refScroll = useRef(null);

  useEffect(() => {
    const roomMessages = messageList[roomId] ?? [];
    const lastMess = roomMessages[roomMessages.length - 1];

    let timerId = null;

    if (roomMessages.length && lastMess.author !== "Bot") {
      timerId = setTimeout(() => {
        setMessageList({
          ...messageList,
          [roomId]: [
            ...(messageList[roomId] ?? []),
            {
              author: "Bot",
              message: `Hello ${lastMess.author}`,
              date: new Date(),
            },
          ],
        });
      }, 500);
    }

    return () => clearInterval(timerId);
  }, [messageList, roomId]);

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
      setMessageList({
        ...messageList,
        [roomId]: [
          ...(messageList[roomId] ?? []),
          { author: "User", message: text, date: new Date() },
        ],
      });
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

  const roomMessages = messageList[roomId] ?? [];

  return (
    <>
      <div ref={refScroll} className={styles.message_list}>
        {roomMessages.map((message, index) => (
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
