import { Link, useParams } from "react-router-dom";
import { List } from "@mui/material";
import { useSelector } from "react-redux";
import { conversationsSelector } from "../../store/conversations";
import { Chat } from "./chat";

export const ChatList = () => {
  const { roomId } = useParams();
  const conversations = useSelector(conversationsSelector);

  return (
    <List component="nav">
      {conversations.map((chat) => (
        <Link key={chat} to={`/chat/${chat}`}>
          <Chat title={chat} selected={chat === roomId} />
        </Link>
      ))}
    </List>
  );
};
