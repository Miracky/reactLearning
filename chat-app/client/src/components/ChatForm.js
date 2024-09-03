import styles from "./styles.module.css";
import { useState } from "react";
import { sendMessage } from "../socketApi";
import { useChat } from "../context/ChatContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function ChatForm() {
  const [message, setMessage] = useState("");

  const { setMessages } = useChat();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(message);
    setMessages((prevState) => [...prevState, { message, fromMe: true }]);
    sendMessage(message);
    setMessage("");
  };

  return (
    <div>
      <form onSubmit={handleSubmit} style={{ display: "flex" }}>
        <input
          className={styles.textInput}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Messsage"
        />
        
      </form>
      <FontAwesomeIcon icon="fa-solid fa-share" />
    </div>
  );
}

export default ChatForm;
