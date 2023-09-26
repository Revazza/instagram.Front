import React from "react";
import styles from "./StoryCarousel.module.scss";
import { Outlet } from "react-router-dom";
import OpenedStoryList from "../openedStoryList/OpenedStoryList";

function StoryCarousel() {
  return (
    <div className={styles.container}>
      <Outlet />
    </div>
  );
}

export default StoryCarousel;
