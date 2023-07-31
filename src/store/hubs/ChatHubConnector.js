import { HubConnectionBuilder, LogLevel } from "@microsoft/signalr";
import { CHAT_HUB_URL } from "../../Api";
import Cookies from "js-cookie";

class ChatHubConnector {
  constructor(getChatHubConnection) {
    this.startConnection().then(() => {
      console.log("ChatHub connection established");
      getChatHubConnection(this.connection);
    });
  }

  static createConnection(getChatHubConnection) {
    if (ChatHubConnector.connection) {
      getChatHubConnection(null);
      return;
    }
    ChatHubConnector.connection = new ChatHubConnector(getChatHubConnection);
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
