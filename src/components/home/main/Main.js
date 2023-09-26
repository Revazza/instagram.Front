import React from "react";
import styles from "./Main.module.scss";
import RightNavigatorTab from "../rightNavigatorTab/RightNavigatorTab";
import StoryList from "./story/StoryList";

function Main() {
  return (
    <div className={styles.container}>
      <StoryList />
      <RightNavigatorTab />
    </div>
  );
}

export default Main;
