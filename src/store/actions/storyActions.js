export const ADD_USER_STORIES = "ADD_STORY";
export const addStory = (userStories) => {
  return {
    type: ADD_USER_STORIES,
    payload: userStories,
  };
};
