import React, { Component } from 'react';
class Work extends Component {
  
  render() {
    return (
      <div>
        <div class="skills">
            <div class="title"><strong><em>Key Skills</em></strong></div>
            <div class="key">
                <p>{this.props.keySkills.skills}</p>
                <p>A Key Skill<br/> A Key Skill<br/> A Key Skill</p>
                <p>A Key Skill<br/> A Key Skill<br/> A Key Skill</p>
            </div>
        </div>
        <hr/>
      </div>
    )
  }
}

export default Work;