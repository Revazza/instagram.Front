import React from "react";
import styles from "./OpenedStoryItem.module.scss";
import {
  convertDateTimeToHumanReadable,
  createMediaUrl,
} from "../../../../helperFunctions/helperFunctions";
import UserProfile from "../../../UI/userProfile/UserProfile";
import StoryDeleteButton from "../storyDeleteButton/StoryDeleteButton";

function OpenedStoryItem({ story }) {
  const userName = `${story.author.userName}`;
  const date = convertDateTimeToHumanReadable(story.uploadDate);
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
          additionalInfo={date}
          profileClassName={styles.story_profile}
          className={styles.profile_styles}
        />
      </div>
      <StoryDeleteButton userName={userName} storyId={story?.id} />
      <div className={styles.box_shadow}></div>
    </div>
  );
}

export default OpenedStoryItem;
