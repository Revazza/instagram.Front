import React from "react";
import styles from "./UserSearchProfileChat.module.scss";

function UserSearchProfileChat({ user, isSelected, onSelectUser }) {
  const handleUserSelect = (e) => {
    onSelectUser(user);
  };

  return (
    <div className={styles.container} onClick={handleUserSelect} id={user?.id}>
      <div className={styles.img_wrapper}>
        <img src="/images/reels_active.png" alt="user image" />
      </div>
      <div className={styles.info_wrapper}>
        <p id={styles.fullNameP}>{user?.fullName}</p>
        <p id={styles.username}>{user?.userName}</p>
      </div>
      <div className={styles.selected_wrapper}>
        {isSelected && <div className={styles.selected}></div>}
      </div>
    </div>
  );
}

export default UserSearchProfileChat;
