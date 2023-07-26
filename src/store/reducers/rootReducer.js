import { combineReducers } from "redux";
import notificationReducer from "./notificationReducer";

const rootReducer = combineReducers({
  notifications: notificationReducer,
});

export default rootReducer;
