import { combineReducers } from "redux";
import notificationReducer from "./notificationReducer";
import { chatReducer } from "./chatReducer";
import { chatWithMessagesReducer } from "./chatWithMessagesReducer";
import { storyReducer } from "./storyReducer";

const rootReducer = combineReducers({
  notifications: notificationReducer,
  chats: chatReducer,
  chatsWithMessages: chatWithMessagesReducer,
  stories:storyReducer
});

export default rootReducer;
