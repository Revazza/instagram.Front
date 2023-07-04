import React from "react";
import styles from "./Button.module.scss";

function Button(props) {
  const classes = `${styles.button} ${props.className}`;
  return (
    <button
      type={props.type}
      onClick={props?.onClick || undefined}
      className={classes}
      disabled={props?.disabled}
    >
      {props?.text}
    </button>
  );
}

export default Button;
