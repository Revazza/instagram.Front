import React from "react";
import styles from "./Notification.module.scss";
import FriendRequests from "./friendRequests/FriendRequests";
import DividingLine from "../../UI/dividingLine/DividingLine";

function Notification() {
  return (
    <div className={styles.container}>
      <div className={styles.header_wrapper}>
        <p>Notifications</p>
      </div>
      <div className={styles.friend_request_wrapper}>
        <FriendRequests />
      </div>
      <DividingLine className={styles.remove_margins} />
    </div>
  );
}

export default Notification;
