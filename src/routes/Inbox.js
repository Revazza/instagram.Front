import React, { useState } from "react";
import styles from "../components/home/inbox/Inbox.module.scss";
import { Outlet } from "react-router-dom";
import { FriendMessageListWrapper } from "../components/home/inbox/friendsList/FriendsMessageList";
import useAuthRedirerct from "../hooks/useAuthRedirerct";
import ChatHubConnector from "../store/hubs/ChatHubConnector";
import LoadingScreen from "../components/UI/loading/LoadingScreen";

function Inbox() {
  useAuthRedirerct();
  const [isLoading, setIsLoading] = useState(true);
  const handleLoadingChange = () => {
    setIsLoading(false);
  };

  const connector = ChatHubConnector.createConnection(handleLoadingChange);

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
