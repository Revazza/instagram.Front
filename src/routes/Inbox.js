import React from "react";
import styles from "../components/home/inbox/Inbox.module.scss";
import { Outlet } from "react-router-dom";
import { FriendMessageListWrapper } from "../components/home/inbox/friendsList/FriendsMessageList";
import useAuthRedirerct from "../hooks/useAuthRedirerct";

function Inbox() {
  useAuthRedirerct();

  return (
    <div className={styles.container}>
      <FriendMessageListWrapper />
      <Outlet />
    </div>
  );
}

export default Inbox;
