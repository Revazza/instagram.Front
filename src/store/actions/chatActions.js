export const RECEIVE_MESSAGE = "RECEIVE_MESSAGE";

export const updateChatList = (received) => {
  return {
    type: RECEIVE_MESSAGE,
    payload: received,
  };
};

export const INITIALIZE_CHATS = "INITIALIZE_CHATS";

export const handleChatsInitialization = (chats) => {
  return {
    type: INITIALIZE_CHATS,
    payload: chats,
  };
};

export const getChatById = (state, chatId) => {
  return state.chats?.chats?.find((chat) => chat?.chatId === chatId) || null;
};
