import React, { useEffect, useState } from "react";
import styles from "./SendMessageBar.module.scss";
import Emojis from "../../../../../UI/emojis/Emojis";
import Cookies from "js-cookie";
import jwtDecode from "jwt-decode";
import ChatMessages from "../chatMessages/ChatMessages";

function SendMessageBar({ connection, chatId, participant }) {
  const [message, setMessage] = useState("");
  const [userId, setUserId] = useState();

  useEffect(() => {
    const token = Cookies.get("token");
    const decodedJwt = jwtDecode(token);
    setUserId(decodedJwt.sub);
  }, []);

  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  };

  const onSendMessage = (e) => {
    e.preventDefault();
    if (message.length === 0) {
      return;
    }
    connection.invoke("SendMessage", message, chatId, participant.id);

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
