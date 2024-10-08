import React, { Component } from 'react';
import Header from './Header.js';
import Profile from './Profile.js';
import Work from './Work.js'
import Education from './Education.js';
import Skills from './Skills.js';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      personInfo: {
        name: "Ayoub Rached",
        occupation: "Software Engineer",
        summary: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do\
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut\
                enim ad minim veniam, quis nostrud exercitation ullamco laboris\
                nisi ut aliquip ex ea commodo consequat."
      },
      contactInfo: {
        email: "ar333@njit.edu",
        web: "abc.github.io/ar333",
        mobile: "01234567890"
      },
      workInfo: {
        jobOneTitle: "Job Title at Company (August 2022 – December 2023)",
        jobTwoTitle: "Job Title 2 at Company 2 (August 2020 – December 2021)",
        jobInfo: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do\
                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut\
                    enim ad minim veniam, quis nostrud exercitation ullamco laboris\
                    nisi ut aliquip ex ea commodo consequat."
      },
      keySkills: {
        skills: `A Key Skill<br/>A Key Skill<br/> A Key Skill`
      },
      educationInfo: {
        school: "New Jersey Institute of Technology",
        bachelors: "BS in Computer Science<br/>\
                        2018 - 2022<br/>\
                        GPA: 3.9",
        masters: "MS in Data Science<br/>\
                        2022 - 2023<br/>\
                        GPA: 4.0"
      }
    };
  }
  
  render() {
    return (
      <div class="container">
        <Header personInfo={this.state.personInfo} contactInfo={this.state.contactInfo}></Header>
        <Profile personInfo={this.state.personInfo}></Profile>
        <Work workInfo={this.state.workInfo}></Work>
        <Skills keySkills={this.state.keySkills}></Skills>
        <Education educationInfo={this.state.educationInfo}></Education>
      </div>
    )
  }
}

export default App;