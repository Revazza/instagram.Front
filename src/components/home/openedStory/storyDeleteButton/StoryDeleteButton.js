import React from "react";
import styles from "./StoryDeleteButton.module.scss";
import { api } from "../../../../Api";
import { useDispatch } from "react-redux";
import { deleteStory } from "../../../../store/actions/storyActions";

function StoryDeleteButton({ storyId, userName }) {
  const dispatch = useDispatch();
  const handleStoryDelete = () => {
    const storyToDelete = {
      userName,
      storyId,
    };
    dispatch(deleteStory(storyToDelete));
    return;
    api.delete(`/Story/DeleteStoryById?storyId=${storyId}`).then((res) => {
      const storyToDelete = {
        userName,
        storyId,
      };
      dispatch(deleteStory(storyToDelete));
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
