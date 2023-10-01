import React from "react";
import styles from "./StoriesWrapper.module.scss";
import { Link, useNavigate } from "react-router-dom";
import StoryCarousel from "./storyCarousel/StoryCarousel";
import StoryDeleteButton from "./storyDeleteButton/StoryDeleteButton";

function StoriesWrapper() {
  const navigate = useNavigate();

  const handleStoryClose = () => {
    navigate("/");
  };

  return (
    <div className={styles.container}>
      <div className={styles.logo_wrapper}>
        <Link to="/">
          <h1>Instagram</h1>
        </Link>
      </div>
      <div className={styles.close} onClick={handleStoryClose}>
        <img src="/images/white_close.png" alt="close" />
      </div>
      <StoryCarousel />
    </div>
  );
}

export default StoriesWrapper;
