import {
  FETCH_CHATS,
  RECEIVE_MESSAGE,
} from "../actions/chatActions";

const initialState = {
  chats: [],
};

const chatReducer = (state = initialState, action) => {
  if (action.type === FETCH_CHATS) {
    return { chats: action.payload };
  }
  if (action.type === RECEIVE_MESSAGE) {
    const received = action.payload;
    const { message } = received;
    console.log("Chats: ", state.chats);
    console.log("received: ", received);
    const foundedChat = state.chats.find(
      (c) => c.chatId === message.originalChatId
    );
    if (foundedChat) {
      const chatCopy = { ...foundedChat };
      chatCopy.lastActivity = message.createdAt;
      chatCopy.lastMessage = message.messageText;
      chatCopy.lastMessageAuthorId = message.senderId;
      console.log("ChatCopy: ", chatCopy);
      const updateChats = state.chats.map((c) => {
        if (c.chatId === message.originalChatId) {
          return chatCopy;
        }
        return c;
      });
      console.log("Updated chats: ", updateChats);
      return { chats: updateChats };
    }

    const newChat = {
      chatId: message.originalChatId,
      fullName: received.senderFullName,
      userName: received.senderUserName,
      lastActivityAt: message.createdAt,
      lastMessage: message.messageText,
      lastMessageAuthorId: message.senderId,
      chatName: received.chatName,
    };
    const chatsCopy = { ...state.chats };
    chatsCopy.unshift(newChat);
    return {
      chats: chatsCopy,
    };
  }
  return state;
};


export default chatReducer;
