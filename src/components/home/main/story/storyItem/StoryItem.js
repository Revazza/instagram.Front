import React from 'react';
import styles from './StoryItem.module.scss';
import StoryProfile from '../../../../UI/storyProfile/StoryProfile';

function StoryItem() {
  return (
    <div className={styles.container}>
      <StoryProfile width="60px" height="60px" />
      <p id={styles.userName}>UserName</p>
    </div>
  )
}

export default StoryItem;