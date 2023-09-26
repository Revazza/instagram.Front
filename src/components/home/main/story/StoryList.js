import React, { useEffect, useState } from "react";
import styles from "./StoryList.module.scss";
import StoryItem from "./storyItem/StoryItem";
import Slider from "../../../UI/slider/Slider";

const dummyData = [
  <StoryItem className={styles.story_class} />,
  <StoryItem className={styles.story_class} />,
  <StoryItem className={styles.story_class} />,
  <StoryItem className={styles.story_class} />,
  <StoryItem className={styles.story_class} />,
  <StoryItem className={styles.story_class} />,
  <StoryItem className={styles.story_class} />,
  <StoryItem className={styles.story_class} />,
  <StoryItem className={styles.story_class} />,
  <StoryItem className={styles.story_class} />,
  <StoryItem className={styles.story_class} />,
  <StoryItem className={styles.story_class} />,
  <StoryItem className={styles.story_class} />,
  <StoryItem className={styles.story_class} />,
  <StoryItem className={styles.story_class} />,
  <StoryItem className={styles.story_class} />,
  <StoryItem className={styles.story_class} />,
  <StoryItem className={styles.story_class} />,
  <StoryItem className={styles.story_class} />,
  <StoryItem className={styles.story_class} />,
  <StoryItem className={styles.story_class} />,
  <StoryItem className={styles.story_class} />,
  <StoryItem className={styles.story_class} />,
  <StoryItem className={styles.story_class} />,
  <StoryItem className={styles.story_class} />,
  <StoryItem className={styles.story_class} />,
  <StoryItem className={styles.story_class} />,
  <StoryItem className={styles.story_class} />,
  <StoryItem className={styles.story_class} />,
  <StoryItem className={styles.story_class} />,
  <StoryItem className={styles.story_class} />,
  <StoryItem className={styles.story_class} />,
  <StoryItem className={styles.story_class} />,
  <StoryItem className={styles.story_class} />,
  <StoryItem className={styles.story_class} />,
];

function StoryList() {
  return (
    <div className={styles.container}>
      <Slider data={dummyData} chunkSize={12} sliderClassName={styles.slider} />
    </div>
  );
}

export default StoryList;
