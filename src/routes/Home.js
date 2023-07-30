import React from "react";
import styles from "../components/home/Home.module.scss";
import LeftNavigatorTab from "../components/home/leftNavigatorTab/LeftNavigatorTab";
import { Outlet } from "react-router-dom";
import NotificationHubConnector from "../store/hubs/NotificationHubConnector";

function Home() {
  const connector = NotificationHubConnector.createConnection();
  return (
    <div className={styles.container}>
      <LeftNavigatorTab />
      <Outlet />
    </div>
  );
}

export default Home;
