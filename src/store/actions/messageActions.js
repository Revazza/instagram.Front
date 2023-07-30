export const INITIALIZE_CHAT_MESSAGES = "INITIALIZE_CHAT_MESSAGES";

export const AddChatWithMessages = (messages) => {
  return {
    type: INITIALIZE_CHAT_MESSAGES,
    payload: messages,
  };
};

export const ADD_MESSAGE = "ADD_MESSAGE";

export const AddMessage = (received) => {
  return {
    type: ADD_MESSAGE,
    payload: received,
  };
};


