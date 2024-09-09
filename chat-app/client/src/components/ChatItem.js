import React from 'react'
import styles from './styles.module.css'
import { useTheme } from "../context/ThemeContext";


function ChatItem({item}) {
  const { theme } = useTheme()

  return (
    <div className={`${styles.chatItem} ${styles[theme]} ${item.fromMe ? styles.right : ''}`}>
      {item.message}
    </div>
  )
}

export default ChatItem
