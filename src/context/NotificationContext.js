import React, { createContext, useContext, useEffect, useState } from "react";
import { NOTIFICATION_HUB_URL } from "../Api";
import { HubConnectionBuilder, LogLevel } from "@microsoft/signalr";
import Cookies from "js-cookie";

const NotificationContext = createContext();

export const NotificationHubProvider = ({ children }) => {
  const [connection, setConnection] = useState(null);

  useEffect(() => {
    const token = Cookies.get("token");

    const connection = new HubConnectionBuilder()
      .withUrl(NOTIFICATION_HUB_URL, {
        accessTokenFactory: () => token,
      })
      .configureLogging(LogLevel.Information)
      .withAutomaticReconnect()
      .build();

    connection
      .start()
      .then(() => {
        console.log("Notification Hub Connection Established");
        setConnection(connection);
      })
      .catch((error) => {
        console.error("Error starting SignalR connection:", error);
      });

    // return () => {
    //   if (connection) {
    //     connection.stop();
    //   }
    // };
  }, []);

  return (
    <NotificationContext.Provider value={connection}>
      {children}
    </NotificationContext.Provider>
  );
};

export const useNotificationContext = () => {
  return useContext(NotificationContext);
};
