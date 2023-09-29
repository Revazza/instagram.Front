import React, { useEffect, useState } from "react";
import styles from "./FriendMessageItem.module.scss";
import { useNavigate } from "react-router-dom";
import { convertDateTimeToHumanReadable } from "../../../../../helperFunctions/helperFunctions";
import StoryProfile from "../../../../UI/storyProfile/StoryProfile";

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
    chat?.lastMessage?.senderId === currentUserId;

  const isLastMessageSeen =
    isCurrentUserLastMessageAuthor ||
    (!isCurrentUserLastMessageAuthor && chat?.lastMessage?.status === "Seen");

  const participant = chat?.participants?.find(p => p.id !== currentUserId);
  const chatName = chat?.chatName?.length === 0 ? participant?.fullName : chat?.chatName;

  return (
    <div className={styles.container}>
      <div className={styles.friend_message_wrapper}>
        <StoryProfile />
        <div
          className={styles.friend_info_wrapper}
          id={!isLastMessageSeen ? styles.chatNotSeen : ""}
          onClick={handleChatClick}
        >
          <p id={styles.fullNameP}>{chatName}</p>
          <p id={styles.lastMessageP}>
            {isCurrentUserLastMessageAuthor && "You: "}
            {chat?.lastMessage?.messageText || "No messages"}
            {timeDifference}
          </p>
        </div>
      </div>
    </div>
  );
}

export default FriendMessageItem;
