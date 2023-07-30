import React from "react";
import styles from "../components/home/Home.module.scss";
import LeftNavigatorTab from "../components/home/leftNavigatorTab/LeftNavigatorTab";
import { Outlet } from "react-router-dom";

function Home() {

  return (
    <div className={styles.container}>
      <LeftNavigatorTab />
      <Outlet />
    </div>
  );
}

export default Home;
