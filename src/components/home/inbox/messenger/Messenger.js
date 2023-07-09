import React, { useState } from "react";
import styles from "./Messenger.module.scss";
import Button from "../../../UI/button/Button";
import UserSearchChat from "./userSearchChat/UserSearchChat";

function Messenger() {
  const [open, setOpen] = useState(false);

  const handlePopUpOpen = () => {
    setOpen(true);
  };

  const handlePopUpClose = () => {
    setOpen(false);
  };

  return (
    <div className={styles.container}>
      <div className={styles.create_message_wrapper}>
        <div className={styles.img_wrapper}>
          <img src="/images/messages_inactive.png" alt="create message" />
        </div>
        <p id={styles.primaryP}>Your messages</p>
        <p id={styles.secondaryP}>
          Send private photos and messages to friend or group
        </p>
        <div className={styles.btn_wrapper}>
          <Button
            text="Send message"
            type="button"
            onClick={handlePopUpOpen}
            disabled={false}
          />
          <UserSearchChat
            handlePopUpClose={handlePopUpClose}
            open={open}
          />
        </div>
      </div>
    </div>
  );
}

export default Messenger;
