import React, { useEffect, useRef, useState } from "react";
import styles from "./ChatMessages.module.scss";
import UserProfile from "../../../../../UI/userProfile/UserProfile";
import MessageItem from "./messageItem/MessageItem";
import ChatHubConnector from "../../../../../../store/hubs/ChatHubConnector";

import { useSelector, useDispatch } from "react-redux";
import { AddMessage } from "../../../../../../store/actions/messageActions";
import { updateChatList } from "../../../../../../store/actions/chatActions";

function ChatMessages({ chat }) {
  const [participant, setParticipant] = useState();

  const messages = useSelector(
    (state) =>
      state.chatMessages.chatMessages.find((cm) => cm.id === chat?.id)
        ?.chatMessages
  );

  const lastMessageRef = useRef(null);

  useEffect(() => {
    if (lastMessageRef.current) {
      lastMessageRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages]);

  useEffect(() => {
    if (!chat) {
      return;
    }

    setParticipant(chat.participant);
  }, [chat]);

  const showParticipantProfile = messages?.length === 0;

  return (
    <div className={styles.container}>
      {showParticipantProfile && (
        <div className={styles.no_messages_container}>
          <UserProfile
            className={styles.profile_wrapper}
            user={{
              userName: participant?.userName,
              fullName: participant?.fullName,
            }}
          >
            <p id={styles.viewProfile}>View Profile</p>
          </UserProfile>
        </div>
      )}
      <div className={styles.messages_container}>
        {messages?.map((msg, index) => {
          return (
            <MessageItem
              key={msg.messageId}
              participantId={participant?.id}
              msg={msg}
              ref={index === 0 ? lastMessageRef : null}
            />
          );
        })}
      </div>
    </div>
  );
}

export default ChatMessages;
