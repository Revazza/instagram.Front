import React from "react";
import styles from "./FloatingLabeledInput.module.scss";
import Card from "../../Card";

function FloatingLabeledInput(props) {
  const classes = `${styles.input_container} ${props.className}`;

  return (
    <Card className={classes}>
      <input type={props?.type ? props.type : "text"} id={props?.id} required onChange={props?.onChange} />
      <label>{props.label}</label>
    </Card>
  );
}

export default FloatingLabeledInput;
