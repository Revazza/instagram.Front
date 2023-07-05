import React from "react";
import styles from "./ShrinkedTab.module.scss";
import { Link } from "react-router-dom";

function ShrinkedTab({ onSectionChange, tab, isActiveTab, className, to }) {
  const classes = `${styles.link_wrapper} ${className}`;

  const ui = (
    <div key={tab.id} className={classes} id={tab.id} onClick={onSectionChange}>
      <div className={styles.img_wrapper}>
        <img
          src={isActiveTab ? tab.activeImgSrc : tab.inActiveImgSrc}
          alt={tab.alt}
          id={tab.id}
          onClick={onSectionChange}
        />
      </div>
    </div>
  );

  return to ? <Link to={to}>{ui}</Link> : ui;
}

export default ShrinkedTab;
