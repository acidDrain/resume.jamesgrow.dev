import React, { Component } from "react";

import Header from "./header/Header";
import Blurb from "./blurb/Blurb";

import "./App.css";

import data from "./data.json";

class App extends Component {
  render() {
    const contactInfo = data.resume_data.sections.contactInfo;
    const blurb = data.resume_data.sections.blurb;
    return (
      <div className="App">
        <Header {...contactInfo} />
        <Blurb {...blurb} />
      </div>
    );
  }
}

export default App;
