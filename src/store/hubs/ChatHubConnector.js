import { HubConnectionBuilder, LogLevel } from "@microsoft/signalr";
import { CHAT_HUB_URL } from "../../Api";
import Cookies from "js-cookie";

class ChatHubConnector {
  message = null;
  connectionId = null;

  constructor(setConnection) {

    this.startConnection().then(() => {
      console.log("SignalR connection established");
      setConnection(this.connection);
    });
  };

  static getInstance(setConnection)
  {
    if(!ChatHubConnector.connection)
    {
        ChatHubConnector.connection = new ChatHubConnector(setConnection);
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

    this.connection.on("ReceiveMessage", (message) => {
      console.log(message);
    });

    try {
      await this.connection.start();
    } catch (error) {
      console.error("Error starting SignalR connection:", error);
    }
  }

}

export default ChatHubConnector