import React, { Component } from 'react';
class Profile extends Component {
  
  render() {
    return (
      <div>
        <div class="personal">
            <div class="title"><strong><em>Personal Profile</em></strong></div>
            <div class="summary">{this.props.personInfo.summary}</div>
        </div>
        <hr/>
      </div>
    )
  }
}

export default Profile;