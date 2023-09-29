import React, { useEffect, useState } from "react";
import styles from "./StoryList.module.scss";
import StoryItem from "./storyItem/StoryItem";
import Slider from "../../../UI/slider/Slider";
import AddStory from "./addStory/AddStory";

const dummyData = [
  <AddStory />,
  <StoryItem />,
  <StoryItem />,
  <StoryItem />,
  <StoryItem />,
  <StoryItem />,
  <StoryItem />,
  <StoryItem />,
  <StoryItem />,
  <StoryItem />,
  <StoryItem />,
  <StoryItem />,
  <StoryItem />,
  <StoryItem />,
  <StoryItem />,
  <StoryItem />,
  <StoryItem />,
  <StoryItem />,
  <StoryItem />,
  <StoryItem />,
  <StoryItem />,
  <StoryItem />,
  <StoryItem />,
  <StoryItem />,
  <StoryItem />,
  <StoryItem />,
  <StoryItem />,
  <StoryItem />,
  <StoryItem />,
  <StoryItem />,
  <StoryItem />,
  <StoryItem />,
  <StoryItem />,
  <StoryItem />,
  <StoryItem />,
  <StoryItem />,
  <StoryItem />,
];

function StoryList() {
  return (
    <div className={styles.container}>
      <Slider data={dummyData} chunkSize={12} sliderClassName={styles.slider} />
    </div>
  );
}

export default StoryList;
