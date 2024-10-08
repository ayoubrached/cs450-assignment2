import React, { Component } from 'react';
class Work extends Component {
  
  render() {
    return (
      <div>
        <div class="work">
            <div class="title"><strong><em>Work Experience</em></strong></div>
            <div class="summary">
                <h3>{this.props.workInfo.jobOneTitle}</h3>
                <p>{this.props.workInfo.jobInfo}</p>
                <h3>{this.props.workInfo.jobTwoTitle}</h3>
                <p>{this.props.workInfo.jobInfo}</p>
            </div>
        </div>
        <hr />
      </div>
    )
  }
}

export default Work;