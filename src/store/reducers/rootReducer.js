import { combineReducers } from "redux";
import notificationReducer from "./notificationReducer";
import { chatReducer } from "./chatReducer";
import { chatWithMessagesReducer } from "./chatWithMessagesReducer";

const rootReducer = combineReducers({
  notifications: notificationReducer,
  chats: chatReducer,
  chatsWithMessages: chatWithMessagesReducer,
});

export default rootReducer;
