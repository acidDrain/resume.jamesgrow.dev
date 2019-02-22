import React, { Component } from "react";

import Header from "./header/Header";
import Blurb from "./blurb/Blurb";
import LearnNext from "./learn-next/LearnNext";
import OpenSource from "./open-source/OpenSource";
import Programming from "./programming/Programming";
import SideProjects from "./side-projects/SideProjects";
import Systems from "./systems/Systems";
import VendorTech from "./vendor-tech/VendorTech";
import WorkHistory from "./work-history/WorkHistory";

import "./App.css";

import data from "./data.json";

class App extends Component {
  render() {
    const vendorTech = data.resume_data.sections.vendorTech;
    const workHistory = data.resume_data.sections.workHistory;
    const programming = data.resume_data.sections.programming;
    const systems = data.resume_data.sections.systems;
    const openSource = data.resume_data.sections.openSource;
    const sideProjects = data.resume_data.sections.sideProjects;
    const learnNext = data.resume_data.sections.learnNext;
    const contactInfo = data.resume_data.sections.contactInfo;
    const blurb = data.resume_data.sections.blurb;
    // const keySkills = data.resume_data.sections.keySkills;
    // const interestingProjects = data.resume_data.sections.interestingProjects;
    // console.log(`learnNext: ${learnNext}`);
    return (
      <div className="App">
        <Header {...contactInfo} />
        <Blurb {...blurb} />
        <LearnNext learnNext={learnNext} />
        <OpenSource openSource={openSource} />
        <Programming programming={programming} />
        <SideProjects {...sideProjects} />
        <Systems systems={systems} />
        <VendorTech vendorTech={vendorTech} />
        <WorkHistory {...workHistory} />
      </div>
    );
  }
}

export default App;
