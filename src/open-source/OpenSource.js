import React from "react";

import "./OpenSource.css";

export default ({ openSource }) => (
  <div className="open-source">
    <div className="open-source-title">
      <h2>Open Source</h2>
    </div>
    <div className="open-source-list">
      {openSource.map(i => (
        <li key={i.projectName}>{i.projectName}</li>
      ))}
    </div>
  </div>
);
