import styles from "./styles.module.css";
import { useChat } from "../context/ChatContext";
import ChatItem from "./ChatItem";
import ScrollableFeed from 'react-scrollable-feed'
import { useTheme } from "../context/ThemeContext";

function ChatList() {
  const { messages } = useChat();
  const { theme } = useTheme()

  return (
    <div className={`${styles.chatlist} ${styles[theme]} `}>
      <ScrollableFeed forceScroll={true} >
        {messages.map((item, key) => (
          
            <ChatItem item={item}/>
          
          
        ))}
      </ScrollableFeed>
    </div>
  );
}

export default ChatList;
