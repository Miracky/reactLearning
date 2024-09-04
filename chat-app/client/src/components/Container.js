import { useEffect } from "react";
import ChatList from "./ChatList";
import ChatForm from "./ChatForm";
import { init, subscribeChat, subscribeInitialMessages } from "../socketApi";
import Button from "./Button";
import { useTheme } from "../context/ThemeContext";

import { useChat } from "../context/ChatContext";

function Container() {
  const { theme } = useTheme();

  const { setMessages } = useChat();

  useEffect(() => {
    init();

    subscribeInitialMessages((messages) => setMessages(messages));

    subscribeChat((message) => {
      setMessages((prevState) => [...prevState, { message }]);
    });
  });

  return (
    <div className={`app ${theme}`}>
      <Button />
      <ChatList />
      <ChatForm />
    </div>
  );
}

export default Container;
