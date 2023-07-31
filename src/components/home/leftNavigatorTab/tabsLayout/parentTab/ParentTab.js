import React from "react";
import ShrinkedTab from "../shrinkedTab/ShrinkedTab";
import LooseTab from "../looseTab/LooseTab";
import { useSelector } from "react-redux";
import styles from "./ParentTab.module.scss";

function ParentTab({ isShrinked, isActiveTab, handleSectionChange, tab }) {
  const messageNotificationsCount = useSelector(
    (state) => state.notifications.messageNotificationsCount
  );

  return (
    <React.Fragment>
      {isShrinked && (
        <ShrinkedTab
          isActiveTab={isActiveTab}
          onSectionChange={handleSectionChange}
          tab={tab}
          to={tab?.to}
        />
      )}
      {tab?.id === 5 && messageNotificationsCount !== 0 && (
        <div className={styles.msg_notification}>
          <span>{messageNotificationsCount}</span>
        </div>
      )}
      {!isShrinked && (
        <LooseTab
          isActiveTab={isActiveTab}
          onSectionChange={handleSectionChange}
          tab={tab}
          to={tab?.to}
        />
      )}
    </React.Fragment>
  );
}

export default ParentTab;
