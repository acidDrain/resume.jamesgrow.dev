import React from "react";

import "./LearnNext.css";

export default ({ learnNext }) => (
  <div className="learn-next">
    <div className="learn-next-title">
      <h2>Things I Want to Learn Next</h2>
    </div>
    <div className="learn-next-list">
      {learnNext.map(k => (
        <li key={`${k}`}>{k}</li>
      ))}
    </div>
  </div>
);
