import React, { useEffect } from "react";
import styles from "../components/home/Home.module.scss";
import LeftNavigatorTab from "../components/home/leftNavigatorTab/LeftNavigatorTab";
import { Outlet } from "react-router-dom";
import NotificationHubConnector from "../store/hubs/NotificationHubConnector";
import { useDispatch } from "react-redux";
import { incrementMessageNotification } from "../store/actions/notificationActions";
import axios from "axios";
import Cookies from "js-cookie";
import useAuthRedirerct from "../hooks/useAuthRedirerct";

function Home() {

  useAuthRedirerct();
  
  const dispatch = useDispatch();
  const getNotificationHubConnection = (connection) => {
    connection.on(
      "ReceiveMessageNotification",
      handleReceiveMessageNotification
    );
  };

  const handleReceiveMessageNotification = (msg) => {
    dispatch(incrementMessageNotification());
  };

  const connector = NotificationHubConnector.createConnection(
    getNotificationHubConnection
  );

  useEffect(() => {
    const token = Cookies.get("token");
    axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  }, []);

  return (
    <div className={styles.container}>
      <LeftNavigatorTab />
      <Outlet />
    </div>
  );
}

export default Home;
