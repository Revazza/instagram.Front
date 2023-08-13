import React from "react";
import styles from "./MessageItem.module.scss";

const MessageItem = React.forwardRef(({ msg, participantId }, ref) => {
  const isParticipantMsg = msg?.senderId === participantId;
  const classes = isParticipantMsg ? styles.participantMsg : styles.userMsg;

  return (
    <div className={styles.container} id={classes} ref={ref}>
      <div className={styles.wrapper}>
        <p>{msg?.messageText}</p>
      </div>
      {ref !== null && !isParticipantMsg && <span>{msg?.status}</span>}
    </div>
  );
});

export default MessageItem;
