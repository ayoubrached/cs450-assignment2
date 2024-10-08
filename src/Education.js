import React, { Component } from 'react';
class Education extends Component {
  
  render() {
    return (
      <div>
        <div class="education">
            <div class="title"><strong><em>Education</em></strong></div>
            <div class="summary">
                <h3>New Jersey Institute of Technology</h3>
                  <p dangerouslySetInnerHTML={{ __html: this.props.educationInfo.bachelors }} />
                    <h3>New Jersey Institute of Technology</h3>
                    <p dangerouslySetInnerHTML={{ __html: this.props.educationInfo.masters }} />
            </div>
        </div>
      </div>
    )
  }
}

export default Education;