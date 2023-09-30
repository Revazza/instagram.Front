import React, { useEffect, useState } from "react";
import styles from "./OpenedStoryList.module.scss";
import OpenedStoryItem from "../openedStoryItem/OpenedStoryItem";
import Stories from "react-insta-stories";
import { api } from "../../../../Api";
import { convertDateTimeToHumanReadable } from "../../../../helperFunctions/helperFunctions";

const dummyStories = [
  {
    url: "https://picsum.photos/1080/1920",
    header: {
      heading: "Mohit Karekar",
      subheading: "Posted 5h ago",
      profileImage: "https://picsum.photos/1000/1000",
    },
  },

  {
    url: "https://storage.googleapis.com/coverr-main/mp4/Footboys.mp4",
    type: "video",
    duration: 1000,
  },
];

function OpenedStoryList() {
  const [stories, setStories] = useState([]);

  useEffect(() => {
    api.get("/Story/GetUserStoriesByStatus").then((res) => {
      const stories = res.data.payload.stories;
      const convertedStories = stories.map((s) => {
        return {
          content: () => {
            return <OpenedStoryItem key={s.id} story={s} />;
          }
        }
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
