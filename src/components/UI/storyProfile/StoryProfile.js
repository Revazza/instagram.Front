import React from "react";
import styles from "./StoryProfile.module.scss";

function StoryProfile({ height, width, className }) {
  const generateRandomProfile = () => {
    //for test purposes only
    const randomData = [
      "reels_active",
      "create_active",
      "instagram_logo",
      "loginPhoto",
      "messages_active",
      "remove",
      "smile",
      "search_active",
    ];
    const randomIndex = Math.floor(Math.random() * randomData.length);
    return randomData[randomIndex];
  };
  const randomProfileUrl = `/images/${generateRandomProfile()}.png`;
  const classes = `${styles.img_wrapper} ${className}`;
  return (
    <div className={classes}>
      <div
        style={{ height, width }}
        className={styles.rainbow_border}
        id={styles.rainbowBorder}
      >
        <div className={styles.white_border}>
          <div className={styles.img_layout}>
            <img src={randomProfileUrl} alt="MUST BE CHANGED" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default StoryProfile;
