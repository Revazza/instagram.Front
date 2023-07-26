import { api } from "../../Api";
import {
  FETCH_CHATS,
  RECEIVE_MESSAGE,
  handleChatsFetch,
} from "../actions/messageActions";

const initialState = {
  notifications: [],
  notificationsCount: 0,
  chats: [],
};

const notificationReducer = (state = initialState, action) => {
  if (action.type === FETCH_CHATS) {
    return {
      ...state,
      chats: action.payload,
    };
  }
  if (action.type === RECEIVE_MESSAGE) {
    const chat = { ...action.payload.chat };
    const orderedChats = state.chats.filter((c) => c.chatId !== chat.chatId);
    chat.lastMessage = action.payload.msg.messageText;
    orderedChats.unshift(chat);
    return {
      ...state,
      chats: orderedChats,
    };
  }

  return state;
};

export const fetchUserChats = (userId, limit) => (dispatch) => {
  api
    .get(`/Chat/GetUserChats?userId=${userId}&limit=${limit}`)
    .then((res) => dispatch(handleChatsFetch(res.data.payload.chats)))
    .catch((err) => console.log("GetUserChats Error: ", err));
};

export const fetchChatByUserId = (userId) => (dispatch) => {};

export default notificationReducer;
