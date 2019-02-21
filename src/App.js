import React, { Component } from "react";

import Header from "./header/Header";

import "./App.css";

import data from "./data.json";

class App extends Component {
  render() {
    const contactInfo = data.resume_data.sections.contactInfo;
    return (
      <div className="App">
        <Header {...contactInfo} />
      </div>
    );
  }
}

export default App;
