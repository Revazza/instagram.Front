import React from "react";
import styles from "./LooseTab.module.scss";
import { Link } from "react-router-dom";

function LooseTab({ onSectionChange, tab, isActiveTab, to }) {
  const ui = (
    <div
      key={tab.id}
      className={styles.link_wrapper}
      id={tab.id}
      onClick={onSectionChange}
    >
      <div className={styles.img_wrapper}>
        <img
          src={isActiveTab ? tab.activeImgSrc : tab.inActiveImgSrc}
          alt={tab.alt}
          id={tab.id}
          onClick={onSectionChange}
        />
      </div>
      <p
        className={isActiveTab ? styles.boldP : ""}
        id={tab.id}
        onClick={onSectionChange}
      >
        {tab.name}
      </p>
    </div>
  );

  return to ? <Link to={to}> {ui}</Link> : ui;
}

export default LooseTab;
