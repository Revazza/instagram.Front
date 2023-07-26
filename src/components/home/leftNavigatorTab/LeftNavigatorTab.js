import React, { useEffect, useState } from "react";
import styles from "./LeftNavigatorTab.module.scss";
import { tabs as tabLinks, homeTab } from "./LeftNavigatorTabLinks";
import LooseTab from "./tabsLayout/looseTab/LooseTab";
import ShrinkedTab from "./tabsLayout/shrinkedTab/ShrinkedTab";
import { Link, useParams } from "react-router-dom";
import SearchTab from "./searchTab/SearchTab";
import Notification from "../notification/Notification";

function LeftNavigatorTab() {
  const [activeTab, setActiveTab] = useState(1);
  const [tabs, setTabs] = useState([]);

  const isShrinked =
    activeTab === 2 || activeTab === 4 || activeTab === 5 || activeTab === 6;

  useEffect(() => {
    const currentPath = window.location.pathname;
    const foundTab = tabLinks.find(
      (s) => s.to !== "/" && currentPath.includes(s?.to)
    );
    if (!foundTab) {
      return;
    }

    setActiveTab(foundTab.id);
  }, []);

  useEffect(() => {
    setTabs(tabLinks);
  }, []);

  const handleSectionChange = (e) => {
    const id = +e.target.id;
    setActiveTab(id);
  };

  const containerClass = isShrinked
    ? styles.shrinked_container
    : styles.container;

  return (
    <div className={containerClass}>
      <div className={styles.home_tab_wrapper}>
        {!isShrinked && (
          <Link to="/">
            <h1>Instagram</h1>
          </Link>
        )}
        {isShrinked && (
          <ShrinkedTab
            onSectionChange={handleSectionChange}
            className={styles.home_tab}
            tab={homeTab}
            to="/"
          />
        )}
      </div>
      <div
        className={
          isShrinked
            ? styles.shrink_tabs_container
            : styles.loose_tabs_container
        }
      >
        {tabs.map((tab) => {
          const isActiveTab = activeTab === tab.id;
          return isShrinked ? (
            <ShrinkedTab
              key={tab.id}
              isActiveTab={isActiveTab}
              onSectionChange={handleSectionChange}
              tab={tab}
              to={tab?.to}
            />
          ) : (
            <LooseTab
              key={tab.id}
              isActiveTab={isActiveTab}
              onSectionChange={handleSectionChange}
              tab={tab}
              to={tab?.to}
            />
          );
        })}
      </div>
      {activeTab === 2 && <SearchTab />}
      {activeTab === 6 && <Notification />}
    </div>
  );
}

export default LeftNavigatorTab;
