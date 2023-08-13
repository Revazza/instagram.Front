import {
  ADD_CHAT_WITH_MESSAGES,
  ADD_MESSAGE_TO_CHAT,
  SET_ACTIVE_CHAT,
  UPDATE_CHAT_MESSAGES_STATUS,
} from "../actions/chatWithMessagesActions";

const initialState = {
  chats: [],
  activeChat: null,
};

export const chatWithMessagesReducer = (state = initialState, action) => {
  if (action.type === ADD_CHAT_WITH_MESSAGES) {
    return {
      ...state,
      chats: [action.payload, ...state.chats],
    };
  }

  if (action.type === UPDATE_CHAT_MESSAGES_STATUS) {
    console.log(" I M HERE FINNALY: ", action.payload);
    console.log(state.chats);
    const { chatId, status } = action.payload;
    const chat = { ...state.chats.find((c) => c.id === chatId) };
    if (!chat) {
      return state;
    }
    const chatMessages = chat.chatMessages.slice();
    const lastMessage = chatMessages[0];
    lastMessage.status = status;
    chatMessages[0] = lastMessage;

    chat.chatMessages = chatMessages;
    const updatedChats = state.chats.filter((c) => c.id !== chatId);
    updatedChats.unshift(chat);

    return {
      ...state,
      chats: updatedChats,
    };
  }

  if (action.type === ADD_MESSAGE_TO_CHAT) {
    const newMessage = action.payload;
    const { originalChatId } = newMessage;
    const chat = { ...state.chats.find((c) => c.id === originalChatId) };
    if (!chat) {
      return state;
    }

    chat.chatMessages = chat.chatMessages.slice();
    chat.chatMessages.unshift(newMessage);

    const updatedChats = state.chats.filter((c) => c.id !== originalChatId);
    updatedChats.unshift(chat);

    return {
      ...state,
      chats: updatedChats,
    };
  }

  if (action.type === SET_ACTIVE_CHAT) {
    return {
      ...state,
      activeChat: action.payload,
    };
  }

  return state;
};
