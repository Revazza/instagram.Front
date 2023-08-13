import React, { useEffect, useState } from "react";
import styles from "./FriendsMessageList.module.scss";
import FriendMessageItem from "./friendsListItem/FriendMessageItem";
import Cookies from "js-cookie";
import jwtDecode from "jwt-decode";
import { api } from "../../../../Api";
import LoadingScreen from "../../../UI/loading/LoadingScreen";
import { useDispatch, useSelector } from "react-redux";
import { initializeChats } from "../../../../store/actions/chatActions";

export const FriendMessageListWrapper = () => {
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();

  const chats = useSelector((state) => state.chats.chats);

  useEffect(() => {
    const token = Cookies.get("token");
    const credentials = jwtDecode(token);
    setIsLoading(true);
    api
      .get(`/Chat/GetUserChats?userId=${credentials.sub}&limit=${30}`)
      .then((res) => {
        const chats = res.data.payload.chats;
        dispatch(initializeChats(chats));
      })
      .catch((err) => console.log("GetUserChats Error: ", err))
      .finally(() => setIsLoading(false));
  }, []);

  return <FriendsMessageList isLoading={isLoading} chats={chats} />;
};

function FriendsMessageList({ isLoading, chats }) {
  const [currentUser, setCurrentUser] = useState();

  useEffect(() => {
    const token = Cookies.get("token");
    const credentials = jwtDecode(token);
    setCurrentUser(credentials);
  }, []);

  const showChats = !isLoading && chats?.length !== 0;

  return (
    <div className={styles.container}>
      <div className={styles.top_container}>
        <div className={styles.userName_wrapper}>
          <h1>{currentUser?.userName}</h1>
        </div>
      </div>
      <div className={styles.messages_title_wrapper}>
        <p>Messages</p>
        <p id={styles.messages_requestP}>Requests</p>
      </div>
      <div className={styles.friends_container}>
        {isLoading && <LoadingScreen height={50} width={50} />}
        {showChats &&
          chats?.map((chat) => {
            return (
              <FriendMessageItem
                key={chat.chatId}
                currentUserId={currentUser?.sub}
                chat={chat}
              />
            );
          })}
      </div>
    </div>
  );
}

export default FriendsMessageList;
