import React, { useEffect, useState } from "react";
import styles from "./FriendsMessageList.module.scss";
import FriendMessageItem from "./friendsListItem/FriendMessageItem";
import Cookies from "js-cookie";
import jwtDecode from "jwt-decode";
import { useSelector, useDispatch } from "react-redux";
import { handleMessageNotification } from "../../../../store/actions/messageActions";
import NotificationHubConnector from "../../../../store/hubs/NotificationHubConnector";

function FriendsMessageList({ token }) {
  const [currentUserId, setCurrentUserId] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const chats = useSelector((state) => state.notifications.chats);


  useEffect(() => {
    const token = Cookies.get("token");
    const credentials = jwtDecode(token);
    setCurrentUserId(credentials.sub);
  }, []);

  console.log("CHATS: ", chats);

  const showChats = !isLoading && chats.length !== 0;

  return (
    <div className={styles.container}>
      <div className={styles.top_container}>
        <div className={styles.userName_wrapper}>
          <h1>{token?.userName}</h1>
        </div>
      </div>
      <div className={styles.messages_title_wrapper}>
        <p>Messages</p>
        <p id={styles.messages_requestP}>Requests</p>
      </div>
      <div className={styles.friends_container}>
        {isLoading && (
          <img className={styles.img} src="/images/loading.gif" alt="Loading" />
        )}
        {showChats &&
          chats.map((chat) => {
            return (
              <FriendMessageItem
                key={chat.userId}
                currentUserId={currentUserId}
                chat={chat}
              />
            );
          })}
      </div>
    </div>
  );
}

export default FriendsMessageList;
