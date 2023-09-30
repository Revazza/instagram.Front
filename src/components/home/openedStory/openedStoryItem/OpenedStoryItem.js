import React from "react";
import styles from "./OpenedStoryItem.module.scss";
import {
  convertDateTimeToHumanReadable,
  createMediaUrl,
} from "../../../../helperFunctions/helperFunctions";
import UserProfile from "../../../UI/userProfile/UserProfile";
/*
          id: s.id,
          url: `data:${s.category}/${s.format};base64,${s.url}`,
          duration: s.duration,
          type: s.category,
          header: {
            heading: s.author.userName,
            subheading: `${convertDateTimeToHumanReadable(s.uploadDate)} ago`,
            profileImage: "/images/smile.png", //temporary,
          },
          styles: {
            position: "relative",
            left: "100px",
          },

*/
function OpenedStoryItem({ story }) {
  const userName = `${story.author.userName} ${convertDateTimeToHumanReadable(
    story.uploadDate
  )}`;
  return (
    <div className={styles.container}>
      <img
        src={createMediaUrl(story.category, story.format, story.url)}
        alt={story.fileName}
        className={styles.img}
      />
      <div className={styles.profile_wrapper}>
        <UserProfile
          user={{
            userName: userName,
            fullName: "",
          }}
          profileClassName={styles.story_profile}
          className={styles.profile_styles}
        />
      </div>
      <div className={styles.box_shadow}></div>
    </div>
  );
}

export default OpenedStoryItem;
