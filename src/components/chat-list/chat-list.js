import { Link, useParams } from "react-router-dom";
import { List } from "@mui/material";
import { AddCircleTwoTone } from "@mui/icons-material";
import { useSelector, useDispatch } from "react-redux";
import {
  conversationsSelector,
  createConversation,
} from "../../store/conversations";
import { Chat } from "./chat";
import styles from "./chat/chat.module.css";

export const ChatList = () => {
  const { roomId } = useParams();
  const conversations = useSelector(conversationsSelector);

  const dispatch = useDispatch();

  const createNewConversation = () => {
    const name = prompt("Enter new chat name");
    const isNameNew = !conversations.includes(name);

    if (name && isNameNew) {
      dispatch(createConversation(name));
    }
  };

  return (
    <List component="nav">
      {conversations.map((chat) => (
        <Link key={chat} to={`/chat/${chat}`}>
          <Chat title={chat} selected={chat === roomId} dispatch={dispatch} />
        </Link>
      ))}
      <AddCircleTwoTone
        className={styles.add}
        onClick={createNewConversation}
      />
    </List>
  );
};
