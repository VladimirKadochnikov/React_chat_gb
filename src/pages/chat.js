import { Routes, Route } from "react-router-dom";
import { Layout, MessageList, ChatList } from "../components";

export const ChatPage = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <Layout chats={<ChatList />} messages={<h3>Select chat...</h3>} />
        }
      />
      <Route
        path="/:roomId"
        element={<Layout chats={<ChatList />} messages={<MessageList />} />}
      />
    </Routes>
  );
};
