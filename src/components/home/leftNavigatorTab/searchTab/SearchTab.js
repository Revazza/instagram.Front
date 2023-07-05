import React from "react";
import styles from "./SearchTab.module.scss";

function SearchTab() {
  return (
    <div className={styles.container}>
      <div className={styles.top_container}>
        <p>Search</p>
      </div>
      <div className={styles.bottom_container}></div>
    </div>
  );
}

export default SearchTab;
