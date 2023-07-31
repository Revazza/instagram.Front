import { INCREMENT_MESSAGE_NOTIFICATION } from "../actions/notificationActions";

const initialState = {
  notifications: [],
  messageNotificationsCount: 0,
};

const notificationReducer = (state = initialState, action) => {
  if (action.type === INCREMENT_MESSAGE_NOTIFICATION) {
    return {
      ...state,
      messageNotificationsCount: state.messageNotificationsCount + 1,
    };
  }
  return state;
};

export default notificationReducer;
