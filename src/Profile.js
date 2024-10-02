import React, { Component } from 'react';
class Profile extends Component {
  constructor(props){
    super(props);
    this.state={
      
    };
  }
  
  render() {
    return (
      <div>
        <div class="personal">
            <div class="title"><strong><em>Personal Profile</em></strong></div>
            <div class="summary">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.</div>
        </div>
        <hr/>
      </div>
    )
  }
}

export default Profile;