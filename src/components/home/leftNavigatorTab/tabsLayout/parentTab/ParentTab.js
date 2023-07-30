import React from "react";
import ShrinkedTab from "../shrinkedTab/ShrinkedTab";
import LooseTab from "../looseTab/LooseTab";

function ParentTab({ isShrinked, isActiveTab, handleSectionChange, tab }) {
  let connector;
  if (tab?.id === 5) {
  }
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
