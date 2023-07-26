import React from "react";
import styles from "./Main.module.scss";
import RightNavigatorTab from "../rightNavigatorTab/RightNavigatorTab";

function Main() {
  return (
    <div className={styles.container}>
      <div className={styles.main_container}>Main</div>
      <RightNavigatorTab />
    </div>
  );
}

export default Main;
