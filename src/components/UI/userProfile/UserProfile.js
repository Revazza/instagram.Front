import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./UserProfile.module.scss";
function UserProfile({ className, user, children }) {
  const navigate = useNavigate();

  const handleProfileClick = (e) => {
    const userName = user?.userName;
    navigate(`/${userName}`);
  };

  const classes = `${styles.container} ${className}`;
  return (
    <div className={classes} onClick={handleProfileClick}>
      <div className={styles.img_wrapper}>
        <div className={styles.rainbow_border} id={styles.rainbowBorder}>
          <div className={styles.white_border}>
            <div className={styles.img_layout}>
              <img src="/images/reels_active.png" alt="MUST BE CHANGED" />
            </div>
          </div>
        </div>
      </div>
      <div className={styles.info}>
        <div className={styles.username}>
          <p>{user?.userName || "shilstone_art"}</p>
        </div>
        <div className={styles.additional_info}>
          <p>{user?.fullName || "Robbie Shilstone"}</p>
        </div>
      </div>
      {children}
    </div>
  );
}

export default UserProfile;
