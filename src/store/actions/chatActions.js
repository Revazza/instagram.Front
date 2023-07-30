export const RECEIVE_MESSAGE = "RECEIVE_MESSAGE";

export const handleMessageReceive = (received) => {
  return {
    type: RECEIVE_MESSAGE,
    payload: received,
  };
};

export const FETCH_CHATS = "INITIALIZE_CHATS";

export const handleChatsFetch = (chats) => {
  return {
    type: FETCH_CHATS,
    payload: chats,
  };
};

export const getChatById = (state, chatId) => {
  return state.chats?.chats?.find((chat) => chat?.chatId === chatId) || null;
};
