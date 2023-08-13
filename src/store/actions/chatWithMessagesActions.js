export const SET_ACTIVE_CHAT = "SET_ACTIVE_CHAT";
export const setActiveChat = (activeChat) => {
  return {
    type: SET_ACTIVE_CHAT,
    payload: activeChat,
  };
};

export const ADD_CHAT_WITH_MESSAGES = "ADD_CHAT_WITH_MESSAGES";
export const addChatWithMessages = (newChat) => {
  return {
    type: ADD_CHAT_WITH_MESSAGES,
    payload: newChat,
  };
};

export const ADD_MESSAGE_TO_CHAT = "ADD_MESSAGE_TO_CHAT";
export const addMessageToChat = (obj) => {
  return {
    type: ADD_MESSAGE_TO_CHAT,
    payload: obj,
  };
};

export const UPDATE_CHAT_MESSAGES_STATUS = "UPDATE_CHAT_MESSAGES_STATUS";
export const updateChatMessagesStatus = (obj) => {
  return {
    type: UPDATE_CHAT_MESSAGES_STATUS,
    payload: obj,
  };
};
