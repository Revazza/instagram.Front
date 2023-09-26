import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./UserProfile.module.scss";
import StoryProfile from '../../UI/storyProfile/StoryProfile';

function UserProfile({ className, user, children }) {
  const navigate = useNavigate();

  const handleProfileClick = (e) => {
    const userName = user?.userName;
    navigate(`/${userName}`);
  };

  const classes = `${styles.container} ${className}`;
  return (
    <div className={classes}>
      <StoryProfile />
      <div className={styles.info} onClick={handleProfileClick}>
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
