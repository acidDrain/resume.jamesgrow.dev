import React from "react";
import "./Header.css";

export default ({ name, email, title, github, linkedin, twitter }) => (
  <header className="header">
    <div className="name">{name}</div>
    <div className="header-title">{title}</div>
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
