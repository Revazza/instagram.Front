import { HubConnectionBuilder, LogLevel } from "@microsoft/signalr";
import { NOTIFICATION_HUB_URL } from "../../Api";
import Cookies from "js-cookie";

class NotificationHubConnector {
  constructor(getNotificationHubConnection) {
    this.startConnection().then(() => {
      console.log("SignalR NotificationHub connection established");
      getNotificationHubConnection(this.connection);
    });
  }

  static createConnection(getNotificationHubConnection) {
    if (NotificationHubConnector.connection) {
      return;
    }
    NotificationHubConnector.connection = new NotificationHubConnector(getNotificationHubConnection);
  }

  static getInstance() {
    return NotificationHubConnector.connection;
  }

  async startConnection() {
    const token = Cookies.get("token");

    this.connection = new HubConnectionBuilder()
      .withUrl(NOTIFICATION_HUB_URL, {
        accessTokenFactory: () => token,
      })
      .configureLogging(LogLevel.Information)
      .withAutomaticReconnect()
      .build();

    try {
      await this.connection.start();
    } catch (error) {
      console.error("Error starting SignalR connection:", error);
    }
  }
}

export default NotificationHubConnector;
