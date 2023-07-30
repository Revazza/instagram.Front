import { HubConnectionBuilder, LogLevel } from "@microsoft/signalr";
import { CHAT_HUB_URL } from "../../Api";
import Cookies from "js-cookie";

class ChatHubConnector {
  constructor(setLoadingFalse) {
    this.startConnection().then(() => {
      console.log("ChatHub connection established");
      setLoadingFalse();
    });
  }

  static createConnection(setLoadingFalse) {
    if (ChatHubConnector.connection) {
      return;
    }
    ChatHubConnector.connection = new ChatHubConnector(setLoadingFalse);
  }

  static getInstance() {
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
      console.error("Error starting ChatHub connection:", error);
    }
  }
}

export default ChatHubConnector;
