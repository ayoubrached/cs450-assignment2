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
        occupation: "Software Engineer"
      },
      contactInfo: {
        email: "ar333@njit.edu",
        web: "abc.github.io/ar333",
        mobile: "01234567890"
      }

    };
  }
  
  render() {
    return (
      <div class="container">
        <Header personInfo={this.state.personInfo} contactInfo={this.state.contactInfo}></Header>
        <Profile></Profile>
        <Work></Work>
        <Skills></Skills>
        <Education></Education>
      </div>
    )
  }
}

export default App;