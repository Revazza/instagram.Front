import React from 'react';
import styles from './DividingLine.module.scss';


function DividingLine(props) {
    const classes = `${styles.line} ${props.className}`
  return (
    <div className={classes }></div>
  )
}

export default DividingLine;
