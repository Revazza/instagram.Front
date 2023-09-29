import React, { useEffect, useState } from "react";
import styles from "../components/home/inbox/Inbox.module.scss";
import { Outlet, useParams } from "react-router-dom";
import { FriendMessageListWrapper } from "../components/home/inbox/friendsList/FriendsMessageList";
import useAuthRedirerct from "../hooks/useAuthRedirerct";
import ChatHubConnector from "../store/hubs/ChatHubConnector";
import LoadingScreen from "../components/UI/loading/LoadingScreen";
import { useDispatch } from "react-redux";
import {
  UPDATE_CHAT_LAST_MESSAGE_STATUS,
  insertNewChat,
  updateChatLastMessageStatus,
  updateChatsOnMessageReceive,
} from "../store/actions/chatActions";
import {
  addMessageToChat,
  updateChatMessagesStatus,
} from "../store/actions/chatWithMessagesActions";

function Inbox() {
  useAuthRedirerct();
  const [isLoading, setIsLoading] = useState(true);
  const dispatch = useDispatch();

  const handleMessageReceived = (message) => {
    dispatch(addMessageToChat(message));
    dispatch(updateChatsOnMessageReceive(message));
  };
  const handleChatMessagesStatusUpdate = (response) => {
    dispatch(updateChatLastMessageStatus(response));
    dispatch(updateChatMessagesStatus(response));
  };
  const handleNewChatAdd = (chat) =>{
    console.log("i am here")
    dispatch(insertNewChat(chat));
    dispatch(addMessageToChat(chat.chatMessages.at(-1)));
  }

  const getChatHubConnection = (connection) => {
    setIsLoading(false);
    if (!connection) {
      return;
    }
    connection?.on("AddNewChat",handleNewChatAdd)
    connection?.on("UpdateChat", handleMessageReceived);
    connection?.on("UpdateChatMessagesStatus", handleChatMessagesStatusUpdate);
  };

  if (isLoading) {
    const connector = ChatHubConnector.createConnection(getChatHubConnection);
  }

  return (
    <div className={styles.container}>
      {isLoading && <LoadingScreen />}
      {!isLoading && (
        <React.Fragment>
          <FriendMessageListWrapper />
          <Outlet />
        </React.Fragment>
      )}
    </div>
  );
}

export default Inbox;
