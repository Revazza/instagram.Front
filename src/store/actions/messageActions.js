export const RECEIVE_MESSAGE = "RECEIVE_MESSAGE";

export const handleMessageNotification = (newMsg, chat) => {
  return {
    type: RECEIVE_MESSAGE,
    payload: {
      msg: newMsg,
      chat,
    },
  };
};

export const FETCH_CHATS = "INITIALIZE_CHATS";

export const handleChatsFetch = (chats) => {
  return {
    type: FETCH_CHATS,
    payload: chats,
  };
};
