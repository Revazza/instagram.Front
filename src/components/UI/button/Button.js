import React from "react";
import styles from "./Button.module.scss";

const Button = React.forwardRef((props, ref) => {
  const classes = `${styles.button} ${props.className}`;
  return (
    <button
      type={props.type}
      onClick={props?.onClick || undefined}
      className={classes}
      disabled={props?.disabled}
      ref={ref}
    >
      {props?.text}
    </button>
  );
});

export default Button;
