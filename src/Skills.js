import React, { Component } from 'react';
class Skills extends Component {
  
  render() {
    return (
      <div>
        <div class="skills">
            <div class="title"><strong><em>Key Skills</em></strong></div>
            <div class="key">
                <p dangerouslySetInnerHTML={{ __html: this.props.keySkills.skills }} />
                <p dangerouslySetInnerHTML={{ __html: this.props.keySkills.skills }} />
                <p dangerouslySetInnerHTML={{ __html: this.props.keySkills.skills }} />
            </div>
        </div>
        <hr/>
      </div>
    )
  }
}

export default Skills;