import React from "react";
import styles from "./StoriesWrapper.module.scss";
import { Link } from "react-router-dom";
import StoryCarousel from "./storyCarousel/StoryCarousel";

function StoriesWrapper() {
  return (
    <div className={styles.container}>
      <div className={styles.logo_wrapper}>
        <Link to="/">
          <h1>Instagram</h1>
        </Link>
      </div>
      <StoryCarousel />
    </div>
  );
}

export default StoriesWrapper;
