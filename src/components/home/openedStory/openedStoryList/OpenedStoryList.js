import React, { useEffect, useState } from "react";
import styles from "./OpenedStoryList.module.scss";
import OpenedStoryItem from "../openedStoryItem/OpenedStoryItem";
import Stories from "react-insta-stories";
import { api } from "../../../../Api";
import { useParams } from "react-router-dom";

function OpenedStoryList() {
  const [stories, setStories] = useState([]);

  const { userName } = useParams();

  useEffect(() => {
    api.get(`/Story/GetActiveStoriesByUserName?userName=${userName}`).then((res) => {
      const stories = res.data.payload.stories;
      const convertedStories = stories.map((s) => {
        return {
          content: () => {
            return <OpenedStoryItem key={s.id} story={s} />;
          },
        };
      });
      setStories(convertedStories);
    });
  }, []);

  return (
    <div className={styles.container}>
      {stories.length !== 0 && (
        <Stories
          stories={stories}
          defaultInterval={5000}
          width="550px"
          height="95%"
          storyContainerStyles={{
            borderRadius: "10px",
            overflow: "hidden",
          }}
          // onAllStoriesEnd={onStoryEnd}
          keyboardNavigation={true}
        />
      )}
    </div>
  );
}

export default OpenedStoryList;
