import { ADD_USER_STORIES, DELETE_STORY } from "../actions/storyActions";

const initialState = {
  stories: [],
};

export const storyReducer = (state = initialState, action) => {
  if (action.type === ADD_USER_STORIES) {
    const updatedStories = [...state.stories];
    updatedStories.push(action.payload);

    return {
      ...state,
      stories: updatedStories,
    };
  }

  if (action.type === DELETE_STORY) {
    const { userName, storyId } = action.payload;
    const updatedStories = state.stories.map((userStory) => {
      if (userStory.userName === userName) {
        return {
          ...userStory,
          stories: userStory.stories.filter((s) => s.id !== storyId),
        };
      }
      return userStory;
    });

    return {
      ...state,
      stories: updatedStories,
    };
  }

  return state;
};
