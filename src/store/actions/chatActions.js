export const INITIALIZE_CHATS = "INITIALIZE_CHATS";
export const initializeChats = (chats) => {
  return {
    type: INITIALIZE_CHATS,
    payload: chats,
  };
};

export const UPDATE_CHATS_ON_MESSAGE_RECEIVE =
  "UPDATE_CHATS_ON_MESSAGE_RECEIVE";

export const updateChatsOnMessageReceive = (newMessage) => {
  return {
    type: UPDATE_CHATS_ON_MESSAGE_RECEIVE,
    payload: newMessage,
  };
};

export const UPDATE_CHAT_LAST_MESSAGE_STATUS =
  "UPDATE_CHAT_LAST_MESSAGE_STATUS";
export const updateChatLastMessageStatus = (obj) => {
  return {
    type: UPDATE_CHAT_LAST_MESSAGE_STATUS,
    payload: obj,
  };
};
