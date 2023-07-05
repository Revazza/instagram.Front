import React from "react";
import styles from "../components/home/Home.module.scss";
import LeftNavigatorTab from "../components/home/leftNavigatorTab/LeftNavigatorTab";
import Main from "../components/home/main/Main";
import RightNavigatorTab from "../components/home/rightNavigatorTab/RightNavigatorTab";

function Home() {
  return (
    <div className={styles.container}>
      <LeftNavigatorTab />
      <Main />
      <RightNavigatorTab />
    </div>
  );
}

export default Home;
