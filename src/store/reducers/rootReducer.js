import { combineReducers } from "redux";
import notificationReducer from "./notificationReducer";
import chatReducer from "./chatReducer";
import chatMessageReducer from "./chatMessageReducer";

const rootReducer = combineReducers({
  notifications: notificationReducer,
  chats: chatReducer,
  chatMessages  : chatMessageReducer,
});

export default rootReducer;
