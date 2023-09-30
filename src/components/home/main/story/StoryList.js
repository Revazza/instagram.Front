import React, { useEffect, useState } from "react";
import styles from "./StoryList.module.scss";
import StoryItem from "./storyItem/StoryItem";
import Slider from "../../../UI/slider/Slider";
import AddStory from "./addStory/AddStory";
import { api } from "../../../../Api";

const dummyData = [<AddStory />];

function StoryList() {
  const [friendsWithStories, setFriendsWithStories] = useState([]);

  useEffect(() => {
    api.get("/User/GetFriendsWithStory").then((res) => {
      const friends = res.data.payload.friendsWithStories;
      setFriendsWithStories(friends);
    });
  }, []);

  return (
    <div className={styles.container}>
      <Slider data={dummyData} chunkSize={12} sliderClassName={styles.slider}>
        <AddStory />
        {friendsWithStories?.map((s, i) => {
          return <StoryItem key={s.id} userName={s.userName} />;
        })}
      </Slider>
    </div>
  );
}

export default StoryList;
