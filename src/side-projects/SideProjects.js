import React from "react";

import "./SideProjects.css";

export default ({ sideProjects }) => (
  <div className="side-projects">
    <div className="side-projects-title">
      <h2>Side Projects / Things I'm Learning</h2>
    </div>
    <div className="side-projects-list">
      <ul>
        {sideProjects.map(sideProject => (
          <li key={sideProject}>{sideProject}</li>
        ))}
      </ul>
    </div>
  </div>
);
