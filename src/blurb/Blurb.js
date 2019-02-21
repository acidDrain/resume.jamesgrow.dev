import React from "react";

import "./Blurb.css";

export default ({ text, heading }) => (
  <div className="blurb">
    {heading && <div className="blurb-heading">{heading}</div>}
    {text && (
      <div className="blurb-text">
        {text.split("\n").map(t => (
          <p>{t}</p>
        ))}
      </div>
    )}
  </div>
);
