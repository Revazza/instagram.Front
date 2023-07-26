import React from "react";
import styles from "./FriendRequests.module.scss";

function FriendRequests() {
  return (
    <div className={styles.container}>
      <div className={styles.imgs_wrapper}>
        <img
          className={styles.img}
          src="/images/reels_active.png"
          alt="reels"
        />
        <img
          className={styles.img}
          src="/images/reels_active.png"
          alt="reels"
        />
      </div>
      <div className={styles.request_wrapper}>
        <div className={styles.p_wrapper}>
          <p>Follow requests</p>
          <p id={styles.secondP}>Guka kasndashvili + 18 others</p>
        </div>
      </div>
      <div className={styles.arrow_wrapper}></div>
    </div>
  );
}

export default FriendRequests;
