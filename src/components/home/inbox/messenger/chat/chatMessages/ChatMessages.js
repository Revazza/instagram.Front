import React, { useEffect, useRef, useState } from "react";
import styles from "./ChatMessages.module.scss";
import UserProfile from "../../../../../UI/userProfile/UserProfile";
import MessageItem from "./messageItem/MessageItem";

function ChatMessages({ connection, chat }) {
  const [messages, setMessages] = useState([]);
  const [participant, setParticipant] = useState();

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
    setMessages(chat.chatMessages);
  }, [chat]);

  useEffect(() => {
    if (!connection) {
      return;
    }
    connection.on("ReceiveMessage", handleMessageReceived);
  }, [connection]);

  const handleMessageReceived = (message) => {
    setMessages((prevMessages) => [...prevMessages, message]);
  };

  const showParticipantProfile = messages.length === 0;

  console.log(messages);
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
        {messages
          .slice(0)
          .reverse()
          .map((msg, index) => {
            return (
              <MessageItem
                key={msg.messageId}
                participantId={participant?.id}
                msg={msg}
                ref={index === messages.length - 1 ? lastMessageRef : null}
              />
            );
          })}
      </div>
    </div>
  );
}

export default ChatMessages;
