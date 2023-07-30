import React from "react";
import styles from "./LoadingScreen.module.scss";

function LoadingScreen({ className, height, width }) {
  const classes = `${styles.loading_wrapper} ${className}`;

  const gifStyles = {
    height: height || "100px",
    width: width || "100px",
  };

  return (
    <div className={classes}>
      <img
        style={gifStyles}
        className={styles.loading_gif}
        src="/images/loading.gif"
        alt="loading"
      />
    </div>
  );
}

export default LoadingScreen;
