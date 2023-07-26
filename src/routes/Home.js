import React, { useEffect } from "react";
import styles from "../components/home/Home.module.scss";
import LeftNavigatorTab from "../components/home/leftNavigatorTab/LeftNavigatorTab";
import NotificationHubConnector from "../store/hubs/NotificationHubConnector";
import { Outlet } from "react-router-dom";

function Home() {
  const connector = NotificationHubConnector.getInstance();

  console.log(connector);
  useEffect(() => {
    connector?.connection?.on("ReceiveMessageNotification", (msg) =>
      console.log(msg)
    );
  }, [connector]);
  return (
    <div className={styles.container}>
      <LeftNavigatorTab />
      <Outlet />
    </div>
  );
}

export default Home;
