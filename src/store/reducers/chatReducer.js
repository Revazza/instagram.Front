import {
  INITIALIZE_CHATS,
  UPDATE_CHATS_ON_MESSAGE_RECEIVE,
  UPDATE_CHAT_LAST_MESSAGE_STATUS,
} from "../actions/chatActions";

const initialState = {
  chats: [],
};

export const chatReducer = (state = initialState, action) => {
  if (action.type === INITIALIZE_CHATS) {
    return {
      ...state,
      chats: action.payload,
    };
  }

  if (action.type === UPDATE_CHAT_LAST_MESSAGE_STATUS) {
    const { chatId, status } = action.payload;
    const chatIndex = state.chats.findIndex((c) => c.chatId === chatId);
    if (chatIndex === -1) {
      return state;
    }
    const chat = { ...state.chats.at(chatIndex) };
    chat.lastMessage = { ...chat.lastMessage, status };
    const updateChats = state.chats.slice();
    updateChats[chatIndex] = chat;
    return {
      ...state,
      chats: updateChats,
    };
  }

  if (action.type === UPDATE_CHATS_ON_MESSAGE_RECEIVE) {
    const newMessage = action.payload;
    const chatIndex = state.chats.findIndex(
      (c) => c.chatId === newMessage.originalChatId
    );

    if (chatIndex === -1) {
      return state;
    }
    const chat = { ...state.chats.at(chatIndex) };
    chat.lastMessage = newMessage;
    chat.lastActivityAt = newMessage.createdAt;
    const updateChats = state.chats.filter((c) => c.chatId !== chat.chatId);
    updateChats.unshift(chat);
    return {
      ...state,
      chats: updateChats,
    };
  }

  return state;
};
