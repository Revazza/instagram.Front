import React, { useEffect, useState } from "react";
import styles from "./Chat.module.scss";
import { useParams } from "react-router-dom";
import ChatMessages from "./chatMessages/ChatMessages";
import SendMessageBar from "./sendMessageBar/SendMessageBar";
import { api } from "../../../../../Api";
import ChatHubConnector from "../../../../../store/hubs/ChatHubConnector";
import LoadingScreen from "../../../../UI/loading/LoadingScreen";
import { useDispatch, useSelector } from "react-redux";
import {
  addChatWithMessages,
  setActiveChat,
} from "../../../../../store/actions/chatWithMessagesActions";

function Chat() {
  const [isLoading, setIsLoading] = useState(false);
  const { id } = useParams();

  const connector = ChatHubConnector.getInstance();
  const dispatch = useDispatch();

  const chat = useSelector((state) =>
    state.chatsWithMessages.chats.find((c) => c.id === id)
  );

  useEffect(() => {
    if (!id) {
      return;
    }
    if (chat) {
      dispatch(setActiveChat(chat));
      return;
    }

    setIsLoading(true);
    api
      .get(`/Chat/GetChatWithMessages?chatId=${id}`)
      .then((res) => {
        const chat = res.data.payload;
        dispatch(setActiveChat(chat));
        dispatch(addChatWithMessages(chat));
      })
      .catch((err) => console.log("error: ", err))
      .finally(() => setIsLoading(false));
  }, [id]);

  const showChat = !isLoading && chat;

  return (
    <div className={styles.container}>
      {isLoading && <LoadingScreen height={70} width={70} />}
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
            <ChatMessages chat={chat} chatId={chat.id} />
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
