import {
  ADD_MESSAGE,
  INITIALIZE_CHAT_MESSAGES,
} from "../actions/messageActions";

const initialState = {
  chatMessages: [],
};

const chatMessageReducer = (state = initialState, action) => {
  if (action.type === INITIALIZE_CHAT_MESSAGES) {
    return {
      chatMessages: [...state.chatMessages, action.payload],
    };
  }
  if (action.type === ADD_MESSAGE) {
    const message = action.payload;
    const chatIndex = state.chatMessages.findIndex(
      (c) => c.id === message.originalChatId
    );

    if (chatIndex === -1) {
      return state;
    }

    const updatedChat = {
      ...state.chatMessages[chatIndex],
      chatMessages: [message, ...state.chatMessages[chatIndex].chatMessages],
    };

    const updatedChatMessages = [...state.chatMessages];
    updatedChatMessages[chatIndex] = updatedChat;

    return {
      ...state,
      chatMessages: updatedChatMessages,
    };
  }

  return state;
};

export default chatMessageReducer;
