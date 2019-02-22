import React from "react";

import "./LearnNext.css";

export default ({ learnNext }) => (
  <div className="learn-next">
    <ul>
      {learnNext.map(k => (
        <li key={`${k}`}>{k}</li>
      ))}
    </ul>
  </div>
);
