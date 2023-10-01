/*


*/

import { ADD_USER_STORIES } from "../actions/storyActions";

const initialState = {
  stories: [],
};

export const storyReducer = (state = initialState, action) => {
  if (action.type === ADD_USER_STORIES) {
    
    return state;
  }

  return state;
};
