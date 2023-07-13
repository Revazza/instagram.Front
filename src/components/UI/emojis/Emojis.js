import React from "react";
import styles from "./Emojis.module.scss";

function Emojis({ className }) {
  const classes = `${styles.container} ${className}`;
  return <div className={classes}>
    <img src="/images/smile.png" alt="emojis" />
  </div>;
}
export default Emojis;
