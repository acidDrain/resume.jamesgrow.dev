import React from "react";
import "./Header.css";

export default ({ name, email, title, github, linkedin, twitter }) => (
  <header className="header">
    <div className="name">
      <h1>{name}</h1>
    </div>
    <div className="header-title">
      <h2>{title}</h2>
    </div>
    <div className="header-contact">
      <div>
        E-mail: <button className="link-button">{email}</button>
      </div>
      <div>
        Twitter: <a href={twitter.href}>{twitter.name}</a>
      </div>
      <div>
        LinkedIn: <a href={linkedin.href}>{linkedin.name}</a>
      </div>
      <div>
        GitHub: <a href={github.href}>{github.name}</a>
      </div>
    </div>
  </header>
);
