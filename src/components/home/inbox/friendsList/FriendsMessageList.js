import React, { useEffect, useState } from "react";
import styles from "./FriendsMessageList.module.scss";
import FriendMessageItem from "./friendsListItem/FriendMessageItem";
import Cookies from "js-cookie";
import jwtDecode from "jwt-decode";
import { api } from "../../../../Api";

function FriendsMessageList({ token }) {
  const [chats, setChats] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const token = Cookies.get("token");
    const credentials = jwtDecode(token);
    const limit = 30;
    setIsLoading(true);
    api
      .get(`/Chat/GetUserChats?userId=${credentials.sub}&limit=${limit}`)
      .then((res) => setChats(res.data.payload.chats))
      .catch((err) => console.log(err))
      .finally(() => setIsLoading(false));
  }, []);

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
        {isLoading && <img className={styles.img} src="/images/loading.gif" alt="Loading" />}
        {showChats &&
          chats.map((chat) => {
            return <FriendMessageItem key={chat.userId} chat={chat} />;
          })}
      </div>
    </div>
  );
}

export default FriendsMessageList;
