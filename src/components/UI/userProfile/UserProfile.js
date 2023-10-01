import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./UserProfile.module.scss";
import StoryProfile from "../../UI/storyProfile/StoryProfile";

function UserProfile({
  className,
  user,
  profileClassName,
  children,
  additionalInfo = "",
}) {
  const navigate = useNavigate();

  const handleProfileClick = (e) => {
    const userName = user?.userName;
    navigate(`/${userName}`);
  };

  const classes = `${styles.container} ${className}`;
  return (
    <div className={classes}>
      <StoryProfile className={profileClassName} />
      <div className={styles.info} onClick={handleProfileClick}>
        <div className={styles.username}>
          <p>{`${user?.userName || "shilstone_art"} ${additionalInfo}`}</p>
        </div>
        {user?.fullName?.length !== 0 && (
          <div className={styles.additional_info}>
            <p>{user?.fullName || "Robbie Shilstone"}</p>
          </div>
        )}
      </div>
      {children}
    </div>
  );
}

export default UserProfile;
