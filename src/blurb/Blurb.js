import React from "react";

import "./Blurb.css";

export default ({ text, heading }) => (
  <div className="blurb">
    {heading && (
      <div className="blurb-heading">
        <h3>{heading}</h3>
      </div>
    )}
    {text && (
      <div className="blurb-text">
        {text.split("\n").map(t => (
          <p key={t}>{t}</p>
        ))}
      </div>
    )}
  </div>
);
