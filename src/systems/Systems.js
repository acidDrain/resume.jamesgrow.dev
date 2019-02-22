import React from "react";

import "./Systems.css";

export default ({ systems }) => (
  <div className="systems">
    <div className="systems-title">
      <h2>Systems</h2>
    </div>
    {systems.map(i => (
      <div className="systems-list" key={i.platform}>
        <li className="systems-platform">{i.platform}</li>
        <ul>
          {i.components.map(component => (
            <li key={component}>{component}</li>
          ))}
        </ul>
      </div>
    ))}
  </div>
);
