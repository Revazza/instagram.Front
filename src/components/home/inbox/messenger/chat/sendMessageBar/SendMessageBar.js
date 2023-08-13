import React, { useEffect, useState } from "react";
import styles from "./SendMessageBar.module.scss";
import Emojis from "../../../../../UI/emojis/Emojis";
import Cookies from "js-cookie";
import jwtDecode from "jwt-decode";
import ChatHubConnector from "../../../../../../store/hubs/ChatHubConnector";
import { useDispatch } from "react-redux";
import {
  updateChatLastMessageStatus,
  updateChatsOnMessageReceive,
} from "../../../../../../store/actions/chatActions";
import { addMessageToChat } from "../../../../../../store/actions/chatWithMessagesActions";

function SendMessageBar({ chat }) {
  const [message, setMessage] = useState("");
  const [user, setUser] = useState();
  const [isFocused, setIsFocused] = useState(false);

  const connector = ChatHubConnector.getInstance();

  const dispatch = useDispatch();

  useEffect(() => {
    const token = Cookies.get("token");
    const decodedJwt = jwtDecode(token);
    setUser(decodedJwt);
  }, []);

  useEffect(() => {
    if (!isFocused) {
      return;
    }
    //chat is reversed so last message is first message
    const lastMessage = chat.chatMessages[0];
    if (lastMessage.senderId === user.sub || lastMessage.status === "Seen") {
      return;
    }
    connector.connection
      .invoke("UpdateChatMessagesStatus", {
        chatId: chat?.id,
        status: 2,
        receiverId: chat.participant.id,
      })
      .then((resp) => {
        dispatch(updateChatLastMessageStatus(resp));
      });
  }, [isFocused, chat]);

  const handleInputFocus = () => {
    setIsFocused(true);
  };

  const handleInputBlur = () => {
    setIsFocused(false);
  };

  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  };

  const onSendMessage = (e) => {
    e.preventDefault();
    if (message.length === 0) {
      return;
    }
    const request = {
      message,
      chatId: chat.id,
      receiverId: chat.participant.id,
    };
    connector.connection.invoke("SendMessage", request).then((newMessage) => {
      dispatch(updateChatsOnMessageReceive(newMessage));
      dispatch(addMessageToChat(newMessage));
    });
    setMessage("");
  };

  return (
    <form className={styles.container} onSubmit={onSendMessage}>
      <div className={styles.input_container}>
        <div className={styles.msg_input_wrapper}>
          <Emojis />
          <input
            type="text"
            value={message}
            className={styles.input}
            placeholder="Message..."
            spellCheck={false}
            onChange={handleMessageChange}
            onFocus={handleInputFocus}
            onBlur={handleInputBlur}
          />
        </div>
      </div>
    </form>
  );
}

export default SendMessageBar;
