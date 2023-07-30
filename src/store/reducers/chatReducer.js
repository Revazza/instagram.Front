import { INITIALIZE_CHATS, RECEIVE_MESSAGE } from "../actions/chatActions";

const initialState = {
  chats: [],
};

const chatReducer = (state = initialState, action) => {
  if (action.type === INITIALIZE_CHATS) {
    return { chats: action.payload };
  }

  if (action.type === RECEIVE_MESSAGE) {
    const message = action.payload;
    const chatIndex = state.chats.findIndex(
      (c) => c.chatId === message.originalChatId
    );

    if (chatIndex === -1) {
      return state;
    }

    const updatedChat = {
      ...state.chats[chatIndex],
      lastMessageAuthorId: message.senderId,
      lastMessage: message.messageText,
      lastActivityAt: message.createdAt,
    };

    const updatedChats = state.chats.filter(
      (c) => c.chatId !== updatedChat.chatId
    );

    updatedChats.unshift(updatedChat);

    return {
      chats: updatedChats,
    };
  }

  return state;
};

export default chatReducer;
