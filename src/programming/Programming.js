import React from "react";

import "./Programming.css";

export default ({ programming }) => (
  <div className="programming">
    <div className="programming-title">
      <h2>Programming Languages and Frameworks</h2>
    </div>
    {programming.map(i => (
      <div className="programming-list" key={i.language}>
        <li className="programming-language">{i.language}</li>
        <ul>
          {i.components.map(component => (
            <li key={component}>{component}</li>
          ))}
        </ul>
      </div>
    ))}
  </div>
);
