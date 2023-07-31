import React, { useEffect, useState } from "react";
import styles from "../components/home/inbox/Inbox.module.scss";
import { Outlet, useParams } from "react-router-dom";
import { FriendMessageListWrapper } from "../components/home/inbox/friendsList/FriendsMessageList";
import useAuthRedirerct from "../hooks/useAuthRedirerct";
import ChatHubConnector from "../store/hubs/ChatHubConnector";
import LoadingScreen from "../components/UI/loading/LoadingScreen";
import { useDispatch } from "react-redux";
import { AddMessage } from "../store/actions/messageActions";
import { updateChatList } from "../store/actions/chatActions";

function Inbox() {
  useAuthRedirerct();
  const [isLoading, setIsLoading] = useState(true);
  const dispatch = useDispatch();

  const handleMessageReceived = (message) => {
    dispatch(AddMessage(message));
    dispatch(updateChatList(message));
  };
  
  const getChatHubConnection = (connection) => {
    setIsLoading(false);
    if (!connection) {
      return;
    }
    connection?.on("UpdateChat", handleMessageReceived);
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
