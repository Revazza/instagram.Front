import { combineReducers } from "redux";
import notificationReducer from "./notificationReducer";
import chatReducer from "./chatReducer";

const rootReducer = combineReducers({
  notifications: notificationReducer,
  chats: chatReducer,
});

export default rootReducer;
