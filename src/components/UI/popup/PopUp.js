import React from "react";
import styles from "./PopUp.module.scss";

function PopUp({
  className,
  bodyClassName,
  children,
  onPopUpCloseClick,
  text,
  open,
}) {
  const containerClasses = `${styles.container} ${className}`;
  const bodyClasses = `${styles.popup_body} ${bodyClassName}`;

  return (
    <div className={containerClasses} id={!open ? styles.close : ""}>
      <div onClick={onPopUpCloseClick} className={styles.background}></div>

      <div className={bodyClasses}>
        <div className={styles.head}>
          <p id={styles.p}>{text || "your text"}</p>
          <img
            id={styles.img}
            onClick={onPopUpCloseClick}
            src="/images/close.png"
            alt="close"
          />
        </div>
        {children}
      </div>
    </div>
  );
}

export default PopUp;
