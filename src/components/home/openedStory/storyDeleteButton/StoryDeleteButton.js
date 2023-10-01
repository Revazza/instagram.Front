import React from "react";
import styles from "./StoryDeleteButton.module.scss";
import { api } from "../../../../Api";

function StoryDeleteButton({ storyId }) {
  const handleStoryDelete = () => {
    api.delete(`/Story/DeleteStoryById?storyId=${storyId}`).then((res) => {
      console.log("Story Deleted");
    });
  };
  return (
    <div className={styles.container} onClick={handleStoryDelete}>
      <p>delete</p>
    </div>
  );
}

export default StoryDeleteButton;
