import React, { useEffect, useState } from "react";
import styles from "./Chat.module.scss";
import { useParams } from "react-router-dom";
import ChatMessages from "./chatMessages/ChatMessages";
import SendMessageBar from "./sendMessageBar/SendMessageBar";
import { api } from "../../../../../Api";


function Chat() {
  console.log("chat is running");
  const [chat, setChat] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    if (!id) {
      return;
    }
    setIsLoading(true);
    api
      .get(`/Chat/GetChatWithMessages?chatId=${id}`)
      .then((res) => {
        const chat = res.data.payload;
        setChat(chat);
      })
      .catch((err) => console.log("error: ", err))
      .finally(() => setIsLoading(false));
  }, [id]);

  const showChat = !isLoading && chat;

  return (
    <div className={styles.container}>
      {isLoading && (
        <div className={styles.loading_wrapper}>
          <img
            className={styles.loading_gif}
            src="/images/loading.gif"
            alt="loading"
          />
        </div>
      )}
      {showChat && (
        <React.Fragment>
          <div className={styles.header}>
            <div className={styles.profile}>
              <div className={styles.img_wrapper}>
                <img src="/images/reels_active.png" alt="profile" />
              </div>
              <p className={styles.userName}>{chat?.participant?.userName}</p>
            </div>
          </div>
          <div className={styles.chat_messages}>
            <ChatMessages chat={chat} />
          </div>
          <div className={styles.send_message_bar}>
            <SendMessageBar chat={chat} />
          </div>
        </React.Fragment>
      )}
    </div>
  );
}

export default Chat;
