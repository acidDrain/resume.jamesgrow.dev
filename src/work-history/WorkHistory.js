import React from "react";
import WorkItem from "./WorkItem";

import "./WorkHistory.css";

export default ({ workHistory }) => (
  <div className="work-history">
    <div className="work-history-title">
      <h2>Work History</h2>
    </div>
    <ul className="work-history-list">
      {workHistory.map(wh => (
        <WorkItem
          company={wh.company}
          positions={wh.positions}
          key={wh.company}
        />
      ))}
    </ul>
  </div>
);
// company
// positions [{startDate, endDate, title, description, location}]
