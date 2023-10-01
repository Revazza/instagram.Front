import React, { useEffect, useState } from "react";
import styles from "./OpenedStoryList.module.scss";
import OpenedStoryItem from "../openedStoryItem/OpenedStoryItem";
import Stories from "react-insta-stories";
import { api } from "../../../../Api";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addStory } from "../../../../store/actions/storyActions";
import { storyReducer } from "../../../../store/reducers/storyReducer";

function OpenedStoryList() {
  const { userName } = useParams();
  const [currentIndex, setCurrentIndex] = useState(0);
  const dispatch = useDispatch();

  const userStories = useSelector((state) =>
    state.stories.stories.find((s) => s.userName === userName)
  );

  useEffect(() => {
    if (userStories) {
      setCurrentIndex(0);
      return;
    }

    api
      .get(`/Story/GetActiveStoriesByUserName?userName=${userName}`)
      .then((res) => {
        const stories = res.data.payload.stories;
        const userStories = {
          userName: userName,
          stories: stories,
        };
        dispatch(addStory(userStories));
      });
  }, []);

  const convertStories = (stories) => {
    if (!stories) {
      return [];
    }
    return stories.map((s, index) => {
      return {
        content: (props) => {
          console.log("props", props);
          return <OpenedStoryItem key={s.id} story={s} />;
        },
      };
    });
  };
  const stories = convertStories(userStories?.stories);

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
          preloadCount={0}
          currentIndex={0}
          progressContainerStyles={{
            width: "100%",
          }}
          keyboardNavigation={true}
        />
      )}
    </div>
  );
}

export default OpenedStoryList;
