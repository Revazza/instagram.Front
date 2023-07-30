import { HubConnectionBuilder, LogLevel } from "@microsoft/signalr";
import { NOTIFICATION_HUB_URL } from "../Api";
import Cookies from "js-cookie";
import { useEffect, useState } from "react";

function useNotificationHubConnection() {
  const [connection, setConnection] = useState(null);

  console.log("useNotificationHubConnnection")
  useEffect(() => {
    const token = Cookies.get("token");
    const newConnection = new HubConnectionBuilder()
      .withUrl(NOTIFICATION_HUB_URL, {
        accessTokenFactory: () => token,
      })
      .configureLogging(LogLevel.Information)
      .withAutomaticReconnect()
      .build();

    newConnection
      .start()
      .then(() => {
        console.log("Notification Hub Connection Established");
        setConnection(newConnection);
      })
      .catch((error) => {
        console.error("Error starting SignalR connection:", error);
      });

  }, []);

  return connection;
}

export default useNotificationHubConnection;
