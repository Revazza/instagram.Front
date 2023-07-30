import React, { useEffect, useState } from "react";
import styles from "./SendMessageBar.module.scss";
import Emojis from "../../../../../UI/emojis/Emojis";
import Cookies from "js-cookie";
import jwtDecode from "jwt-decode";
import ChatHubConnector from "../../../../../../store/hubs/ChatHubConnector";

function SendMessageBar({ chat }) {
  const [message, setMessage] = useState("");
  const [user, setUser] = useState();
  const connector = ChatHubConnector.getInstance();

  useEffect(() => {
    const token = Cookies.get("token");
    const decodedJwt = jwtDecode(token);
    setUser(decodedJwt);
  }, []);

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
      senderFullName: user.fullName,
      senderUserName: user.userName,
      chatName: chat.chatName,
    };
    connector.connection.invoke("SendMessage", request);
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
          />
        </div>
      </div>
    </form>
  );
}

export default SendMessageBar;
