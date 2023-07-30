import { HubConnectionBuilder, LogLevel } from "@microsoft/signalr";
import { CHAT_HUB_URL } from "../../Api";
import Cookies from "js-cookie";

class ChatHubConnector {
  constructor() {
    this.startConnection().then(() => {
      console.log("SignalR ChatHub connection established");
    });
  }

  static getInstance() {
    if (!Cookies.get("token")) {
      return null;
    }
    if (!ChatHubConnector.connection) {
      ChatHubConnector.connection = new ChatHubConnector();
    }

    return ChatHubConnector.connection;
  }

  async startConnection() {
    const token = Cookies.get("token");

    this.connection = new HubConnectionBuilder()
      .withUrl(CHAT_HUB_URL, {
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

export default ChatHubConnector;
