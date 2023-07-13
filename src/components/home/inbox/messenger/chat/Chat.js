import React, { useEffect, useState } from "react";
import styles from "./Chat.module.scss";
import { useParams } from "react-router-dom";
import ChatMessages from "./chatMessages/ChatMessages";
import SendMessageBar from "./sendMessageBar/SendMessageBar";
import { HubConnectionBuilder, LogLevel } from "@microsoft/signalr";
import { CHAT_HUB_URL, api } from "../../../../../Api";

function Chat() {
  const [connection, setConnection] = useState(null);
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
      .then((res) => setChat(res.data.payload))
      .catch((err) => console.log("error: ", err))
      .finally(() => setIsLoading(false));
  }, [id]);

  useEffect(() => {
    const connect = new HubConnectionBuilder()
      .withUrl(CHAT_HUB_URL)
      .configureLogging(LogLevel.Information)
      .withAutomaticReconnect()
      .build();

    setConnection(connect);
  }, []);

  useEffect(() => {
    if (!connection) {
      return;
    }
    connection.start().then(() => {
      connection.invoke("JoinChat", id);
    });
  }, [connection]);

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
            <ChatMessages connection={connection} chat={chat} />
          </div>
          <div className={styles.send_message_bar}>
            <SendMessageBar connection={connection} />
          </div>
        </React.Fragment>
      )}
    </div>
  );
}

export default Chat;
