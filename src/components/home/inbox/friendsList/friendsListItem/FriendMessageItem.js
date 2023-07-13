import React from "react";
import styles from "./FriendMessageItem.module.scss";
import { useNavigate } from "react-router-dom";

function FriendMessageItem({ chat }) {
  const navigate = useNavigate();
  const handleChatClick = (e) => {
    navigate(`${chat.chatId}`);
  };
  return (
    <div
      className={styles.container}
      id={chat?.userId}
      onClick={handleChatClick}
    >
      <div className={styles.friend_message_wrapper}>
        <div className={styles.img_wrapper}>
          <img src="/images/reels_active.png" alt="reels" />
        </div>
        <div className={styles.friend_info_wrapper}>
          <p id={styles.fullNameP}>{chat?.userName}</p>
          <p id={styles.lastMessageP}>{chat?.lastMessage || "No messages"}</p>
        </div>
      </div>
    </div>
  );
}

export default FriendMessageItem;
