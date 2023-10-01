export const ADD_USER_STORIES = "ADD_STORY";
export const addStory = (userStories) => {
  return {
    type: ADD_USER_STORIES,
    payload: userStories,
  };
};

export const DELETE_STORY = "DELETE_STORY";
export const deleteStory = (storyToDelete) => {
  return {
    type: DELETE_STORY,
    payload: storyToDelete,
  };
};
