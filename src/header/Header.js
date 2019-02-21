import React from "react";
import "./Header.css";

export default ({ contactInfo }) => (
  <header className="App-header">
    <div className="App-name">{contactInfo.name}</div>
    <div className="App-header-title">{contactInfo.title}</div>
    <div className="App-header-contact">
      <div>E-mail: {contactInfo.email}</div>
      <div>
        Twitter:{" "}
        <a href={contactInfo.twitter.href}>{contactInfo.twitter.name}</a>
      </div>
      <div>
        LinkedIn:{" "}
        <a href={contactInfo.linkedin.href}>{contactInfo.linkedin.name}</a>
      </div>
    </div>
  </header>
);
