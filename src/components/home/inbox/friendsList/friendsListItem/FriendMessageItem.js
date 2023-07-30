import React, { useEffect, useState } from "react";
import styles from "./FriendMessageItem.module.scss";
import { useNavigate } from "react-router-dom";
import { convertDateTimeToHumanReadable } from "../../../../../helperFunctions/helperFunctions";

function FriendMessageItem({ currentUserId, chat }) {
  const navigate = useNavigate();
  const handleChatClick = (e) => {
    navigate(`${chat.chatId}`);
  };
  const [timeDifference, setTimeDifference] = useState(
    convertDateTimeToHumanReadable(chat?.lastActivityAt)
  );

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeDifference(convertDateTimeToHumanReadable(chat?.lastActivityAt));
    }, 1000);

    return () => clearInterval(timer);
  }, [chat?.lastActivityAt]);

  const isCurrentUserLastMessageAuthor =
    chat?.lastMessageAuthorId === currentUserId;

  return (
    <div className={styles.container} onClick={handleChatClick}>
      <div className={styles.friend_message_wrapper}>
        <div className={styles.img_wrapper}>
          <img src="/images/reels_active.png" alt="reels" />
        </div>
        <div className={styles.friend_info_wrapper}>
          <p id={styles.fullNameP}>{chat?.chatName}</p>
          <p id={styles.lastMessageP}>
            {isCurrentUserLastMessageAuthor && "You: "}
            {chat?.lastMessage || "No messages"}
            {timeDifference}
          </p>
        </div>
      </div>
    </div>
  );
}

export default FriendMessageItem;
