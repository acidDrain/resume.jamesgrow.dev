import React from "react";
import "./Header.css";

export default ({ name, email, title, github, linkedin, twitter }) => (
  <header className="App-header">
    <div className="App-name">{name}</div>
    <div className="App-header-title">{title}</div>
    <div className="App-header-contact">
      <div>
        E-mail: <a href="#">{email}</a>
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
